const ProductModel = require("../models/product");

const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObject = {};

  // By Using Regex we can go for Similar Options also
  // If i write APP its going to search for all the words which have "APP" in it
  if (company) {
    queryObject.company = { $regex: company, $options: "i" };
  }

  if (featured !== undefined) {
    // Convert to boolean
    // Condition Check
    queryObject.featured = featured.toLowerCase() === "true";
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let apiData = ProductModel.find(queryObject);
  if (sort) {
    let sortFix = sort.split(",").join(" ");
    apiData = apiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    apiData = apiData.select(selectFix);
  }

  let page = Number(req.query.page) || 1;
  let limit = Number(req.query.limit) || 10;
  let skip = (page - 1) * limit;

  // page=2;
  // limit=10
  // Skip =1*10=10
  apiData = apiData.skip(skip).limit(limit);

  const data = await apiData;
  console.log("request ", req.query);
  res.status(200).json({ data, nbHits: data.length });
};

const getAllProductsTesting = async (req, res) => {
  // "price" its ascending Order
  //  "-price" its descending Order
  const data = await ProductModel.find(req.query).sort("price");
  res.status(200).json(data);
};

module.exports = { getAllProducts, getAllProductsTesting };
