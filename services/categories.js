const axiosInstance = require("../config/config");
const handleError = require("../utils/errorHandler");
require("dotenv").config();

const getCategories = async () => {
  try {
    const response = await axiosInstance.get(`/productCategories`, {
      params: {
        where: {
          accountId: process.env.ACCOUNT_ID,
        },
      },
    });
    console.log("Data from API of categories:");
    return { status: 200, message: response.data };

  } catch (error) {
    handleError(error, "Product Categories");
    return {
        status: error.response.status,
        message: "Internal Server Error: Failed to insert or update product",
      };
  }
};

module.exports = getCategories;
