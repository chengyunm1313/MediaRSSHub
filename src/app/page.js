'use client';

import { useState, useEffect } from 'react';
import { RSS_CATEGORIES } from '@/lib/rss-config';
import { Calendar, ExternalLink, Search } from 'lucide-react';

export default function Home() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState(RSS_CATEGORIES.ALL);
  
  // Advanced Filters State
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [keyword, setKeyword] = useState('');

  async function fetchNews() {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        category: activeCategory,
        ...(startDate && { startDate }),
        ...(endDate && { endDate }),
        ...(keyword && { keyword }),
      });
      
      const res = await fetch(`/api/feeds?${params}`);
      const data = await res.json();
      if (data.data) {
        setNews(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch news:', error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchNews();
  }, [activeCategory]); // Trigger on category change

  const handleSearch = () => {
    fetchNews(); // Trigger on manual search
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('zh-TW', {
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <main>
      <div className="container">
        <header className="header">
          <h1 className="title">AI Tech Nexus</h1>
          <p className="subtitle">匯聚最前沿的 AI 與科技新聞</p>
        </header>

        {/* Advanced Controls */}
        <div className="controls">
          <div className="control-group">
            <input 
              type="date" 
              className="input-field"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              placeholder="開始日期"
            />
            <span style={{ color: '#666' }}>to</span>
            <input 
              type="date" 
              className="input-field"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              placeholder="結束日期"
            />
          </div>
          
          <div className="control-group">
            <input 
              type="text" 
              className="input-field"
              placeholder="搜尋關鍵字..."
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <button className="search-btn" onClick={handleSearch}>
              <Search size={18} />
              搜尋
            </button>
          </div>
        </div>

        <div className="filters">
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.ALL ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.ALL)}
          >
            全部
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.AI ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.AI)}
          >
            人工智慧 (AI)
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.TECH ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.TECH)}
          >
            綜合科技
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.ECOMMERCE ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.ECOMMERCE)}
          >
            電商行銷
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.MEDIA ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.MEDIA)}
          >
            自媒體
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.AUTOMATION ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.AUTOMATION)}
          >
            自動化
          </button>
          <button 
            className={`filter-btn ${activeCategory === RSS_CATEGORIES.BUSINESS ? 'active' : ''}`}
            onClick={() => setActiveCategory(RSS_CATEGORIES.BUSINESS)}
          >
            商業財經
          </button>
        </div>

        {loading ? (
          <div className="loading">正在掃描神經網絡... (Loading Feeds)</div>
        ) : (
          <div className="news-grid">
            {news.map((item, index) => (
              <article key={index} className="card">
                <div className="card-source">{item.source}</div>
                <h2 className="card-title">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </h2>
                <div className="card-date">
                  <Calendar size={14} />
                  {formatDate(item.isoDate)}
                  <ExternalLink size={14} style={{ marginLeft: 'auto' }} />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
