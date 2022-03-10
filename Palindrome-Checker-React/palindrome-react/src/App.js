import React from 'react'
import './index.css'
import Card from './Card'

function App() {

  const verifyPalindrome = (str) => {
    str = str.replace([/[^A-Z0-9]/ig, '']).toLowerCase()
    let p1 = 0
    let p2 = str.length-1
    while(p1 < p2) {
      if(str[p1] !== str[p2]) {
        return false
      }
    }
    return true
  }

  return (
    <div className="App">
     <Card verify={verifyPalindrome}/>
    </div>
  );
}

export default App;
