export interface Candidates {
    candidates: Candidate[];
}

export interface Candidate {
    candidate:      string;
    politicalParty: string;
    vote:           boolean;
    coalicion?:      number;
}