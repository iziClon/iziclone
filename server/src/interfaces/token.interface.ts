export interface IToken {
    id: number;
    userId: number;
    accessToken: string;
    refreshToken: string;
    createdAt: string;
    deletedAt?: string;

}
