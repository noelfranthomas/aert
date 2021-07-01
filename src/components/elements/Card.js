import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({
  number,
  color,
  title,
  desc
}) => {
  return (
<div className={`card ${color}`}>
   <div className="circle">
       <h1>{number}</h1>
   </div>
   <div className="info">
     <h1 className="header">{title}</h1>
     <p style={{fontSize: "30px"}}>{desc}</p>
   </div>
</div>




    
  )
}

Card.propTypes = {
  title: PropTypes.string
}

export default Card
