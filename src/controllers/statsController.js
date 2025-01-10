const CryptoData = require('../models/cryptoData');


exports.getStats = async (req, res) => {
    try {
        const { coin } = req.query;
        if (!coin) return res.status(400).json({
            success:false,
            message: 'Coin query parameter is required.' 
            });
    
        const latestData = await CryptoData.findOne({ coin }).sort({ createdAt: -1 });
        if (!latestData) return res.status(404).json({ 
            success:false,
            message: 'No data found for the requested coin.' 
        });
    
        res.status(200).json({
            price: latestData.price,
            marketCap: latestData.marketCap,
            "24hChange": latestData.change24h,
        });
    } catch (error) {
      res.status(500).json({  success:false, message: 'Error fetching stats.', error: error.message });
    }
  };