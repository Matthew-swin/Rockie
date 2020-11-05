export interface PlayerChoice {
    "playerChoice": string,
    "userName": string

}

export interface PlayerChoices {
    "playerChoices": PlayerChoice[];
}

export interface GameResult {
    "playerChoice": string,
    "cpuChoice": string,
    "result": string,
    "userName": string
}

export interface UserName {
    "userName": string
}



export interface GameResults {
    "gameResults": GameResult[]
}