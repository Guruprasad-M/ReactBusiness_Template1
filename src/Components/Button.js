import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'


const Styles=['btn--primary','btn--outline']

const SIZES =['btn--medium','btn--large']

export const Button=({children, type,onClick, buttonStyle ,buttonSize})=>{
    const checkButtonStyle=Styles.includes(buttonStyle) ? buttonStyle : Styles[0]


    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]



    return(
        <Link to='/sign-up' className='btn-mobile'>
            <button 
            className={'btn ${checkButtonStyle} ${checkButtonSize}'}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
        

        </Link>
    )
}





