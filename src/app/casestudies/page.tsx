
import React from 'react'
import styles from './case.module.css'
import Image from 'next/image'


const CaseStudy = () => {
return (  
   // Parent div with background color and font color
   <div className="bg-[#f8f8f8] text-[#333333] w-full min-h-screen flex flex-col items-center">

  <div className={styles.wrapper}>
  <div className={styles.wrappernameheading}>
  <h2>your web development project
  </h2>
  <div className={styles.wrapperdescription}>
  <p>
  To simplify your search, I’ve put together a list of 8 unique web development solutions and case studies that can serve as inspiration for your upcoming web projects. Half of them come from our talented website design & development team at Netguru, and the other four from major brands on the market.
  </p>
  </div>
  </div>
 
 <div className={styles.textcontainer}>
<div className={styles.herotextcontainer}>
<h2 className={styles.nameHeading}>Supercharge your product data</h2>
<p className={styles.description}>
The first web design case study I’d like to discuss, who came to us for a simple landing page redesign. However, after the first few meetings, it became clear that the project scope must be broadened. The new goal was to expand website, enhance the UX, rethink the application process, update the UI, and add a bit more character through illustrations.
</p>
<div className={styles.buttoncontainer}>view case study
 </div>
 </div>
 
 
 <div className={styles.heroimageContainer}>
 <Image
 src="/casest(1).jpg" // Path to your image in the public folder
 alt="case study" // Alt text for accessibility
 width={445} // Set the desired width
 height={300} // Set the desired height
 className={styles.heroimagecontainer} // Apply the styles from CSS module
/>
</div>
</div>










<div className={styles.textcontainer2}>
<div className={styles.herotextcontainer2}>
<h2 className={styles.nameHeading2}>Supercharge your product data</h2>
<p className={styles.description2}>
The first web design case study I’d like to discuss, who came to us for a simple landing page redesign. However, after the first few meetings, it became clear that the project scope must be broadened. The new goal was to expand website, enhance the UX, rethink the application process, update the UI, and add a bit more character through illustrations.
</p>
<div className={styles.buttoncontainer2}>view case study
</div>
</div>

<div className={styles.heroimageContainer2}>
 <Image
 src="/casest2.jpg" // Path to your image in the public folder
 alt="case study" // Alt text for accessibility
 width={445} // Set the desired width
 height={300} // Set the desired height
 className={styles.heroimagecontainer2} // Apply the styles from CSS module
/>
</div>
</div>




</div>
</div>
)
}
export default CaseStudy;







