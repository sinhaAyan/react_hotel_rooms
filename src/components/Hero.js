import React from 'react'

function Hero(props) {
    return (
        <div>
            <header className={props.hero}>
                {props.children}
            </header>
        </div>
    )
}

export default Hero;
Hero.defaultProps = {
    hero: "defaultHero"
};