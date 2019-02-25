import React from 'react'

function About() {

  return (
    <div style={ aboutStyle }>
      <h1>About</h1>
     
      <p>This is a simple todo application. Made with React JS for web on 24/2/2018. <br></br>
      - by Hakim
      </p>
    </div>
  )

}

const aboutStyle = {
  margin: '20px'
}

export default About;