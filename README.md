# CSHub - Computer Science Hub for Students

CSHub is a comprehensive platform designed for computer science students at our university. It provides resources like Google Drive links, YouTube videos, and books for different modules across bachelor's and master's programs. The website also features an admin dashboard for managing content efficiently.

## Features

- **User Access**:

  - Students can browse and access resources for their selected year and semester without authentication.
  - Admins can manage the content via a secure dashboard.

- **Organized Resources**:

  - Structured by degree type (bachelor's or master's), year, semester, and module.

- **Admin Dashboard**:
  - Full CRUD functionality to manage resources and module information.

## Tech Stack

### Frontend

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Shadcn UI](https://ui.shadcn.dev/), [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: (if applicable, e.g., Redux, Zustand, etc.)

### Backend

- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [Supabase](https://supabase.io/)
- **Authentication**: JSON Web Tokens (JWT) for admin authentication

### Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com/)
- **Backend**: Hosted on [Render](https://render.com/)
- **Database**: Hosted on [Supabase](https://supabase.io/)

## Installation

### Prerequisites

- Node.js
- PostgreSQL
