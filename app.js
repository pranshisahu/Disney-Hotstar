const carousel = document.querySelector(".carousel");
let sliders = [];
let slideindex = 0;

const createSlide = () => {
    if(slideindex >= movies.length){
        slideindex = 0;
    }

    let slidele = document.createElement('div');
    let imgele = document.createElement('img');
    let contentele = document.createElement('div');
    let h1ele = document.createElement('h1');
    let pele = document.createElement('p');

    imgele.appendChild(document.createTextNode(''));
    h1ele.appendChild(document.createTextNode(movies[slideindex].name));
    pele.appendChild(document.createTextNode(movies[slideindex].des));
    contentele.appendChild(h1ele);
    contentele.appendChild(pele); 
    slidele.appendChild(contentele);
    slidele.appendChild(imgele);
    carousel.appendChild(slidele);
    imgele.src = movies[slideindex].image;
    slideindex++;
    slidele.className = 'slider';
    contentele.className = 'slide-content';
    h1ele.className ='movie-title';
    pele.className ='movie-des';

    sliders.push(slidele);

    if(sliders.length)
    {
        sliders[0].style.marginLeft = `calc(-${100*(sliders.length-2)}% - ${30*(sliders.length-2)}px)`;
    } 
}

for(let i=0; i<3 ;i++){
    createSlide();
}

setInterval(()=>{
    createSlide();
},3000)

const videoCards = [...document.querySelectorAll('.video-card')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=>{
        // console.log("mouse over detected");
        let video = item.children[1];
        video.play();
    })
    item.addEventListener('mouseleave', ()=>{
        let video = item.children[1];
        video.pause();
    })
})

let cardContiners = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nextBtns = [...document.querySelectorAll('.nxt-btn')];

cardContiners.forEach( (item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
    

    nextBtns[i].addEventListener('click', ()=>{
        item.scrollLeft += containerWidth-200;
    })
    preBtns[i].addEventListener('click', ()=>{
        item.scrollLeft -= containerWidth+200;
    })

})

