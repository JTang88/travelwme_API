import router from './routes';
import app from './app.js';

let port = 3001 || process.env.PORT;

//let's just test this get request below first
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api', router);

app.listen(port, () => console.log(`rest-server listening on port ${port}!`));

//module.exports = app;
