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
    weight: number;
    symbol: string;
}