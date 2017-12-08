import redis from 'redis';
import app from '../app';

const REDIS_PORT = 6379 || process.env.REDIS_PORT;
const client = redis.createClient(REDIS_PORT);

export default client;
