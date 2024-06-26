const axiosInstance = require('../config/config');
const handleError = require('../utils/errorHandler');
require("dotenv").config();

const getAllAllergens = async () => {
  try {
    const response = await axiosInstance.get(`/allAllergens`);
    console.log("Data from API of allergens:");
    return { status: 200, message: response.data };

  } catch (error) {
    handleError(error, 'allergens');
    return {
        status: error.response.status,
        message: "Internal Server Error: Failed to insert or update product",
      };
  }
};

module.exports = getAllAllergens;
