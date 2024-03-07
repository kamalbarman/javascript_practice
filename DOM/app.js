let smallImg=document.getElementsByClassName("oldImg");
for(let i = 0; i<smallImg.length; i++){
    console.dir(smallImg[i]);
    smallImg[i].src="assets/spiderman_img.png";
    console.log(i);
}