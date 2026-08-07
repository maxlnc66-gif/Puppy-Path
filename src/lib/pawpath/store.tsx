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
  RESCUE_CATS,
  RESCUE_DOGS,
  SHOP_ITEMS,
  SKILLS,
  STARTER_DOGS,
  ADOPTION_COST,
  type Grade,
  type Question,
  type RescuePet,
  type Subject,
} from "./data";

export interface Profile {
  name: string;
  grade: Grade;
  puppyName: string;
  puppyId: string;
  starterPetId?: string | null;
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
  ownedBackgroundIds: string[];
  backgroundId: string;
  homeSlots: Array<string | null>;
  checkInDay: number;
  lastCheckInDate: string | null;
  lastFreeAdoptionDate?: string | null;
  rescuePets: RescuePet[];
  followingPetIds: string[];
  homePetIds: string[];
  adoptedPetIds: string[];
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
    ownedBackgroundIds: ["yard"],
    backgroundId: "yard",
    homeSlots: Array(9).fill(null),
    checkInDay: 0,
    lastCheckInDate: null,
    lastFreeAdoptionDate: null,
    rescuePets: [...RESCUE_DOGS, ...RESCUE_CATS].map((pet) => ({ ...pet })),
    followingPetIds: ["corgi"],
    homePetIds: ["orange-cat"],
    adoptedPetIds: [],
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
  setGrade: (grade: Grade) => void;
  unlockBackground: (backgroundId: string, cost: number) => boolean;
  setBackground: (backgroundId: string) => void;
  setHomeSlot: (slotIndex: number, itemId: string | null) => void;
  clearHomeSlot: (slotIndex: number) => void;
  claimCheckIn: () => { coins: number; rewardId: string | null } | null;
  interactWithPet: (petId: string, action: "pet" | "feed" | "play" | "brush" | "wash" | "gift") => void;
  togglePetSelection: (petId: string, list: "following" | "home") => void;
  adoptPet: (petId: string, free?: boolean) => boolean;
  claimFreeAdoption: (petId: string) => boolean;
  logout: () => void;
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
    setState((s) => ({
      ...s,
      profile,
      followingPetIds: profile.starterPetId && !s.followingPetIds.includes(profile.starterPetId)
        ? [profile.starterPetId, ...s.followingPetIds]
        : s.followingPetIds,
      homePetIds: profile.starterPetId && !s.homePetIds.includes(profile.starterPetId)
        ? [profile.starterPetId, ...s.homePetIds]
        : s.homePetIds,
    }));
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

  const setGrade = useCallback((grade: Grade) => {
    setState((s) => ({
      ...s,
      profile: s.profile ? { ...s.profile, grade } : s.profile,
    }));
  }, []);

  const unlockBackground = useCallback((backgroundId: string, cost: number) => {
    let done = false;
    setState((s) => {
      if (s.ownedBackgroundIds.includes(backgroundId) || s.coins < cost) return s;
      done = true;
      return {
        ...s,
        coins: s.coins - cost,
        ownedBackgroundIds: [...s.ownedBackgroundIds, backgroundId],
        backgroundId,
      };
    });
    return done;
  }, []);

  const setBackground = useCallback((backgroundId: string) => {
    setState((s) => ({ ...s, backgroundId }));
  }, []);

  const setHomeSlot = useCallback((slotIndex: number, itemId: string | null) => {
    setState((s) => {
      const next = [...s.homeSlots];
      next[slotIndex] = itemId;
      return { ...s, homeSlots: next };
    });
  }, []);

  const clearHomeSlot = useCallback((slotIndex: number) => {
    setState((s) => {
      const next = [...s.homeSlots];
      next[slotIndex] = null;
      return { ...s, homeSlots: next };
    });
  }, []);

  const claimCheckIn = useCallback(() => {
    let result: { coins: number; rewardId: string | null } | null = null;
    setState((s) => {
      const today = new Date().toISOString().slice(0, 10);
      if (s.lastCheckInDate === today) return s;
      const dayIndex = s.checkInDay % 7;
      const coins = [20, 25, 30, 35, 40, 45, 50][dayIndex];
      const rewardId = dayIndex === 6 ? "checkin-golden-bowl" : null;
      result = { coins, rewardId };
      const nextOwned = rewardId && !s.owned.includes(rewardId) ? [...s.owned, rewardId] : s.owned;
      return {
        ...s,
        coins: s.coins + coins,
        checkInDay: s.checkInDay + 1,
        lastCheckInDate: today,
        owned: nextOwned,
      };
    });
    return result;
  }, []);

  const interactWithPet = useCallback(
    (petId: string, action: "pet" | "feed" | "play" | "brush" | "wash" | "gift") => {
      setState((s) => {
        const pet = s.rescuePets.find((entry) => entry.id === petId);
        if (!pet) return s;
        const rewardCoins = action === "pet" ? 10 : action === "feed" ? 15 : action === "play" ? 12 : action === "brush" ? 8 : action === "wash" ? 8 : 12;
        const moodRank = ["Sad", "Nervous", "Calm", "Happy", "Very Happy"].indexOf(pet.mood);
        const nextMoodRank = Math.min(4, moodRank + (action === "gift" ? 2 : 1));
        const nextMood = ["Sad", "Nervous", "Calm", "Happy", "Very Happy"][nextMoodRank] as RescuePet["mood"];
        const nextPets = s.rescuePets.map((entry) =>
          entry.id === petId ? { ...entry, mood: nextMood, adoptable: nextMood === "Very Happy" } : entry,
        );
        return {
          ...s,
          coins: s.coins + rewardCoins,
          rescuePets: nextPets,
        };
      });
    },
    [],
  );

  const togglePetSelection = useCallback((petId: string, list: "following" | "home") => {
    setState((s) => {
      const key = list === "following" ? "followingPetIds" : "homePetIds";
      const listValue = list === "following" ? s.followingPetIds : s.homePetIds;
      const next = listValue.includes(petId)
        ? listValue.filter((entry) => entry !== petId)
        : [...listValue, petId];
      return { ...s, [key]: next };
    });
  }, []);

  const adoptPet = useCallback((petId: string, free = false) => {
    let ok = false;
    setState((s) => {
      if (s.adoptedPetIds.includes(petId)) return s;
      const pet = s.rescuePets.find((p) => p.id === petId);
      if (!pet) return s;
      // cost check using ADOPTION_COST from data.ts
      const adoptionCost = free ? 0 : ADOPTION_COST ?? 100;
      if (!free && s.coins < adoptionCost) return s;
      ok = true;
      const nextPets = s.rescuePets.map((entry) => (entry.id === petId ? { ...entry, adopted: true, adoptable: false } : entry));
      return {
        ...s,
        coins: free ? s.coins : s.coins - adoptionCost,
        rescuePets: nextPets,
        adoptedPetIds: [...s.adoptedPetIds, petId],
        homePetIds: s.homePetIds.includes(petId) ? s.homePetIds : [...s.homePetIds, petId],
      };
    });
    return ok;
  }, []);

  const claimFreeAdoption = useCallback((petId: string) => {
    const MS_PER_DAY = 1000 * 60 * 60 * 24;
    const today = new Date();
    let ok = false;
    setState((s) => {
      const last = s.lastFreeAdoptionDate ? new Date(s.lastFreeAdoptionDate) : null;
      if (last) {
        const days = Math.floor((today.getTime() - last.getTime()) / MS_PER_DAY);
        if (days < 3) return s; // must wait 3 full days
      }
      const pet = s.rescuePets.find((p) => p.id === petId);
      if (!pet) return s;
      ok = true;
      const nextPets = s.rescuePets.map((entry) => (entry.id === petId ? { ...entry, adopted: true, adoptable: false } : entry));
      return {
        ...s,
        lastFreeAdoptionDate: today.toISOString().slice(0, 10),
        rescuePets: nextPets,
        adoptedPetIds: [...s.adoptedPetIds, petId],
        homePetIds: s.homePetIds.includes(petId) ? s.homePetIds : [...s.homePetIds, petId],
      };
    });
    return ok;
  }, []);

  const logout = useCallback(() => {
    setState(initialState());
  }, []);

  const reset = useCallback(() => setState(initialState()), []);

  const value = useMemo<Store>(
    () => ({
      state,
      ready,
      startProfile,
      answer,
      buy,
      setAdventureStep,
      addMinutes,
      setGrade,
      unlockBackground,
      setBackground,
      setHomeSlot,
      clearHomeSlot,
      claimCheckIn,
      interactWithPet,
      togglePetSelection,
      adoptPet,
      claimFreeAdoption,
      logout,
      reset,
    }),
      [state, ready, startProfile, answer, buy, setAdventureStep, addMinutes, setGrade, unlockBackground, setBackground, setHomeSlot, clearHomeSlot, claimCheckIn, interactWithPet, togglePetSelection, adoptPet, claimFreeAdoption, logout, reset],
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
