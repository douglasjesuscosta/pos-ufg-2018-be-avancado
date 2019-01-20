import { TipoProduto } from './TipoProduto';

/**
 *  Classe que realiza a modelagem dos produtos que serão vendidos. 
 * 
 **/

export class Produto {

    constructor( private id?:number,
                 private nome?:string,
                 private modelo?:string,
                 private urlPrincipalImage?:string,
                 private urlsImages?:Array<string>,
                 private classificacao?:number,
                 private descricaoBreve?:string,
                 private descricaoDetalhada?:string,
                 private tipoProduto?:TipoProduto,
                 private precoAtual?:number,
                 private precoAntigo?:number,
               ){
    }
}