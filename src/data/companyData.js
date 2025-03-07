export const COMPANY_DATA = {
  MSFT: {
    name: "Microsoft Corporation",
    technical: {
      price_trend: "BULLISH",
      key_levels: {
        support: 312.45,
        resistance: 378.92
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "PREMIUM",
      key_metrics: {
        pe_ratio_analysis: "32.54",
        market_cap_assessment: "$2,890,450,000,000"
      },
      metrics: {
        market_cap: "$2,890,450,000,000",
        week_52_high: "$384.30",
        dividend_yield: "0.82%",
        pe_ratio: "32.54",
        week_52_low: "$275.37",
        beta: "0.92"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.28, percentage: '28.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '89.2%',
          change: '+3.1%'
        },
        {
          title: 'Average Return',
          value: '15.3%',
          change: '+2.1%'
        },
        {
          title: 'Risk Score',
          value: 'Low',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 25, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 88,
      predicted_change: '+7.2%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 280 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 285 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 290 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 295 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 300 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 308 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 312 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 315 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 318 }
      ]
    }
  },
  AAPL: {
    name: "Apple Inc.",
    technical: {
      price_trend: "BEARISH",
      key_levels: {
        support: 163.308889066471,
        resistance: 259.814335044082
      },
      moving_averages: {
        "50_day": "BELOW",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "PREMIUM",
      key_metrics: {
        pe_ratio_analysis: "36.077652",
        market_cap_assessment: "$3,419,781,201,920"
      },
      metrics: {
        market_cap: "$3,419,781,201,920",
        week_52_high: "$260.10",
        dividend_yield: "0.42%",
        pe_ratio: "36.08",
        week_52_low: "$164.08",
        beta: "1.24"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.25, percentage: '25.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.20, percentage: '20.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.19, percentage: '19.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.13, percentage: '13.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.09, percentage: '9.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '87.5%',
          change: '+2.3%'
        },
        {
          title: 'Average Return',
          value: '12.8%',
          change: '+1.5%'
        },
        {
          title: 'Risk Score',
          value: 'Medium',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 60, color: '#4ade80' },
        { name: 'Neutral', value: 30, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 85,
      predicted_change: '+6.5%',
      risk_level: 'Medium',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 180.25 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 185.40 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 182.75 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 187.20 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 190.50 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 193.25 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 193.25 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 195.80 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 198.45 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 201.30 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 205.75 }
      ]
    }
  },
  AMZN: {
    name: "Amazon.com, Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: { support: 125.65, resistance: 145.78 },
      moving_averages: { "50_day": "ABOVE", "200_day": "ABOVE" }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: { pe_ratio_analysis: "38.20", market_cap_assessment: "$1,620,000,000,000" },
      metrics: {
        market_cap: "$1,620,000,000,000",
        week_52_high: "$147.25",
        dividend_yield: "-",
        pe_ratio: "38.20",
        week_52_low: "$95.25",
        beta: "1.35"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.24, percentage: '24.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.21, percentage: '21.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.20, percentage: '20.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.09, percentage: '9.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '88.4%', change: '+2.7%' },
        { title: 'Average Return', value: '13.5%', change: '+1.9%' },
        { title: 'Risk Score', value: 'Medium', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 25, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 78,
      predicted_change: '+9.2%',
      risk_level: 'Medium',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 142.65 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 145.80 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 148.25 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 146.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 150.35 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 152.80 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 152.80 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 155.90 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 159.25 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 162.75 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 166.85 }
      ]
    }
  },
  TSLA: {
    name: "Tesla, Inc.",
    technical: {
      price_trend: "BEARISH",
      key_levels: { support: 198.45, resistance: 254.32 },
      moving_averages: { "50_day": "BELOW", "200_day": "BELOW" }
    },
    fundamental: {
      valuation: "OVERVALUED",
      key_metrics: { pe_ratio_analysis: "75.10", market_cap_assessment: "$780,000,000,000" },
      metrics: {
        market_cap: "$780,000,000,000",
        week_52_high: "$299.29",
        dividend_yield: "-",
        pe_ratio: "75.10",
        week_52_low: "$176.99",
        beta: "2.05"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.30, percentage: '30.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.15, percentage: '15.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.10, percentage: '10.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.11, percentage: '11.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.07, percentage: '7.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.02, percentage: '2.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '85.6%', change: '+1.9%' },
        { title: 'Average Return', value: '9.7%', change: '+1.2%' },
        { title: 'Risk Score', value: 'High', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 55, color: '#4ade80' },
        { name: 'Neutral', value: 30, color: '#60a5fa' },
        { name: 'Negative', value: 15, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 72,
      predicted_change: '-4.5%',
      risk_level: 'High',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 235.45 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 230.80 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 225.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 228.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 220.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 215.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 215.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 212.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 209.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 207.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 205.95 }
      ]
    }
  },
  GOOGL: {
    name: "Alphabet Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: { support: 130.25, resistance: 155.80 },
      moving_averages: { "50_day": "ABOVE", "200_day": "ABOVE" }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: { pe_ratio_analysis: "28.35", market_cap_assessment: "$1,800,000,000,000" },
      metrics: {
        market_cap: "$1,800,000,000,000",
        week_52_high: "$157.45",
        dividend_yield: "-",
        pe_ratio: "28.35",
        week_52_low: "$103.25",
        beta: "1.05"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.26, percentage: '26.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.17, percentage: '17.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.23, percentage: '23.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.11, percentage: '11.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.10, percentage: '10.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '89.0%', change: '+2.5%' },
        { title: 'Average Return', value: '14.2%', change: '+1.7%' },
        { title: 'Risk Score', value: 'Medium', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 64, color: '#4ade80' },
        { name: 'Neutral', value: 26, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 82,
      predicted_change: '+6.7%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 125.89 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 128.45 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 130.12 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 127.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 132.50 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 135.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 135.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 137.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 139.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 141.75 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 144.85 }
      ]
    }
  },
  META: {
    name: "Meta Platforms Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: {
        support: 315.45,
        resistance: 395.85
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: {
        pe_ratio_analysis: "28.15",
        market_cap_assessment: "$890,450,000,000"
      },
      metrics: {
        market_cap: "$890,450,000,000",
        week_52_high: "$396.85",
        dividend_yield: "-",
        pe_ratio: "28.15",
        week_52_low: "$245.75",
        beta: "1.15"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.27, percentage: '27.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.19, percentage: '19.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.13, percentage: '13.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.09, percentage: '9.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '86.8%',
          change: '+2.8%'
        },
        {
          title: 'Average Return',
          value: '14.2%',
          change: '+1.8%'
        },
        {
          title: 'Risk Score',
          value: 'Medium',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 62, color: '#4ade80' },
        { name: 'Neutral', value: 28, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 86,
      predicted_change: '+7.8%',
      risk_level: 'Medium',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 315.45 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 320.80 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 325.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 328.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 332.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 335.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 335.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 342.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 349.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 355.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 361.95 }
      ]
    }
  },
  NVDA: {
    name: "NVIDIA Corporation",
    technical: {
      price_trend: "BULLISH",
      key_levels: {
        support: 425.75,
        resistance: 505.85
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "PREMIUM",
      key_metrics: {
        pe_ratio_analysis: "42.85",
        market_cap_assessment: "$1,150,250,000,000"
      },
      metrics: {
        market_cap: "$1,150,250,000,000",
        week_52_high: "$505.48",
        dividend_yield: "0.03%",
        pe_ratio: "42.85",
        week_52_low: "$285.75",
        beta: "1.75"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.30, percentage: '30.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.16, percentage: '16.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.02, percentage: '2.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '88.5%', change: '+3.2%' },
        { title: 'Average Return', value: '18.7%', change: '+2.4%' },
        { title: 'Risk Score', value: 'High', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 70, color: '#4ade80' },
        { name: 'Neutral', value: 20, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 89,
      predicted_change: '+9.2%',
      risk_level: 'High',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 425.75 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 435.80 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 445.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 452.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 462.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 475.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 475.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 482.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 489.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 495.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 501.95 }
      ]
    }
  },

  JPM: {
    name: "JPMorgan Chase & Co.",
    technical: {
      price_trend: "BULLISH",
      key_levels: {
        support: 142.85,
        resistance: 172.95
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: {
        pe_ratio_analysis: "10.85",
        market_cap_assessment: "$475,250,000,000"
      },
      metrics: {
        market_cap: "$475,250,000,000",
        week_52_high: "$172.96",
        dividend_yield: "2.45%",
        pe_ratio: "10.85",
        week_52_low: "$123.11",
        beta: "1.15"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.25, percentage: '25.0%', color: '#86efac' },
        { factor: 'Fundamental', weight: 0.23, percentage: '23.0%', color: '#818cf8' },
        { factor: 'Sentiment', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.09, percentage: '9.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '87.2%', change: '+2.5%' },
        { title: 'Average Return', value: '12.8%', change: '+1.6%' },
        { title: 'Risk Score', value: 'Medium', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 58, color: '#4ade80' },
        { name: 'Neutral', value: 32, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 84,
      predicted_change: '+6.5%',
      risk_level: 'Medium',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 142.85 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 145.90 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 148.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 151.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 154.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 157.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 157.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 160.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 163.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 166.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 169.95 }
      ]
    }
  },

  JNJ: {
    name: "Johnson & Johnson",
    technical: {
      price_trend: "NEUTRAL",
      key_levels: {
        support: 152.65,
        resistance: 175.95
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "BELOW"
      }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: {
        pe_ratio_analysis: "15.25",
        market_cap_assessment: "$385,750,000,000"
      },
      metrics: {
        market_cap: "$385,750,000,000",
        week_52_high: "$175.97",
        dividend_yield: "2.95%",
        pe_ratio: "15.25",
        week_52_low: "$144.95",
        beta: "0.65"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Fundamental', weight: 0.28, percentage: '28.0%', color: '#86efac' },
        { factor: 'Technical', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Sentiment', weight: 0.17, percentage: '17.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '85.5%', change: '+1.8%' },
        { title: 'Average Return', value: '8.7%', change: '+1.2%' },
        { title: 'Risk Score', value: 'Low', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 55, color: '#4ade80' },
        { name: 'Neutral', value: 35, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 82,
      predicted_change: '+4.8%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 152.65 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 154.90 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 156.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 158.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 160.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 162.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 162.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 164.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 166.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 168.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 170.95 }
      ]
    }
  },

  BRK: {
    name: "Berkshire Hathaway Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: {
        support: 345.65,
        resistance: 395.95
      },
      moving_averages: {
        "50_day": "ABOVE",
        "200_day": "ABOVE"
      }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: {
        pe_ratio_analysis: "8.95",
        market_cap_assessment: "$785,250,000,000"
      },
      metrics: {
        market_cap: "$785,250,000,000",
        week_52_high: "$395.98",
        dividend_yield: "-",
        pe_ratio: "8.95",
        week_52_low: "$305.75",
        beta: "0.85"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Fundamental', weight: 0.30, percentage: '30.0%', color: '#86efac' },
        { factor: 'Technical', weight: 0.20, percentage: '20.0%', color: '#818cf8' },
        { factor: 'Sentiment', weight: 0.16, percentage: '16.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.09, percentage: '9.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.06, percentage: '6.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        { title: 'Prediction Accuracy', value: '89.5%', change: '+2.8%' },
        { title: 'Average Return', value: '11.2%', change: '+1.5%' },
        { title: 'Risk Score', value: 'Low', type: 'risk' }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 28, color: '#60a5fa' },
        { name: 'Negative', value: 7, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 88,
      predicted_change: '+5.8%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 345.65 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 350.90 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 355.35 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 360.90 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 365.45 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 370.75 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 370.75 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 375.25 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 380.50 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 385.85 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 390.95 }
      ]
    }
  },

  V: {
    name: "Visa Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: { support: 242.85, resistance: 275.95 },
      moving_averages: { "50_day": "ABOVE", "200_day": "ABOVE" }
    },
    fundamental: {
      valuation: "PREMIUM",
      key_metrics: { pe_ratio_analysis: "32.15", market_cap_assessment: "$495,250,000,000" },
      metrics: {
        market_cap: "$495,250,000,000",
        week_52_high: "$275.98",
        dividend_yield: "0.75%",
        pe_ratio: "32.15",
        week_52_low: "$205.75",
        beta: "0.95"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.28, percentage: '28.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '89.2%',
          change: '+3.1%'
        },
        {
          title: 'Average Return',
          value: '15.3%',
          change: '+2.1%'
        },
        {
          title: 'Risk Score',
          value: 'Low',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 25, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 88,
      predicted_change: '+7.2%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 280 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 285 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 290 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 295 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 300 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 308 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 312 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 315 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 318 }
      ]
    }
  },

  WMT: {
    name: "Walmart Inc.",
    technical: {
      price_trend: "BULLISH",
      key_levels: { support: 152.85, resistance: 175.95 },
      moving_averages: { "50_day": "ABOVE", "200_day": "ABOVE" }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: { pe_ratio_analysis: "25.85", market_cap_assessment: "$425,750,000,000" },
      metrics: {
        market_cap: "$425,750,000,000",
        week_52_high: "$175.98",
        dividend_yield: "1.45%",
        pe_ratio: "25.85",
        week_52_low: "$142.75",
        beta: "0.55"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.28, percentage: '28.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '89.2%',
          change: '+3.1%'
        },
        {
          title: 'Average Return',
          value: '15.3%',
          change: '+2.1%'
        },
        {
          title: 'Risk Score',
          value: 'Low',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 25, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 88,
      predicted_change: '+7.2%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 280 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 285 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 290 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 295 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 300 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 308 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 312 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 315 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 318 }
      ]
    }
  },

  HD: {
    name: "Home Depot Inc.",
    technical: {
      price_trend: "NEUTRAL",
      key_levels: { support: 295.85, resistance: 345.95 },
      moving_averages: { "50_day": "ABOVE", "200_day": "BELOW" }
    },
    fundamental: {
      valuation: "FAIR",
      key_metrics: { pe_ratio_analysis: "22.45", market_cap_assessment: "$315,750,000,000" },
      metrics: {
        market_cap: "$315,750,000,000",
        week_52_high: "$345.98",
        dividend_yield: "2.55%",
        pe_ratio: "22.45",
        week_52_low: "$275.75",
        beta: "1.05"
      }
    },
    ai_insights: {
      feature_importance: [
        { factor: 'Technical', weight: 0.28, percentage: '28.0%', color: '#86efac' },
        { factor: 'Sentiment', weight: 0.18, percentage: '18.0%', color: '#818cf8' },
        { factor: 'Fundamental', weight: 0.22, percentage: '22.0%', color: '#818cf8' },
        { factor: 'Historical', weight: 0.12, percentage: '12.0%', color: '#818cf8' },
        { factor: 'News', weight: 0.08, percentage: '8.0%', color: '#e9d5ff' },
        { factor: 'Volatility', weight: 0.05, percentage: '5.0%', color: '#cbd5e1' },
        { factor: 'Market Trends', weight: 0.04, percentage: '4.0%', color: '#cbd5e1' },
        { factor: 'Sector Performance', weight: 0.03, percentage: '3.0%', color: '#cbd5e1' }
      ]
    },
    performance: {
      metrics: [
        {
          title: 'Prediction Accuracy',
          value: '89.2%',
          change: '+3.1%'
        },
        {
          title: 'Average Return',
          value: '15.3%',
          change: '+2.1%'
        },
        {
          title: 'Risk Score',
          value: 'Low',
          type: 'risk'
        }
      ]
    },
    news_sentiment: {
      distribution: [
        { name: 'Positive', value: 65, color: '#4ade80' },
        { name: 'Neutral', value: 25, color: '#60a5fa' },
        { name: 'Negative', value: 10, color: '#f87171' }
      ]
    },
    predictive: {
      confidence_score: 88,
      predicted_change: '+7.2%',
      risk_level: 'Low',
      historical_data: [
        { Date: new Date(2023, 0, 1).getTime(), Close: 280 },
        { Date: new Date(2023, 0, 2).getTime(), Close: 285 },
        { Date: new Date(2023, 0, 3).getTime(), Close: 290 },
        { Date: new Date(2023, 0, 4).getTime(), Close: 295 },
        { Date: new Date(2023, 0, 5).getTime(), Close: 300 },
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 }
      ],
      predicted_data: [
        { Date: new Date(2023, 0, 6).getTime(), Close: 305 },
        { Date: new Date(2023, 0, 7).getTime(), Close: 308 },
        { Date: new Date(2023, 0, 8).getTime(), Close: 312 },
        { Date: new Date(2023, 0, 9).getTime(), Close: 315 },
        { Date: new Date(2023, 0, 10).getTime(), Close: 318 }
      ]
    }
  }
};
