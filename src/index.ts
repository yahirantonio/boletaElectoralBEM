import Card from "./clases/Card";
import Vote from "./clases/Vote";
import "./css/normalize.css";
import "./css/style.css";
import dataValues from "./data/candidates.json"

const clickCard:NodeListOf<HTMLElement> = document.querySelectorAll(".ts-click");

const voteButton:Element = document.querySelector(".ts-vote")!
const vote = new Vote();

const cruz:NodeListOf<HTMLElement> = document.querySelectorAll(".ts-cross")
const card = new Card(dataValues, cruz)

console.log(cruz)

clickCard.forEach(value=>{
    value.addEventListener('click',()=>{
        card.votar(value.id, value.dataset.partido!)
    })
})

voteButton.addEventListener('click',()=>{
    vote.checkVote(dataValues);
})


