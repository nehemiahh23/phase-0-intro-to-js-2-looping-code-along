// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"]

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`)
    }

    return gifts
}

function writeCards(names, event) {
    const thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return thankYous;
}

console.log(thankYous)

function countDown(int) {
    while(int >= 0) {
        console.log(int)
        int--
    }
}