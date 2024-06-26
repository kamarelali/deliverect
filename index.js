const getCategories = require("./services/categories");
const getAllAllergens = require("./services/allergens");
const getAllChannels = require("./services/channels");
const getAccountsBrands = require("./services/brands");
const getLinkedAccount = require("./services/accounts");
const getLocation = require("./services/locations");
const {insertAndUpdateProduct,getProducts} = require("./services/products");
const billUpdate = require("./services/bill");
const getToken = require("./services/auth");
const productData = {
  accountId: "65e74ab1647e8dfc0903710a",
  locationId: "65e74ab671abafa17a6d5631",
  products: [
    {
      productType: 1,
      plu: "P-SATE",
      price: 450,
      name: "Chicken Sate",
      posProductId: "POS-001",
      posCategoryIds: ["SATE"],
      imageUrl:
        "https://storage.googleapis.com/ikona-bucket-staging/images/5ff6ee089328c8aefeeabe33/satay-62284e3c8c506f015be60184.jpeg",
      description: "8 pieces of Chicken Sate",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["MG-RICE", "MG-NOODLES"],
      productTags: [104, 109],
    },
    {
      productType: 3,
      plu: "MG-RICE",
      name: "Rice Selection",
      posProductId: "POS-002",
      subProducts: ["RICE-01", "RICE-02"],
      min: 0,
      max: 0,
    },
    {
      productType: 3,
      plu: "MG-NOODLES",
      name: "Noodles Selection",
      posProductId: "POS-003",
      subProducts: ["NOOD-01", "NOOD-02"],
      min: 0,
      max: 0,
    },
    {
      productType: 1,
      plu: "RICE-01",
      price: 450,
      name: "White Rice",
      posProductId: "POS-004",
      posCategoryIds: ["SD"],
      imageUrl:
        "https://storage.googleapis.com/ikona-bucket-staging/images/5ff6ee089328c8aefeeabe33/nasiputi-1610290140494.jpg",
      description: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["MG-SAUCES"],
    },
    {
      productType: 1,
      plu: "RICE-02",
      price: 450,
      name: "Yellow Rice",
      posProductId: "POS-005",
      posCategoryIds: ["SD"],
      imageUrl:
        "https://storage.googleapis.com/ikona-bucket-staging/images/5ff6ee089328c8aefeeabe33/Nasi-kuning-3-1610289726946.jpg",
      description: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["MG-SAUCES"],
    },
    {
      productType: 1,
      plu: "NOOD-01",
      price: 450,
      name: "Egg Noodles",
      posProductId: "POS-006",
      posCategoryIds: ["SD"],
      imageUrl:
        "https://storage.googleapis.com/ikona-bucket-staging/images/5ff6ee089328c8aefeeabe33/bamigoreng-1610289922969.jpg",
      description: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["MG-SAUCES"],
    },
    {
      productType: 1,
      plu: "NOOD-02",
      price: 450,
      name: "Ramen Noodles",
      posProductId: "POS-007",
      posCategoryIds: ["SD"],
      imageUrl:
        "https://storage.googleapis.com/ikona-bucket-staging/images/5ff6ee089328c8aefeeabe33/Mihoen-2-1-1610289870157.jpg",
      description: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["MG-SAUCES"],
    },
    {
      productType: 3,
      plu: "MG-SAUCES",
      name: "Choose a sauce",
      posProductId: "POS-008",
      imageUrl: "",
      multiMax: 2,
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
      subProducts: ["SAUCE-01", "SAUCE-02"],
      min: 0,
      max: 0,
    },
    {
      productType: 2,
      plu: "SAUCE-01",
      price: 0,
      name: "Sate Sauce",
      posProductId: "POS-009",
      imageUrl: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
    },
    {
      productType: 2,
      plu: "SAUCE-02",
      price: 0,
      name: "Hot Sauce",
      posProductId: "POS-010",
      imageUrl: "",
      deliveryTax: 9000,
      takeawayTax: 9000,
      eatInTax: 9000,
    },
  ],
  categories: [
    {
      name: "Sate Dishes",
      posCategoryId: "SATE",
    },
    {
      name: "Side Dishes",
      posCategoryId: "SD",
    },
  ],
};
async function fetchData() {
  const categories = await getCategories();
  console.log(categories);
  const channels = await getAllChannels();
  console.log(channels);
  const allergens = await getAllAllergens();
  console.log(allergens);
  const accountBrands = await getAccountsBrands();
  console.log(accountBrands);
  const linkedAccount =  await getLinkedAccount();
  console.log(linkedAccount)
  const location = await getLocation();
  console.log(location);
  const products = await getProducts();
  console.log(products);
  const bill = await billUpdate();
  console.log(bill);
  const response = await insertAndUpdateProduct(productData);
  console.log("response",response);
// const token = await getToken();
// console.log(token);
}

fetchData();
