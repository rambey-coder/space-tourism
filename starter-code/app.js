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
const tabContent = document.querySelector('.tab')
const imgContainer = document.querySelector('.main-1')
const tabContainer = document.querySelector('.main-section')

function getData() {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => {
            data.destinations
            setMoon(data)
            setMars(data)
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
    img.src = val.images.png;
    imgContainer.appendChild(img)
}

// const setMars = (value) => {
//     const val = value.destinations[1];
//     tabContent.innerHTML += ` 
    // <h1>${val.name}</h1>
    // <p>${val.description}</p>
    // <hr>
    // <div class='distance'>
    //     <div class='dis-1'>
    //         <P>AVG. DISTANCE</P>
    //         <h2>${val.distance}</h2>
    //     </div>
    //     <div class='dis-2'>
    //         <P>AVG. DISTANCE</P>
    //         <h2>${val.travel}</h2>
    //     </div>
    // </div>
// `

    // const img = document.createElement('img')
    // img.src = val.images.png;
    // imgContainer.appendChild(img)
// }

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