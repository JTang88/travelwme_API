import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import _ from 'lodash';

export default {
  login: async (parent, { email, password }, { models }) => {
    const user = await models.User.findOne({ where: { email }}); 
    if(!user) {
      throw new Error('No such user or email exist');
    }
    const valid = await bcrypt.compare(password, user.password); 
    if(!valid) {
      throw new Error('invalid password!!');
    }
    const token = await jwt.sign({
      user: _.pick(user, 'id'),
    }, process.env.TOKEN_SECRET , { expiresIn: '1h' })

    return token;
  }  
};