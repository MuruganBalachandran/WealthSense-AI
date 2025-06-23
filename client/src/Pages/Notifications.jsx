import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiBell, FiTrendingUp, FiAlertTriangle, FiInfo, FiBarChart2 } from 'react-icons/fi';
import "../styles/Notifications.css";

function Notifications() {
  // Prepare for backend integration: start with empty notifications
  const [notifications] = useState([]);

  const categories = [
    { name: 'all', label: 'All' },
    { name: 'stock', label: 'Stocks' },
    { name: 'portfolio', label: 'Portfolio' },
    { name: 'market', label: 'Market' },
    { name: 'watchlist', label: 'Watchlist' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredNotifications = notifications.filter(notification => 
    selectedCategory === 'all' || notification.category === selectedCategory
  );

  return (
    <div className="notifications-container">
      <h1>Notifications</h1>
      
      <div className="notification-filters">
        {categories.map(category => (
          <button
            key={category.name}
            className={`filter-button ${selectedCategory === category.name ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="notifications-list">
        {filteredNotifications.length === 0 ? (
          <div className="notification-card info">No notifications yet.</div>
        ) : (
          filteredNotifications.map((notification, index) => (
            <motion.div 
              key={notification.id}
              className={`notification-card ${notification.type}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="notification-icon">
                {notification.icon}
              </div>
              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}

export default Notifications;
