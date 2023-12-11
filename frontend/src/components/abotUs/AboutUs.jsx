import React from 'react'
import './AboutUs.css';


const AboutUs = () => {
  return (
    <>
            <div className='AboutDaelah'>
                <h2>About DaelahCollectibles</h2>
                <p id='myText'>Welcome to DaelahCollectibles, where elegance meets craftsmanship.We are more than just a jewelry store
                    we are curators of timeless <br/> beauty, dedicated to bringing 
                    you exquisite pieces that resonate with your unique style and 
                    celebrate life's special moments.</p>
            </div>
        <div className='AboutDaelah2'>
            <h4><a href="">Company Links</a></h4>
            
                 <h4 id='social'>SociaL Media</h4>
                    <a href="https://twitter.com/DaelahCo"><i class="fa-brands fa-twitter" id='Btn3'></i></a>
                    <a href="https://www.instagram.com/its_daelah/"><i class="fa-brands fa-instagram" id='Btn3'></i></a>
                    <a href="http://"><i class="fa-brands fa-pinterest" id='Btn3'></i></a>
                    <hr />
                    <h6 id='myFooter'>Copyright 2023 @DaelahCollectibles. All Rights Reserved  by Adegbenro Samiat</h6>
        </div>
        
      
    </>
  )
}

export default AboutUs