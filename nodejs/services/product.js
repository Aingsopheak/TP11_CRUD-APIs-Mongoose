
const Products = require("../models/products")

var mongoose = require('mongoose');

const findById = async (id) => {
  const products = await Products.aggregate([
    {
      "$match": {
        _id: mongoose.Types.ObjectId(id),
      }
    },
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    }
  ])

  if (!products?.length)
    return null

  return products[0]
}

const findAll = async () => {
  const products = await Products.aggregate([
    {
      $lookup: {
        from: "prices",
        localField: "_id",
        foreignField: "product",
        as: "prices"
      }
    }
  ])

  if (!products?.length)
    return []

  return products
}

const create = async (newProduct) => {
  const createdProduct = await Products.create(newProduct);
  return createdProduct;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to doF
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}