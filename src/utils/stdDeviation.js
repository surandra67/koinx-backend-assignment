
const calculateStdDeviation = (numbers) => {
    const mean = numbers.reduce((sum, value) => sum + value, 0) / numbers.length;
    const squaredDifferences = numbers.map((value) => Math.pow(value - mean, 2));
    const variance = squaredDifferences.reduce((sum, value) => sum + value, 0) / numbers.length;
    return Math.sqrt(variance);
  };
module.exports = calculateStdDeviation;