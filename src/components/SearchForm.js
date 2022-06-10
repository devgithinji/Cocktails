import React, {useEffect, useRef} from 'react'
import {useGlobalContext} from '../context'

const SearchForm = () => {
    const {setSearchTerm} = useGlobalContext();
    const searchValue = useRef('');

    useEffect(() => {
        searchValue.current.focus();
    }, [])


    const searchCockTail = () => {
        setSearchTerm(searchValue.current.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <section className='section search' onSubmit={handleSubmit}>
            <form className='search-form' action="">
                <div className='form-control'>
                    <label htmlFor="name">search your favourite cocktail</label>
                    <input type="text" id='name' ref={searchValue} onChange={searchCockTail}/>
                </div>
            </form>
        </section>
    )
}

export default SearchForm
