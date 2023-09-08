
import './App.css';
import CommunitiesCard from './components/communities_card';
import ServiceCarousel from './components/service_carousel';
import { Communities_data } from './constants/index';



function App() {
  return (
    <div className="App  m-2 mt-20  lg:p-16 md:m-16 ">
   
      <p className="font-semibold leading-[51px] text-[#887C68] text-[28px] uppercase tracking-wide mx-6 px-6" >
       
        Communities we manage
      </p>
      <CommunitiesCard/>

      <p className="font-semibold leading-[51px] text-[#887C68] text-[28px] uppercase tracking-wide mt-20 mx-6 px-6" >

        OUR SERVICES
      </p>
      <ServiceCarousel items={Communities_data}/>
   
    </div>
  );
}

export default App;
