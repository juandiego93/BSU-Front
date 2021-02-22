export interface Empleados {
    id: number;
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string
    },
    type: string[],
    base: {
        HP: number,
        Attack: number,
        Defense: number,
        Sp_Attack: number,
        Sp_Defense: number,
        Speed: number
    }
}
