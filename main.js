import './style.css'
// import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    {{> header }}
    <h1>Hello Vite!</h1>
  </div>
`

// setupCounter(document.querySelector('#counter'))