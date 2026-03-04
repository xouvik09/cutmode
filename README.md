## Cut-Mode Gamified

A gamified cut/fitness tracker with daily logging, streaks, points, and analytics.

### Features
- **Account system**: register/login/logout (session-based)
- **Daily logs**: weight, calories, protein, steps, workout
- **Gamification**: points, streak, cheat tokens
- **Strict mode**: penalizes points when exceeding calories
- **Analytics**: progress charts with selectable time range (2w/30d/8w/90d)

### Tech stack
- **Client**: React + Vite + Tailwind
- **Server**: Express (TypeScript)
- **Database**: Postgres + Drizzle ORM (optional in dev, required for real persistence)
- **Auth**: Sessions (`express-session`) + cookie-based login

### Requirements
- Node.js **20+** (recommended: latest LTS)
- Optional for persistence: Docker Desktop (or any Postgres 16+)

### Environment variables
Create a `.env` file (see `.env.example`):
- **`PORT`**: server port (default `5000`)
- **`SESSION_SECRET`**: session signing secret (change in production)
- **`DATABASE_URL`**: Postgres connection string (required for persistence)

### Local development (no database)
This mode runs with an **in-memory** store (data resets on restart).

```bash
npm ci
npm run dev
```

Open `http://localhost:5000`.

### Local development with Postgres (persistent)
1. Start Postgres:

```bash
docker compose up -d
```

2. Create `.env` from `.env.example` and set `DATABASE_URL` + `SESSION_SECRET`.

3. Push schema:

```bash
npm run db:push
```

4. Start:

```bash
npm run dev
```

### Scripts
- **`npm run dev`**: start dev server (Express + Vite middleware)
- **`npm run build`**: build client + server into `dist/`
- **`npm start`**: run production server from `dist/`
- **`npm run check`**: TypeScript typecheck
- **`npm run db:push`**: apply Drizzle schema to database

### Project structure
- **`client/`**: React app
- **`server/`**: Express API + Vite integration
- **`shared/`**: shared Zod schemas + API route definitions
- **`script/`**: build script

## Deployment

### Option A: Docker (recommended)
1. Create `.env` and set **`DATABASE_URL`** and **`SESSION_SECRET`** (see `.env.example`).
2. Build an image:

```bash
docker build -t cutmode .
```

3. Run the container:

```bash
docker run --rm -p 5000:5000 --env-file .env cutmode
```

4. Provide Postgres:
- Recommended: managed Postgres (Render/Railway/Fly/Neon/Supabase) and point `DATABASE_URL` at it
- Or run locally with `docker compose up -d` using `docker-compose.yml`

### Option B: Render / Railway / Fly.io
High-level steps:
- Provision a **managed Postgres** database
- Set env vars: `DATABASE_URL`, `SESSION_SECRET`, `NODE_ENV=production`, `PORT`
- Build command: `npm ci && npm run build`
- Start command: `npm start`

Notes:
- The app serves both API and frontend from the same server/port in production.
- Sessions are stored in Postgres when `DATABASE_URL` is set.

