const context = document.body;
const car = document.createElement("img");
car.setAttribute("class", "car");
car.setAttribute("src", "car.png");
let y = (context.clientHeight / 2) - 40;
let x = (context.clientWidth / 2) - 80;
const VELOCITY = 10;
car.style.top = `${y}px`;
car.style.left = `${x}px`;

context.appendChild(car);


window.addEventListener("keydown", (e) => {
    switch(e.keyCode){
        case 39:
            // Right
            moveRight(car);
        break;
        case 37:
            // Left
            moveleft(car);
        break;
        case 40:
            // Down
            moveDown(car);
        break;
        case 38:
            // Top
            moveTop(car);
        break;
    }
});

function moveTop(car){
    car.style.transform = `rotate(270deg)`;
    y = y - VELOCITY;
    if(y < 20) y = 20;
    car.style.top = `${y}px`;
}
function moveleft(car){
    car.style.transform = `rotate(180deg)`;
    x = x - VELOCITY;
    if(x < 0) x = 0;
    car.style.left = `${x}px`;
}
function moveRight(car){
    car.style.transform = `rotate(360deg)`;
    x = x + VELOCITY;
    if(x > ((context.clientWidth) - 80)) x = (context.clientWidth) - 80;
    car.style.left = `${x}px`;
    console.log(x,context.clientWidth)
}
function moveDown(car){
    car.style.transform = `rotate(90deg)`;
    y = y + VELOCITY;
    if(y > ((context.clientHeight - car.height) - 24)) y = ((context.clientHeight - car.height)  - 24);
    car.style.top = `${y}px`;
}