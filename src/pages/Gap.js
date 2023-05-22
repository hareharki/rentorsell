import React from 'react'
import HeroSlider, {Slide} from 'hero-slider';
import '../styles/Gap.css'


const image1 = '../image/4stan.jpg';
const image2 = '../image/Background.jpeg';
const image3 = '../image/image3.avif';
const image4 = '../image/image4.avif';
const image5 = '../image/image5.avif';
const image6 = '../image/image6.avif';
const image7 = '../image/image7.avif';
const image8 = '../image/No-Image.jpg';


const Gap = () => {
  return (
    <>
    <h2>Gallery And Partners</h2>

   {/* gallery */}

    <div className='gallery-slider'>
    <HeroSlider
    slidingAnimation='left_to_right'
    orientation='horizontal'
    initialSlide= {1}
    onBeforeChange= {(previousSlide, nextSlide)=> console.log('onBeforeChange', previousSlide, nextSlide)}
    onChange= {(nextSlide)=> console.log('onChange', nextSlide )}
    onAfterChange ={(nextSlide)=> console.log('onAfterChange', nextSlide)}
    style={{
      backgroundColor: 'rgba(0,0,0,0.33'

    }}
    settings={{
      slidingDuration: 250,
      slidingDelay: 100,
      shouldAutoplay: true,
      sholudDisplayButtons: true,
      autoplayDuration: 4000,
      height: '50vh'
    }}
    >
      <Slide
      background={{
        backgroundImageSrc: image1,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image2,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image3,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image4,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image5,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image6,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image7,
        backgroundAttachment: 'fixed'
      }}
      />
       <Slide
      background={{
        backgroundImageSrc: image8,
        backgroundAttachment: 'fixed'
      }}
      />
    </HeroSlider>
    </div>
    </>
  )
}

export default Gap