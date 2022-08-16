import React from 'react'
import Lottie from 'react-lottie-player'
import animationData from '/public/404-page'

const Animation = () => {
    return (
        <Lottie
            loop
            animationData={animationData}
            play
            style={{ width: `100%`, height: `100%` }}
        />
    )
}

export default Animation