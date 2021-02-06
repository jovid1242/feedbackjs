const validate = {
    cartValidation: (state) => {
        if (!state.name) {
            return { error: true, message: 'Запольните поле Имя' }
        }
        if (!state.email) {
            return { error: true, message: 'Запольните поле email' };
        }
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(state.email)) {
            return { error: true, message: 'Неверный адрес электронной почты' }
        }
        if (!state.phone) {
            return { error: true, message: 'Запольните поле номер телефона  😉' };
        }
        // const phoneNum = /^((992|\+992)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}$/;
        // if (!phoneNum.test(state)) {
        //     return { error: true, message: 'Неверный номер телефон!! 😊 Пример: +992XXXXXXXXX' }
        // }
        if (state.length < 13) {
            return { error: true, message: 'Номер телефон дольжен содержать минимум 9 символов 😱' };
        }
        if (state.length > 13) {
            return { error: true, message: 'Номер телефон дольжен содержать не больше 9 символов 😱' };
        }
        return { error: false, message: 'Успешно 👌🙂' };
    }
}

export default validate