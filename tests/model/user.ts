import { faker } from '@faker-js/faker';

export interface User {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  ssn: string;
  username: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export function createUser(): User {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email({ firstName, lastName });
  const password = faker.internet.password({ length: 12, memorable: true });
  const phone = faker.phone.number({ style: 'national' }); // 10-digit phone
  const ssn = faker.string.numeric(9); // fake SSN
  const username = faker.internet.userName({ firstName, lastName });
  const street = faker.location.streetAddress();
  const city = faker.location.city();
  const state = faker.location.state();
  const zipCode = faker.location.zipCode('#####');

  return {
    firstname: firstName,
    lastname: lastName,
    email,
    password,
    phone,
    ssn,
    username,
    address: {
      street,
      city,
      state,
      zipCode,
    }
  };
}

