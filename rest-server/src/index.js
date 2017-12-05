//const express = require('express');

import express from 'express';
//import sum from "./sum.js"


const app = express()

let port = 3001

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`rest-server listening on port ${port}!`))//