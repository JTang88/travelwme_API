export default (sequelize, Sequelize) => {
  const Comments = sequelize.define('comment', {
    post_id: {
      type: Sequelize.UUID,
      allowNull: false
    },
    content: {
      type: Sequelize.TEXT,
      required: true
    },
    commenter_username: {
      type: Sequelize.STRING,
      required: true
    },
    // commenter_email: {
      // type: Sequelize.STRING,
      // required: true
    // },
    status: {
      type: Sequelize.ENUM,
      values: ['approved', 'rejected', 'in review']

    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    
    deleted_at: Sequelize.DATE,
    // upvote counter -- cache column
    //downvote counter -- cache column
  });
  return Comments
}
