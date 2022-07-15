const navLink = document.querySelectorAll('.link');

navLink.forEach((nav, i) => {
    nav.addEventListener('click', () => {
        navLink.forEach((nav) => {
            nav.classList.remove('active')
        })
        navLink[i].classList.add('active')
    })

})

const content = document.querySelector('.lists')
const menu = document.querySelector('.fa-solid')

menu.addEventListener('click', function() {
    content.classList.toggle('active')

    if(menu.classList.contains('fa-bars')) {
        menu.classList.replace('fa-bars', 'fa-times')
    } else {
        menu.classList.replace('fa-times', 'fa-bars')
    }
})
