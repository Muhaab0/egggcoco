import axios from 'axios'
import React, { useState } from 'react'
import "./latestProjects.css"
import ReactPaginate from 'react-paginate';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useQuery } from 'react-query';

export default function LatestProjects() {
  const [pageNumber, setPageNumber] = useState(0)
  const userPerPage = 6;
  const pagesVisited = pageNumber * userPerPage


  
  const { data , isError , isLoading , error } = useQuery("works", async () => {
    return await axios.get("/api/previous-work/all/").then((res) => res.data);
});


  
  const displayProj = data?.results
  .slice(pagesVisited , pagesVisited + userPerPage)
  .map(proj => (

    <div className={`projectBox ${proj.color}  flex`} key={proj.color}>
    <div className='projectBoxContainer'>
    <div className='projectBoxTitle'>{[proj.name]}</div>
    <hr className='projectBoxHr'/>
    <div className='projectBoxDescription'>{[proj.description]}</div>
    </div>
    <div className='projectBoxImg'>
        <img src={`${proj.image}`} alt="projectImg" />
    </div>
</div>
   
));


const pageCount = Math.ceil(data?.results.length / userPerPage);
const changePage = ({ selected }) => {
  setPageNumber(selected);
}



  return (
    <div className='projectsContainer main-padding'>
    <h6 className='subHeader'>Our Latest Project</h6>
    <h2 className='subTitleHeader'>This is the last variety of projects we have worked on</h2>

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


    {displayProj}


          <ReactPaginate 
        nextLabel={<ChevronRightIcon className='paginationIcon'/>}
        previousLabel={<ChevronLeftIcon className='paginationIcon'/>}
        pageCount={pageCount || 0}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}
