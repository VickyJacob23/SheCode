'use strict'

const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
    document.querySelector('.container').classList.toggle('dark')
})