
import React from 'react';
import  HeroSection from './components/herosection'
import  LogoContainer from './components/footer'




const  HomePage = () => {
  return (
   
    
      
   <div className= "bg-black w-full min-h-screen flex flex-col  items-center justify-center"
    >
  <HeroSection />
  <LogoContainer />
  
   </div>
); 
};
export default HomePage;
