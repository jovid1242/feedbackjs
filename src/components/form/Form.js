import React, { useState } from 'react'
import http from '../../http'
import validation from '../validation/validation'
import { NotificationContainer, NotificationManager } from 'react-notifications';

export default function Form() {
    const [user, setUser] = useState({
        name: null,
        phone: null,
        email: null,
        message: null
    })
    const [notificationActive, setNotificationActive] = useState(false)
    const handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const data = user
        data[name] = value
        setUser(data);
    }
    const submitForm = (e) => {
        e.preventDefault()
        if (valideFeedback()) {
            http.post('feedback', user)
                .then((response) => {
                    console.log(response);
                    NotificationManager.success('Republic', 'Успещно', 3000);
                    setNotificationActive(true)
                    setTimeout(() => {
                        setNotificationActive(false)
                    }, 5000)
                })
                .catch((errors) => {
                    NotificationManager.error('Ошибка', `${errors.message}`);
                    console.log('Ошибка', `${errors.message}`);
                })
        } else return
    }
    const valideFeedback = () => {
        const err = validation.cartValidation(user)
        if (err.error) {
            NotificationManager.warning(err.message, 'Ошибка', 3000);
            return false
        }
        return true
    }
    return (
        <>
            <NotificationContainer />
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
