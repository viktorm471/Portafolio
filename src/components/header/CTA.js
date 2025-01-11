import React from 'react'
import CV from '../../assets/1VictorRestrepo.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a className='btn' href={CV} download >Dowload CV</a>
        <a className='btn btn-primary' href='#contact'>Let's Talk</a>
      
    </div>
  )
}

export default CTA
