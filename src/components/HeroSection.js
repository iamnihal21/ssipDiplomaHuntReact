import React from 'react'
import hero from '../assets/hero.png'
import '../style/HeroSection.css'

export default function HeroSection({setFindClg}) {
  return (
    <div>
      <section>
        <div id="hero">
            <div>
                <div className="hero_left">
                    <h2>Discover Your Path to Success</h2>
                </div>
                <div className="hero_right">
                    <img src={hero} alt=""/>
                </div>
            </div>
            <div>
                <button><label htmlFor="find_checkbox" onClick={setFindClg}>Find College</label></button>
            </div>
        </div>
    </section>
    </div>
  )
}
