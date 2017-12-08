const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://vhqwwvao:AJGKf_dXDkbDEebQS46mLMYrAbeGs_H9@baasu.db.elephantsql.com:5432/vhqwwvao');


const db = {
  User: sequelize.import('./models/users')
}
  
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
// db.Sequelize = Sequelize;

//export default db;

module.export = db;