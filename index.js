

document.getElementById("goodLuckButton").onclick = function(){click()};

clickText = document.getElementById("clicksText")

var clicks = 0


function click(){
    console.log("click")
    clicks++
    clickText.innerHTML = `Clicks: ${clicks}`
    let guess = Math.floor(Math.random() * 1001)
    let botGuess = Math.floor(Math.random() * 1001)
    console.log(guess)
    console.log(botGuess)
    if(guess == botGuess){win(clicks)}
}


function win(click){
    clickText.innerHTML = `Clicks: ${clicks}`
    alert("Wow")
    alert("You did it")
    alert(`After ${clicks} clicks`)
    alert("You just matched 2 random numbers between 1 and 1000")
    alert("Congrats")
    clicks = 0
}





