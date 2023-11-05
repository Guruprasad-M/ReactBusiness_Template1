import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>

        <h1> Check out the EPIC Destination!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
            <ul className="cards__item">
<CardItem   src="https://image3.jdomni.in/banner/30072021/1B/F3/C9/36A197F7A0BD5CB113A6308BBF_1627625830858.jpeg?output-format=webp"

text ="This 4 inch halloblacks is used for building the compound wall."  label="4 inch" path="/services">

    
    </CardItem>
    <CardItem   src="https://content.jdmagicbox.com/comp/tirupur/t8/9999px421.x421.191231142605.d3t8/catalogue/popular-solid-blocks-mangalam-tirupur-hollow-block-manufacturers-b2a42q4kb5-250.jpg"

text ="This 6 inch  halloblacks is used for building Rooms and ceiling"  label="5 inch" path="/services">

    
    </CardItem>
   
   
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Cards