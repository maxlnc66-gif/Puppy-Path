import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  LEVELS,
  SHOP_ITEMS,
  SKILLS,
  type Grade,
  type Question,
  type Subject,
} from "./data";

export interface Profile {
  name: string;
  grade: Grade;
  puppyName: string;
  puppyId: string;
}

export interface Stat {
  correct: number;
  wrong: number;
}

export interface WrongEntry {
  id: string;
  questionId: string;
  chosen: number;
  skill: string;
  subject: Subject;
  at: number;
  practiced: boolean;
}

export interface GameState {
  profile: Profile | null;
  coins: number;
  xp: number;
  correctStreak: number;
  dayStreak: number;
  minutesLearning: number;
  weeklyImprovement: number;
  bySubject: Record<Subject, Stat>;
  bySkill: Record<string, Stat>;
  wrongLog: WrongEntry[];
  owned: string[];
  adventureProgress: Record<string, number>;
}

const STORAGE_KEY = "pawpath-state-v1";

// Sample data so the app and the parent report can be tested right away.
function initialState(): GameState {
  return {
    profile: null,
    coins: 120,
    xp: 14,
    correctStreak: 2,
    dayStreak: 4,
    minutesLearning: 145,
    weeklyImprovement: 6,
    bySubject: {
      math: { correct: 36, wrong: 14 },
      english: { correct: 42, wrong: 8 },
      science: { correct: 19, wrong: 6 },
    },
    bySkill: {
      "add-sub": { correct: 12, wrong: 1 },
      "mul-div": { correct: 9, wrong: 3 },
      fractions: { correct: 6, wrong: 7 },
      "area-perimeter": { correct: 5, wrong: 2 },
      "word-problems": { correct: 4, wrong: 5 },
      vocabulary: { correct: 12, wrong: 1 },
      grammar: { correct: 9, wrong: 4 },
      "sentence-order": { correct: 8, wrong: 1 },
      "main-idea": { correct: 7, wrong: 3 },
      writing: { correct: 6, wrong: 1 },
      plants: { correct: 5, wrong: 1 },
      animals: { correct: 6, wrong: 1 },
      earth: { correct: 3, wrong: 1 },
      weather: { correct: 3, wrong: 1 },
      matter: { correct: 2, wrong: 3 },
    },
    wrongLog: [
      {
        id: "w1",
        questionId: "m-fr-3",
        chosen: 1,
        skill: "fractions",
        subject: "math",
        at: Date.now() - 86400000 * 2,
        practiced: false,
      },
      {
        id: "w2",
        questionId: "m-wp-4",
        chosen: 1,
        skill: "word-problems",
        subject: "math",
        at: Date.now() - 86400000,
        practiced: false,
      },
      {
        id: "w3",
        questionId: "e-gr-3",
        chosen: 0,
        skill: "grammar",
        subject: "english",
        at: Date.now() - 86400000,
        practiced: false,
      },
      {
        id: "w4",
        questionId: "s-ma-5",
        chosen: 0,
        skill: "matter",
        subject: "science",
        at: Date.now() - 3600000 * 5,
        practiced: false,
      },
      {
        id: "w5",
        questionId: "e-mi-5",
        chosen: 2,
        skill: "main-idea",
        subject: "english",
        at: Date.now() - 3600000 * 3,
        practiced: false,
      },
    ],
    owned: ["food-bowl", "toy-ball"],
    adventureProgress: {},
  };
}

export interface AnswerResult {
  correct: boolean;
  coins: number;
  bonus: boolean;
}

interface Store {
  state: GameState;
  ready: boolean;
  startProfile: (p: Profile) => void;
  answer: (q: Question, chosen: number, mode: "mission" | "practice") => AnswerResult;
  buy: (itemId: string) => boolean;
  setAdventureStep: (adventureId: string, step: number) => void;
  addMinutes: (m: number) => void;
  reset: () => void;
}

const StoreContext = createContext<Store | null>(null);

export function PawPathProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(initialState);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setState({ ...initialState(), ...(JSON.parse(raw) as GameState) });
    } catch {
      /* ignore bad saved data */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be full or blocked */
    }
  }, [state, ready]);

  const startProfile = useCallback((profile: Profile) => {
    setState((s) => ({ ...s, profile }));
  }, []);

  const answer = useCallback(
    (q: Question, chosen: number, mode: "mission" | "practice"): AnswerResult => {
      const isPractice = mode === "practice";
      const correctIndex = isPractice ? q.practice.answer : q.answer;
      const correct = chosen === correctIndex;
      let earned = 0;
      let bonus = false;

      setState((s) => {
        const skillStat = s.bySkill[q.skill] ?? { correct: 0, wrong: 0 };
        const subjStat = s.bySubject[q.subject];
        if (correct) {
          const streak = s.correctStreak + 1;
          bonus = !isPractice && streak > 0 && streak % 3 === 0;
          earned = isPractice ? 5 : 10 + (bonus ? 5 : 0);
          return {
            ...s,
            coins: s.coins + earned,
            xp: s.xp + 1,
            correctStreak: isPractice ? s.correctStreak : streak,
            bySkill: {
              ...s.bySkill,
              [q.skill]: { correct: skillStat.correct + 1, wrong: skillStat.wrong },
            },
            bySubject: {
              ...s.bySubject,
              [q.subject]: { correct: subjStat.correct + 1, wrong: subjStat.wrong },
            },
            wrongLog: isPractice
              ? s.wrongLog.map((w) =>
                  w.questionId === q.id ? { ...w, practiced: true } : w,
                )
              : s.wrongLog,
          };
        }
        return {
          ...s,
          correctStreak: 0,
          bySkill: {
            ...s.bySkill,
            [q.skill]: { correct: skillStat.correct, wrong: skillStat.wrong + 1 },
          },
          bySubject: {
            ...s.bySubject,
            [q.subject]: { correct: subjStat.correct, wrong: subjStat.wrong + 1 },
          },
          wrongLog: isPractice
            ? s.wrongLog
            : [
                ...s.wrongLog.filter((w) => w.questionId !== q.id),
                {
                  id: `w-${Date.now()}`,
                  questionId: q.id,
                  chosen,
                  skill: q.skill,
                  subject: q.subject,
                  at: Date.now(),
                  practiced: false,
                },
              ],
        };
      });

      return { correct, coins: earned, bonus };
    },
    [],
  );

  const buy = useCallback((itemId: string) => {
    const item = SHOP_ITEMS.find((i) => i.id === itemId);
    if (!item) return false;
    let done = false;
    setState((s) => {
      if (s.owned.includes(itemId) || s.coins < item.cost) return s;
      done = true;
      return { ...s, coins: s.coins - item.cost, owned: [...s.owned, itemId] };
    });
    return done;
  }, []);

  const setAdventureStep = useCallback((adventureId: string, step: number) => {
    setState((s) => ({
      ...s,
      adventureProgress: { ...s.adventureProgress, [adventureId]: step },
    }));
  }, []);

  const addMinutes = useCallback((m: number) => {
    setState((s) => ({ ...s, minutesLearning: s.minutesLearning + m }));
  }, []);

  const reset = useCallback(() => setState(initialState()), []);

  const value = useMemo<Store>(
    () => ({ state, ready, startProfile, answer, buy, setAdventureStep, addMinutes, reset }),
    [state, ready, startProfile, answer, buy, setAdventureStep, addMinutes, reset],
  );

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}

export function usePawPath(): Store {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error("usePawPath must be used inside PawPathProvider");
  return ctx;
}

export function levelInfo(xp: number) {
  let index = 0;
  LEVELS.forEach((l, i) => {
    if (xp >= l.need) index = i;
  });
  const current = LEVELS[index]!;
  const next = LEVELS[index + 1];
  const start = current.need;
  const end = next ? next.need : current.need + 20;
  const progress = Math.min(100, Math.round(((xp - start) / (end - start)) * 100));
  return { index, level: index + 1, current, next, progress };
}

export function percent(stat: Stat | undefined): number {
  if (!stat) return 0;
  const total = stat.correct + stat.wrong;
  if (total === 0) return 0;
  return Math.round((stat.correct / total) * 100);
}

export function overallPercent(state: GameState): number {
  const all = (["math", "english", "science"] as Subject[]).reduce(
    (acc, s) => {
      const st = state.bySubject[s];
      return { correct: acc.correct + st.correct, wrong: acc.wrong + st.wrong };
    },
    { correct: 0, wrong: 0 },
  );
  return percent(all);
}

export function totals(state: GameState) {
  return (["math", "english", "science"] as Subject[]).reduce(
    (acc, s) => {
      const st = state.bySubject[s];
      return { correct: acc.correct + st.correct, wrong: acc.wrong + st.wrong };
    },
    { correct: 0, wrong: 0 },
  );
}

export function masteredSkills(state: GameState) {
  return SKILLS.filter((s) => {
    const st = state.bySkill[s.id];
    return st && st.correct + st.wrong >= 3 && percent(st) >= 80;
  });
}

export function weakSkills(state: GameState) {
  return SKILLS.filter((s) => {
    const st = state.bySkill[s.id];
    return st && st.correct + st.wrong >= 3 && percent(st) < 70;
  }).sort((a, b) => percent(state.bySkill[a.id]) - percent(state.bySkill[b.id]));
}
