const axios = require('axios');
const CryptoData = require('../models/cryptoData');
const cron = require('node-cron');

const fetchPrices = async () => {
  try {
    console.log("fetching Started");
    const response = await axios.get(`${process.env.API_URL}`);

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

    console.error(error.message);
    return res.status(500).json({
      success: false,
      message: "Erroe: Error while fetching prices"
    })
   
  }
};

cron.schedule('0 */2 * * *', fetchPrices); // Runs every 2 hours