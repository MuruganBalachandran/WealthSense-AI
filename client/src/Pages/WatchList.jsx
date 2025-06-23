import React, { useState, useContext, useEffect } from "react";
import { useTheme } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';
import { apiRequest } from '../utils/api';
import "../styles/WatchList.css";

function WatchList() {
  const { theme } = useTheme();
  const { token } = useContext(AuthContext);
  const [watchlist, setWatchlist] = useState([]);

  useEffect(() => {
    async function fetchWatchlist() {
      if (!token) return;
      try {
        const data = await apiRequest('/user/watchlist', 'GET', undefined, token);
        setWatchlist(data.map((symbol, idx) => ({ id: idx + 1, symbol, name: symbol, price: 0, change: 0 })));
      } catch (e) {}
    }
    fetchWatchlist();
  }, [token]);

  const [showAlertModal, setShowAlertModal] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const handleSetAlert = (stock) => {
    setSelectedStock(stock);
    setShowAlertModal(true);
  };

  const handleRemoveFromWatchlist = async (id) => {
    if (!token) return;
    const symbol = watchlist.find(stock => stock.id === id)?.symbol;
    try {
      await apiRequest(`/user/watchlist/${symbol}`, 'DELETE', undefined, token);
      setWatchlist(watchlist.filter(stock => stock.id !== id));
    } catch (e) {}
  };

  const handleAddToWatchlist = async () => {
    const symbol = prompt('Enter stock symbol to add:');
    if (!symbol) return;
    if (!token) return;
    try {
      await apiRequest('/user/watchlist', 'POST', { symbol }, token);
      setWatchlist(prev => [...prev, { id: prev.length + 1, symbol, name: symbol, price: 0, change: 0 }]);
    } catch (e) {}
  };

  return (
    <div className={`watchlist ${theme}`}>
      <div className="section-container">
        <div className="section-header">
          <div className="section-title">
            <i className="fas fa-star"></i>
            <span>Watchlist</span>
          </div>
          <button className="add-button" onClick={handleAddToWatchlist}>
            <i className="fas fa-plus"></i>
            Add to Watchlist
          </button>
        </div>
        
        <div className="scroll-container">
          <div className="stock-grid">
            {watchlist.map((stock) => (
              <div key={stock.id} className="stock-card">
                <div className="stock-info">
                  <h3>{stock.symbol}</h3>
                  <p>{stock.name}</p>
                  <h4>${stock.price.toFixed(2)}</h4>
                  <span className={stock.change >= 0 ? 'positive-change' : 'negative-change'}>
                    {stock.change > 0 ? '+' : ''}{stock.change}%
                  </span>
                </div>
                <div className="stock-actions">
                  <button 
                    className="add-button"
                    onClick={() => handleSetAlert(stock)}
                  >
                    <i className="fas fa-bell"></i>
                    Set Alert
                  </button>
                  <button 
                    className="btn-danger"
                    onClick={() => handleRemoveFromWatchlist(stock.id)}
                  >
                    <i className="fas fa-trash"></i>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAlertModal && (
        <AlertModal 
          stock={selectedStock}
          onClose={() => setShowAlertModal(false)}
        />
      )}
    </div>
  );
}

function AlertModal({ stock, onClose }) {
  const [alertPrice, setAlertPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle alert creation logic here
    onClose();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="alert-modal">
        <h2>Set Price Alert for {stock.symbol}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Alert Price ($)</label>
            <input
              type="number"
              step="0.01"
              value={alertPrice}
              onChange={(e) => setAlertPrice(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">
              Set Alert
            </button>
            <button 
              type="button" 
              className="btn btn-secondary ml-2"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default WatchList;
