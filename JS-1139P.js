function increase(){
    const numberVariable=document.getElementById("numberId")
    let increaseNumber=parseInt(numberVariable.innerHTML)
    numberVariable.innerHTML=increaseNumber+1
}

function reduce(){
    const numberVariable=document.getElementById("numberId")
    let increaseNumber=parseInt(numberVariable.innerHTML)
    numberVariable.innerHTML=increaseNumber-1
}

function reset(){
    const numberVariable=document.getElementById("numberId")
    numberVariable.innerHTML=0
}