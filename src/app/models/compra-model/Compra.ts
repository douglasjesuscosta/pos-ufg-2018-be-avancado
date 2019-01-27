import { Produto } from '../produto-model/Produto';

export class Compra {

    constructor( private id?:number,
                 private produtos?:Array<Produto>,
                 private total?:number
               ){
    }

    public get p_id(): number {
        return this.id;
    }

    public set p_id(id: number) {
        this.id = id;
    }

    public get p_produtos(): Array<Produto> {
        return this.produtos;
    }

    public set p_produtos(produtos: Array<Produto>) {
        this.produtos = produtos;
    }

    public get p_total(): number {
        return this.total;
    }

    public set p_total(total: number) {
        this.total = total;
    }
}
