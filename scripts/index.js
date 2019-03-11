// const theFortunes = ["A person who has nothing looks at all there is and wants something.\nA person who has something looks at all there is and wants all the rest.", "A diplomat is a man who can convince his wife she'd look stout in a fur coat.", "I prefer the most unjust peace to the most righteous war.\n\t\t-- Cicero\n\nEven peace may be purchased at too high a price.\n\t\t-- Poor Richard","\"I take Him shopping with me. I say, 'OK, Jesus, help me find a bargain'\"\n\t\t-- Tammy Faye Bakker", "\"I take Him shopping with me. I say, 'OK, Jesus, help me find a bargain'\"\n\t\t-- Tammy Faye Bakker", "Time is but the stream I go a-fishing in.\n\t\t-- Henry David Thoreau", "\"Kill the Wabbit, Kill the Wabbit, Kill the Wabbit!\"\n\t\t-- Looney Tunes, \"What's Opera Doc?\" (1957, Chuck Jones)"]


const myDiv = document.querySelector('[data-div]');
let index = -1;
let myArray = [];

function changeFortune(){
    fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
        .then(function (response) { 
        return response.json() 
    })
        .then(function (data) { 
        index++;
        myDiv.textContent = data.fortune;
        myArray[index] = data.fortune
    })
}
function previousFortune(){
    index -= 1;
    if (index < 0){
        index = (myArray.length - 1);
    }
    myDiv.textContent = myArray[index];
}
function randomFortune(){
    fetch('https://my-little-cors-proxy.herokuapp.com/http://yerkee.com/api/fortune')
    .then(function (response) { 
    return response.json() 
})
    .then(function (data) { 
    myDiv.textContent = data.fortune;
    myArray[index] = data.fortune
})
    index++
}



const myNext = document.querySelector('[data-button]');

myNext.addEventListener('click', changeFortune);

const myPrev = document.querySelector('[data-button2]')

myPrev.addEventListener('click', previousFortune)

const myRandom = document.querySelector('[data-button3]')

myRandom.addEventListener('click', randomFortune);
