export interface PlayerChoiceAndRounds {
    "playerChoice": string,
    "userName": string,
    "currentRound": number,
    "maxRound": number 
}

export interface PlayerChoices {
    "playerChoices": PlayerChoiceAndRounds[];
}

export interface GameResult {
    "playerChoice": string,
    "cpuChoice": string,
    "turnResult": string,
    "userName": string,
    "gameResult": string
}
export interface GameResults {
    "gameResults": GameResult[]
}

export interface UserName {
    "userName": string
}
