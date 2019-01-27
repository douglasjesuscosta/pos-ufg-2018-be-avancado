import { Produto } from '../models/produto-model/Produto';
import { Compra } from '../models/compra-model/Compra';
import { CompraService } from '../services/compra.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CompraController{

    constructor(private compraService: CompraService){

    }

    public persistirCompra(produtos:Array<Produto>, total:number){
        var compra = new Compra();

        compra.p_produtos = produtos;
        compra.p_total = total;

        this.compraService.persistirCompra(compra);
    }
}