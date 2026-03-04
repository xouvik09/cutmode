# CUTMODE –  Fitness & Discipline Tracker

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge\&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript)
![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge\&logo=postgresql)

CUTMODE is a gamified fitness and weight-cut tracking system designed to make discipline and habit consistency engaging through game mechanics. Instead of a simple calorie tracker, CUTMODE introduces streaks, points, cheat-token rewards, and progress analytics to encourage long-term adherence to fitness goals. Users can log daily data such as body weight, calories, protein intake, steps, and workouts while tracking progress through visual charts and performance metrics.

The application is built using a modern full-stack JavaScript architecture and focuses on behavior-driven feedback systems that motivate users to stay consistent with their fitness routines.

---

## Features

* Daily logging of **weight, calories, protein, steps, and workouts**
* **Gamification system** with points, streaks, and cheat-token rewards
* **Strict mode** that penalizes points when calorie targets are exceeded
* **Progress analytics** with selectable time ranges (2w / 30d / 8w / 90d)
* **Session-based authentication** with login and registration
* **Behavior-driven feedback system** to reinforce discipline
* **Persistent data storage** with PostgreSQL

---

## Tech Stack

### Frontend

* React
* Vite
* Tailwind CSS

### Backend

* Express (TypeScript)

### Database

* PostgreSQL
* Drizzle ORM

### Authentication

* Session-based authentication using `express-session` and cookies

---

## Requirements

* Node.js **v20+** (recommended: latest LTS)
* Optional: **Docker Desktop** or any PostgreSQL 16+ database for persistence

---

## Environment Variables

Create a `.env` file based on `.env.example`.

Example configuration:

```env id="env01"
PORT=5000
SESSION_SECRET=your_secret_here
DATABASE_URL=your_postgres_connection_string
```

---

## Local Development (No Database)

This mode runs with an in-memory store. Data will reset when the server restarts.

```bash id="dev01"
npm ci
npm run dev
```

Open in browser:

```
http://localhost:5000
```

---

## Local Development With PostgreSQL (Persistent)

Start PostgreSQL:

```bash id="dev02"
docker compose up -d
```

Push database schema:

```bash id="dev03"
npm run db:push
```

Start development server:

```bash id="dev04"
npm run dev
```

---

## Available Scripts

```bash id="scripts01"
npm run dev       # Start development server
npm run build     # Build client and server into /dist
npm start         # Run production server
npm run check     # TypeScript type checking
npm run db:push   # Apply Drizzle schema to database
```

---

## Project Structure

```
cutmode/
│
├── client/      # React frontend
├── server/      # Express API and backend logic
├── shared/      # Shared schemas and API route definitions
├── script/      # Build scripts
└── dist/        # Production build output
```

---

## Deployment

### Docker (Recommended)

Build Docker image:

```bash id="dock01"
docker build -t cutmode .
```

Run container:

```bash id="dock02"
docker run --rm -p 5000:5000 --env-file .env cutmode
```

Provide PostgreSQL via a managed service such as:

* Render
* Railway
* Fly.io
* Neon
* Supabase

---

### Cloud Deployment (Render / Railway / Fly.io)

Steps:

1. Provision a managed PostgreSQL database
2. Configure environment variables:

   * DATABASE_URL
   * SESSION_SECRET
   * NODE_ENV=production
   * PORT

Build command:

```bash id="deploy01"
npm ci && npm run build
```

Start command:

```bash id="deploy02"
npm start
```

The application serves both **API and frontend from the same server** in production, and sessions are stored in PostgreSQL when `DATABASE_URL` is configured.

---

## Live Demo

Try the application here:

https://cut-mode-gamified--ocean09.replit.app

---

## Author

**Souvik Ghosh**

Aspiring Software Engineer focused on building practical full-stack systems and behavior-driven applications. This project was created as a personal discipline tool to gamify fitness tracking while also serving as a portfolio project demonstrating full-stack development, gamification mechanics, and modern web technologies.

GitHub:
https://github.com/xouvik09

---

## Future Improvements

* AI-driven nutrition coach
* Smart meal planning
* Mobile-friendly UI improvements
* Social leaderboard and challenges
* Advanced analytics and goal prediction

---

## License

This project is open source and available under the **MIT License**.
