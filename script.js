const bg = document.querySelector(".hero")

let load = 0;
let int = setInterval(blurring, 15);

function blurring() {
    load++;
  if (load > 99) {
    clearInterval(int);
  }
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav(){
    if(window.scrollY > nav.offsetHeight +150){
        nav.classList.add('active')
    } else{
        nav.classList.remove('active')
    }
}

const answer = document.querySelectorAll(".faq-text");
const toggles = document.querySelectorAll(".faq-toggle");
const faq = document.querySelectorAll(".faq");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});

const contact = document.querySelector('.footer-container')
window.addEventListener('scroll', fixFooter)
function fixFooter(){
    if(window.scrollY > nav.offsetHeight +150){
        contact.classList.add('active')
    } else{
        contact.classList.remove('active')
    }
}

const tests = document.querySelector('.testimonials')
const test = document.querySelector('.comment')
const author = document.querySelector('.author')

setInterval(getComment,10000)

    let times = 0
function getComment(){
    if(times === 0){
    test.innerText = '"Andy has taught my children for a couple of years and they enjoy the lessons very much. They do various styles, recordings and always have fun."'
    author.innerText = 'Paul Lee - Parent'
    times++;
    } else if(times ===1){
    test.innerText = '"Andy is a very capable and friendly guitar teacher who really knows his stuff when it comes to playing and teaching. He taught many of the students at Greendown School when I was Head of Music and helped to set up a ‘Rock School’ which was hugely popular. Andy and I have worked together on many occasions in both theatres, school productions and also studio sessions. I would always recommend Andy to anyone wanting to learn the electric guitar and he’s always my first choice if I need a great guitar player in the orchestra pit!"'
    author.innerText = 'Andre Pysanczyn - Music Teacher / Composer'
    times++;
    } else if(times ===2){
        test.innerText = '"Another comment A"'
        author.innerText = 'Author A'
        times++
    }else {
        test.innerText = '"Another comment B"'
        author.innerText = 'Author B'
        times=0;
    }
}
