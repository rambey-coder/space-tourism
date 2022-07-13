const tabBtn = document.querySelectorAll('.crew-toggle')
const imgContainer = document.querySelector('.crew-profile')
const tabContainer = document.querySelector('.content-info')
// const info = document.querySelector('.info')

function getData() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
}

getData()

const setData = (data) => {
    let value = data.crew;
    value.forEach((val) => {
    tabContainer.innerHTML += `
    <div class='info'> 
        <h3>${val.role}</h3>
        <p>${val.name}</p>
        <p>${val.bio}</p>
    </div>
`

        imgContainer.innerHTML += ` 
        <img src=${val.images.png} class='bio-img'/> 
`
    })

    const img = document.querySelectorAll('.bio-img')
    const content = document.querySelectorAll('.info')
    content[0].classList.add('active')
    img[0].classList.add('active')
    toggle(content, img)
}

const toggle = (content, img) => {
    tabBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            tabBtn.forEach((btn) => {
                btn.classList.remove('active')
            })

            img.forEach(img => {
                img.classList.remove('active')
            })

            content.forEach(cont => {
                cont.classList.remove('active')
            })

            tabBtn[i].classList.add('active')
            img[i].classList.add('active')
            content[i].classList.add('active')
        })
    })

}