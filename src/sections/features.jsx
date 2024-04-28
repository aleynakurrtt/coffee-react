import React from 'react'
import '../style/style.scss'
import Card from '../components/Card'
import espresso from '../../public/images/espresso.png';
import americano from '../../public/images/americano.png';
import cuppicino from '../../public/images/cappucino.png';
import latte from '../../public/images/latte.png';
import macchiato from '../../public/images/macchiato.png';
import mocha from '../../public/images/mocha.png';

function Features() {
    return (
        <>
            <section className="pt-4">
                <div className="container px-lg-5">
                    <div className="row gx-lg-5">
                        <Card title={"ESPRESSO"} description={"Espresso, basınç gücünden yararlanılarak demlenen sert ve yoğun bir kahve türüdür. Çok ince öğütülen kahve, 95 derecedeki sıcak suyun 25 saniye içerisinde basınçlı şekilde kahve tanelerinin içerisinden fincana aktarılmasıyla elde edilir."} image={espresso} />
                        <Card title={"AMERİCANO"} description={"Americano, 150 ml sıcak su üzerine bir shot (30 ml) espresso eklenerek yapılan bir kahve türüdür. 180 ml’lik fincanda servis edilir. Espressoya göre daha yumuşak, filtre kahveye göre daha sert bir aromaya sahiptir."} image={americano} />
                        <Card title={"LATTE"} description={"Latte, bir shot espresso üzerine kremalaştırılmış sıcak süt eklenmesiyle elde edilen kahve çeşididir. Latte kelimesi İtalyanca’da süt anlamına gelir. 180 ml’lik fincanda veya karton bardakta servis edilen lattenin ince bir kremaya sahip olması gerekir."} image={latte} />
                        <Card title={"CAPPUCCİNO"} description={"Cappuccino, bir shot espresso üzerine köpürtülmüş sıcak süt eklenerek yapılan kahve türüdür. Latteden farkı sütünün çok daha köpüklü olmasıdır. Porselen veya karton bardakta servis edilir."} image={cuppicino} />
                        <Card title={"ESPRESSO MACCHİATO"} description={"Espresso macchiato, espresso üzerine bir kaşık süt köpüğü eklenerek hazırlanan kahve türüdür. Küçük porsiyonlarda servis edilir. Süt değil, yalnızca süt köpüğü eklendiği için sert bir tadı vardır."} image={macchiato} />
                        <Card title={"MOCHA"} description={"Cafe Mocha, espresso üzerine sıcak süt ve eritilmiş çikolata eklenerek hazırlanan tatlı bir kahve çeşididir. İki veya üç parça çikolatayla birlikte espresso, süt ve süt köpüğünden oluşur."} image={mocha} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Features