import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
import { toast } from 'react-toastify'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Tomato App</p>
            <div className="app-download-platforms">
                <img onClick={()=>toast.error("Ohh!!!Currently Unavailble Check Later")} src={assets.play_store} alt="" />
                <img onClick={()=>toast.error("Ohh!!!Currently Unavailble Check Later")} src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
