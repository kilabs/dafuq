module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: 3,
          msg: "Name must be atleast 3 characters in length"
        },
        // fn: function(val) {
        //   if (val !== "mustbethis") throw new Error("Custom validation failed");
        // }
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: 3,
          msg: "Name must be atleast 3 characters in length"
        },
        // fn: function(val) {
        //   if (val !== "mustbethis") throw new Error("Custom validation failed");
        // }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length"
        },
        isEmail: {
          msg: "Email address must be valid"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: 3
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Task)
      },
      findUser: function() {
        return User.findAll()
      }
    }
  })

  return User
}