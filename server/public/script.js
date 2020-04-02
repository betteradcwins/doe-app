document.querySelector('header button')
    .addEventListener('click', function () {
        document.querySelector('.form')
            .classList.toggle('hide')
    })

fetch('/donors')
    .then(resp => resp.json())
    .then(data => {
        const donors = document.querySelector('.donors')

        Array.from(data).reverse().forEach((donor, i) => {
            if (i >= 8) return;

            const p = createElement('p', '', donor.name)
            const blood = createElement('div', 'blood', donor.blood)
            const div = createElement('div', 'donor')

            div.appendChild(blood)
            div.appendChild(p)

            donors.appendChild(div)

        })
    })


function createElement(tagName, className = '', value = '') {
    const element = document.createElement(tagName)
    element.className = className
    element.innerHTML = value

    return element
}