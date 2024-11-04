import React from 'react';


import './App.scss';
import videoMain from './media/videos/1581e73f-4f2b-404e-9568-d0bfaedbbacf.mp4'
import columnOne from './media/images/image.png'
import gtrsTextImage from './media/images/gtrsTextImage.png'
import textabsoluteImage from './media/images/text-absolute-car-image.png'
import loopvideo from './media/videos/loopPorche-video.mp4';

import topviewimage from './media/images/top-view-image.png'

function App() {
  return (
    <section className='main-container'>

      <div className='outer-wrapper'>

        <div className='grid-template-wrapper'>

          <div className='gird-col-one'>
            <img
              src={columnOne}
              alt='sf'
            >
            </img>


          </div>
          <div className='gird-col-two'>

            <div className='main-video-wrapper'>


              <video muted loop autoplay playsInline controls  >

                <source src={videoMain}  ></source>
              </video>


            </div>

            <div className='main-curve'>

            </div>

          </div>
          <div className='gird-col-three'>3</div>

          <div className='gird-col-four'>

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

          <div className='gird-col-five'>
            <div>

            </div>

          </div>

          <div className='gird-col-six'>
            <img
              src={gtrsTextImage}
            />

            <div className='car-image'>
              <img
                src={textabsoluteImage}
              />
            </div>
          </div>
          <div className='gird-col-seven'>

            <video muted loop autoplay playsInline controls>

              <source src={loopvideo}></source>

            </video>

          </div>

        </div>

      </div>

    </section>
  );
}

export default App;
