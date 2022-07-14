import './Home.css';
import React from 'react';
const Home=()=>{

    return(
        <React.Fragment>
        <header>
        <ul className="header">
          <li>HOME</li>
          <li>STORE</li>
          <li>ABOUT</li>
          <li>Contact us</li>
        
        </ul>
        <h1>THE GENERICS</h1>
        <button className='latest-album'>Get Our Latest Album</button>
        <button className='play-btn'>►</button>
      </header>
      <section className='container'>
        <h2>TOURS</h2>
        <div>
            <div className='tour-item'>
                <span className='tour-date' >JULY16</span>
                <span className='tour-place'>DETROIT,MI</span>
                <span className='tour-spec-place'>DTE ENERGY MUSIC THEATRE</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
            <div className='tour-item'>
                <span className='tour-date' >JULY19</span>
                <span className='tour-place'>TORONTO,ON</span>
                <span className='tour-spec-place'>BUDWEISER STAGE</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
            <div className='tour-item'>
                <span className='tour-date' >JULY22</span>
                <span className='tour-place'>BRISTOW,VA</span>
                <span className='tour-spec-place'>JIGGY LUBE LIVE</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
            <div className='tour-item'>
                <span className='tour-date' >JULY29</span>
                <span className='tour-place'>PHEONIX,AZ</span>
                <span className='tour-spec-place'>AK-CHIN PAVILION</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
            <div className='tour-item'>
                <span className='tour-date' >AUG 2</span>
                <span className='tour-place'>LAS VEGAS,NV</span>
                <span className='tour-spec-place'>T-MOBILE ARENA</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
            <div className='tour-item'>
                <span className='tour-date' >AUG 7</span>
                <span className='tour-place'>CONCORD,CA</span>
                <span className='tour-spec-place'>CONCORD PAVILION</span>
                <button className='buy-btn'>BUY TICKETS</button>
              
            </div>
        </div>

      </section>
      </React.Fragment>
    )
}

export default Home;