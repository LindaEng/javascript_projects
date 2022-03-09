const txtInput = document.querySelector(".inputs input")
const checkBtn = document.querySelector(".inputs button")
const palinResult = document.querySelector(".info-text")

function checkPalindrome(str) {
    let p1 = 0
    let p2 = str.length - 1
    while(p1 < p2) {
        if(str[p1].toLowerCase() !== str[p2].toLowerCase()) return false
        p1++
        p2--
    }
    return true
}

txtInput.addEventListener("keyup", () => {
    //remove whitespaces and special chars
    let filteredInput = txtInput.value.replace(/[^A-Z0-9]/ig, "")
    //if something is in the textfield, add active state to class
    if(filteredInput) {
        return checkBtn.classList.add("active")
    } 
    checkBtn.classList.remove("active")
})

checkBtn.addEventListener("click", () => {
    let filteredInput = txtInput.value.replace(/[^A-Z0-9]/ig, "")
    const isPalindrome = checkPalindrome(filteredInput)
    palinResult.style.display = "block"

    if(isPalindrome) {
        palinResult.innerHTML = `Yes, <span>${txtInput.value}</span> is a palindrome!`
    } else {
        palinResult.innerHTML = `No <span>${txtInput.value}</span> is not a palindrome`
    }
})