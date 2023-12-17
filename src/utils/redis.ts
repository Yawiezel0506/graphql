import { client } from "./redisConnect";

export const existsInRedis = async (key: string) => {
  const response = await client.get(key);
  return response !== null ? JSON.parse(response) : null;
};

export const addToRedis = async (key: string, value: any) => {
  const response = await client.set(key, JSON.stringify(value));
  await client.expire(key, 300)
  return response;
};

export const closeRedis = async () => {
  await client.quit();
};
