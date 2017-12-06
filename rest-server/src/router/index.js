import express from 'express';
//import all controller-functions from all controllers here 


const router = express.Router();

// this run was there just for test:
router.route('/test')
.get((req, res) => {
  res.send('this is just a test for route connection');
})


//create a route for /login


//create a route for /signup


//create a route for /createprofile


//create a route for /submitprofile


//create a route for /homepage


//create a route for /createtrip


//create a route for /searchtrip


//create a route for /viewprofile


//create a route for /updateprofile


//create a route for /mytrips


//create a route for /tripdetails (for organizer to view and manage one of its trip details)


//create a route for /viewtrip (for user to view trip details)




export default router;
