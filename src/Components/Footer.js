import React from 'react'
import { Button } from './Button'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">

            <p className="footer-subscription-heading">
                
            </p>
            <p className="footer-subscription-text">
            "Build Your Dreams, One Brick at a Time! Our Premium Quality Bricks Ensure Lasting Strength and Beauty for Your Projects. Discover Excellence in Every Layer!"





            </p>

         
        </section>
        <div className="footer-links">
           
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                    <Link className="social-logo">
                        BRICKS <i className="fa-solid fa-trowel-bricks"></i>
                    </Link>
                </div>
                <div className="social-icons">
                <Link className='social-icon-link facebok' to='/' target='_blank'>
            <i className="fab fa-facebook-f"></i>
            </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer