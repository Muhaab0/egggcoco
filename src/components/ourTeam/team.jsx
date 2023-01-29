import axios from 'axios'
import React, { useState } from 'react'
import "./team.css"
import "./team.css"
import ReactPaginate from 'react-paginate'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useQuery } from 'react-query'

export default function Team() {
const [pageNumber, setPageNumber] = useState(0)
const userPerPage = 6;
const pagesVisited = pageNumber * userPerPage
  


  const { data , isError , isLoading , error } = useQuery("team", async () => {
    return await axios.get("/api/team-member/all/").then((res) => res.data);
});


  const displayUsers = data?.results
  .slice(pagesVisited , pagesVisited + userPerPage)
  .map(team => (
    <div className={`teamBox`} key={team.id}>
    <div className={`teamBoxImage ${team.title}`}>
      <img src={team.image} alt="team" className='teamBoxImg' />
    </div>
      <h4>{team.name}</h4>
      <p>{team.title}</p>
    </div>

));

  const pageCount = Math.ceil(data?.results.length / userPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  }


  return (
    <div className='teamContainer main-padding'>
    <div className='subHeader'>Our Great Team</div>
    <div className='subTitleHeader'>Meet our professional team who will help you</div>
          <div className='teamBoxes flex a-center j-center gap-small'>


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
          </div>
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
