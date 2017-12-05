import express from 'express';

const app = express()

let port = 3001 || process.env.PORT;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`rest-server listening on port ${port}!`))//