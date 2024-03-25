module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // Diğer alanlarınız burada tanımlanabilir
    }, {});
  
    User.associate = function(models) {
      // associations can be defined here
      User.hasMany(models.Event, { foreignKey: 'organizerId', as: 'events' });
    };
  
    return User;
  };