const yourNameDiv = document.querySelector("#your-name")
const partnerNameDiv = document.querySelector("#partner-name")
const submitBtn = document.querySelector('#submit')
const resultDiv = document.querySelector("#result")


const flamesCalc = () => {
    let flames = ["Friend", "Lover", "Attraction", "Marriage", "Enemy", "Sister"]

    let yourName = yourNameDiv.value
    let partnerName = partnerNameDiv.value
    console.log(yourName, partnerName)

    const splitArray = splitNames(yourName, partnerName)
    const yourRemainder = getRemainder(splitArray[1], yourName)
    const partnerRemainder = getRemainder(splitArray[0],partnerName)
    const setCount = getCount(yourRemainder, partnerRemainder)
    const setResult = getResult(flames,setCount)
    resultDiv.innerHTML = setResult
}


const splitNames = (yourName, partnerName) => {

    if (yourName == "" || partnerName == "") {
        console.log("Enter both names")
        resultDiv.innerHTML = "Enter both names!"
    } else {
        const splitYourName = yourName.split("")
        const splitPartnerName = partnerName.split("")

        console.log([splitYourName, splitPartnerName])
        resultDiv.innerHTML = ""
        return [splitYourName, splitPartnerName]
    }
}

const getRemainder = (splitName, name) => {
    console.log(splitName, name)

    splitName.map(item => {
        const regex = new RegExp(`${item}`,"i")
        name = name.replace(regex, "")
        console.log(name)
    })
    console.log(name)
    return name
}

const getCount = (yourRemainder, partnerRemainder) => {
    const totalWords = yourRemainder+partnerRemainder
    const totalCount = totalWords.length
    console.log(totalCount)
    return totalCount
}


const getResult = (flames,setCount) => {
    for (let i = 6; i > 1; i--) {
        flames.splice((setCount-1)%i,1)
        console.log(flames)
        console.log((setCount-1)%i, flames.length-1)
    
        if ((setCount-1)%i < flames.length-1 || (setCount-1)%i != 0) {
            flamesPart = flames.splice((setCount-1)%i,)
            console.log(flames)
            flames = [...flamesPart,...flames]
            console.log(flames)
        }
    }
    return flames
}