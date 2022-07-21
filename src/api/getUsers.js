const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const users = await fetch(`${BASE_URL}/users`)
    .then(response => response.json());

  return users;
};
