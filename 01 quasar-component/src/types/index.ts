export interface User {
    id:string;
    name: string;
    photo: string;
    principal: boolean;
    division: {
        code: string;
        name: string;
    };
    am: {
        code: string;
        name: string;
    };
}