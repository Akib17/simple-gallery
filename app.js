const currentImg = document.getElementById('currentImg')
const imgAll = document.querySelectorAll('.imgAll img')

const opacity = .5
imgAll[0].style.opacity = opacity

imgAll.forEach(img => {
    img.addEventListener('click', e => {

        imgAll.forEach(img => img.style.opacity = 1)

        currentImg.src = e.target.src
        e.target.style.opacity = opacity

        currentImg.classList.add('fadeIn')

        setTimeout(() => {
            currentImg.classList.remove('fadeIn')
        }, 500)
        
    })
})