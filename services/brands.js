const axiosInstance = require('../config/config');
const handleError = require('../utils/errorHandler');
require("dotenv").config();

const getAccountsBrands = async () => {
  try {
    const response = await axiosInstance.get(`/accounts/${process.env.ACCOUNT_ID}/brands`);
    console.log("Data from API of account brands:");
    return { status: 200, message: response.data };

  } catch (error) {
    handleError(error, 'account brands');
    return {
        status: error.response.status,
        message: "Internal Server Error: Failed to insert or update product",
      };
  }
};

module.exports = getAccountsBrands;
