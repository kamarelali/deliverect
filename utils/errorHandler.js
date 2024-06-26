const handleError = (error, apiName) => {
  console.error(`Error fetching from API of ${apiName}:`, error.message);
};

module.exports = handleError;
