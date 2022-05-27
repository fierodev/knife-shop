import React from 'react'

function CardLayout( {name, image, description} ) {

  return (

    <div className="card ms-1 mt-1" style={{width:"30rem"}}>
        <div className="card-body ">
            <h5 className="card-title">{name}</h5>
            <img className="w-50" src={image} />
            <p className="card-text">{description}</p>
            <a href="#" className="btn btn-primary">To buy</a>
        </div>
    </div>
  )
}

export default CardLayout;