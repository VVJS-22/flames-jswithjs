let boyName = "jayesh"
let girlName = "pavithra"


const arrayBoy = boyName.split("")
const arrayGirl = girlName.split("")

const remainderG = arrayBoy.map(item => {
    const regex2 = new RegExp(`[${item}]`,"i")
    girlName = girlName.replace(regex2, "")
    return girlName
})

const remainderGname = remainderG.pop()


const remainderB = arrayGirl.map(item => {
    const regex1 = new RegExp(`[${item}]`,"i")
    boyName = boyName.replace(regex1, "")
    return boyName
})

const remainderBname = remainderB.pop()

console.log(remainderGname,remainderBname)

totalCount = (remainderBname+remainderGname).length

console.log(totalCount)


let flames = ["Friend", "Lover", "Attraction", "Marriage", "Enemy", "Sister"]

console.log(flames)

// const removalIndex = (totalCount-1)%6

// console.log(removalIndex)

let i

for (i = 6; i > 1; i--) {
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
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }


// //======================================================================================

// //totalCount-1%6 > length , no need to rearrrange || totalCount-1%6 == 0 , no need to rearrange

// //=======================================================================================


// flames.splice((totalCount-1)%5,1)
// console.log(flames)
// console.log((totalCount-1)%5, flames.length-1)
// if ((totalCount-1)%5 < flames.length-1 || (totalCount-1)%5 != 0) {
//     flamesPart = flames.splice((totalCount-1)%5,)
//     console.log(flames)
//     flames = [...flamesPart,...flames]
//     console.log(flames)
// }

// // flamesPart = flames.splice(removalIndex,)
// // console.log(flames)
// // flames = [...flamesPart,...flames]
// // console.log(flames)




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
