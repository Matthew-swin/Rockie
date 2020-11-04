export interface PlayerChoice {
    "PlayerChoice": string,
    "userName": string

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

export interface UserNames {
    "userName": UserName[]
}

export interface GameResultAndUserName {
    userName: UserName,
    "playerChoice": string,
    "cpuChoice": string,
    "result": string

}