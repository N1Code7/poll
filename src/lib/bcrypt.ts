const bcrypt = require("bcrypt");

export default function hashPassword(password: string, saltRounds = 10) {
  let hashedPassword = "";
  bcrypt.hash(password, saltRounds, (err, encrypted) => {
    if (err) {
      throw new Error("Something went wrong in the hashing process!");
    }
    hashedPassword = encrypted;
  });
  return hashedPassword;
}
