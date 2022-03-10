import React, {useState} from "react"
import './index.css'

const Card = (props) => {
    const [phrase, setPhrase] = useState('')
    const [isPalindrome, setPalindrome] = useState(null)
    const [submit, setSubmit] = useState(null)

    const updatePhrase = (event) => {
        setPhrase(event.target.value)
        console.log(phrase)
    }

    const submitHandler = () => {
        setSubmit(true)
    }

    const submitReset = () => {
        setSubmit(false)
    }

    const verifyPalindrome = (str) => {
        str = str.replace(/[^A-Z0-9]/ig,"").toLowerCase()
        let p1 = 0
        let p2 = str.length - 1
        while(p1 < p2) {
            if(str[p1] !== str[p2]) {
                setPalindrome(false)
                return false
            }
            p1++
            p2--
        }
        setPalindrome(true)
        return true
    }

    return(
        <div className="wrapper">
            <header>
                <h1>Palindrome Checker</h1>
                <p> A palindrome is a word that is the same backwards</p>
            </header>
            <div className="inputs">
                <input type="text" placeholder="Enter phrase here"
                value={phrase} 
                onChange={updatePhrase}
                onClick={submitReset}
                />
                <button className={(phrase) ? "active" : ""}
                onClick={() =>{
                    verifyPalindrome(phrase)
                    submitHandler()
                } }> Check Palindrome </button>
                <p className={(submit) ? "info-text active" : "info-text"}>{
                    (isPalindrome) ? `Yes ${phrase} is a palindrome` : `No ${phrase} is not a palindrome`
                }</p>
            </div>
        </div>
    )
}

export default Card