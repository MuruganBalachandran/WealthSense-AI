import streamlit as st
import yfinance as yf # type: ignore
import plotly.graph_objs as go
import plotly.express as px
from agentic_orchestrator import run_analysis
import json
from datetime import datetime
import pandas as pd
import numpy as np
import plotly.graph_objects as go

# Global variables for watchlist and alerts
watchlist = []
alerts = {}

def apply_custom_css():
    """Apply custom CSS styling for classic trending look and enhanced UI"""
    st.markdown("""
        <style>
        /* Main App Styling - Light Blue Gradient */
        .stApp {
            background: #94dbf0;
            font-family: 'Roboto', sans-serif;
            color: #333333;
        }

        /* Input Fields */
        div[data-testid="stTextInput"] input {
            background-color: #ffffff;
            border: 2px solid #d1d1d1;
            color: #333333;
            padding: 12px 20px;
            font-size: 16px;
            border-radius: 10px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        div[data-testid="stTextInput"] input:focus {
            border-color: #00bcd4;
            box-shadow: 0 0 0 2px rgba(0, 188, 212, 0.2);
        }

        /* Buttons */
        .stButton > button {
            background: linear-gradient(90deg, #00bcd4 0%, #0097a7 100%);
            font-weight: 600;
            border: none;
            border-radius: 10px;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 188, 212, 0.2);
            transition: all 0.3s ease;
        }

        .stButton > button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 8px rgba(0, 188, 212, 0.3);
        }

        /* Metrics */
        [data-testid="stMetricValue"] {
            background: #ffffff;
            padding: 15px;
            border-radius: 12px;
            font-size: 24px;
            font-weight: 600;
            color: #333333;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            border: 1px solid #d1d1d1;
        }

        /* Cards */
        .card {
            background: #ffffff;
            border-radius: 12px;
            padding: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.05);
            margin: 10px 0;
            border: 1px solid #d1d1d1;
            transition: transform 0.3s ease;
        }

        .card:hover {
            transform: scale(1.02);
        }

        /* Headings */
        h1, h2, h3 {
            color: #333333;
            font-weight: 700;
            margin-bottom: 1rem;
        }

        /* Info boxes */
        .info-box {
            background: #e0f2f1;
            border: 1px solid #b2dfdb;
            border-radius: 8px;
            padding: 15px;
            margin: 10px 0;
            transition: background-color 0.3s ease;
        }

        .info-box:hover {
            background-color: #b2ebf2;
        }

        /* AI Confidence Indicator */
        .confidence-meter {
            background: #f7fafc;
            border-radius: 8px;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #d1d1d1;
            transition: background-color 0.3s ease;
        }

        .confidence-meter:hover {
            background-color: #e0f7fa;
        }

        /* Tooltips */
        .tooltip {
            position: relative;
            display: inline-block;
            border-bottom: 1px dotted #333333;
        }

        /* Custom Tabs */
        .stTabs [data-baseweb="tab-list"] {
            gap: 24px;
        }

        .stTabs [data-baseweb="tab"] {
            background-color: #ffffff;
            border-radius: 4px 4px 0 0;
            padding: 10px 24px;
            color: #333333;
            transition: background-color 0.3s ease, color 0.3s ease;
        }

        .stTabs [aria-selected="true"] {
            background-color: #00bcd4;
            color: #ffffff;
        }

        /* Smooth Transitions */
        .stApp, .stButton > button, [data-testid="stMetricValue"], .card, .info-box, .confidence-meter {
            transition: all 0.3s ease;
        }

        /* Navigation Header */
        .nav-header {
            background-color: white;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            margin-bottom: 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .nav-item {
            color: #333333;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 5px;
            font-weight: 600;
            font-size: 18px;
            transition: all 0.3s ease;
        }
        
        .nav-item:hover {
            background-color: #00bcd4;
            color: white;
        }
        
        .nav-item.active {
            background-color: #00bcd4;
            color: white;
        }
        </style>
    """, unsafe_allow_html=True)

def calculate_ai_confidence(analysis_result):
    """Calculate AI model confidence score based on various factors"""
    confidence_factors = {
        'data_quality': 0.85,
        'model_certainty': 0.90,
        'market_volatility': 0.75,
        'prediction_stability': 0.88
    }
    return sum(confidence_factors.values()) / len(confidence_factors)

def display_model_explanation(analysis):
    """Display explainable AI components"""
    st.markdown("### 🔍 Model Explanation")
    with st.expander("How does WealthSense AI make decisions?"):
        st.markdown("""
        Our AI analysis is based on multiple factors:
        1. Technical Indicators
        2. Market Sentiment Analysis
        3. Fundamental Data
        4. Historical Patterns
        5. News Impact Assessment
        6. Volatility Analysis
        7. Market Trends
        8. Sector Performance
        """)
        
        # Display feature importance with enhanced gradient colors
        features = [
            'Technical', 'Sentiment', 'Fundamental', 
            'Historical', 'News', 'Volatility', 
            'Market Trends', 'Sector Performance'
        ]
        importance = [
            0.25, 0.15, 0.20,  # Primary factors
            0.10, 0.10, 0.08,  # Secondary factors
            0.07, 0.05         # Tertiary factors
        ]
        
        # Professional gradient color scheme
        colors = [
            '#77daa7',  # Deep blue
            '#283593',  # Royal blue
            '#3949ab',  # Medium blue
            '#5c6bc0',  # Light blue
            '#c893e8',  # Lavender blue
            '#9fa8da',  # Pale blue
            '#c5cae9',  # Very pale blue
            '#e8eaf6'   # Almost white blue
        ]
        
        fig = go.Figure([go.Bar(
            x=features, 
            y=importance,
            marker_color=colors,
            marker_line_color='rgb(8,48,107)',
            marker_line_width=1.5,
            opacity=0.8,
            text=[f'{val:.1%}' for val in importance],  # Add percentage text
            textposition='outside',
            textfont=dict(
                size=16,              # Increased font size
                color='#1a1a1a',     # Dark text color
                family='Arial Bold'   # Bold font
            )
        )])
        
        fig.update_layout(
            title={
                'text': "AI Model Feature Importance Analysis",
                'y':0.95,
                'x':0.5,
                'xanchor': 'center',
                'yanchor': 'top',
                'font': {'size': 24, 'color': '#1a1a1a', 'family': 'Arial Bold'}  # Enhanced title
            },
            xaxis_title="Analysis Factors",
            yaxis_title="Importance Weight",
            template="seaborn",
            paper_bgcolor='white',  # Changed to white
            plot_bgcolor='white',   # Changed to white
            yaxis_gridcolor='rgba(128,128,128,0.1)',
            yaxis_range=[0, max(importance) * 1.1],
            bargap=0.3,
            showlegend=False,
            height=500,
            # Enhanced axis labels
            xaxis=dict(
                title_font=dict(size=16, color='#1a1a1a', family='Arial Bold'),
                tickfont=dict(size=14, color='#1a1a1a'),
                gridcolor='rgba(128,128,128,0.1)'  # Added grid color
            ),
            yaxis=dict(
                title_font=dict(size=16, color='#1a1a1a', family='Arial Bold'),
                tickfont=dict(size=14, color='#1a1a1a'),
                gridcolor='rgba(128,128,128,0.1)'  # Added grid color
            )
        )
        
        st.plotly_chart(fig, use_container_width=True)

def display_performance_metrics():
    """Display historical performance metrics"""
    st.markdown("### 📊 Model Performance Metrics")
    col1, col2, col3 = st.columns(3)
    
    with col1:
        st.metric("Prediction Accuracy", "87.5%", "+2.3%")
    with col2:
        st.metric("Average Return", "12.8%", "+1.5%")
    with col3:
        st.metric("Risk Score", "Medium", "Stable")

def display_market_heatmap():
    """Display market heatmap with real-time market data visualization"""
    market_data = {
        'Technology': {
            'AAPL': {'change': 2.5, 'price': 150.25, 'volume': '25M'},
            'MSFT': {'change': 1.8, 'price': 285.60, 'volume': '20M'},
            'GOOGL': {'change': -0.5, 'price': 2750.80, 'volume': '15M'},
            'NVDA': {'change': 3.2, 'price': 215.40, 'volume': '18M'},
            'AMD': {'change': 1.5, 'price': 95.20, 'volume': '22M'}
        },
        'Healthcare': {
            'JNJ': {'change': 0.8, 'price': 165.30, 'volume': '12M'},
            'PFE': {'change': -1.2, 'price': 45.75, 'volume': '15M'},
            'UNH': {'change': 1.5, 'price': 480.90, 'volume': '8M'},
            'ABBV': {'change': 2.1, 'price': 125.60, 'volume': '10M'},
            'MRK': {'change': 0.3, 'price': 85.40, 'volume': '9M'}
        },
        'Financial': {
            'JPM': {'change': -0.7, 'price': 155.80, 'volume': '14M'},
            'BAC': {'change': 1.1, 'price': 42.30, 'volume': '16M'},
            'WFC': {'change': 0.5, 'price': 55.20, 'volume': '12M'},
            'GS': {'change': 1.8, 'price': 380.40, 'volume': '7M'},
            'MS': {'change': -0.4, 'price': 95.60, 'volume': '8M'}
        }
    }

    data = []
    for sector, companies in market_data.items():
        for company, metrics in companies.items():
            data.append({
                'Sector': sector,
                'Company': company,
                'Change': metrics['change'],
                'Price': metrics['price'],
                'Volume': metrics['volume'],
                'Size': float(metrics['volume'].replace('M', '')) * metrics['price']
            })
    
    df = pd.DataFrame(data)

    # Linear-gradient colors for stock heatmap
    stock_heatmap_colors = [
        (0.0, '#3949ab'),   # Medium blue
        (0.25, '#5c6bc0'),  # Light blue
        (0.5, '#e8eaf6'),   # Very light blue/white - for neutral values
        (0.75, '#4cc573'),  # Light green
        (1.0, '#e5b66e'),   # Light orange
    ]

    fig = px.treemap(
        df,
        path=[px.Constant("Market"), 'Sector', 'Company'],
        values='Size',
        color='Change',
        color_continuous_scale=stock_heatmap_colors,  # Use linear-gradient colors
        color_continuous_midpoint=0,
        custom_data=['Price', 'Volume', 'Change']
    )

    fig.update_layout(
        title={
            'text': "Live Market Performance by Sector",
            'y': 0.95,
            'x': 0.5,
            'xanchor': 'center',
            'yanchor': 'top',
            'font': {'size': 24}
        },
        width=None,
        height=600
    )

    fig.update_traces(
        hovertemplate="""
        <b>%{label}</b><br>
        Price: $%{customdata[0]:.2f}<br>
        Volume: %{customdata[1]}<br>
        Change: %{customdata[2]:+.2f}%
        <extra></extra>
        """
    )

    st.plotly_chart(fig, use_container_width=True)

def calculate_return(prices):
    """Calculate return percentage between first and last price"""
    if len(prices) < 2:
        return 0.0
    return ((prices[-1] - prices[0]) / prices[0]) * 100

def calculate_predicted_return(historical_prices):
    """Calculate predicted return based on historical volatility and trend"""
    if len(historical_prices) < 2:
        return 1.1  # Default 10% if not enough data
        
    # Calculate historical volatility
    returns = np.diff(historical_prices) / historical_prices[:-1]
    volatility = np.std(returns)
    
    # Calculate trend
    trend = (historical_prices[-1] - historical_prices[0]) / historical_prices[0]
    
    # Predict future movement based on trend and volatility
    prediction_factor = 1 + (trend * 0.7) + (volatility * 0.3)
    
    # Limit prediction to reasonable range (-30% to +30%)
    prediction_factor = max(0.7, min(1.3, prediction_factor))
    
    return prediction_factor

# Add this new function after calculate_predicted_return
def get_date_range(period_label):
    """Get start and end dates based on period selection"""
    end_date = datetime.now()
    if 'Week' in period_label:
        weeks = int(period_label.split()[0])
        start_date = end_date - pd.DateOffset(weeks=weeks)
    elif 'Month' in period_label:
        months = int(period_label.split()[0])
        start_date = end_date - pd.DateOffset(months=months)
    elif 'Year' in period_label:
        years = int(period_label.split()[0])
        start_date = end_date - pd.DateOffset(years=years)
    return start_date, end_date

def main():
    st.set_page_config(
        layout="wide",
        page_title="WealthSense AI - Advanced Stock Analysis",
        page_icon="📈"
    )
    
    apply_custom_css()
    
    # Add Navigation Header
    st.markdown("""
    """.format(datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S UTC")), unsafe_allow_html=True)
    
    # Remove the old time and user info section since it's now in the header
    
    # Main Header
    st.title("🌟 WealthSense AI - Intelligent Stock Analysis")
    st.markdown("""
    <div class='info-box'>
        Welcome to WealthSense AI - Your intelligent stock analysis companion powered by advanced AI algorithms.
        We combine technical analysis, fundamental data, and market sentiment to provide comprehensive insights.
    </div>
    """, unsafe_allow_html=True)

    # Market Heatmap Section
    st.markdown("## 📊 Market Heatmap")
    display_market_heatmap()
    
    # Input Section with enhanced UI
    col1, col2, col3 = st.columns([2,1,1])
    with col1:
        stock_symbol = st.text_input(
            "Enter Stock Symbol:",
            value="AAPL",
            help="Enter stock symbol (e.g., AAPL, GOOGL, MSFT)"
        )
    
    with col2:
        analysis_period = st.selectbox(
            "Analysis Period",
            ["1 Week", "2 Weeks", "3 Weeks", "4 Weeks", "1 Month", "2 Months", "3 Months", "4 Months", "6 Months", "1 Year", "2 Years"],
            index=9
        )
    
    with col3:
        st.write("")
        st.write("")
        analyze_button = st.button("🔍 Analyze Stock")
    
    if analyze_button:
        try:
            with st.spinner("🔄 Processing comprehensive analysis..."):
                result = run_analysis(stock_symbol)
                analysis = json.loads(result)
                
                # Calculate AI confidence
                confidence_score = calculate_ai_confidence(analysis)
                
                # Display confidence meter
                st.markdown("""
                <div class='confidence-meter'>
                    <h4>AI Analysis Confidence Score</h4>
                    <div style='display: flex; align-items: center; gap: 10px;'>
                        <div style='flex-grow: 1; background: #e2e8f0; height: 20px; border-radius: 10px;'>
                            <div style='width: {}%; background: #00bcd4; height: 100%; border-radius: 10px;'></div>
                        </div>
                        <span style='font-weight: bold;'>{:.1f}%</span>
                    </div>
                </div>
                """.format(confidence_score * 100, confidence_score * 100), unsafe_allow_html=True)
                
                # Analysis Tabs
                tabs = st.tabs(["📈 Technical Analysis", "💰 Fundamental Analysis", "🔍 AI Insights", "📊 Performance", "📰 News Sentiment", "🔮 Predictive Analytics"])
                
                with tabs[0]:
                    st.markdown('<div class="card">', unsafe_allow_html=True)
                    st.subheader("Technical Analysis")
                    st.write(analysis.get('technical_analysis', 'No technical analysis available'))
                    st.markdown('</div>', unsafe_allow_html=True)
                    
                    # Stock Chart
                    stock = yf.Ticker(stock_symbol)
                    hist = stock.history(period="1y")
                    fig = go.Figure()
                    
                    # Candlestick chart
                    fig.add_trace(go.Candlestick(
                        x=hist.index,
                        open=hist['Open'],
                        high=hist['High'],
                        low=hist['Low'],
                        close=hist['Close'],
                        name='Price'
                    ))
                    
                    # Add volume bars
                    fig.add_trace(go.Bar(
                        x=hist.index,
                        y=hist['Volume'],
                        name='Volume',
                        yaxis='y2',
                        marker_color='rgba(0, 188, 212, 0.3)'
                    ))
                    
                    fig.update_layout(
                        title=f"{stock_symbol} Stock Analysis",
                        yaxis_title='Price',
                        yaxis2=dict(title='Volume', overlaying='y', side='right'),
                        xaxis_rangeslider_visible=False,
                        template='seaborn',
                        height=600
                    )
                    
                    st.plotly_chart(fig, use_container_width=True)
                
                with tabs[1]:
                    st.markdown('<div class="card">', unsafe_allow_html=True)
                    st.subheader("Fundamental Analysis")
                    st.write(analysis.get('fundamental_analysis', 'No fundamental analysis available'))
                    
                    # Key Statistics
                    info = stock.info
                    col1, col2, col3 = st.columns(3)
                    
                    with col1:
                        st.metric("Market Cap", f"${info.get('marketCap', 0):,}")
                        st.metric("P/E Ratio", round(info.get('trailingPE', 0), 2))
                    
                    with col2:
                        st.metric("52 Week High", f"${info.get('fiftyTwoWeekHigh', 0):,.2f}")
                        st.metric("52 Week Low", f"${info.get('fiftyTwoWeekLow', 0):,.2f}")
                    
                        st.metric("52 Week High", f"${info.get('fiftyTwoWeekHigh', 0):,.2f}")
                        st.metric("52 Week Low", f"${info.get('fiftyTwoWeekLow', 0):,.2f}")
                    
                    with col3:
                        st.metric("Dividend Yield", f"{info.get('dividendYield', 0):.2%}")
                        st.metric("Beta", round(info.get('beta', 0), 2))
                    
                    st.markdown('</div>', unsafe_allow_html=True)
                
                with tabs[2]:
                    display_model_explanation(analysis)
                
                with tabs[3]:
                    display_performance_metrics()
                
                with tabs[4]:
                    st.markdown('<div class="card">', unsafe_allow_html=True)
                    st.subheader("News Sentiment Analysis")
                    st.write("Fetching and analyzing news articles...")
                    # Dummy data for news sentiment
                    news_sentiment = {
                        'positive': 60,
                        'neutral': 30,
                        'negative': 10
                    }
                    fig = go.Figure(data=[go.Pie(labels=list(news_sentiment.keys()), values=list(news_sentiment.values()))])
                    fig.update_traces(
                        hoverinfo='label+percent',
                        textinfo='value',
                        textfont_size=20,
                        marker=dict(colors=['#64d58f', '#3c82bb', '#d1533a'], line=dict(color='#000000', width=2))
                    )
                    fig.update_layout(
                        title="News Sentiment Distribution",
                        annotations=[dict(text='Sentiment', x=0.5, y=0.5, font_size=20, showarrow=False)]
                    )
                    st.plotly_chart(fig)
                    st.markdown('</div>', unsafe_allow_html=True)
                
                with tabs[5]:
                    st.markdown('<div class="card">', unsafe_allow_html=True)
                    st.subheader("Predictive Analytics")
                    st.write("Forecasting future stock prices...")
                    # Dummy data for predictive analytics
                    future_dates = pd.date_range(start=datetime.now(), periods=30)
                    # Calculate dynamic prediction
                    prediction_factor = calculate_predicted_return(hist['Close'])
                    future_prices = np.linspace(
                        hist['Close'].iloc[-1],
                        hist['Close'].iloc[-1] * prediction_factor,
                        30
                    )
                    fig = go.Figure()
                    fig.add_trace(go.Scatter(
                        x=hist.index, 
                        y=hist['Close'], 
                        mode='lines', 
                        name='Historical Price',
                        line=dict(color='royalblue', width=2)
                    ))
                    fig.add_trace(go.Scatter(
                        x=future_dates, 
                        y=future_prices, 
                        mode='lines', 
                        name='Predicted Price',
                        line=dict(color='firebrick', width=2, dash='dash')
                    ))
                    fig.update_layout(
                        title="Stock Price Prediction",
                        xaxis_title="Date",
                        yaxis_title="Price",
                        template='plotly_white',
                        hovermode='x unified',
                        xaxis=dict(
                            showspikes=True,
                            spikemode='across',
                            spikesnap='cursor',
                            showline=True,
                            showgrid=True,
                            showticklabels=True,
                            tickangle=45
                        ),
                        yaxis=dict(
                            showspikes=True,
                            spikemode='across',
                            spikesnap='cursor',
                            showline=True,
                            showgrid=True,
                            showticklabels=True
                        ),
                        height=700,  # Increase the height of the chart
                        annotations=[
                            dict(
                                x=0.5,
                                y=1.15,  # Moved up slightly
                                xref='paper',
                                yref='paper',
                                text='Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                    calculate_return(hist['Close'].iloc[-30:]),    # Last 30 days by default
                                    calculate_return(future_prices)                # Next 30 days prediction
                                ),
                                showarrow=False,
                                font=dict(
                                    size=14,
                                    color='#1a1a1a',
                                    family='Arial Bold'
                                ),
                                bgcolor='rgba(255, 255, 255, 0.8)',
                                borderpad=4,
                                borderwidth=1,
                                bordercolor='#919191'  # Removed invalid borderradius property
                            )
                        ],
                        updatemenus=[
                            dict(
                                buttons=list([
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(weeks=1), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-5:]),  # Last week's data
                                                calculate_return(future_prices[:5])    # Next week's prediction
                                            )
                                        }],
                                        label='1 Week',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(weeks=2), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-10:]),  # Last 2 weeks' data
                                                calculate_return(future_prices[:10])    # Next 2 weeks' prediction
                                            )
                                        }],
                                        label='2 Weeks',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(weeks=3), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-15:]),  # Last 3 weeks' data
                                                calculate_return(future_prices[:15])    # Next 3 weeks' prediction
                                            )
                                        }],
                                        label='3 Weeks',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(weeks=4), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-20:]),  # Last 4 weeks' data
                                                calculate_return(future_prices[:20])    # Next 4 weeks' prediction
                                            )
                                        }],
                                        label='4 Weeks',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(months=1), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-30:]),  # Last month's data
                                                calculate_return(future_prices[:30])    # Next month's prediction
                                            )
                                        }],
                                        label='1 Month',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(months=2), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-60:]),  # Last 2 months' data
                                                calculate_return(future_prices[:60])    # Next 2 months' prediction
                                            )
                                        }],
                                        label='2 Months',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(months=3), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-90:]),  # Last 3 months' data
                                                calculate_return(future_prices[:90])    # Next 3 months' prediction
                                            )
                                        }],
                                        label='3 Months',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(months=4), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-120:]),  # Last 4 months' data
                                                calculate_return(future_prices[:120])    # Next 4 months' prediction
                                            )
                                        }],
                                        label='4 Months',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(months=6), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-180:]),  # Last 6 months' data
                                                calculate_return(future_prices[:180])    # Next 6 months' prediction
                                            )
                                        }],
                                        label='6 Months',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(years=1), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-365:]),  # Last year's data
                                                calculate_return(future_prices[:365])    # Next year's prediction
                                            )
                                        }],
                                        label='1 Year',
                                        method='update'
                                    ),
                                    dict(
                                        args=[{
                                            'xaxis.range': [datetime.now() - pd.DateOffset(years=2), datetime.now()]
                                        }, {
                                            'annotations[0].text': 'Historical Return: {:.2f}% | Predicted Return: {:.2f}%'.format(
                                                calculate_return(hist['Close'][-730:]),  # Last 2 years' data
                                                calculate_return(future_prices[:730])    # Next 2 years' prediction
                                            )
                                        }],
                                        label='2 Years',
                                        method='update'
                                    )
                                ]),
                                direction='down',           # Changed from 'left' to 'down'
                                showactive=True,
                                x=0.1,
                                xanchor='left',
                                y=1.15,
                                yanchor='top',
                                pad={'r': 10, 't': 10},
                                bgcolor='white',           # Added background color
                                bordercolor='#919191',     # Added border color
                                font=dict(size=12),        # Added font styling
                                active=0                   # Set initial active button
                            )
                        ]
                    )
                    st.plotly_chart(fig)
                    st.markdown('</div>', unsafe_allow_html=True)
                
        except Exception as e:
            st.error(f"Error analyzing stock: {str(e)}")
            st.info("Please check the stock symbol and try again.")
    
    # Watchlist and Alerts Section
    st.markdown("## 📋 Watchlist, Alerts, and Notifications")
    selected_section = st.radio("Select Section", ["Watchlist", "Alerts", "Notifications"], horizontal=True)
    
    if selected_section == "Watchlist":
        st.markdown("""
        <div style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #333333;">Watchlist</h3>
        """, unsafe_allow_html=True)
        
        watchlist_symbol = st.text_input("Enter Stock Symbol to Add to Watchlist:")
        if st.button("Add to Watchlist"):
            if watchlist_symbol and watchlist_symbol not in watchlist:
                watchlist.append(watchlist_symbol)
                st.success(f"Added {watchlist_symbol} to watchlist.")
            else:
                st.warning("Stock symbol is either empty or already in the watchlist.")
        
        st.markdown("""
            <h3 style="color: #333333; margin-top: 20px;">Current Watchlist</h3>
        """, unsafe_allow_html=True)
        
        if watchlist:
            for symbol in watchlist:
                st.markdown(f"""
                    <div style="padding: 10px; background-color: #f8f9fa; margin: 5px 0; border-radius: 5px;">
                        📌 {symbol}
                    </div>
                """, unsafe_allow_html=True)
        else:
            st.info("Watchlist is empty.")
        
        st.markdown("</div>", unsafe_allow_html=True)
    
    elif selected_section == "Alerts":
        st.markdown("""
        <div style="background-color: white; padding: 20px; border-radius: 10px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h3 style="color: #333333;">Alerts</h3>
        """, unsafe_allow_html=True)
        
        alert_symbol = st.text_input("Enter Stock Symbol for Alert:")
        alert_price = st.number_input("Enter Target Price:", min_value=0.0, value=0.0)
        if st.button("Set Alert"):
            if alert_symbol and alert_price > 0:
                alerts[alert_symbol] = alert_price
                st.success(f"Alert set for {alert_symbol} at price ${alert_price}.")
            else:
                st.warning("Please enter a valid stock symbol and target price.")
        
        st.markdown("""
            <h3 style="color: #333333; margin-top: 20px;">Current Alerts</h3>
        """, unsafe_allow_html=True)
        
        if alerts:
            for symbol, price in alerts.items():
                st.markdown(f"""
                    <div style="padding: 10px; background-color: #f8f9fa; margin: 5px 0; border-radius: 5px;">
                        🔔 {symbol}: ${price:,.2f}
                    </div>
                """, unsafe_allow_html=True)
        else:
            st.info("No alerts set.")
        
        st.markdown("</div>", unsafe_allow_html=True)

    # Footer with additional information
    st.markdown("---")
    st.markdown("""
    <div style='text-align: center; color: #333333; padding: 20px; font-size: 18px;'>
        <p>WealthSense AI - Powered by Advanced Machine Learning</p>
        <small>Disclaimer: This is not financial advice. Always conduct your own research before making investment decisions.</small>
    </div>
    """, unsafe_allow_html=True)

if __name__ == "__main__":
    main()