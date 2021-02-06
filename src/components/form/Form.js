import React, { useState } from 'react'
import http from '../../http'

export default function Form() {
    const [user, setUser] = useState({
        name: null,
        phone: null,
        email: null,
        message: null
    })
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = user
        data[name] = value
        setUser(data);
    }
    const submitForm = (e) => {
        e.preventDefault()
        http.post('feedback', user)
            .then((response) => {
                console.log(response);
            })
            .catch((errors) => {
                console.log('Ошибка', `${errors.message}`);
            })
    }
    return (
        <>
            <div className="footer-form-group">
                <form action="" onSubmit={submitForm} >
                    <input
                        type="text"
                        name="name"
                        onChange={handleUserInput}
                        placeholder="Имя *" />
                    <input
                        type="phone"
                        name="phone"
                        onChange={handleUserInput}
                        placeholder="Номер телефона *" />
                    <input
                        type="email"
                        name="email"
                        onChange={handleUserInput}
                        placeholder="E-mail *" />
                    <textarea
                        name="message"
                        onChange={handleUserInput}
                        placeholder="Ваше письмо *">
                    </textarea>

                    <div className="feedback-btn">
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
        </>
    )
}
