import validator from "validator";

export const validate = {
  isEmpty: {
    validator: validator.isEmpty,
    message: (name) => `${name} is required`,
  },

  isAlphabetOnly: {
    validator: validator.isAlpha,
    message: (name) => `only alphabets a-z is required for ${name}`,
  },

  isNumber: {
    validator: function (value) {
      return !validator.isNumeric(value);
    },
    message: (name) => `only numbers 0-9 is required for ${name} field`,
  },
};
