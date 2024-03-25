// models/event.js
module.exports = (sequelize, DataTypes) => {
    const Event = sequelize.define('Event', {
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.TEXT
      },
      startTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
      endTime: {
        type: DataTypes.DATE,
        allowNull: false
      },
    }, {});
  
    Event.associate = function(models) {
      // associations can be defined here
      Event.belongsTo(models.User, { foreignKey: 'organizerId', as: 'organizer' });
      Event.belongsTo(models.Venue, { foreignKey: 'venueId', as: 'venue' });
      Event.hasMany(models.Ticket, { foreignKey: 'eventId', as: 'tickets' });
    };
  
    return Event;
  };
  