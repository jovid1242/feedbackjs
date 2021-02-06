import React from 'react'

import Social from './social/Social'
import Form from './form/Form'
import './css/Index.css'

export default function Index() {

    return (
        <>
            <div className="feedback">
                <div className="feedback-content">
                    <div className="feedback-header">
                        <span>КОНТАКТЫ</span>
                        <p>Напишите нам  и мы ответим как можно скорее</p>
                    </div>
                    <div className="footer-body">
                        <Form />
                    </div>
                    <div className="feedback-footer">
                        <Social />
                    </div>
                </div>
            </div>
        </>
    )
}
