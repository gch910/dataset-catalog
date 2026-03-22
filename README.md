# Dataset Catalog

A small full-stack prototype built with React, TypeScript, Material UI, and a .NET Minimal API.

## Features

- View datasets in a table
- Create datasets through a modal form
- Filter datasets by domain and status
- Show an AI-style warning when quality score is below 60

## Tech Stack

Frontend:
- React
- TypeScript
- Vite
- Material UI

Backend:
- .NET Minimal API
- C#

## Prerequisites

- Node.js 18+
- npm
- .NET SDK 10+

## Quick Start

Run backend and frontend in separate terminals.

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Configure frontend environment variables

```bash
cp .env.example .env
```

Default `frontend/.env.example`:

```env
VITE_API_BASE_URL=http://localhost:5059
```

If your backend runs on a different port, update `VITE_API_BASE_URL` in `frontend/.env`.

### 3. Start backend

```bash
cd backend
dotnet run
```

Expected default URL:

```text
http://localhost:5059
```

### 4. Start frontend

```bash
cd frontend
npm run dev
```

Expected default URL:

```text
http://localhost:5173
```

## Configuration

### Frontend

The frontend uses `VITE_API_BASE_URL` to call the backend API.

### Backend CORS

Allowed frontend origins are configured in backend settings instead of being hardcoded in code.

`backend/appsettings.json`:

```json
{
	"Cors": {
		"AllowedOrigins": [
			"http://localhost:5173"
		]
	}
}
```

If you run Vite on a different origin, add it to `Cors:AllowedOrigins`.

## API

Current backend endpoint:

- `GET /api/datasets`

Right now, the backend returns an empty list for this endpoint. Datasets created in the UI are stored in frontend state only.

## Implementation Notes

- Filtering is client-side (Domain and Status).
- Form handling separates domain model type (`Dataset`) from form input type (`CreateDatasetFormValues`) so `qualityScore` can be typed as text in the form and converted to number on submit.
- AI insight row appears when `qualityScore < 60`.

## Limitations

- No backend persistence yet
- Backend currently exposes only `GET /api/datasets`
- Created datasets exist only in frontend memory

## Troubleshooting

If data is not loading:

- Confirm backend is running
- Confirm `frontend/.env` exists
- Confirm `VITE_API_BASE_URL` matches backend URL
- Restart frontend after editing `.env`

If you hit CORS errors:

- Confirm frontend origin is listed in `backend` CORS configuration (`Cors:AllowedOrigins`)