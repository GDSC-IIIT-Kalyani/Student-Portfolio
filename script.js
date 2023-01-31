// let h1 = document.getElementById("hov");
let n = 4;
var x = document.body.scrollHeight / n;
const z = x;
var y = x;

document.getElementById("meet").addEventListener('mouseover', autoScroll);

function autoScroll(){
    let s = setInterval(delay, 1000);

    function delay(){
        window.scrollTo(0, x);
        x = x + y;
        if(x >= z * n){
            x = z;
            clearInterval(s);
        }
    }
}
