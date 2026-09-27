import React from 'react'
import clients from './LogoData'
import './Logo.css'
export default function Logo() {

  return (
    <div className='clinet-div'>

    <p className='clients-text'>Trusted by global enterprises and institutions</p>
    <div className="clients">
      
      {clients.map((client, index) => (
        <img
        className='img'
          key={index}
          src={client.image}
          alt={client.alt}
        />
      ))}
    </div>
    </div>
  )
}
