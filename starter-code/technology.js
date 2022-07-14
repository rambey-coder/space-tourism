const btn = document.querySelectorAll('.btn')
const detail = document.querySelector('.tech-tab')

btn.forEach((val, i) => {
    val.addEventListener('click', () => {
        btn.forEach(tog => {
            tog.classList.remove('active')
        })
        btn[i].classList.add('active')
    })
})

const getData = () => {
    
}