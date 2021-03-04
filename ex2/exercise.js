function size() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    document.getElementById("screen").innerHTML = "width:" + w + "height:" + h;
//if (w >800 ){
 //document.body.style.backgroundColor = "red";
//}else if(w === 900){
// document.body.style.backgroundColor = "orange";
//
}
window.addEventListener('resize', size)