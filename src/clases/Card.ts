import { Candidates } from "../interface/dataInterface";

export default class Card {


    constructor(
        private data:Candidates, 
        private cruz:NodeListOf<HTMLElement>
    ){}

    public votar(candidateName:string, party:string):void{

        let {candidates} = this.data; 

        console.log(candidates)
        // console.log(candidateName)
        console.log(party)

        candidates.map( (value,index) => {

            if(value.politicalParty === party && value.vote === true){
                value.vote = false
                this.ocultar(index)
                return;
            } 

            if(value.politicalParty === party){
                value.vote = true
                this.mostrar(index)
                return;
            }
         
        })
    }

    private mostrar(index:number){
        this.cruz[index].style.visibility = 'visible';
    }

    private ocultar(index:number){
        this.cruz[index].style.visibility = 'hidden';
    }

}