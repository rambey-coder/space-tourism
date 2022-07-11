const navLink = document.querySelectorAll('.link');

navLink.forEach((nav, i) => {
    nav.addEventListener('click', () => {
        navLink.forEach((nav) => {
            nav.classList.remove('active')
        })
        navLink[i].classList.add('active')
    })

})
