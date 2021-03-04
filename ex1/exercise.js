
var strong = document.querySelectorAll("strong");
var a = document.querySelector("a");

function changeColor(color){
    strong.forEach(function(item){
        item.style.color = color;
    });
}
a.addEventListener('mouseenter', function() {changeColor('red')});
a.addEventListener('mouseleave', function() {changeColor('black')});
























