import app from './app';

const port = 3001 || process.env.PORT;

app.listen(port, () => console.log(`rest-server listening on port ${port}!`));
