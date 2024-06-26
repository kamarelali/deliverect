const axiosInstance = require('../config/config');
const handleError = require('../utils/errorHandler');
require("dotenv").config();

const getAllChannels = async () => {
  try {
    const response = await axiosInstance.get(`/allChannels`);
    console.log("Data from API of all channels:");
    return { status: 200, message: response.data };
  } catch (error) {
    handleError(error, 'channels');
    return {
        status: error.response.status,
        message: "Internal Server Error: Failed to insert or update product",
      };
  }
};

module.exports = getAllChannels;
