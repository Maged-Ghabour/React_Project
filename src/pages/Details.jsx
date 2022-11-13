import { useState, useContext } from 'react';

// import { useQuery } from '@tanstack/react-query';
import { useParams, useNavigate  } from 'react-router-dom';
import Loader from '../components/Loader';
import usePet from '../hooks/usePet';
import Caursoal from '../components/Caursoal';
import Modal from '../components/Modal';
import AdoptedPetContext from '../contexts/AdobtedPetContext';

// import Counter from '../components/Counter';

const Details = () => {
  const [showModal, setShowModal] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [,setAdoptedPet] = useContext(AdoptedPetContext);
  let petQuery = usePet(id);


  let pet = petQuery?.data?.pets[0];

  // const [pet, setPet] = useState(null);
  // const [isLoading , setIsLoading] =useState(false);
  // const [error , setError] = useState(null);

  // useEffect(() => {

  //   setIsLoading(true);
  //   const fetchPet = async () => {
  //   try {
  //     const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);
  //     const json = await res.json();
  //     const currentPet = json.pets[0];
  //     setPet(currentPet);

  //   } catch (error) {
  //     setError(error.message);
  //   }

  //   setIsLoading(false);

  //   };
  //   fetchPet();
  // }, [id]);

  return (
    <div className="details">
      {petQuery.isLoading && (
        <div className="loader-container">
          <Loader />
        </div>
      )}




      
      {petQuery.isError && <h2>{petQuery.error.message}</h2>}
      {petQuery.data && (
        <div>
          {/* <Counter /> */}
          <Caursoal images={pet.images} />
          <h1>{pet.name}</h1>
          <h2>{`${pet.animal} - ${pet.breed} - ${pet.city} - ${pet.state}`}</h2>
          <button onClick={() => setShowModal(true)}>Adobt {pet.name}</button>
          <p>{pet.description}</p>
        </div>
      )}
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Back
      </button>
      {showModal && (
        <Modal>
          <div>
            <h1>Would you like to adapt me {pet.name}</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate("/")
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Details;
