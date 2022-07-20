import { Candidates } from "../interface/dataInterface";

export default class Vote {

    public checkVote(data:Candidates){

        let {candidates} = data;

        const votedCandidates = candidates.filter(value=>value.vote === true)
        

        votedCandidates.forEach(value=>{
            if(value.coalicion !== votedCandidates[0].coalicion){
                alert("Votaste incorrectamente")
                throw new Error("Error al votar");
                return;
            }
        })

        alert("se voto correctamente")
    }

    public showVotes(data:Candidates){
        let {candidates} = data;

        const votedCandidates = candidates.filter(value=>value.vote === true)

        votedCandidates.forEach(({candidate, politicalParty}) => {
            alert(`Usted voto por: ${candidate}, por el partido politico: ${politicalParty}`)
        });
        
    }
}