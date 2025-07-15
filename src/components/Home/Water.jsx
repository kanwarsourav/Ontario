import React from 'react'
import water from '../../assets/images/water.svg'

export default function Water() {
    return (
        <>
            <div>
                <div class=" bg-cover bg-center h-48    "
                    style={{ backgroundImage: `url(${water})` }}>
                </div>
            </div>
        </>
    )
}
