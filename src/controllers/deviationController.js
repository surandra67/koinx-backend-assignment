const CryptoData = require('../models/cryptoData');
const calculateStdDeviation = require('../utils/stdDeviation');

exports.getDeviation = async (req, res) => {
  try {
    const { coin } = req.query;
    if (!coin) return res.status(400).json({  
        success:false, 
        message: 'Coin query parameter is required.' 
    });

    const data = await CryptoData.find({ coin }).sort({ createdAt: -1 }).limit(100);
    if (!data.length) return res.status(404).json({ 
        success:false,
        message: 'No sufficient data found for the requested coin.' 
    });

    const prices = data.map((record) => record.price);
    const deviation = calculateStdDeviation(prices);

    res.status(200).json({ coin, standardDeviation: deviation });
  } catch (error) {
    res.status(500).json({ success:false, message: 'Error calculating deviation.', error: error.message });
  }
};