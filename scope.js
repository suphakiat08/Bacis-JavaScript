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

// ----------------------------------------------------------------------------------------

// console.log(i)
// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

// console.log('---------------------------------------------------------------------------------------------')
// console.log(i)

// for(let i = 10; i < 15; i++){
//     console.log(i)
// }

// จะเกิด Error เพราะ i จะสามารถมองเห็นได้เฉพาะใน for เท่านั้น
