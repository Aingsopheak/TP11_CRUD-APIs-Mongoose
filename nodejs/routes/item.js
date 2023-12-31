var express = require('express');
const joiValidation = require('../middlewares/joiValidation');
const auth = require('../middlewares/auth');
const { } = require('../schemas');
var router = express.Router();

const itemService = require('../services/item');

router.get('/:id', auth.ensureSignedIn, async function (req, res, next) {
  const { id } = req.params;
  res.json({});
})

router.post('/create', auth.ensureSignedIn, async (req, res, next) => {
  const { name, desc, category } = req.body;
  const result = await itemService.create({ name, desc, category })
  res.json(result);
})


// all itens
router.get('/all', async (req, res) => {
  // to do
  const result = await itemService.findAll();
  res.json(result);
})

router.post('/update', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await itemService.update(req,res);
  res.json(result);
})

router.post('/delete', auth.ensureSignedIn, async (req, res, next) => {
  // to do
  const result = await itemService.remove(res,req);
  res.json(result);
})

module.exports = router