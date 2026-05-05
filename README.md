# AI4Behavior — ASD-HI Dataset Explorer

A React + Express web application for exploring and annotating the **ASD-HI**
(Autism Spectrum Disorder — Human Interaction) video dataset. Researchers can
browse, filter, and annotate parent-child interaction videos.

## Architecture

```
Browser (React CRA, port 3210)
    ↕ REST API
Express backend (port 4005)
    ↕ Supabase JS client
Supabase (PostgreSQL + REST API)
```

- **Frontend:** React (Create React App), Ant Design, video-react
- **Backend:** Express + SQLite (local) → Supabase (cloud PostgreSQL)
- **Database:** Data lives in Supabase. A local `dump.sql` is provided for
  importing into a new Supabase project.

## Prerequisites

- **Node.js ≥ 18**
- **npm ≥ 9**
- A **Supabase** project with the `videos` and `passcodes` tables set up.
  Use `backend/dump.sql` to create the schema and seed data.

## Quick Start

### 1. Clone

```bash
git clone https://github.com/BruceBest/AI4Behavior.git
cd AI4Behavior
```

### 2. Install dependencies

```bash
# One-shot: install both frontend and backend deps
bash install_dependence.sh

# Or manually:
npm install          # root (React frontend)
cd backend
npm install          # Express backend
cd ..
```

### 3. Configure environment variables

This project **requires** a Supabase instance. Create these two files:

**`.env`** (project root — for the React frontend):
```env
REACT_APP_SUPABASE_URL=https://your-project.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOi...your-anon-key
```

**`backend/.env`** (for the Express server):
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOi...your-service-role-key
```

> ⚠️ The project will not work without a Supabase instance.
> See [Supabase Setup](#supabase-setup) below.

### 4. Start

```bash
npm start
```

This runs **both** frontend and backend via `concurrently`:

| Service | URL |
|---------|-----|
| Frontend | http://localhost:3210 |
| Backend API | http://localhost:4005 |

---

## Supabase Setup

If you don't have the original Supabase project, create a new one:

1. Go to [supabase.com](https://supabase.com) → New project
2. Copy your **Project URL** and **anon key** (from Settings → API)
3. Get the **service_role key** (from Settings → API → service_role)
4. Run `backend/dump.sql` against your Supabase SQL Editor to create tables
   and seed the sample data
5. Fill in the `.env` files as described above

---

## Project Structure

```
AI4Behavior/
├── public/                  # Static assets, logos, sample videos
├── src/                     # React frontend source
│   ├── App.js               # Router + layout
│   ├── DataExplore/         # Data browsing, filtering, tasks
│   ├── People/              # Team member profiles
│   ├── protecter/           # Passcode-based access control
│   └── accountManage/       # Login / register
├── backend/
│   ├── server.js            # Express entry point (port 4005)
│   ├── routes/              # API routes (video, file, passcode, application)
│   ├── db/database.js       # Supabase client + query functions
│   ├── dump.sql             # Database schema + seed data
│   └── video_clips/         # Sample video clips
├── install_dependence.sh    # One-shot dependency install script
└── package.json             # Root package (CRA + concurrently)
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start frontend + backend (via concurrently) |
| `npm run build` | Production build (React) |
| `npm test` | Run frontend tests |
| `bash install_dependence.sh` | Install all dependencies |

---

## Troubleshooting

**"Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"**
→ Your `backend/.env` file is missing or incomplete. Check Step 3 above.

**Frontend loads but no data / blank page**
→ The Supabase project may be paused or deleted. Check
  https://your-project.supabase.co in a browser.

**Port 3210 or 4005 already in use**
→ Kill the existing process, or change PORT in `package.json` (frontend)
  and `backend/server.js` (backend).
