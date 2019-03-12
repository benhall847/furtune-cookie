
const myDiv = document.querySelector('[data-div]');
let index = -1;
let myArray = [];

function changeFortune(){
    if (index < (myArray.length - 1)){
        index++;
        myDiv.textContent = myArray[index];
    }else{
        fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        .then(function (response) { 
            return response.json() 
        })
        .then(function (data) { 
            index++;
            myDiv.textContent = data.fortune;
            myArray[myArray.length] = data.fortune;
        })
    };
};

function previousFortune(){
    index -= 1;
    if (index < 0){
        index = (myArray.length - 1);
    }
    myDiv.textContent = myArray[index];
};


function randomFortune(){
    fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
    .then(function (response) { 
    return response.json() 
    })
    .then(function (data) { 
    myDiv.textContent = data.fortune;
    myArray[myArray.length] = data.fortune;
    index = myArray.length - 1;
    })
};



const myNext = document.querySelector('[data-button]');

myNext.addEventListener('click', changeFortune);

const myPrev = document.querySelector('[data-button2]')

myPrev.addEventListener('click', previousFortune)

const myRandom = document.querySelector('[data-button3]')

myRandom.addEventListener('click', randomFortune);
