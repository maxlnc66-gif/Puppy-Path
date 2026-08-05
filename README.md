# PawPath

PawPath is a Vite + React + TanStack Start app for a puppy-themed learning experience. It is prepared for deployment on Vercel and data/auth integration with Supabase.

## Tech stack

- Frontend: Vite + React + TanStack Start
- Styling: Tailwind CSS
- Backend/auth: Supabase
- Hosting: Vercel

## Local development

1. Install dependencies:

```sh
npm install
```

2. Copy environment variables:

```sh
cp .env.example .env
```

3. Add your Supabase values to `.env`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

4. Start the app:

```sh
npm run dev
```

## Vercel deployment

- Import the repository into Vercel.
- Set the build command to `npm run build`.
- Set the output directory to the default Vite/TanStack Start output.
- Add the same Supabase environment variables in the Vercel project settings.

## Supabase setup

- Create a Supabase project.
- Copy the project URL and anon key from the project dashboard.
- Add them to `.env` for local development and to Vercel for production.
- Use the generated client from `src/lib/supabase.ts` for auth and database access.
