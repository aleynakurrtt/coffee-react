import React from 'react'
import '../style/style.scss'

function Hero() {
    return (
        <>
            <div className="container hero text-center">
                <h1 className='welcome'>HOŞGELDİNİZ</h1>
                <p className='quality'>Taze ve kaliteli kahve çekirdeklerini bulabileceğiniz <br /> Türkiyenin en büyük online kahve mağazası.</p>
                <button type="button" class="btn firstButton ">Primary</button>
            </div>
        </>
    )
}

export default Hero