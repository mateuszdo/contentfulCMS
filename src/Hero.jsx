import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>I'm baby unicorn tattooed asymmetrical kickstarter chillwave marfa deep v, +1 chambray neutra. Praxis jianbing trust fund church-key. Tofu marfa microdosing drinking vinegar disrupt bitters. Four dollar toast humblebrag put a bird on it unicorn yuccie, cray sus same scenester la croix hell of. </p>
            </div>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="women and the browser" className='image' />
        </div>
    </section>
    )
}

export default Hero