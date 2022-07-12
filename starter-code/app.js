const navLink = document.querySelectorAll('.link');

navLink.forEach((nav, i) => {
    nav.addEventListener('click', () => {
        navLink.forEach((nav) => {
            nav.classList.remove('active')
        })
        navLink[i].classList.add('active')
    })

})


const tabBtn = document.querySelectorAll('.toggle')
const content = document.querySelectorAll('.tab') 
const tabContent = document.querySelector('.tab')
const imgContainer = document.querySelector('.main-1')
const tabContainer = document.querySelector('.tab-content')

function getData() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            setMoon(data)
            setMars(data)
            setEuropa(data)
            setTitan(data)
        })
}

getData()

const setMoon = (value) => {
    const val = value.destinations[0];
    tabContent.innerHTML += ` 
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
`

    const img = document.createElement('img')
    img.classList.add('active')
    img.src = val.images.png;
    imgContainer.appendChild(img)
}


const setMars = (value) => {
    const container = document.createElement('div')
    container.classList.add('tab')
    const val = value.destinations[1]
    container.innerHTML += `
    <h1>${val.name}</h1>
    <p>${val.description}</p>
    <hr>
    <div class='distance'>
        <div class='dis-1'>
            <P>AVG. DISTANCE</P>
            <h2>${val.distance}</h2>
        </div>
        <div class='dis-2'>
            <P>AVG. DISTANCE</P>
            <h2>${val.travel}</h2>
        </div>
    </div>
    `
    tabContainer.appendChild(container)

    const img = document.createElement('img')
    img.src = val.images.png;
    imgContainer.appendChild(img)

}

const setEuropa = (value) => {
    const container = document.createElement('div')
    container.classList.add('tab')
    const val = value.destinations[2]
    container.innerHTML += `
    <h1>${val.name}</h1>
    <p>${val.description}</p>
    <hr>
    <div class='distance'>
        <div class='dis-1'>
            <P>AVG. DISTANCE</P>
            <h2>${val.distance}</h2>
        </div>
        <div class='dis-2'>
            <P>AVG. DISTANCE</P>
            <h2>${val.travel}</h2>
        </div>
    </div>
    `
    tabContainer.appendChild(container)

    const img = document.createElement('img')
    img.src = val.images.png;
    imgContainer.appendChild(img)

}

const setTitan = (value) => {
    const container = document.createElement('div')
    container.classList.add('tab')
    const val = value.destinations[3]
    container.innerHTML += `
    <h1>${val.name}</h1>
    <p>${val.description}</p>
    <hr>
    <div class='distance'>
        <div class='dis-1'>
            <P>AVG. DISTANCE</P>
            <h2>${val.distance}</h2>
        </div>
        <div class='dis-2'>
            <P>AVG. DISTANCE</P>
            <h2>${val.travel}</h2>
        </div>
    </div>
    `
    tabContainer.appendChild(container)

    const img = document.createElement('img')
    img.src = val.images.png;
    imgContainer.appendChild(img)

}

tabBtn.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        tabBtn.forEach(btn => {
            btn.classList.remove('active')
        })

        
        for (let index = 0; index < content.length; index++) {
            const element = content[index];
            element.classList.remove('active')
        }

        tabBtn[i].classList.add('active')
        content[i].classList.add('active')
    })
})
console.log(content); 
console.log(tabBtn);



