import React from 'react'
import './Notification.css'
export default function Notification({ active }) {
    return (
        <>
            <div className={`notification ${active ? "" : "hide"}`}>
                <span>Спасибо! Ваша заявка принята!</span>
            </div>
        </>
    )
}
