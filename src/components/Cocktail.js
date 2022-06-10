import React from 'react'
import {Link} from 'react-router-dom'

const Cocktail = ({id, name, glass, info, image}) => {
    return (
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={name}/>
                <div className="cocktail-footer">
                    <h3>{name}</h3>
                    <h4>{glass}</h4>
                    <p>{info}</p>
                    <Link to={`/cocktails/${id}`} className='btn btn-primary btn-details'>Details</Link>
                </div>
            </div>
        </article>
    )
}

export default Cocktail
