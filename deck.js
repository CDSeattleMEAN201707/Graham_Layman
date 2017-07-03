class Card{
    constructor(v, s){
        this.face;
        this.suit = s;
        this.val = v;
        if(this.val == 1){
            this.face = "Ace";
        }
        else if(this.val == 11){
            this.face = "Jack";
        }
        else if(this.val == 12){
            this.face = "Queen";
        }
        else if(this.val == 13){
            this.face = "King";
        }
        else{
            this.face = this.val.toString();
        }
    }
}

class Deck{
    constructor(){
        this.cards;
        this.Reload();
    }
    Reload(){
        this.cards = [];
        let suit = ["Spades","Clubs","Hearts","Diamonds"];
        for(let i = 0; i < 4; i++){
            for(let j = 1; j < 14; j++){
                this.cards.push(new Card(j,suit[i]));
            }
        }
        this.Shuffle();
    }
    Shuffle(){
       let idx = 0;
       let temp = this.cards[0];
       for(let i = 0; i < this.cards.length; i++){
           idx = Math.floor(Math.random()*52);
           temp = this.cards[idx]
           this.cards[idx]=this.cards[i];
           this.cards[i]=temp;
       }
    }
    Deal(){
        return this.cards.pop();
    }
}

class Player{
    constructor(n){
        this.name = n;
        this.hand = [];
    }
    Draw(deck){
        let card1 = deck.Deal();
        this.hand.push(card1);
        return card1;
    }
    Discard(idx){
        if(idx < this.hand.length){
            return this.hand.splice(idx, 1);
        }
    }
}
let deck1 = new Deck();
let player1 = new Player("Graham");
player1.Draw(deck1);
console.log(player1.hand[0].val);
player1.Discard(0);
console.log(player1.hand);