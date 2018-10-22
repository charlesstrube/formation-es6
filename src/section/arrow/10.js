
function myFunction () {
    console.log('myFunction -> this: ', this)
}

const myArrowFunction = () => {
    console.log('myArrowFunction -> this: ', this)
}

const root = document.querySelector('#root')

root.addEventListener('click', myFunction)
root.addEventListener('click', myArrowFunction)
