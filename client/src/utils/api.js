// src/utils/api.js
// Centralized API utility for server communication

const API_BASE = process.env.REACT_APP_API_BASE || 'http://localhost:5000/api';

export async function apiRequest(endpoint, method = 'GET', body, token) {
  const headers = { 'Content-Type': 'application/json' };
  if (token) headers['x-auth-token'] = token;
  const res = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.msg || 'API error');
  return data;
}
