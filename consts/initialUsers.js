export const initialUsers = [
  {
    name: {
      first: "John",
      middle: "A.",
      last: "Doe"
    },
    phone: "1234567890",
    email: "admin@example.com",
    password: "securePassword1",
    image: {
    },
    address: {
      state: "California",
      country: "USA",
      city: "Los Angeles",
      street: "Main Street",
      houseNumber: 123,
      zip: "90001"
    },
    isAdmin: true,
    isBusiness: false,
  },
  {
    name: {
      first: "Jane",
      middle: "",
      last: "Smith"
    },
    phone: "0987654321",
    email: "business@example.com",
    password: "securePassword2",
    image: {
      url: "https://example.com/business.jpg",
      alt: "Business Image"
    },
    address: {
      state: "Texas",
      country: "USA",
      city: "Houston",
      street: "Market Street",
      houseNumber: 456,
      zip: "77001"
    },
    isAdmin: false,
    isBusiness: true,
  },
  {
    name: {
      first: "Emily",
      middle: "L.",
      last: "Brown"
    },
    phone: "5678901234",
    email: "user@example.com",
    password: "securePassword3",
    image: {
      url: "https://example.com/user.jpg",
      alt: "User Image"
    },
    address: {
      state: "New York",
      country: "USA",
      city: "New York City",
      street: "Broadway",
      houseNumber: 789,
      zip: "10001"
    },
    isAdmin: false,
    isBusiness: false,
  }
];