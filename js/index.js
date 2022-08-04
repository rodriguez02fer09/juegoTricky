const selectPlayer = document.querySelectorAll('.container-player')
const selectImage = document.querySelectorAll('.container-player .fig .img')

const resetPlayer = () => {
    selectPlayer[0].classList.remove('container-player__select')
    selectPlayer[1].classList.remove('container-player__select')
    selectImage[0].setAttribute("src", "../assets/select-white-x.svg")
    selectImage[1].setAttribute("src", "../assets/select-white-o.svg")
}

for (let i = 0 ;i < selectPlayer.length ; i ++ ){
    selectPlayer[i].addEventListener("click" , (e) => {
        resetPlayer()
        e.target.classList.add('container-player__select')
        if(e.target.classList[1] === "x" ){
            selectImage[0].setAttribute("src", "../assets/select-blue-x.svg")
        }else{
            selectImage[1].setAttribute("src", "../assets/select-blue-o.svg")

        }
    })
}
