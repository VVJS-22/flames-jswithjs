let boyName = "ajithkumar" //ajt
let girlName = "shalini" //slni


console.log(boyName, girlName)


let sampleRegex = /a/i
// girlName = girlName.replace(sampleRegex, "")

// sampleRegex = /j/i
// girlName = girlName.replace(sampleRegex, "")

// sampleRegex = /i/i
// girlName = girlName.replace(sampleRegex, "")

// sampleRegex = /t/i
// girlName = girlName.replace(sampleRegex, "")

// sampleRegex = /h/i
// girlName = girlName.replace(sampleRegex, "")

// console.log(girlName)






const arrayBoy = boyName.split("")
const arrayGirl = girlName.split("")

console.log(arrayBoy, arrayGirl)

const remainderG = arrayBoy.map(item => {
    const regex2 = new RegExp(`${item}`,"i")
    
    console.log(regex2)
    girlName = girlName.replace(regex2, "")
    return girlName
})

const remainderGname = remainderG.pop()

console.log(remainderGname)


const remainderB = arrayGirl.map(item => {
    const regex1 = new RegExp(`${item}`,"i")
    boyName = boyName.replace(regex1, "")
    return boyName
})

const remainderBname = remainderB.pop()

console.log(remainderGname,remainderBname)

totalCount = (remainderBname+remainderGname).length

console.log(totalCount)

//=====================================================

//Part 2

let flames = ["Friend", "Lover", "Attraction", "Marriage", "Enemy", "Sister"]

console.log(flames)

// const removalIndex = (totalCount-1)%6

// console.log(removalIndex)



for (let i = 6; i > 1; i--) {
    flames.splice((totalCount-1)%i,1)
    console.log(flames)
    console.log((totalCount-1)%i, flames.length-1)

    if ((totalCount-1)%i < flames.length-1 || (totalCount-1)%i != 0) {
        flamesPart = flames.splice((totalCount-1)%i,)
        console.log(flames)
        flames = [...flamesPart,...flames]
        console.log(flames)
    }
}

// flames.splice((totalCount-1)%6,1)
// console.log(flames)
// console.log((totalCount-1)%6, flames.length-1)

// if ((totalCount-1)%6 < flames.length-1 || (totalCount-1)%6 != 0) {
//     flamesPart = flames.splice((totalCount-1)%6,)
//     console.log(flamesPart)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }


// // //======================================================================================

// // //totalCount-1%6 > length , no need to rearrrange || totalCount-1%6 == 0 , no need to rearrange

// // //=======================================================================================


// flames.splice((totalCount-1)%5,1)
// console.log(flames)
// console.log((totalCount-1)%5, flames.length-1)
// if ((totalCount-1)%5 < flames.length-1 || (totalCount-1)%5 != 0) {
//     flamesPart = flames.splice((totalCount-1)%5,)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }

// // // flamesPart = flames.splice(removalIndex,)
// // // console.log(flames)
// // // flames = [...flamesPart,...flames]
// // // console.log(flames)




// flames.splice((totalCount-1)%4,1)
// console.log(flames)

// console.log((totalCount-1)%4, flames.length-1)

// if ((totalCount-1)%4 < flames.length-1 || (totalCount-1)%4 != 0) {
//     flamesPart = flames.splice((totalCount-1)%4,)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }




// flames.splice((totalCount-1)%3,1)
// console.log(flames)
// console.log((totalCount-1)%3, flames.length-1)
// if ((totalCount-1)%3 < flames.length-1 || (totalCount-1)%3 != 0) {
//     flamesPart = flames.splice((totalCount-1)%3,)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }





// flames.splice((totalCount-1)%2,1)
// console.log(flames)
// console.log((totalCount-1)%2, flames.length-1)
// if ((totalCount-1)%2 < flames.length-1 || (totalCount-1)%2 != 0) {
//     flamesPart = flames.splice((totalCount-1)%2,)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }
