import React from 'react'
import './Home.scss'
import background from '../../assets/images/background2.jpg'

export const Home = () => {
    return (
        <>
            <section className="main">
                <div className="main__background">
                    <img className="main__background__image" src={background} alt="background image" />
                  
                </div>
            </section>
            <section className="Recommended Properties">
                <div>
                Recommended Properties
                </div>
            </section>
            <section className="Categories">

                <div>
                    on the beach
                </div>

                <div>
                    Hot Tub
                </div>

                <div>
                    Mountains
                </div>

                <div>
                    Pool
                </div>

            </section>
        </>
    )
}

export default Home