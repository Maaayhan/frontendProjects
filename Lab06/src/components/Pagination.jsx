import React from 'react'

export const Pagination = ({ 
  postsPerPage,
  totalPosts,
  paginate,
  currentPage
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav className='pagination'>
      {pageNumbers.map( (number, i) => (
        <li key = {`${i} - ${number}`} className='page-item'>
          <a 
            onClick = {() => paginate(number)} 
            //when you need to pass parameters to the function, you need to use an arrow function
            className={`page-link ${
              number === currentPage ? 'active-page' : ''
            }`}>
            {number}
          </a>
        </li>
      ))
      }
    </nav>
  )
}
