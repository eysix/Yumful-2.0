import {useRef, useEffect} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const {setSearchTerm} = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  const searchMeal = () => {
    setSearchTerm(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // so that page only refreshes when search term changes, enter does not change
  }
  
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor='name'> search your favourite food</label>
          <input type="text" id="name" ref={searchValue} onChange={searchMeal} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
