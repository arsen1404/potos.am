import './home.css'

import AnimleSection from "./sections/AnimleSection"
import MountainSection from "./sections/MountainSecton";
import { useState } from 'react';
export default function Home() {
   const [section,SetSecton] = useState();



    return(
        
        <div>
           
       
           <section className='section_one'>
                <div className="sizer">
                    <div className='s'>
                <h1>This Is Web Page For Photo</h1>
              <div className="box">
                <form className="search">
              
                    <input type="text" className="input" name="txt"  placeholder='Search' 

                    onChange={(e) => {
                        SetSecton(e.target.value)

                     }
                    } />
                </form>
             

               </div>
               </div>
           </div>
            </section> 
           {
            section == 'animle' ? <AnimleSection/> : ''
           

           }
           {
             section == 'mountain' ? <MountainSection /> : ""
           }
           

      
        </div>
    )
}