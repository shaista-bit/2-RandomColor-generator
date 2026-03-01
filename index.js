// ...........................random color generater.................



function getrandomcolor() {   //random color generating function
    let val1 = Math.ceil(0 + Math.random() * 255);// Math.ceil()    (converts decimal to integer)
    let val2 = Math.ceil(0 + Math.random() * 255);// Math.random()  (this formulah generating a random number between 0 to 255)
    let val3 = Math.ceil(0 + Math.random() * 255);
    return `rgb(${val1},${val2},${val3})`
}



//..................Ist WAY OF THIS QUESTION.............

// let container = document.getElementById('container').children;
// console.log(container);//it return HTML collection 

// //first we will convert this HTML collection to an array through Array.from() method
// //now we will get this array with forEach() loop
// let aa = setInterval(() => {Array.from(container).forEach(e=>{
//     e.style.backgroundColor = getrandomcolor()
//     e.style.color = getrandomcolor()
// })}, 1000);// now it is running like disco lights



//..................2end WAY OF THIS QUESTION.............

// it is looking bulkey because the way of getting  elem
//  we get with 'id
let x = document.querySelectorAll(".myBox")

 function colors() { 
    document.querySelectorAll(".myBox").forEach(e => {
    e.style.backgroundColor = getrandomcolor();
    e.style.color = getrandomcolor();
})};
let time = setInterval(colors,100);


//..................3rd WAY OF THIS QUESTION.............

let z= setInterval(() => {
    document.querySelector("#color").style.background = 'cyan'
}, 1000);
z= setInterval(() => {
    document.querySelector("#color").style.background = '#984ae5'
}, 2000);
 z= setInterval(() => {
    document.querySelector("#color").style.background = '#f33d3d'
}, 3000);
 z= setInterval(() => {
    document.querySelector("#color").style.background = '#2d15e5'
}, 4000);
