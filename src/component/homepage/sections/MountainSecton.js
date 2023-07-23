import "./mountain.css"

import { data } from "../../data/data"

export default function MountainSection() {
    
    return(
        <section className="section_two">
            <div className="sizer">
                <div className='mount'>
                    <h2>Photos Mountains</h2>
                    <div className="Cards">

                        {
                           data.map((e) =>{
                            return(<div key={e.id} className='Card'>
                             <img className='img' key={e.id}  src={e.href} alt={e.alt} /> 
                            </div>)
                            
                           })
                        }
                       
                    </div>
                </div>
            </div>
        </section>
    )
}