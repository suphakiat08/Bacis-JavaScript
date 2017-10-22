// var a
// console.log(a)
// console.log(b)

// if(true) {
//     a = 1

//     var b = 2
//     console.log(b)
// }

// console.log(a)
// console.log(b)

// JavaScript Seen ----------------------------------------------------------------------------------------------------
// var a, b
// console.log(a)
// console.log(b)

// if(true) {
//     a = 1

//     b = 2
//     console.log(b)
// }

// console.log(a)
// console.log(b)


function a1(fn) {
    var a = 5
    console.log(`a = ${a}`)
    console.log(fn)
    console.log(typeof fn)

    if(typeof fn === 'function'){
        fn()
    }
}

function b1() {
    var b = 1
    console.log(`b = ${b}`)
}

a1(b1)