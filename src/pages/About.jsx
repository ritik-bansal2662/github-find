import React from 'react'

const About = () => {
  return (
    <>
      <h1 className='text-6xl mb-4' >github finder</h1>
      <p className='mb-4 text-2xl font-light'>
        A React app to search GitHub profiles and see profile details.        
      </p>
      <h2>TECHNOLOGY USED</h2>
      <ul className=''>
        <li>ReactJS</li>
        <li>Tailwind CSS</li>
      </ul>
      <br />
      
      <h2>API USED:</h2>
      <ul>
        <li>Github API</li>
      </ul>
    </>
  )
}

export default About