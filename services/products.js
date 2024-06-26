const axiosInstance = require("../config/config");
const handleError = require("../utils/errorHandler");
require("dotenv").config();

const getProducts = async () => {
  try {
    const response = await axiosInstance.get(`/products`, {
      params: {
        where: {
          accountId: process.env.ACCOUNT_ID,
        },
      },
    });
    console.log("Data from API of products:", response.data);
  } catch (error) {
    handleError(error, "products");
  }
};

const insertAndUpdateProduct = async (data) => {
  try {
    const response = await axiosInstance.post(`/productAndCategories`, data);
    console.log("Data from API of insert and update product: ");
    return { status: 200, message: response.data };
  } catch (error) {
    handleError(error, "insert and update product");
    return { status: error.response.status, message: "Internal Server Error: Failed to insert or update product"};
  }
};

module.exports = { getProducts, insertAndUpdateProduct };
