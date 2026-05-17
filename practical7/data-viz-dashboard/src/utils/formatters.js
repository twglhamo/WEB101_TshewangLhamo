// Utility functions for data formatting

/**
 * Format large numbers with K, M, B suffixes
 * @param {number} value - The number to format
 * @returns {string} Formatted number string
 */
export const formatNumber = (value) => {
  if (value >= 1000000) {
    return (value / 1000000).toFixed(1) + 'M';
  }
  if (value >= 1000) {
    return (value / 1000).toFixed(1) + 'K';
  }
  return value.toString();
};

/**
 * Format currency values
 * @param {number} value - The value to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (value) => {
  return '$' + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

/**
 * Format percentage
 * @param {number} value - The percentage value
 * @returns {string} Formatted percentage string
 */
export const formatPercent = (value) => {
  return value.toFixed(1) + '%';
};

/**
 * Calculate sum of array values
 * @param {array} data - Array of objects
 * @param {string} key - Object key to sum
 * @returns {number} Sum of values
 */
export const calculateSum = (data, key) => {
  return data.reduce((sum, item) => sum + (item[key] || 0), 0);
};

/**
 * Calculate average of array values
 * @param {array} data - Array of objects
 * @param {string} key - Object key to average
 * @returns {number} Average of values
 */
export const calculateAverage = (data, key) => {
  const sum = calculateSum(data, key);
  return sum / data.length;
};

/**
 * Find max value in array
 * @param {array} data - Array of objects
 * @param {string} key - Object key to find max
 * @returns {number} Maximum value
 */
export const findMax = (data, key) => {
  return Math.max(...data.map((item) => item[key] || 0));
};

/**
 * Find min value in array
 * @param {array} data - Array of objects
 * @param {string} key - Object key to find min
 * @returns {number} Minimum value
 */
export const findMin = (data, key) => {
  return Math.min(...data.map((item) => item[key] || 0));
};
