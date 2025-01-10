const axios = require('axios');
const CryptoData = require('../models/cryptoData');
const cron = require('node-cron');

const fetchPrices = async () => {
  try {
    console.log("fetching Started");
    const response = await axios.get(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,matic-network&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'
    );

    const data = response.data;
    const coins = Object.keys(data);

    const records = coins.map((coin) => ({
      coin,
      price: data[coin].usd,
      marketCap: data[coin].usd_market_cap,
      change24h: data[coin].usd_24h_change,
    }));

    await CryptoData.insertMany(records);
    console.log('Crypto data fetched and saved.');
  } catch (error) {
    console.error('Error fetching prices:', error.message);
  }
};

cron.schedule('0 */2 * * *', fetchPrices); // Runs every 2 hours