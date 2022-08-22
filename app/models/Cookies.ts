export class Cookie{
    nome: string;
    preco: number;
    escolheMassa: boolean

    constructor(nome:string, preco:number, escolheMassa: boolean = false){
        this.nome = nome;
        this.preco = preco;
        this.escolheMassa = escolheMassa;
    }
}