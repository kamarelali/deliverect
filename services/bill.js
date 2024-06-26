const axiosInstance = require("../config/config");
const handleError = require("../utils/errorHandler");
require("dotenv").config();

const billUpdate = async () => {
  try {
    const response = await axiosInstance.post(
      `/updateBill/${process.env.LOCATION_ID}`,
      {
        params: {
          where: {
            accountId: process.env.ACCOUNT_ID,
          },
        },
        data: {
          id: "R29532LF",
          status: 20,
          tableId: "T1",
          createdAt: "2023-08-18T14:49:39.379000Z",
          lastUpdated: "2023-08-18T14:49:39.379000Z",
          closedAt: "2023-08-18T14:49:39.379000Z",
          decimalDigits: 2,
          discountTotal: 100,
          discounts: [
            {
              name: "Our company birthday discount",
              total: 100,
            },
          ],
          surchargesTotal: 200,
          surcharges: [
            {
              name: "Take-away",
              total: 200,
            },
          ],
          taxTotal: 48,
          taxes: [
            {
              name: "6% VAT",
              total: 48,
            },
          ],
          total: 800,
          totalDue: 400,
          items: [
            {
              plu: "PLU-01",
              name: "My first product",
              quantity: 1,
              price: 300,
            },
            {
              plu: "PLU-02",
              name: "My second product",
              quantity: 1,
              price: 400,
              subItems: [
                {
                  plu: "PLU-03",
                  name: "My modifier",
                  quantity: 1,
                  price: 0,
                },
              ],
            },
          ],
          payments: [
            {
              name: "Cash",
              total: 400,
            },
          ],
        },
      }
    );
    console.log("Response from API:");
    return { status: 200, message: response.data };
  } catch (error) {
    handleError(error, "bill update");
    return {
      status: error.response.status,
      message: "Internal Server Error: Failed to insert or update product",
    };
  }
};

module.exports = billUpdate;
