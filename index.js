let wScrollContainer = document.querySelector("#wyrdGallery");
let wBackBtn = document.querySelector("#wyrdBackBtn");
let wForwardBtn = document.querySelector("#wyrdForwardBtn");

wScrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    wScrollContainer.scrollLeft += e.deltaY;
})
wBackBtn.addEventListener("click", ()=>{
    wScrollContainer.style.scrollBehaviour = "smooth";
    wScrollContainer.scrollLeft -= 300;
})
wForwardBtn.addEventListener("click", ()=>{
    wScrollContainer.style.scrollBehaviour = "smooth";
    wScrollContainer.scrollLeft+= 300;
})

let nScrollContainer = document.querySelector("#nekoGallery");
let nBackBtn = document.querySelector("#nekoBackBtn");
let nForwardBtn = document.querySelector("#nekoForwardBtn");

nScrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    nScrollContainer.scrollLeft += e.deltaY;
})
nBackBtn.addEventListener("click", ()=>{
    nScrollContainer.style.scrollBehaviour = "smooth";
    nScrollContainer.scrollLeft -= 300;
})
nForwardBtn.addEventListener("click", ()=>{
    nScrollContainer.style.scrollBehaviour = "smooth";
    nScrollContainer.scrollLeft+= 300;
})

let bScrollContainer = document.querySelector("#brickGallery");
let bBackBtn = document.querySelector("#brickBackBtn");
let bForwardBtn = document.querySelector("#brickForwardBtn");

bScrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    bScrollContainer.scrollLeft += e.deltaY;
})
bBackBtn.addEventListener("click", ()=>{
    bScrollContainer.style.scrollBehaviour = "smooth";
    bScrollContainer.scrollLeft -= 300;
})
bForwardBtn.addEventListener("click", ()=>{
    bScrollContainer.style.scrollBehaviour = "smooth";
    bScrollContainer.scrollLeft+= 300;
})


let tdScrollContainer = document.querySelector("#tdGallery");
let tdBackBtn = document.querySelector("#tdBackBtn");
let tdForwardBtn = document.querySelector("#tdForwardBtn");

tdScrollContainer.addEventListener("wheel", (e)=>{
    e.preventDefault();
    tdScrollContainer.scrollLeft += e.deltaY;
})
tdBackBtn.addEventListener("click", ()=>{
    tdScrollContainer.style.scrollBehaviour = "smooth";
    tdScrollContainer.scrollLeft -= 300;
})
tdForwardBtn.addEventListener("click", ()=>{
    tdScrollContainer.style.scrollBehaviour = "smooth";
    tdScrollContainer.scrollLeft+= 300;
})
