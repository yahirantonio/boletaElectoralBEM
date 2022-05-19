import { Candidates } from "../interface/dataInterface";

export default class Vote {

    public checkVote(data:Candidates){

        let {candidates} = data;

        const votedCandidates = candidates.filter(value=>value.vote === true)

        votedCandidates.forEach(value=>{
            if(value.coalicion !== votedCandidates[0].coalicion){
                throw new Error("Error al votar");
                return;
            }
        })

        console.log("se voto correctamente")
    }
}