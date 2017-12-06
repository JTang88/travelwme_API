import express from 'express';

const router = express.Router();

router.route('/test')
.get((req, res) => {
  res.send('this is just a test for route connection');
})

export default router;
