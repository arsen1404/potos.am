import React,{useState} from 'react'
import '../slider/Sliider.css'
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill} from 'react-icons/bs';
import {dataCarusel,dataAnimle,data} from "../data/data"

export default function Slider() {
    const [show,setShow] = useState(0);
  
    const nextSlide = () =>{
        setShow(show === dataCarusel.length -1 ? 0 : show + 1)
    }
    const prevSlide = () =>{
      setShow(show === 0 ? dataCarusel.length - 1 : show - 1)
    }

  return (
    <div className='carusel'>
        <BsFillArrowLeftCircleFill onClick={prevSlide}  className='arrow arrow-left'/>
        {dataCarusel.map((e,index) =>{
            return <img className={show === index ? "slide" : "slide slide-hidden"} src={e.href} alt={e.alt} key={index} />
        })}
        <BsFillArrowRightCircleFill onClick={nextSlide} className='arrow arrow-right'/>
        <b className='indecator'>{dataCarusel.map((e,index)=>{
            return <button className={show === index ? "clickme" : "clickme  clickme-inActive"} key={index}></button>
        })}</b>

    </div>
  )
}

