import React, { useState } from 'react'
import "./faq.css"
import MinimizeIcon from '@mui/icons-material/Minimize';
import AddIcon from '@mui/icons-material/Add';
import ReactPaginate from 'react-paginate';
import Vector from "../../assets/YellowVector.png";
import Vector2 from "../../assets/BlueVector.png";
import axios from 'axios';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useQuery } from 'react-query';
import { Transition } from 'react-transition-group';
import { useRef } from 'react';
  



export default function Faq() {
    const [isOpen, setIsOpen] = useState(false);
    const [Opened, setOpened] = useState(false);
    const [Current, setCurrent] = useState(0);
    const [pageNumber, setPageNumber] = useState(0)
    const userPerPage = 6;
    const pagesVisited = pageNumber * userPerPage
    const nodeRef = useRef(null);
  const duration = 600;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity:0
  }
  
  const transitionStyles = {
    entered:  { 
  opacity:1  },
    exiting:  { opacity:0},
    exited:  { opacity:0 },
  };

  

    const Faq = (i) => {
        if (Current === i) {
            setIsOpen(current => !current)
            setOpened(Current => !Current)
        } }




        const { data , isLoading , isError ,error} = useQuery("faqs", async () => {
          return await axios.get("/api/FAQs/").then((res) => res.data);
      });


        const displayUsers = data?.results
        .slice(pagesVisited , pagesVisited + userPerPage)
        .map((fq,i) => (

          <div className='faq' key={i}>

          <div className='content'>

      <div className='sub flex' onClick={ () =>{
       Faq(i);
       setCurrent(i);
      }}>
      <div className="icons">
          
              {isOpen && Current === i ? <MinimizeIcon /> : <AddIcon />}
          
      </div>
      <p className='faqSubTitle'>
      {fq.quote}
      </p>
      </div>
      
<Transition nodeRef={nodeRef} in={Opened} timeout={duration}>
        {state => (
      <div className={`title ${isOpen && Current === i ? "" : "none"}`}         style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>{fq.answer}</div>
                    
                    )}
      </Transition>
          </div>
          </div>

          ));

          
  const pageCount = Math.ceil(data?.results.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }

  return (
    <div className='faqContainer main-padding'>
        <div className="subHeader">Frequently Ask Question</div>
    <div className="subTitleHeader">Some of our frequently asked questions</div>
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


            {
              displayUsers
            }

        <ReactPaginate 
        nextLabel={<ChevronRightIcon className='paginationIcon'/>}
        previousLabel={<ChevronLeftIcon className='paginationIcon'/>}
        pageCount={pageCount || 0}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        activeClassName={"paginationActive"}
      />

            <div className='FaqVector'>
      <img src={Vector} alt="vector" />
    </div>
    <div className='FaqVector2'>
      <img src={Vector2} alt="vector" />
    </div>

    </div>
  )
}
