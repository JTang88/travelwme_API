import router from './routes';
import app from './app.js';

let port = 3001 || process.env.PORT;

app.use('/api', router);

app.listen(port, () => console.log(`rest-server listening on port ${port}!`));

