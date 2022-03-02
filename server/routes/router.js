const express = require('express');
const router = express.Router();
const {apples, oranges} = require('../controllers/exampleController');


// const apples = (req, res, next) => {
//     try {
//         const appleMessage = 'i love apples';
//         req.body.apples = appleMessage;
//         next()
//     } catch (error) {
//         console.log(error);
//         next();
//     }
// }


router.get('/axiosTrial', apples, oranges, (req, res) => {
  console.log(res.fruit)
	return res.status(200).send(res.fruit);
  });

// router.post('/login', (req, res) => {
// 	return res.status(200).json({message: 'You successfully logged in!'});
//   });

// router.get('/inventory', retrieveInventory, (req, res) => {
// 	return res.status(200).send(res.inventory);
// })

// router.get('/season', seasonInfo, (req, res) => {
// 	return res.status(200).send(res.season);
// })

module.exports = router;