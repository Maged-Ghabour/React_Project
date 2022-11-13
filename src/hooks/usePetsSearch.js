import { useQuery } from '@tanstack/react-query';

const fetchPets = async ({ queryKey }) => {
  const [, { animal, location, breed }] = queryKey;
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  );
  // const json = await res.json();
  // return json.pets;

  return res.json();
};

//   searchParams => {animal , location , breed }
const usePetsSearch = (searchParams) => {
  return useQuery(['search-pets', searchParams], fetchPets);
};

export default usePetsSearch;
