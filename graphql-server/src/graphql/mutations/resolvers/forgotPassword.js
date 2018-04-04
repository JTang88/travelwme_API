import bcrypt from 'bcrypt';
import casual from 'casual';
import nodemailer from 'nodemailer';

export default {
  forgotPassword: async (parent, { email }, { models }) => {
    console.log('this is email in forgotPassword: ', email)
    const user = await models.User.findOne({ where: { email }}); 
    if(!user) {
      throw new Error('No such user or email exist');
    }
    const { password } = casual;
    const cryptedPassword = await bcrypt.hash(password, 12);

    await models.User.update(
      { password: cryptedPassword }, 
      { where: { email } },
    );
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'travelwmeapp@gmail.com',
        pass: 'jt111588'
      }
    });
    const mailOptions = {
      from: 'travelwmeapp@gmail.com',
      to: email,
      subject: 'Travelwme temporary password',
      text: `Hello Dear ${user.username}, this is your temporary password: ${password}` 
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
    return 'Your temporary passoword has been sent'
  }    
};

