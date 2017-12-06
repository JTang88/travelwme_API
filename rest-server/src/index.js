import express from 'express';
import router from './router';

const app = express()

let port = 3001 || process.env.PORT;

console.log("if you see what this log you will know if .env is still working ======", process.env.TOKEN_SECRET)

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', router);

app.listen(port, () => console.log(`rest-server listening on port ${port}!`));