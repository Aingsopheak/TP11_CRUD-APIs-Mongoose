var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();
const categoryService = require('../services/category');

router.get('/id/:id', auth.ensureSignedIn, async function (req, res) {
  const { id } = req.params;
  res.json("tests");
})

// Categorized items
router.get('/categorized-items', async (req, res) => {
  const result = await categoryService.findCategorizedItems()
  res.json(result);
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const { name, desc, imageUrl } = req.body;
  const result = await categoryService.create({ name, desc, imageUrl })
  res.json(result);
})

// all categories
router.get('/all', (req, res) => {
  // to do
  res.json({});
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  res.json({});
})

module.exports = router