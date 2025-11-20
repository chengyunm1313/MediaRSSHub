export const RSS_CATEGORIES = {
  ALL: 'all',
  AI: 'ai',
  TECH: 'tech',
  AI_MEDIA: 'ai_media',       // AI 自媒體 (生成式工具)
  AUTOMATION: 'automation',   // No-code 自動化
  VIBE_CODING: 'vibe_coding', // Vibe Coding
};

export const RSS_FEEDS = [
  // --- AI 人工智慧 ---
  {
    id: 'technews-ai',
    name: 'TechNews AI',
    url: 'https://technews.tw/category/cutting-edge/ai/feed/',
    category: RSS_CATEGORIES.AI,
  },
  {
    id: 'ithome-ai',
    name: 'iThome AI',
    url: 'https://www.ithome.com.tw/rss', 
    category: RSS_CATEGORIES.AI,
  },
  {
    id: 'google-news-ai',
    name: 'Google News (AI)',
    url: 'https://news.google.com/rss/search?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7+AI&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.AI,
  },

  // --- 最新科技 ---
  {
    id: 'technews-tech',
    name: 'TechNews 科技',
    url: 'https://technews.tw/feed/',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'techorange',
    name: 'TechOrange 科技報橘',
    url: 'https://buzzorange.com/techorange/feed/',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'inside',
    name: 'INSIDE 硬塞的',
    url: 'https://www.inside.com.tw/feed/rss',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'techbang',
    name: 'T客邦',
    url: 'https://feeds.feedburner.com/techbang/daily',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'bnext',
    name: '數位時代',
    // url: 'https://www.bnext.com.tw/rss', // 404 Not Found
    url: 'https://news.google.com/rss/search?q=site:bnext.com.tw&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'meet',
    name: '創業小聚',
    url: 'https://meet.bnext.com.tw/rss',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'google-news-tech',
    name: 'Google News (Tech)',
    url: 'https://news.google.com/rss/search?q=%E7%A7%91%E6%8A%80%E6%96%B0%E8%81%9E&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.TECH,
  },

  // --- AI 自媒體 (生成式工具) ---
  // 包含 AI 生文、生圖、生影片工具
  {
    id: 'freegroup',
    name: '免費資源網路社群',
    url: 'https://free.com.tw/feed/',
    category: RSS_CATEGORIES.AI_MEDIA,
  },
  {
    id: 'google-news-ai-media',
    name: 'AI Media Tools (Google News)',
    // Query: "AI 生成" OR "Midjourney" OR "Stable Diffusion" OR "Runway" OR "Sora" OR "ChatGPT" OR "Claude"
    url: 'https://news.google.com/rss/search?q=AI+%E7%94%9F%E6%88%90+OR+Midjourney+OR+%22Stable+Diffusion%22+OR+Runway+OR+Sora+OR+ChatGPT+OR+Claude&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.AI_MEDIA,
  },
  {
    id: 'panx',
    name: 'PanX 泛科技',
    // url: 'https://panx.asia/feed', // 503 Service Unavailable
    url: 'https://news.google.com/rss/search?q=site:panx.asia&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.AI_MEDIA, 
  },

  // --- No-code 自動化 ---
  // n8n, make.com, zapier
  {
    id: 'playpc',
    name: '電腦玩物',
    url: 'https://www.playpcesor.com/feeds/posts/default',
    category: RSS_CATEGORIES.AUTOMATION,
  },
  {
    id: 'google-news-automation',
    name: 'No-code Automation (Google News)',
    // Query: "n8n" OR "make.com" OR "zapier" OR "no-code" OR "automation"
    url: 'https://news.google.com/rss/search?q=n8n+OR+make.com+OR+zapier+OR+no-code+OR+automation&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.AUTOMATION,
  },

  // --- Vibe Coding ---
  // Cursor, Windsurf, Aider, AI Coding
  {
    id: 'google-news-vibe-coding',
    name: 'Vibe Coding (Google News)',
    // Query: "Cursor AI" OR "Windsurf" OR "Aider" OR "AI coding"
    url: 'https://news.google.com/rss/search?q=%22Cursor+AI%22+OR+Windsurf+OR+Aider+OR+%22AI+coding%22&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.VIBE_CODING,
  },
];
