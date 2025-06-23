import React from 'react';
import '../styles/Appendix.css';  // Ensure you create/edit this CSS file for custom styles

const Appendix = () => {
  return (
    <><div className="appendix-container">
          <header className="appendix-header">
              <h1>Appendix</h1>
          </header>

          <section className="appendix-section">
              <h2>📈 Technical Analysis</h2>
          <p>
          <strong>Price Trend:</strong><br />
          Bullish → Indicates upward momentum; may signal a good buying opportunity if supported by other factors.<br />
          Bearish → Suggests downward movement; often a signal to wait or reassess before investing.
          </p>
          <p>
              <strong>Key Levels:</strong><br />
              Support → The price level where a stock typically stops falling and rebounds. If the current price is near support, it may be a low-risk entry.<br />
              Resistance → The price level where the stock tends to face selling pressure. If the current price nears resistance, upward movement may slow.
          </p>
          <p>
              <strong>Moving Averages (50-day/200-day):</strong><br />
              Price ABOVE Moving Average → Bullish indicator; shows positive momentum.<br />
              Price BELOW Moving Average → Bearish indicator; signals weakness or downtrend.
          </p>
      </section><section className="appendix-section">
              <h2>💰 Fundamental Analysis</h2>
              <p>
                  <strong>Valuation:</strong><br />
                  Premium → Stock may be overvalued; caution advised unless strong growth justifies the price.<br />
                  Undervalued → Potential for appreciation; may be a good long-term investment.
              </p>
              <p>
                  <strong>P/E Ratio:</strong><br />
                  High P/E (e.g., 30+) → Investors expect future growth; can be overvalued.<br />
                  Low P/E → May signal undervaluation or weak growth prospects.
              </p>
              <p>
                  <strong>Market Cap:</strong><br />
                  Large Cap (e.g., &gt;$200B) → Generally more stable; lower risk.<br />
                  Small/Mid Cap → Higher growth potential but more volatile.
              </p>
          </section><section className="appendix-section">
              <h2>🧠 AI Insights &amp; Model Performance</h2>
              <p>
                  <strong>Prediction Accuracy:</strong><br />
                  80%+ → Highly reliable AI model; predictions are more trustworthy.<br />
                  &lt;70% → Moderate accuracy; combine with other factors.
              </p>
              <p>
                  <strong>Average Return:</strong><br />
                  Higher (%) → Indicates good historical performance from AI recommendations.
              </p>
              <p>
                  <strong>Risk Score:</strong><br />
                  Low → Stable investment with less volatility.<br />
                  Medium/High → More price swings; requires careful timing or diversification.
              </p>
          </section><section className="appendix-section">
              <h2>📉 Performance Metrics</h2>
              <p>
                  <strong>Return (%):</strong><br />
                  High Return → Good profitability over the measured period.<br />
                  Low or Negative Return → May indicate recent struggles or market corrections.
              </p>
              <p>
                  <strong>Risk Level:</strong><br />
                  Low Risk → Safer investment with lower return expectations.<br />
                  High Risk → Potentially higher rewards, but comes with volatility.
              </p>
          </section><section className="appendix-section">
              <h2>📰 News Sentiment</h2>
              <p>
                  <strong>Positive (e.g., 60%+):</strong> Market sentiment is optimistic; potential catalyst for price increases.<br />
                  <strong>Neutral:</strong> Market is uncertain or waiting for more news.<br />
                  <strong>Negative:</strong> Could signal downward pressure or upcoming challenges.
              </p>
          </section><section className="appendix-section">
              <h2>🔮 Predictive Analytics</h2>
              <p>
                  <strong>Confidence Score:</strong><br />
                  85%+ → Strong AI confidence; high likelihood of predicted outcome.<br />
                  Below 70% → Prediction is less certain; use cautiously.
              </p>
              <p>
                  <strong>Predicted Change:</strong><br />
                  Positive (%) → Anticipated price increase; may favor buying.<br />
                  Negative (%) → Forecasted drop; possibly a signal to hold/sell.
              </p>
              <p>
                  <strong>Risk Level:</strong><br />
                  Low → Stable outlook, suitable for conservative investors.<br />
                  Medium/High → Greater potential rewards with matching risk.
              </p>
          </section>
      </div>
    </>
  );
};

export default Appendix;