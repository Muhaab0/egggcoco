import React, { useState } from 'react'
import './services.css'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Vector from "../../assets/HomeVector.png"
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios'
import ReactPaginate from 'react-paginate'
import { useQuery } from "react-query"
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
  

export default function Services() {
  const [Opened, setOpened] = useState(false);
  const [isOpen, setIsOpen] = useState("");
  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 6;
  const pagesVisited = pageNumber * userPerPage
  const nodeRef = useRef(null);
  const duration = 500;


  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity:0
  }
  
  const transitionStyles = {
    entered:  { 
  opacity:1  },
    exiting:  { opacity:0,display:"none" },
    exited:  { opacity:0,display:"none" },
  };


      const { data , isLoading , isError ,error} = useQuery("service", async () => {
        return await axios.get("/api/service/all/").then((res) => res.data);
    });




  const displayService = data?.results
  .slice(pagesVisited , pagesVisited + userPerPage)
  .map(box => (
    <div key={box?.id}>

    <div className='serviceBox'  onClick={(e)=> {
      setIsOpen(box)
     setOpened(true)
     }}>
    <img src={box?.icon} alt="serviceImg" />
        <p className='serviceBoxtitle'>{box?.name}</p>
        <p className='serviceBoxDesc'>{box?.description}</p>
        <div className='serviceIcon'>
            <ChevronRightIcon className='serviceIconsvg'/>
        </div>
    </div>

    </div>
  ));
  
      const pageCount = Math.ceil(data?.results.length / userPerPage);
      const changePage = ({ selected }) => {
        setPageNumber(selected);
      }



  return (
    <div className='servicesContainer main-padding'>
    <div className='servicesHeader'>
        <h6 className='subHeader'>Our Services</h6>
        <h2 className='subTitleHeader'>The various services we provide to make your <br/> business more powerful</h2>
    </div>

    {
    isLoading ? (
        <div className='wait'>
        <p>Loading Please Wait...</p>
        </div>     
    )
      : ""
    }

    {
    isError ? (
          <div className='err'>
          <p>{error.message}</p>
          </div>
        ) : ""
    }


        <div className='serviceBoxes flex a-center j-center'>

        {displayService}
        <ReactPaginate 
        nextLabel={<ChevronRightIcon className='paginationIcon'/>}
        previousLabel={<ChevronLeftIcon className='paginationIcon'/>}
        pageCount={pageCount || 0}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        activeClassName={"paginationActive"}
      />

<Transition nodeRef={nodeRef} in={Opened} timeout={duration}>
        {state => (
        <div className={`servicesPopup`}
        style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
        <CloseIcon onClick={(e) => {
          setIsOpen("")
          setOpened(false) 
        }} className="servicesPopupIcon"/>
          <h2>{isOpen.name}</h2>
          <p>{isOpen.description}</p>
        </div>
            
        )}
      </Transition>
        </div>

    
    
        
    <div className='ServiceVector'>
      <img src={Vector} alt="vector" />
    </div>

    </div>
  )
}
