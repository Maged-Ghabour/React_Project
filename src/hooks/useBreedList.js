import { useQuery } from '@tanstack/react-query';
// import axios from "axios";
// import {useCallback, useEffect , useState } from "react";

const fetchBreedList = async ({ queryKey }) => {
  const [, animal] = queryKey;
  if (!animal) return [];
  // return axios.get(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`);
  const res = await fetch(
    `https://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  return res.json();
};

// const localCache = {}
const useBreedList = (animal) => {
  return useQuery(['breeds', animal], fetchBreedList);

  // const [breedList , setBreedList] = useState([]) ;

  // const fetchBreadList = useCallback(async() =>{
  //     const res = await fetch(`https://pets-v2.dev-apis.com/breeds?animal=${animal}`)
  //     const json = await res.json()
  //     localCache[animal] = json.breeds || [];
  //     setBreedList(localCache[animal]);
  // } , [animal]);

  //     useEffect(() =>{
  //         if(!animal){
  //             setBreedList([])
  //         }else if(localCache[animal]){
  //             setBreedList(localCache[animal])
  //         }else{
  //             fetchBreadList()
  //         }
  //     } ,[animal ,fetchBreadList])
  //     return breedList;
};

export default useBreedList;
