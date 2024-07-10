export interface RegisterUser {
    username: string;
    email: string;
    password: string;
}

export interface User {
    username?: string;
    email: string;
    password: string;
}

export interface UserTable {
    position: number;
    name: string;
    victories: number;
    losses: number;
    winPercentage: string;
    championshipVictories: number;
    lastFiveMatchesResults: Matches[]; // [1, 0, 1, 1]  [true, false, true, true]
}

export enum Matches {
    lose,
    win, 
}