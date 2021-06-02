require('dotenv').config();
const router = require('express').Router();
const stripe = require('stripe')(`${process.env.STRIPE_SECRET_KEY}`);

router.post('/checkout', async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: req.body.email,
      source: req.body.id
    });
    const charge = await stripe.charges.create({
        amount: req.body.amount * 100,
        currency: "usd",
        customer: customer.id,
        description: `Purchased the ${req.body.name}`
      });
    res.status(200).send("Success");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;