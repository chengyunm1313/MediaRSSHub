export const RSS_CATEGORIES = {
  ALL: 'all',
  AI: 'ai',
  TECH: 'tech',
  ECOMMERCE: 'ecommerce', // 電商行銷
  MEDIA: 'media',         // 自媒體
  AUTOMATION: 'automation', // 自動化
  BUSINESS: 'business',   // 商業財經
};

export const RSS_FEEDS = [
  {
    id: 'technews-ai',
    name: 'TechNews AI',
    url: 'https://technews.tw/category/cutting-edge/ai/feed/',
    category: RSS_CATEGORIES.AI,
  },
  {
    id: 'google-news-bnext',
    name: '數位時代 (Google News)',
    url: 'https://news.google.com/rss/search?q=%E6%95%B8%E4%BD%8D%E6%99%82%E4%BB%A3&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.BUSINESS,
  },
  {
    id: 'commonwealth',
    name: '天下雜誌',
    url: 'https://www.cw.com.tw/RSS/cw_content.xml',
    category: RSS_CATEGORIES.BUSINESS,
  },
  {
    id: 'google-news-business-weekly',
    name: '商業周刊 (Google News)',
    url: 'https://news.google.com/rss/search?q=%E5%95%86%E6%A5%AD%E5%91%A8%E5%88%8A&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.BUSINESS,
  },
  {
    id: 'google-news-meet',
    name: '創業小聚 (Google News)',
    url: 'https://news.google.com/rss/search?q=%E5%89%B5%E6%A5%AD%E5%B0%8F%E8%81%9A&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.BUSINESS,
  },
  {
    id: 'ithome-ai',
    name: 'iThome AI',
    url: 'https://www.ithome.com.tw/rss', 
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'inside',
    name: 'INSIDE',
    url: 'https://feeds.feedburner.com/InSide_blog',
    category: RSS_CATEGORIES.ECOMMERCE, 
  },
  {
    id: 'panx',
    name: 'PanX 泛科技',
    url: 'https://panx.asia/feed',
    category: RSS_CATEGORIES.MEDIA, 
  },
  {
    id: 'technews-business',
    name: 'TechNews Business',
    url: 'https://technews.tw/category/business/feed/',
    category: RSS_CATEGORIES.ECOMMERCE,
  },
  {
    id: 'twreporter',
    name: '報導者',
    url: 'https://www.twreporter.org/a/rss2.xml',
    category: RSS_CATEGORIES.MEDIA,
  },
  {
    id: 'technews-component',
    name: 'TechNews Component',
    url: 'https://technews.tw/category/component/feed/',
    category: RSS_CATEGORIES.AUTOMATION,
  },
  // Google News Feeds
  {
    id: 'google-news-ai',
    name: 'Google News (AI)',
    url: 'https://news.google.com/rss/search?q=%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7+AI&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.AI,
  },
  {
    id: 'google-news-tech',
    name: 'Google News (Tech)',
    url: 'https://news.google.com/rss/search?q=%E7%A7%91%E6%8A%80%E6%96%B0%E8%81%9E&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.TECH,
  },
  {
    id: 'google-news-ecommerce',
    name: 'Google News (E-commerce)',
    url: 'https://news.google.com/rss/search?q=%E9%9B%BB%E5%95%86%E8%A1%8C%E9%8A%B7&hl=zh-TW&gl=TW&ceid=TW:zh-Hant',
    category: RSS_CATEGORIES.ECOMMERCE,
  },
];
