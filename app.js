
// var MainImg = document.getElementById("MainImg");

// var smallimg = document.getElementsByClassName("small-img");

// smallimg[0].onclick = function(){
//     MainImg.src = smallimg[0].src;
// }

// smallimg[1].onclick = function(){
//     MainImg.src = smallimg[1].src;
// }

// smallimg[2].onclick = function(){
//     MainImg.src = smallimg[2].src;
// }

// smallimg[3].onclick = function(){
//     MainImg.src = smallimg[3].src;
// }

// let buy_btn = document.querySelectorAll(".buy-btn");

// console.log(buy_btn);


let small_img_group = document.querySelector('.small-img-group');

function productDetails(currenetElement){
    window.location.href='sproduct.html';

    // let src = currenetElement.parentElement.firstChild.getAttribute('src');
    let src = currenetElement.getAttribute('src');
                                                                            
    console.log(src);
    console.log("MainImgIn Side function ",MainImg);

 var MainImg = document.getElementById("MainImg");
 console.log("MainImgOut Side function ",MainImg);
}
