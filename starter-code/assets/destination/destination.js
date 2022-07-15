const tabBtn = document.querySelectorAll('.toggle')
const imgContainer = document.querySelector('.main-1')
const tabContainer = document.querySelector('.tab-content')

function getData() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            setData(data)
        })
}

getData()

const setData = (data) => {
    let value = data.destinations;

    value.forEach((val, i) => {
        tabContainer.innerHTML += ` 
    <div class='tab'>
    <h1>${val.name}</h1>
    <p>${val.description}</p>
    <hr>
    <div class='distance'>
        <div class='dis-1'>
            <P>AVG. DISTANCE</P>
            <h2>${val.distance}</h2>
        </div>
        <div class='dis-2'>
            <P>EST. TRAVEL TIME</P>
            <h2>${val.travel}</h2>
        </div>
    </div>
    </div>
`

        imgContainer.innerHTML += ` 
        <img src=${val.images.png} class='space-img'/> 
`
    })

    const img = document.querySelectorAll('.space-img')
    const content = document.querySelectorAll('.tab')
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