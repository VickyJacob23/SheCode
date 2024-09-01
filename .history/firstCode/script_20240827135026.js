'use strict'

const btn = document.querySelector('.btn')


btn.addEventListener('click', () => {
    document.querySelector('.btn').classList.toggle('dark')
})