import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'shumiofficial1007',
  apiKey: process.env.API_KEY,
});
