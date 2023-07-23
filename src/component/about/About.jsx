import "./about.css"
import { Link} from 'react-router-dom'
import { useState } from "react"
export default function About() {
    const [all,setAll] = useState(true);

    return(
      <div className="container">
        <div className="sizer">
            <div className="obshi">

                <div className="about">

                    <div className="row">

                        <div className="h1-text">
                            <h1 className="about-h1">About Our Construction Company</h1>
                            
                        </div>
                        <div className="about-p" onClick={() =>{setAll(!all)}}>
                                <p >
                                {all ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit..." :"Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nullam lectus erat consectetur eu sapien eget, rhoncus consectetur sem." }

                                </p>
                            </div>
                            
                            <div className="about-btn">
                                
                                    <li><Link to='/'>VIEW OUR WORK</Link></li>
                             
                            </div>
                    </div>

                </div>
           
           </div>
        </div> 
      </div>
    )
}