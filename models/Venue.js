// models/venue.js
module.exports = (sequelize, DataTypes) => {
    const Venue = sequelize.define('Venue', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      capacity: {
        type: DataTypes.INTEGER
      },
    }, {});
  
    Venue.associate = function(models) {
      Venue.hasMany(models.Event, { foreignKey: 'venueId', as: 'events' });
    };
  
    return Venue;
  };
  