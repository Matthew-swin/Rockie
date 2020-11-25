export interface LeaderboardsEnvelope {​​
    leaderboards: Leaderboard[];
}​​

export interface LeaderboardEnvelope {​​
    leaderboard: Leaderboard;
}​​

export interface Leaderboard {​​
    username: string;
    winRatio: number;
    gamesPlayed:number;
    last5Games: string
}​​





