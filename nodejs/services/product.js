
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
  const {id,title, imageUrl, desc} = req.body;
  try {
    const doc = await Products.findById(id);
    doc.title = title;
    doc.desc = desc;
    doc.imageUrl = imageUrl;
    await doc.save();
    res.json({ success: true, data: doc });
  } catch (error) {
    res.json({ success: false, error: error });
  }
}

const remove = async () => {
  // to doF
  const { id } = req.params;
  console.log(id)
  try {
    const deleting = await Products.deleteOne({ _id: id });
    console.log("deleting", deleting);
    res.json({ success: true, data: deleting });
  } catch (error) {
    res.json({ success: false, error: error });
  }
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create
}