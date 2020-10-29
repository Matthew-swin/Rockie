export interface PlayerChoice {
    "PlayerChoice": string
}

export interface GameResult {
    "playerChoice": string,
    "cpuChoice": string,
    "result": string
}

export interface UserName {
    "userName": string
}

export interface GameResultAndUserName {
    userName: UserName,
    "playerChoice": string,
    "cpuChoice": string,
    "result": string

}