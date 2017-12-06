import express from 'express';
//import all controller-functions from all controllers here 

const router = express.Router();

// this run was there just for test:
router.route('/test')
.get((req, res) => {
  res.send('this is just a test for route connection');
})


//create a route for user/login


//create a route for user/signup


//create a route for user/createprofile


//create a route for user/submitprofile


//create a route for user/homepage


//create a route for trip/create


//create a route for trip/search


//create a route for user/viewprofile


//create a route for user/updateprofile


//create a route for trip/mytrips


//create a route for trip/tripdetails (for organizer to view and manage one of its trip details)


//create a route for trip/viewtrip (for user to view trip details)



export default router;
