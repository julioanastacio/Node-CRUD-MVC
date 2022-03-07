let ProductModel = {
  name: { type: String, required: true, max: 100 },
  value: { type: Number, required: true },
};

module.exports = ProductModel;
