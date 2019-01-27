import { Injectable } from '@angular/core';
import { Compra } from '../models/compra-model/Compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  private compras:Array<Compra>;

  constructor() { 
    this.compras = new Array<Compra>();
  }

  public persistirCompra(compra:Compra){
    this.compras.push(compra);
  }
}
