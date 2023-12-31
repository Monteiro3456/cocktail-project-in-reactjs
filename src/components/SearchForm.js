import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
  const { searchTerm,setSearchTerm} = useGlobalContext()

  
  // const searchValue = React.useRef('')

  // React.useEffect(() => {
  //   searchValue.current.focus()
  // }, [])

  // function searchCocktail() {
  //   setSearchTerm(searchValue.current.value)
  // }




  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='name'>search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </form>
    </section>
  )
}
