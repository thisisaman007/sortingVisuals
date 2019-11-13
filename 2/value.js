var getinput= function(){
    return{
    algo : document.querySelector('.algo').value,
    arrangement : document.querySelector('.arrangement').value,
    arrayLength : document.querySelector('.arraySize').value,
    delay : document.querySelector('.delay').value
    };
}
var input;
var addevent= function(){
    input= getinput();
    localStorage.setItem("arrayLength", input.arrayLength);
    localStorage.setItem("delay", input.delay);
    localStorage.setItem("algo", input.algo);
    localStorage.setItem("arrangement", input.arrangement);
    console.log(input);
}

document.querySelector('.start').addEventListener('click', addevent);