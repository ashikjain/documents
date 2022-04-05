function enlargeimage(img2){
    img2.style.width="50%" ;
    img2.style.height="200%" ;
    img2.style.transform = "scale(1.5)";
    img2.style.margin="70px";
    img2.style.transition ="transform 2s ease";
}

function resize(srcimg){
    srcimg.style.width="auto" ;
    srcimg.style.height="auto" ;
    srcimg.style.transform = "scale(1.5)";
    srcimg.style.transition ="transform 0.2s ease";
    srcimg.style.margin="40px";
}