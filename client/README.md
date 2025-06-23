# WealthSense Client

## Overview
WealthSense is a full-stack web application for stock analysis, portfolio management, and personalized financial insights. This is the React client for the WealthSense platform.

## Features
- User authentication (signup, login, logout) with JWT
- Profile management (view/update)
- Watchlist management (add/remove stocks)
- Settings management (update preferences)
- Stock analysis tools (technical, fundamental, AI insights)
- Responsive, modern UI

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn

### Installation
```bash
cd client
npm install
```

### Environment Variables
Create a `.env` file in the `server/` directory with:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Client
```bash
npm start
```
The app will run at `http://localhost:3000` by default.

### Running the Server
See the `server/README.md` for backend setup and API details.

## Project Structure
- `src/Pages/` — Main pages (Login, Signup, Profile, WatchList, Settings, AnalyseStock, etc.)
- `src/Components/` — Reusable UI components
- `src/context/` — React context for Auth, Theme, User
- `src/utils/api.js` — Centralized API utility for server communication

## API Integration
All authentication, profile, watchlist, and settings features are integrated with the backend using RESTful APIs. The client uses a centralized `api.js` utility for all server requests.

## Authentication State
- The header displays a red Logout button when logged in, and Login/Signup when logged out.
- Auth state is managed via React Context and localStorage.

## License
See the main project LICENSE.
