import { useEffect, useState } from 'react'
import './contact.css'

export default function Contact() {
     const [name,setName] = useState('')
     const [mail,setMail] = useState('')
     const [message,setMessage] = useState('')
     const [send,setSend] = useState([
        {
            id : Math.floor(Math.random() * 100),
            name: "Arsen",
            mail: 'arsen.hakobyan@mail.com',
            message:"Home pagei search bajnum grel <animle> kam <mountain> ardyunqy tesnelu hamar",

        },
     ])
     
 
    return(
        <>
        
     <section className='contact'>
        <div className='sizer'>
            <form onSubmit={(e) =>{
                e.preventDefault()
            }}>
                <label>Name</label>
                
                <input type='text' onChange={(e) => {
                      setName(e.target.value)  
                }} />

                <label>Your Mail</label>

                <input type='email' onChange={(e) => {
                      setMail(e.target.value)  
                }}  />

                <label>Message</label>
                
                <input className='textarea'
                onChange={(e) => {
                      setMessage(e.target.value)  
                }}  />

                <button id='but' onClick={() => {
                        setSend([
                            ...send,
                            {
                                id : Math.floor(Math.random() * 100),
                                name: name,
                                mail: mail,
                                message:message,

                            },
                            
                        ]);
                       
                }}
                
                >Send</button>
           </form> 
               
        </div>
        
     </section>
      <section className='coments'>
              {
                            send.map((e) =>{
                                return(<div className='com' key={e.id}>
                                    <div className='id'>{e.id}.</div>
                                    <div className='name'>{e.name}</div>
                                    <div className='mail'>{e.mail}</div>
                                    <p>{e.message}</p>
                                </div>)
                                
                            })
                        }
     </section> 
     </>
     
    )
}