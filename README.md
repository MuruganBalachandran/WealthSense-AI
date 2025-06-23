
# WealthSense: Full-Stack AI-Powered Stock Analysis Platform

# Wealth Sense AI
![Image](https://github.com/user-attachments/assets/7eee6e5d-8c38-4195-8f9d-3894ee70cf87)
![Image](https://github.com/user-attachments/assets/fa720633-5fbc-4d87-b85c-264ee6cd7628)
![Image](https://github.com/user-attachments/assets/967d3126-fc32-4abd-a7a4-1e9728bb1a49)
# Getting Started with Create React App
>>>>>>> 4360ed0f11dd13855f6fa53e541890b9a8e11a2d

## Overview
WealthSense is a comprehensive platform for advanced stock analysis, portfolio management, and personalized financial insights. It consists of three main components:
- **OLLAMA (AI/Agents)**: Python-based AI agentic orchestrator for deep stock analysis using CrewAI, LangChain, and Ollama models.
- **Client**: Modern React web app for user interaction, visualization, and portfolio management.
- **Server**: Node.js/Express backend for authentication, user management, and API integration with MongoDB.

---

## Project Structure
```
wealthsense/
│
├── client/         # React frontend
│   └── OLLAMA/     # Python AI agent orchestrator (CrewAI, LangChain, Ollama)
├── server/         # Node.js/Express backend
└── README.md       # (this file)
```

---

## 1. OLLAMA (AI/Agents)
- **Location:** `client/OLLAMA/`
- **Purpose:** Advanced stock analysis using multiple AI agents (technical, fundamental, sentiment, risk, etc.)
- **Tech:** Python, CrewAI, LangChain, Ollama, yfinance, TA-Lib, Plotly, Streamlit
- **How to Run:**
  1. Set up a Python environment (recommended: venv or conda)
  2. Install dependencies:
     ```bash
     cd client/OLLAMA
     pip install -r requirements.txt
     ```
  3. Run the Streamlit dashboard:
     ```bash
     streamlit run app.py
     ```
  4. See `client/OLLAMA/README.md` for full details and architecture.

---

## 2. Client (React Frontend)
- **Location:** `client/`
- **Purpose:** User interface for login, signup, profile, watchlist, settings, and stock analysis
- **Tech:** React, Context API, modern CSS, REST API integration
- **How to Run:**
  1. Install dependencies:
     ```bash
     cd client
     npm install
     ```
  2. Start the development server:
     ```bash
     npm start
     ```
  3. The app runs at [http://localhost:3000](http://localhost:3000)
  4. See `client/README.md` for more details.

---

## 3. Server (Node.js/Express Backend)
- **Location:** `server/`
- **Purpose:** Handles authentication, user CRUD, watchlist, settings, and MongoDB integration
- **Tech:** Node.js, Express, Mongoose, JWT, dotenv
- **How to Run:**
  1. Install dependencies:
     ```bash
     cd server
     npm install
     ```
  2. Create a `.env` file in `server/` with:
     ```
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     PORT=5000
     ```
  3. Start the server:
     ```bash
     npm start
     ```
  4. The API runs at [http://localhost:5000/api](http://localhost:5000/api)

---

## Integration
- The client communicates with the server via REST APIs for authentication, profile, watchlist, and settings.
- The OLLAMA AI agent orchestrator can be integrated with the client or used standalone for advanced analysis.

---

## License
See the LICENSE file for details.

---

For more details on each part, see the respective `README.md` files in `client/`, `client/OLLAMA/`, and `server/`.
