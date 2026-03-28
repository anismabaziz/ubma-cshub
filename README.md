# Ubma Cshub

Ubma Cshub is a dedicated academic resource platform for Computer Science students. It centralizes access to essential learning materials, including lecture notes, textbooks, and recorded sessions, organized by major, year, and semester.

## Tech Stack

- **Frontend**: Next.js 15+, Tailwind CSS, Shadcn/UI, Axios.
- **Backend**: Django (Django REST Framework) managed with `uv`.
- **Database**: SQLite (Development) / PostgreSQL (Production).

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+)
- [Python](https://www.python.org/) (v3.12+)
- [uv](https://github.com/astral-sh/uv) (for backend dependency management)

### Local Setup

#### 1. Backend (Django)

Navigate to the `dashboard` directory and set up the environment:

```bash
cd dashboard
uv sync
uv run python manage.py migrate
uv run python manage.py runserver
```

The backend API will be available at `http://localhost:8000/`.

#### 2. Frontend (Next.js)

Navigate to the `web` directory and install dependencies:

```bash
cd web
npm install
npm run dev
```

The frontend application will be available at `http://localhost:3000/`.

## Project Structure

- `/web`: Next.js frontend application.
- `/dashboard`: Django backend API and admin dashboard.
