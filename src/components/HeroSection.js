import React, { useState, useEffect } from 'react';
import '../App.css';
import './HeroSection.css';
import axios from 'axios'
import { Spinner } from '@chakra-ui/react'

function HeroSection() {

  const [info, setInfo] = useState('')
  const [isLoading, setLoading] = useState(false);

    useEffect(() => {
      getData()
    },[])

    async function getData() {
      setLoading(true)
      axios('http://ec2-44-214-241-21.compute-1.amazonaws.com:8080/results')
      .then(response => {
          // console.log(response.data)
          setInfo(response.data[0])
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching')
        })
        .finally(() => {
        })
      }

  return (

    <div className='hero-container'>
      <img
                            src={process.env.PUBLIC_URL + "/images/home-background.jpeg"}
                            alt="example"
                        />
      <div className='info-container'>
        <div>
            <h1>THREE CAPITAL GROUP</h1>
        </div>

        <div className='stats-container'>
          <div className='stats-box'>
            <h2>Total Supply</h2>
             {isLoading ? <Spinner mt={25} size='lg' color='blue.500' /> : <h1>{info.totalSupply}</h1>}
          </div>
          <div className='stats-box'>  
            <h2>Total Holders</h2>
            {isLoading ? <Spinner mt={25} size='lg' color='blue.500' /> : <h1>{info.totalHolders}</h1>}
          </div>
        </div>
      </div> 

      <div className='hero-btns'>
        {/* <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Connect Wallet
        </Button> */}
        {/* <form action="../../post" method="post" 
              className="form">
          <button type="submit">Connected?</button>
        </form> */}
      </div>
    </div>
  );
}

export default HeroSection;