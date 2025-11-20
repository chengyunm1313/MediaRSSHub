import Parser from 'rss-parser';
import { RSS_FEEDS, RSS_CATEGORIES } from '@/lib/rss-config';

export const dynamic = 'force-dynamic'; // Ensure API is not cached statically

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') || RSS_CATEGORIES.ALL;
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const keyword = searchParams.get('keyword');

  const parser = new Parser();
  
  // Filter feeds based on category
  const targetFeeds = category === RSS_CATEGORIES.ALL
    ? RSS_FEEDS
    : RSS_FEEDS.filter(feed => feed.category === category);

  try {
    const feedPromises = targetFeeds.map(async (feedConfig) => {
      try {
        const response = await fetch(feedConfig.url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
          signal: AbortSignal.timeout(10000), // 10s timeout
        });

        if (!response.ok) {
          console.error(`Failed to fetch ${feedConfig.name}: ${response.status} ${response.statusText}`);
          return [];
        }

        const xml = await response.text();
        const feed = await parser.parseString(xml);

        return feed.items.map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentSnippet: item.contentSnippet,
          source: feedConfig.name,
          category: feedConfig.category,
          isoDate: item.isoDate,
        }));
      } catch (error) {
        console.error(`Error parsing feed ${feedConfig.name}:`, error);
        return [];
      }
    });

    const results = await Promise.all(feedPromises);
    
    // Flatten and sort by date (newest first)
    let allNews = results.flat().sort((a, b) => {
      return new Date(b.isoDate) - new Date(a.isoDate);
    });

    // Filter by Date Range
    if (startDate || endDate) {
      const start = startDate ? new Date(startDate) : new Date('1970-01-01');
      const end = endDate ? new Date(endDate) : new Date();
      // Set end date to end of day
      end.setHours(23, 59, 59, 999);

      allNews = allNews.filter(item => {
        const itemDate = new Date(item.isoDate);
        return itemDate >= start && itemDate <= end;
      });
    }

    // Filter by Keyword
    if (keyword) {
      const lowerKeyword = keyword.toLowerCase();
      allNews = allNews.filter(item => {
        const titleMatch = item.title?.toLowerCase().includes(lowerKeyword);
        const snippetMatch = item.contentSnippet?.toLowerCase().includes(lowerKeyword);
        return titleMatch || snippetMatch;
      });
    }

    return Response.json({ data: allNews });
  } catch (error) {
    return Response.json({ error: 'Failed to fetch feeds' }, { status: 500 });
  }
}
