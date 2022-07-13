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
        const img = document.createElement('img')
        // img.classList.add('active')
        img.src = val.images.png;
        imgContainer.appendChild(img)

        // console.log(i);
    })
    
    const content = document.querySelectorAll('.tab')
    content[0].classList.add('active')
    toggle(content)
}

const toggle = (content) => {
    tabBtn.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            tabBtn.forEach((btn) => {
                btn.classList.remove('active')
            })

            content.forEach(cont => {
                cont.classList.remove('active')
            })
    
            tabBtn[i].classList.add('active')
            content[i].classList.add('active')
        })
    })
    
}




/* CREW */
// const engineer = (crew) => {
//     console.log(crew);
// }
// const commander = (crew) => {
//     console.log(crew);
// }
// const specialist = (crew) => {
//     console.log(crew);
// }
// const pilot = (crew) => {
//     console.log(crew);
// }