import {React , useState } from "react";
// import  ReactDOM  from "react-dom  ";
// import Pet from "./components/Pet"
import {createRoot} from "react-dom/client"
import { BrowserRouter , Routes , Route, Link } from "react-router-dom";
import SearchParams from "./pages/SearchParams";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import AdoptedPetContext from "./contexts/AdobtedPetContext"


const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime : Infinity , 
            cacheTime : Infinity
        }
    }
});



// App Component 
const App = ()=>{
    // const [adoptedPet , setAdoptedPet] = useState(null);
    const adoptedPet = useState(null);
   
    return  (
        <BrowserRouter>
            <AdoptedPetContext.Provider value={adoptedPet}>
            <QueryClientProvider client={queryClient}>
                <header>
                    <Link to="/" >Adopt Me ..!</Link>
                </header>

                {/* <Pet name="Luna" animal="dog" breed="Havanase" />
                <Pet name="Pepper" animal="bird" breed="Cockatiel" />
                <Pet name="Doink" animal="cat" breed="Mix" /> */}
                <Routes>
                    <Route path="/" element={<SearchParams />}/>
                    {/* <Route path="/" element={<SearchParams adoptedPet={adoptedPet} />}/> */}
                    <Route path="/details/:id" element={<Details />}/>
                    {/* <Route path="/details/:id" element={<Details setAdoptedPet={setAdoptedPet} />}/> */}
                    <Route path ="*" element={<NotFound />} />
                </Routes>
                <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
            </AdoptedPetContext.Provider>

        </BrowserRouter>


    )};
// Get Root Elemet 
const container = document.getElementById('root');
// create a Root 
// const root = ReactDOM.createRoot(container); 
const root = createRoot(container); 
//Render 
root.render(<App />);

