
import styles from './footer.module.css'


const Footer = () => {
  return (
   
      <div className={styles.footercontainer1}>
        {/* Logo 1 */}
        <div className={styles.logo1}>
        <div className={styles.borderwidth}>
          <img src="/clickup-logo1-0D92705A07-seeklogo.com.png" alt="Logo 1" className={styles.logosize1} />
        </div>
        </div>  

       {/* Logo 2 */}
        <div className={styles.logo2}>
        <div className="{styles.borderwidth}">
          <img src="\dropbox.png" alt="Logo 2" className={styles.logosize2} />
        </div>
        </div>


        {/* Logo 3 */}
        <div className={styles.logo3}>
        <div className={styles.borderwidth}>
        <img src="\paycheckx3.png" alt="Logo 3" className="{logosize3}" />
          </div>  
        </div>
        

        {/* Logo 4 */}
        <div className={styles.logo4}>
        <div className={styles.borderwidth}>
          <img src="\elastic 4 72x28.png" alt="Logo 4" className={styles.logosize4} />
        </div>
       </div>  



        <div className={styles.logo5}>
        <div className={styles.borderwidth}>
          <img src="\Stripe-Logo5 25x34.png" alt="Logo 5"  className= {styles.logosize5} />
        </div>
       </div>  
</div> 
    
      
  );
};

export default Footer;









 