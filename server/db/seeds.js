use hotel;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "John Boyle",
    email: "john.boyle@gmail.com",
    status: true
  },
  {
    name: "Peter Gemmell",
    email: "peter.gemmell@gmail.com",
    status:false
  }
]);
