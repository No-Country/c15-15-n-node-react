const { faker } = require('@faker-js/faker');

function newPassword() {
  let password;
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/; // Your regex pattern

  do {
    password = faker.internet.password();
  } while (!pattern.test(password));

  return password;
}

module.exports = { newPassword };

// const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;: Esta línea define un patrón de expresión regular que la contraseña debe cumplir. El patrón requiere que la contraseña tenga al menos una letra minúscula ([a-z]), una letra mayúscula ([A-Z]), un dígito (\d) y tenga una longitud de al menos 6 caracteres ({6,}). Los caracteres permitidos son letras mayúsculas y minúsculas, dígitos y los caracteres especiales @$!%*?&.
