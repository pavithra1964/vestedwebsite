import React from 'react'
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection({
    lightBg, 
    topLine, 
    lightText, 
    lightTextDesc, 
    headline, 
    description, 
    description1,
    buttonLabel, 
    img, 
    alt, 
    imgStart
}) {
    return (
        <>
          <div
            className={lightBg ? 'hero-section' : 'home__hero-section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                    style={{display: 'flex', flexDiscription: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                <div className="top-line">{topLine}</div>
                                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                <p className={lightTextDesc ? 'home__hero-subtititle' : 'home__hero-subtitle dark'}>{description}</p>
                                <Link to="/Start Investing">
                                    <Button buttonSize='btn--wide'>{buttonLabel}</Button>
                                </Link>
                                 <p className={lightTextDesc ? 'home__hero-subtititle' : 'home__hero-subtitle dark'}>{description1}</p>
                            </div>
                        </div>
                        <div className='col'>
                            <div className='home__hero-img-wrapper'>
                                <img src={img} alt={alt} className='home__hero-img' />
                            </div>
                        </div>
                    </div>
                </div>
          </div>  
        </>
    )
}

export default HeroSection;


// import React from 'react'

// function HeroSection() {
//     return (
//         <div class="slick-track" style="opacity: 1; width: 3696px; transform: translate3d(-1848px, 0px, 0px);"><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-6" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-5" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/twilio-original-01.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-4" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/facebook-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;"  ></div>
//         <div class="slick-track" style="opacity: 1; width: 3696px; transform: translate3d(-1848px, 0px, 0px);"><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-6" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-5" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/twilio-original-01.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-4" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/facebook-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-3" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/alphabet-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-2" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/uber-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="-1" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/spotify-original.svg" /></div><div class="slide slick-slide" style="width: 160px;" tabindex="-1" data-slick-index="0" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/amazon-original.svg" /></div><div class="slide slick-slide" style="width: 160px;" tabindex="-1" data-slick-index="1" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/paypal-original.svg" /></div><div class="slide slick-slide" style="width: 160px;" tabindex="-1" data-slick-index="2" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg" /></div><div class="slide slick-slide" style="width: 160px;" tabindex="-1" data-slick-index="3" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/twilio-original-01.svg" /></div><div class="slide slick-slide" style="width: 160px;" tabindex="-1" data-slick-index="4" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/facebook-original.svg" /></div><div class="slide slick-slide slick-current slick-active" style="width: 160px;" tabindex="0" data-slick-index="5" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/alphabet-original.svg" /></div><div class="slide slick-slide slick-active" style="width: 160px;" tabindex="0" data-slick-index="6" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/uber-original.svg"/></div><div class="slide slick-slide slick-active" style="width: 160px;" tabindex="0" data-slick-index="7" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/spotify-original.svg" /></div><div class="slide slick-slide slick-cloned slick-active" style="width: 160px;" tabindex="-1" data-slick-index="8" id="" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/amazon-original.svg" /></div><div class="slide slick-slide slick-cloned slick-active" style="width: 160px;" tabindex="-1" data-slick-index="9" id="" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/paypal-original.svg" /></div><div class="slide slick-slide slick-cloned slick-active" style="width: 160px;" tabindex="-1" data-slick-index="10" id="" aria-hidden="false"><img src="https://vested.co.in/wp-content/uploads/2020/09/slack-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="11" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/twilio-original-01.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="12" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/facebook-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="13" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/alphabet-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="14" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/uber-original.svg" /></div><div class="slide slick-slide slick-cloned" style="width: 160px;" tabindex="-1" data-slick-index="15" id="" aria-hidden="true"><img src="https://vested.co.in/wp-content/uploads/2020/09/spotify-original.svg" /></div>
//         </div>
//         </div>
//     )
// }

// export default HeroSection

