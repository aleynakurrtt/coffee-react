import React from 'react'
import '../style/style.scss'

function Features() {
    return (
        <>
            <div class="container features text-center">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">ESPRESSO</h5>
                                <p class="card-text">Espresso, basınç gücünden yararlanılarak demlenen sert ve yoğun bir kahve türüdür. Çok ince öğütülen kahve, 95 derecedeki sıcak suyun 25 saniye içerisinde basınçlı şekilde kahve tanelerinin içerisinden fincana aktarılmasıyla elde edilir. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">AMERİCANO</h5>
                                <p class="card-text">Americano, 150 ml sıcak su üzerine bir shot (30 ml) espresso eklenerek yapılan bir kahve türüdür. 180 ml’lik fincanda servis edilir. Espressoya göre daha yumuşak, filtre kahveye göre daha sert bir aromaya sahiptir.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">LATTE</h5>
                                <p class="card-text">Latte, bir shot espresso üzerine kremalaştırılmış sıcak süt eklenmesiyle elde edilen kahve çeşididir. Latte kelimesi İtalyanca’da süt anlamına gelir. 180 ml’lik fincanda veya karton bardakta servis edilen lattenin ince bir kremaya sahip olması gerekir. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="container features text-center">
                <div class="row">
                    <div class="col-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">CAPPUCCİNO</h5>
                                <p class="card-text">Cappuccino, bir shot espresso üzerine köpürtülmüş sıcak süt eklenerek yapılan kahve türüdür. Latteden farkı sütünün çok daha köpüklü olmasıdır. Porselen veya karton bardakta servis edilir.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">ESPRESSO MACCHİATO</h5>
                                <p class="card-text">Espresso macchiato, espresso üzerine bir kaşık süt köpüğü eklenerek hazırlanan kahve türüdür. Küçük porsiyonlarda servis edilir. Süt değil, yalnızca süt köpüğü eklendiği için sert bir tadı vardır. </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="card" >
                            <div class="card-body">
                                <h5 class="card-title">MOCHA </h5>
                                <p class="card-text">Cafe Mocha, espresso üzerine sıcak süt ve eritilmiş çikolata eklenerek hazırlanan tatlı bir kahve çeşididir. İki veya üç parça çikolatayla birlikte espresso, süt ve süt köpüğünden oluşur.  </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Features
