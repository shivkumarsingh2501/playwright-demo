export function getRandomUser() {
  const random = Math.floor(Math.random() * 100000);

  return {
    firstName: `Shiv${random}`,
    lastName: `Singh${random}`,
    email: `shiv${random}@testmail.com`,
    phone: `9${Math.floor(100000000 + Math.random() * 900000000)}`,
    password: 'Password123!'
  };
}
// module.exports = { getRandomUser };
