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

function getData() {
    fetch('./data.json')
        .then(res => res.json())
        // .then(data => console.log(data.destinations[0]))
        .then(data => {
            data.destinations
            let output;
            let outputImg;
            setValue(data, output, outputImg)
        })
}
const setValue = (value, output, outputImg) => {
    // console.log(value.destinations[0]);
    const val = value.destinations[0];
    output += ` 
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

const img = document.createElement('img')
img.src = val.images.png;
imgContainer.appendChild(img)

tabContent.innerHTML = output;
}
getData()