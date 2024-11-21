
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
    console.log("The button was clicked")
}

function save() {
    let countStr = count + " -"
    saveEl.textContent += countStr
    count = 0
    countEl.textContent = count
    console.log(countStr)
}

function reset() {
    count = 0
    saveEl.textContent = count
    countEl.textContent = count
    
}


