const Redis = require('ioredis');

const redis = new Redis();

async function test() {
    // const array = ['1','2','3']
    // await redis.lpush('list', '1');
    // await redis.lpush('list', '2');
    // await redis.lpush('list', '3');
    // await redis.lpush('kaka', array);

    // await redis.lpush('kaka', '4');
    await redis.rpop('getTokenForUpgrade', 100);
    // // console.log('first: ', first);
    // const data = await redis.lrange('key_redis_crawler', 0, -1);
    // console.log(data)
}

test().then()