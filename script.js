const btn = document.querySelectorAll('.btn');

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener('click',() =>{

    });
};

const img = document.querySelector('.img');
const blackBox = document.querySelector('.black');

img.addEventListener('mouseenter', () => {
    blackBox.style.opacity = '1';
    blackBox.style.visibility = 'visible';
});

img.addEventListener('mouseleave', () => {
    blackBox.style.opacity = '0';
    blackBox.style.visibility = 'hidden';
});
document.querySelector('.img2').addEventListener("mouseenter",() =>{
    document.querySelector('.black2').style.opacity = "1";
    document.querySelector('.black2').style.visibility = 'visible';
});
document.querySelector('.img2').addEventListener("mouseleave",() =>{
    document.querySelector('.black2').style.opacity = "0";
    document.querySelector('.black2').style.visibility = 'hidden';
});
document.querySelector('.img3').addEventListener("mouseenter",() =>{
    document.querySelector('.black3').style.opacity = "1";
    document.querySelector('.black3').style.visibility = 'visible';
});
document.querySelector('.img3').addEventListener("mouseleave",() =>{
    document.querySelector('.black3').style.opacity = "0";
    document.querySelector('.black3').style.visibility = 'hidden';
});
document.querySelector('.img4').addEventListener("mouseenter",() =>{
    document.querySelector('.black4').style.opacity = "1";
    document.querySelector('.black4').style.visibility = 'visible';
});
document.querySelector('.img4').addEventListener("mouseleave",() =>{
    document.querySelector('.black4').style.opacity = "0";
    document.querySelector('.black4').style.visibility = 'hidden';
});
document.querySelector('.img5').addEventListener("mouseenter",() =>{
    document.querySelector('.black5').style.opacity = "1";
    document.querySelector('.black5').style.visibility = 'visible';
});
document.querySelector('.img5').addEventListener("mouseleave",() =>{
    document.querySelector('.black5').style.opacity = "0";
    document.querySelector('.black5').style.visibility = 'hidden';
});
document.querySelector('.img6').addEventListener("mouseenter",() =>{
    document.querySelector('.black6').style.opacity = "1";
    document.querySelector('.black6').style.visibility = 'visible';
});
document.querySelector('.img6').addEventListener("mouseleave",() =>{
    document.querySelector('.black6').style.opacity = "0";
    document.querySelector('.black6').style.visibility = 'hidden';
});