import React from 'react';




export default function Register1 () {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const checkbox = document.getElementById("checkbox")

    const emailBlock = email.parentElement
    const emailError = emailBlock.querySelector(".form__error")
    const emailLabel = emailBlock.querySelector(".form__label")
    const emailSpan = emailBlock.querySelector(".form__star")


    const passwordBlock = password.parentElement
    const passwordError = passwordBlock.querySelector(".form__error")
    const passwordLabel = passwordBlock.querySelector(".form__label")
    const passwordSpan = passwordBlock.querySelector(".form__star")


    const checkboxBlock = checkbox.parentElement
    const checkboxError = checkboxBlock.querySelector(".form__error")
    const checkboxSpan = checkboxBlock.querySelector(".form__star")
    const checkboxLabel = checkboxBlock.querySelector('form__checkbox')


    function formSubmit(event) {
        event.preventDefault()

        if (!email.value) {
            email.classList.add('input-error')
            emailError.innerHTML = 'Поле обязательно для заполнения'
            emailLabel.classList.add('error')
            emailSpan.classList.add('error-star')
            emailSpan.classList.remove('form__star')
        }
        else if
        (!validateEmail(email.value))
        {
            email.classList.add('input-error')
            emailError.innerHTML = 'Email невалидный'
            emailLabel.classList.add('error')
            emailSpan.classList.add('error-star')
            emailSpan.classList.remove('form__star')
        }
        else {
            email.classList.remove('input-error')
            emailLabel.classList.remove('error')
            emailError.innerHTML = ''
            emailSpan.classList.remove('error-star')

        }
        if (!password.value) {
            password.classList.add('input-error')
            passwordError.innerHTML = 'Поле обязательно для заполнения'
            passwordLabel.classList.add('error')
            passwordSpan.classList.add('error-star')
            passwordSpan.classList.remove('form__star')
        }
        else if (password.value.length < 8) {
            password.classList.add('input-error')
            passwordError.innerHTML = 'Пароль должен содержать как минимум 8 символов'
            passwordLabel.classList.add('error')
            passwordSpan.classList.add('error-star')
            passwordSpan.classList.remove('form__star')
        }
        else {
            password.classList.remove('input-error')
            passwordLabel.classList.remove('error')
            passwordError.innerHTML = ''
            passwordSpan.classList.remove('error-star')
        }
        if (!checkbox.checked) {
            console.log('not checked')
            checkbox.classList.add('input-error')
            checkboxError.innerHTML = 'Поле обязательно для заполнения'
            checkboxSpan.classList.add('error-star')
            checkboxSpan.classList.remove('form__star')
        }
        else {
            checkbox.classList.remove('input-error')
            checkboxError.innerHTML = ''
            checkboxSpan.classList.remove('error-star')
        }

        const emailValue = email.value
        const passwordValue = password.value
        const res = {}
        if (emailValue && passwordValue) {

            res.email = emailValue;
            res.password = passwordValue;

            console.log(res)
        }

    }



    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    return (
        <>
        <form action="" className="form" onSubmit={formSubmit()}>
    <h1 className="form__title">Регистрация</h1>
    <div className="form__input-wrapper">
        <label className="form__label"  for="email">Email</label>
        <span className="form__star">  </span>
        <input className="form__input" type="text" id="email" placeholder="Введите email"/>
        <span className="form__error"></span>
    </div>

    <div className="form__input-wrapper">
        <label className="form__label" for="password">Пароль</label>
        <span className="form__star">  </span>
        <input className="form__input" type="password" id="password" placeholder="Введите пароль"/>
        <span className="form__error"></span>
    </div>
    <div className="form__checkbox-wrapper" >
        <span className="form__star">  </span>
        <input className="form__checkbox" type="checkbox" id="checkbox"/>
        <label className="form__checkbox-label" for="checkbox">Я согласен с <a href="" > Правилами пользования приложением</a> </label>
        <span className="form__error"></span>
    </div>
    <button className="form__button" type="submit">Регистрация</button>
</form>
</>
    )
}
