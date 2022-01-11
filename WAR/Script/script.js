/*----- constants -----*/
/*----- cached element references -----*/
let card1El = document.getElementById("card1")
let card2El = document.getElementById("card2")
let  player1El = document.getElementById("player1T")
let player2El = document.getElementById("player2T")
let counter1El = document.getElementById("totalValue1")
let counter2El = document.getElementById("totalValue2")
let deck = 
[
    { image:"photos/QH.jpg",
    name:"Queen of Heartd",
    value:10,
    },
    { image:"photos/2H.jpg",
    name:"Two of Hearts",
    value:2,
    },
    { image:"photos/2C.jpg",
    name:"Two of Clubs",
    value:2,
    },
    { image:"photos/10C.jpg",
    name:"Ten of Clubs",
    value:10,
    },
    { image:"photos/2D.jpg",
    name:"Two of Diamonds",
    value:2,
    },
    { image:"photos/3S.jpg",
    name:"Three of Spades",
    value:3,
    },
    { image:"photos/QH.jpg",
    name:"Queen of Heartd",
    value:10,
    },
    { image:"photos/3D.jpg",
    name:"Three of Diamonds",
    value:3,
    },
    { image:"photos/3H.jpg",
    name:"Three of Hearts",
    value:3,
    },
    { image:"photos/4S.jpg",
    name:"Four of Spades",
    value:4,
    },
    { image:"photos/QH.jpg",
    name:"Queen of Heartd",
    value:10,
    },
    { image:"photos/4D.jpg",
    name:"Four of Diamonds",
    value:4,
    },
    { image:"photos/4H.jpg",
    name:"Four of Hearts",
    value:4,
    },
    { image:"photos/5D.jpg",
    name:"Five of Diamonds",
    value:5,
    },
    { image:"photos/5C.jpg",
    name:"Five of Clubs",
    value:5,
    },
    { image:"photos/6H.jpg",
    name:"Six of Hearts",
    value:6,
    },
    { image:"photos/6C.jpg",
    name:"Six of Clubs",
    value:6,
    },
    { image:"photos/6D.jpg",
    name:"Six of Diamonds",
    value:6,
    },
    { image:"photos/6S.jpg",
    name:"Six of Spades",
    value:6,
    },
    { image:"photos/7C.jpg",
    name:"Seven of Clubs",
    value:7,
    },
    { image:"photos/7D.jpg",
    name:"Seven of Diamonds",
    value:7,
    },
    { image:"photos/7H.jpg",
    name:"Seven of Hearts",
    value:7,
    },
    { image:"photos/7S.jpg",
    name:"Seven of Spades",
    value:7,
    },
    { image:"photos/8C.jpg",
    name:"Eight of Clubs",
    value:8,
    },
    { image:"photos/8D.jpg",
    name:"Eight of Diamonds",
    value:8,
    },
    { image:"photos/8H.jpg",
    name:"Eight of Hearts",
    value:8,
    },
    { image:"photos/8S.jpg",
    name:"Eight of Spades",
    value:8,
    },
    { image:"photos/9C.jpg",
    name:"Nine of Clubs",
    value:9,
    },
    { image:"photos/9D.jpg",
    name:"Nine of Diamonds",
    value:9,
    },
    { image:"photos/QD.jpg",
    name:"Queen of Diamonds",
    value:10,
    },
    { image:"photos/9H.jpg",
    name:"Nine of Hearts",
    value:9,
    },
    { image:"photos/9S.jpg",
    name:"Nine of Spades",
    value:9,
    },
    { image:"photos/2H.jpg",
    name:"Two of Hearts",
    value:2,
    },
    { image:"photos/10D.jpg",
    name:"Ten of Diamonds",
    value:10,
    },
    { image:"photos/10H.jpg",
    name:"Ten of Hearts",
    value:10,
    },
    { image:"photos/10S.jpg",
    name:"Ten of Spades",
    value:10,
    },
    { image:"photos/AC.jpg",
    name:"Ace of Clubs",
    value:11,
    },
    { image:"photos/AD.jpg",
    name:"Ace of Diamonds",
    value:11,
    },
    { image:"photos/AH.jpg",
    name:"Ace of Hearts",
    value:11,
    }, { image:"photos/QS.jpg",
    name:"Queen of Spades",
    value:10,
    },
    { image:"photos/AS.jpg",
    name:"Ace of Spades",
    value:11,
    },
    { image:"photos/JC.jpg",
    name:"Jack of Clubs",
    value:10,
    },
    { image:"photos/JC.jpg",
    name:"Jack of Clubs",
    value:10,
    },
    { image:"photos/JD.jpg",
    name:"Jack of Diamonds",
    value:10,
    },
    { image:"photos/JH.jpg",
    name:"Jack of Hearts",
    value:10,
    },
    { image:"photos/JS.jpg",
    name:"Jack of Spades",
    value:10,
    },
    { image:"photos/KC.jpg",
    name:"King of Clubs",
    value:10,
    },
    { image:"photos/KD.jpg",
    name:"King of DIamonds",
    value:10,
    },
    { image:"photos/KH.jpg",
    name:"King of Hearts",
    value:10,
    },
    { image:"photos/KS.jpg",
    name:"King of Spades",
    value:10,
    },
    { image:"photos/9H.jpg",
    name:"Nine of Hearts",
    value:9,
    },
    { image:"photos/QC.jpg",
    name:"Queen of Clubs",
    value:10,
    },
    { image:"photos/4C.jpg",
    name:"Four of Clubs",
    value:4,
    },
    { image:"photos/6H.jpg",
    name:"Six of Hearts",
    value:6,
    },
    { image:"photos/3C.jpg",
    name:"Three of Clubs",
    value:3,
    },
    { image:"photos/2S.jpg",
    name:"Two of Spades",
    value:2,
    },
]

/*----- app's state (variables) -----*/
let valueCounter1 = 0
let valueCounter2 = 0
let lastValueClicked = 0
let player1clicked = false
let totalCounter = 0

/*----- event listeners -----*/
card1El.addEventListener("click", player1)
card2El.addEventListener("click", player2)



/*----- functions -----*/
// this is where we want the main game to happen, if one player gets a higher value card than the other we want to log both values in to the winners hand. the game is over when one player gets all 52 cards.
function player1(){
    let lastIndex = deck.length-1
    let deckObj1 = deck[lastIndex]
    let objImage1 = deckObj1.image
    let cardValue1 = deckObj1.value
    

    card1El.src = objImage1
    deck.pop()

    //valueCounter1 += cardValue1
    // cardValue1 should compare last Value clicked to the higher number of each card if card is higher card value 1 in cached if card is lower value 2 is cached if equal WAR 
        console.log(cardValue1, "cardValue1")
        console.log(lastValueClicked, "this is the last value clicked")
        console.log(player1clicked, "logging to see if player 1 has been clicked")
    if (player1clicked === false ){
        player1clicked = true 
        lastValueClicked = cardValue1
        console.log(lastValueClicked, "this is last value clicked after")
        return;         
    } 
        console.log(player1clicked)

    if (cardValue1 > lastValueClicked) {
        console.log("greater")
        console.log(valueCounter1,"valueCounter1 before")
        valueCounter1 = lastValueClicked + cardValue1 + valueCounter1
        console.log(valueCounter1, "valueCounter1 after")
    }else if(cardValue1 < lastValueClicked){
        console.log("less then")
        valueCounter2 = cardValue1 + lastValueClicked + valueCounter2
        console.log(valueCounter2, "player 1 this is the sum of cards")
    }else {
        // war()
    }
    counter1El.innerHTML = valueCounter1
    lastValueClicked = cardValue1
    console.log(lastValueClicked, "this is last value clicked after")
}

function player2(){
    let lastIndex2 = deck.length-1
    let deckObj2 = deck[lastIndex2]
    let objImage2 = deckObj2.image
    let cardValue2 = deckObj2.value

    card2El.src = objImage2
    deck.pop()
    //valueCounter2 += cardValue2
    counter2El.innerHTML = valueCounter2
    console.log(cardValue2, "this is the second card value" )
    console.log(lastValueClicked, "this is the last value clicked ")

    if (cardValue2 > lastValueClicked ) {
        valueCounter2 = cardValue2 + lastValueClicked + valueCounter2
        console.log(valueCounter2, "player2 this is the sum of cards")
    }else if( cardValue2 <  lastValueClicked){
        valueCounter1 = cardValue2 + lastValueClicked + valueCounter1
        console.log(valueCounter2, "player2 this is the sum of cards")
    }else {
        // war()
    }
    lastValueClicked = cardValue2
    counter2El.innerHTML = valueCounter2
    console.log(lastValueClicked, "this is last value clicked after")

}

//war will be for after both players get cards with the same value matching, if the cards match everytime keep going until a higher card and the player gets all the other cards. 
// function war(){
    // if (lastValueClicked1 > lastValueClicked2 ) {
        // valueCounter1 = lastValueClicked1 + lastValueClicked2
        // console.log(valueCounter1, "this is thewinner")
    // }else if( lastValueClicked1 <  lastValueClicked2){
        // valueCounter2 = lastValueClicked2 + lastValueClicked1
        // console.log(valueCounter2, "this is the winner")
    //}else{
        
    //}
//}