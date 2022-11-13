import { useState , useContext } from 'react';
import useBreedList from '../hooks/useBreedList';
import Results from '../components/Results';
import usePetsSearch from '../hooks/usePetsSearch';
import AdoptedPetContext from '../contexts/AdobtedPetContext';
import Loader from '../components/Loader';

import ErrorBoundary from '../components/ErrorBoundary';

const ANIMALS = ['bird', 'cat', 'dog', 'rabbit', 'repitle'];

const SearchParams = () => {
  // const [location, setLocation] = useState("");
  // const [animal, setAnimal] = useState("");
  // const [breed, setBreed] = useState("");
  // const [pets, setPets] = useState([]);

  const [searchParams, setSearchParams] = useState({
    location: '',
    animal: '',
    breed: '',
  });

  const [adoptedPet] = useContext(AdoptedPetContext);
  const breedsQuery = useBreedList(searchParams.animal);
  const breeds = breedsQuery?.data?.breeds ?? [];

 
  const petsQuery = usePetsSearch(searchParams);
  const pets = petsQuery?.data?.pets ?? [];


  // useEffect(()=>{
  //   console.log("Maged");
  // }, [animal])

  // useEffect(() => {

  //   // console.log({animal , location ,breed});
  //   fetchPets();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const animal = formData.get('animal');
          const breed = formData.get('breed');
          const location = formData.get('location');
          setSearchParams({ animal, location, breed });
        }}
      >


       {adoptedPet && (
        <div className='pet image-container'>
          <img src={adoptedPet.images[0]} alt={adoptedPet.name} />
        </div>

       )}
        <label htmlFor="location">
          Location
          <input
            id="location"
            // value={location}
            // onChange={(e) => setLocation(e.target.value)}
            placeholder="Location"
            name="location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
            onChange={(e) => {
              setSearchParams({
                ...searchParams,
                animal: e.target.value,
                breed: '',
              });
            }}
            // value={animal}
            // onChange={(e) => {
            //   setAnimal(e.target.value);
            //   setBreed("");
            // }
            // }
          >
            <option />
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            disabled={!breeds.length}
            name="breed">        
            <option />
            {breeds.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>

      {petsQuery.isLoading && (
        <div className="search loader-container">
          <Loader />
        </div>
      )}
      {petsQuery.isError && <span>{petsQuery.error}</span>}
      {petsQuery.data && (
        <ErrorBoundary>
          <Results pets={pets} />
        </ErrorBoundary>
      )}
    </div>
  );
};

export default SearchParams;
   