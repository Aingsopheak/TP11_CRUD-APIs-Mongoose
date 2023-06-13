const Items = require("../models/items");

const findById = async (id) => {
  try {
    return {
      success: true,
      data: {}
    };
  } catch (err) {
    return {
      success: false,
      error: err || 'error'
    }
  }
}

const findAll = async () => {
  // to do
}

const create = async (newItem) => {
  // to do
  const createdItem = await Items.create(newItem);
  return createdItem;
}

const update = async () => {
  // to do
}

const remove = async () => {
  // to do
}

module.exports = {
  findById,
  update,
  remove,
  findAll,
  create,
}