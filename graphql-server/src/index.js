import app from './app';
import models from '../../db';

const port = 3001 || process.env.PORT;

models.sequelize.sync().then(() => app.listen(port, () => console.log(`rest-server listening on port ${port}!`)));

