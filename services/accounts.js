const axiosInstance = require('../config/config');
const handleError = require('../utils/errorHandler');
require("dotenv").config();

const getLinkedAccount = async () => {
  try {
    const response = await axiosInstance.get(`/accounts`);
    console.log("Data from API of accounts:");
    return { status: 200, message: response.data };
  } catch (error) {
    handleError(error, 'accounts');
    return { status: error.response.status, message: "Internal Server Error: Failed to insert or update product"};
  }
};

module.exports = getLinkedAccount;
