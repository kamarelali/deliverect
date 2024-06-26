const axiosInstance = require('../config/config');
require('dotenv').config();

const getToken = async () => {
  try {
    const response = await axiosInstance.post(`/oauth/token`, {
        "audience": "https://api.staging.deliverect.com",
        "grant_type": "token",
        "client_id":process.env.CLIENT_ID,
        "client_secret":process.env.CLIENT_SECRET
      });
    
    return {status:200, message: response.data};
  } catch (error) {
    console.error("Error fetching token:", error.message);
    if (error.response) {
      console.error(`API error status: ${error.response.status}`);
    }
    return {status:500, message: "Error fetching token"};
  }
};

module.exports = getToken;
