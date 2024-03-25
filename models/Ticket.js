module.exports = (sequelize, DataTypes) => {
  const Ticket = sequelize.define(
    "Ticket",
    {
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("available", "sold"),
        allowNull: false,
        defaultValue: "available",
      },
    },
    {}
  );

  Ticket.associate = function (models) {
    Ticket.belongsTo(models.Event, { foreignKey: "eventId", as: "event" });
    Ticket.belongsTo(models.User, { foreignKey: "userId", as: "user" });
  };

  return Ticket;
};
