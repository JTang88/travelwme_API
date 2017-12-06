import express from 'express';
import router from './router';

const app = express()

let port = 3001 || process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', router);

app.listen(port, () => console.log(`rest-server listening on port ${port}!`));