const { classes } = require('../models/class.model');

let nextClassId = classes.length + 1;

exports.getAllClasses = () => classes;

exports.createClass = (payload) => {
  const newClass = {
    id: nextClassId++,
    ...payload
  };

  classes.push(newClass);
  return newClass;
};
