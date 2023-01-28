const { parse } = require('rss-to-json');

const HACKER_NEWS_RSS = 'https://news.ycombinator.com/rss';

export const getTopNews = async () => {
  try {
    const { items } = await parse(HACKER_NEWS_RSS);
    return items;
  } catch (error) {
    console.error('🚀 ~ getTopNews ~ error', error);
    return [];
  }
};
