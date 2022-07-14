const btn = document.querySelectorAll('.btn')
const detail = document.querySelector('.tech-tab')
const imgCont = document.querySelector('.art-2')

const getData = () => {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            setData(data.technology)
        })
}

getData()

const setData = (data) => {
    data.forEach(val => {
        detail.innerHTML += `
            <div class='details'>
                <p>THE TECHNOLOGY...</p>
                <p>${val.name}</p>
                <p>${val.description}</p>
            </div>
        `
        imgCont.innerHTML += `
            <img src=${val.images.portrait} class='tech-img'/>
        `
    })

    const dets = document.querySelectorAll('.details')
    const images = document.querySelectorAll('.tech-img')
    dets[0].classList.add('active')
    images[0].classList.add('active')
    tabToggle(images, dets)
}

const tabToggle = (images, dets) => {
    btn.forEach((val, i) => {
        val.addEventListener('click', () => {
            btn.forEach(tog => {
                tog.classList.remove('active')
            })
    
            images.forEach(img => {
                img.classList.remove('active')
            })

            dets.forEach(det => {
                det.classList.remove('active')
            })

            btn[i].classList.add('active')
            images[i].classList.add('active')
            dets[i].classList.add('active')
        })
    })
}