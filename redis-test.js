const redis = require('redis');


const call = async() => {
    const client = redis.createClient();

client.on('error', (err) => console.log('Redis Client Error', err));
    await client.connect();

    await client.set('key', 'value');
    const value = await client.get('key');
    console.log("value1: ", value);
    // const blPopPromise = client.blPop(
    // redis.commandOptions({ isolated: true }),
    //   'key',
    //   0
    // );
    
    await client.lPush('arr', ['1', '2']);
    const value2 =  await client.lrange('arr', 0, -1)
    console.log("value2: ", value2);
}
call()


// await blPopPromise; // '2'