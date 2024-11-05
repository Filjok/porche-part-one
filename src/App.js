import React, { useState } from 'react';


import './App.scss';
import videoMain from './media/videos/1581e73f-4f2b-404e-9568-d0bfaedbbacf.mp4'
import columnOne from './media/images/image.png'
import gtrsTextImage from './media/images/gtrsTextImage.png'
import textabsoluteImage from './media/images/text-absolute-car-image.png'
import loopvideo from './media/videos/loopPorche-video.mp4';
import topviewimage from './media/images/top-view-image.png'
import fullCarImage from './media/images/porche-full-car-image.png'
import porcheBackImage from './media/images/porche-back-car-image.png'

function App() {

    const [videoOne, setvideoOne] = useState(false)
    const [videoTwo, setvideoTwo] = useState(false)

  return (
    <section className='main-container'>

      <div className='outer-wrapper'>

        <div className='grid-template-wrapper'>

          <div className='grid-items gird-col-one'>
            <img
              src={columnOne}
              alt='sf'
            >
            </img>


          </div>
          <div className={`grid-items  gird-col-two ${ videoOne? 'videoOne' :""}`} onClick={()=>{setvideoOne(!videoOne)}}>

            <div className='main-video-wrapper'>


              <video muted loop autoplay playsInline   >

                <source src={videoMain}  ></source>
              </video>


            </div>

            <div className='main-curve'>

            </div>

          </div>
          <div className='grid-items gird-col-three '>

            <div className='car-image'>
              <img
                src={porcheBackImage}
              />
            </div>
          </div>

          <div className='grid-items gird-col-four'>

            <div className='image-div'>
              <img src={topviewimage} />
            </div>

            <div className='text-div'>


              <div>
                <h3>top speed</h3>
                <h6>184mph</h6>
              </div>
              <div>
                <h4><span>346 lb-ft</span>  top speed</h4>
              </div>
            </div>

          </div>

          <div className='grid-items gird-col-five'>



            <div className='bg-image-wrapper'>

              <div className='car-full-image-wrapper'>
                <img
                  src={fullCarImage}
                />
              </div>
              <div>
                <h6>
                  518 hp
                </h6>
                <h2>
                  horse
                  <br></br> power
                </h2>
              </div>
            </div>

          </div>

          <div className='grid-items gird-col-six'>
            <img
              src={gtrsTextImage}
            />

            <div className='car-image'>
              <img
                src={textabsoluteImage}
              />
            </div>
          </div>
          <div className={`grid-items gird-col-seven ${ videoTwo? 'videoTwo' :""}`} onClick={()=>{setvideoTwo(!videoTwo)}}>

            <video muted loop autoplay playsInline >

              <source src={loopvideo}></source>

            </video>

          </div>

        </div>

      </div>

    </section>
  );
}

export default App;
