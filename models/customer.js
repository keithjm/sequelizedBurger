module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    customer_name: DataTypes.STRING
  });

  return Customer;
};
