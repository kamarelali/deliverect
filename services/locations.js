const axiosInstance = require("../config/config");
const handleError = require("../utils/errorHandler");
require("dotenv").config();

const getLocation = async () => {
  try {
    const response = await axiosInstance.get(`/locations`, {
      params: {
        max_results: 500,
        cursor: "new",
        sort: "-_created",
        where: {
          accountId: process.env.ACCOUNT_ID,
        },
      },
    });
    console.log("Data from API of locations:");
    return { status: 200, message: response.data };
  } catch (error) {
    handleError(error, "locations");
    return {
      status: error.response.status,
      message: "Internal Server Error: Failed to insert or update product",
    };
  }
};

module.exports = getLocation;
