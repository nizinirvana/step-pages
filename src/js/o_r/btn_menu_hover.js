const imgPurple =document.querySelector('.logo-img .logo-img-item')

imgPurple.addEventListener('mouseover', function(){
    event.target.src = "./dist/img/o_r/header/logo-hover.png"
})
imgPurple.addEventListener('mouseout', function(){
    event.target.src = "./dist/img/o_r/header/logo_company.png"
})