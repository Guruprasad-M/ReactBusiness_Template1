import React from 'react'
import './Services.css'
import { useState } from 'react';
function Services() {
  const services = [
    {
      title: 'Door-to-Door Delivery',
      description: 'Get your packages delivered right to your doorstep with our reliable door-to-door delivery service.',
      image: 'https://www.shutterstock.com/image-vector/symbolic-commercial-home-delivery-symbol-260nw-1695005305.jpg', // Placeholder image link
    },
    {
      title: 'Transportation Workers',
      description: 'Need assistance with heavy lifting and transportation? Our skilled workers are here to help you.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRydDRUo6rKcUxZvrDI6LU4yei9mXBu2vR4tQ&usqp=CAU', // Placeholder image link
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  const handleNext = () => {
    setCurrentService(currentService === services.length - 1 ? 0 : currentService + 1);
  };

  const handlePrev = () => {
    setCurrentService(currentService === 0 ? services.length - 1 : currentService - 1);
  };

  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <div className="service-slider">
          {services.map((service, index) => (
            <div className={`service ${index === currentService ? 'active' : ''}`} key={index}>
              <h3>{service.title}</h3>
              <img src={service.image} alt={service.title} />
              <p>{service.description}</p>
            </div>
          ))}
          <button className="prev" onClick={handlePrev}>❮</button>
          <button className="next" onClick={handleNext}>❯</button>
        </div>
      </div>
    </section>
  );

  
}

export default Services