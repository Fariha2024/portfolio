
import React from 'react'
import styles from './hero.module.css';
import Image from 'next/image'

const HeroSection= ()=>{    
  return(
   


<div className={styles.herowrapper}>
<div className={styles.herotextcontainer}>
<h2 className={styles.nameHeading}>Fariha Nizam</h2>
<p className={styles.description}>
      Fariha Nizam is a skilled and dynamic web developer with a strong foundation in 
      front-end and back-end technologies. Specializing in modern frameworks like 
      Next.js and React, Fariha excels in building responsive, user-centric websites 
      and applications that prioritize both functionality and aesthetics.
    </p>
    <div className={styles.buttoncontainer}>Let's Get Started
</div>


 <div className={styles.heroimageContainer}>
 <Image
 src="/fariha.jpg" // Path to your image in the public folder
 alt="Fariha Nizam" // Alt text for accessibility
 width={416} // Set the desired width
 height={623} // Set the desired height
 className={styles.heroimagecontainer} // Apply the styles from CSS module
/>
</div>
</div>
</div>
)
}
export default HeroSection;








/*const HeroSection= ()=>{
  return(
   
<div className="relative w-[1280px] h-[700px] bg-[#080808] flex">


<div className="relative w-[1110px] h-[70px] bg-[#1B1B1B] backdrop-blur-sm" 
    style = {{ left: '85px' , top: '0px' }}>

<div className ="absolute w-[107.54px] h-[17px] flex div bg-slate-500 z-40 "
style= {{  left: '992' , top:'26' }}>
<ul className="flex social-media-links space 2">
  <li>
    <a
      href="https://www.facebook.com/profile.php?id=100039887306734&ref=page_internal"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} className="text-white w-[18] h-[17]" />
    </a>
  </li>
  <li>
    <a
      href="https://www.yelp.com/biz/spersch-studio-sydney"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="Yelp"
    >
      <FontAwesomeIcon icon={faYelp} className="text-white  w-[18] h-[17]" />
    </a>
  </li>
  <li>
    <a
      href="https://www.instagram.com/fariha_ahson/"
      target="_blank"
      rel="noopener noreferrer"
      className="social-icon"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} className="text-white  w-[18] h-[17]" />
    </a>
  </li>
</ul>
</div>      



<div
        className="absolute w-[538px] h-[247px]  flex flex-col items-start justify-between text-white bg-[#000000]  rounded-md text-left z-10"
        style={{ left: '180px', top: '201px' }} // Correctly positioned
      >
      
        <h2 className="text-4xl font-bold mt-2 ">Fariha Nizam</h2>
        <p className="mt-2 mr-12">
          Fariha Nizam is a skilled and dynamic web developer with a strong foundation in 
          front-end and back-end technologies. Specializing in modern frameworks like 
          Next.js and React, Fariha excels in building responsive, user-centric websites 
          and applications that prioritize both functionality and aesthetics.
        </p>
        
        {/* Button 
       {/*} <button className="w-[307.89px] h-[83px] mt-2 px-4 text-white font-semibold rounded-sm bg-[#3F8E00]">
  Let's Get Started
</button>
</div>

<div className= "absolute w-[750] h-[750] flex items-end justify-end z-10"
  style={{ left: '750px', top: '150px' }} // Correctly positionedsss
  >
   <Image
        src="/fariha.jpg" // Path to your image in the public folder
        alt="Fariha Nizam" // Alt text for accessibility
        width={416} // Set the desired width
        height={623} // Set the desired height
        className="absolute left-[-33px] top-[-110px]" // Adjust the positioning
      /> 
     
    </div>
    </div>
    </div>
)
}
export default HeroSection;*/









