import "./animle.css"
import { dataAnimle } from "../../data/data"

export default function AnimleSection() {

    return(
        <section className="section_animle">
        <div className="sizer">
            <div className='animle'>
                <h2 id="text">Photos Animals</h2>
                <div className="Cards">

                    {
                       dataAnimle.map((e) =>{
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