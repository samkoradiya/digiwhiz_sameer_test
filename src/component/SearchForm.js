import React from 'react'

const SearchForm = () => {

 
    const handleSearchClose = () =>{
        document.body.classList.remove('search-active');
    }

 

  return (
    <div className='searchForm'>
        <div className='close-icon' onClick={handleSearchClose}>
            <button>X</button>
        </div>
        <form>
            <div className='form-group'>
                <input type="search" className='form-control' placeholder='search....' />
                <button>Submit</button>
            </div>
        </form>

    </div>
  )
}

export default SearchForm