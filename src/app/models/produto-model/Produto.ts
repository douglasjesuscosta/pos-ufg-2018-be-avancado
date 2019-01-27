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
                 private tipoProduto?:number,
                 private precoAtual?:number,
                 private precoAntigo?:number,
                 private marca?:string,
                 private quantidade?:number,
                 private quantidadeVendas?:number
               ){
    }

    public get p_id(): number {
        return this.id;
    }

    public set p_id(id: number){
        this.id = id;
    }

    public get p_nome(): string {
        return this.nome;
    }

    public set p_nome(nome: string) {
        this.nome = nome;
    }

    public get p_modelo(): string {
        return this.modelo;
    }

    public set p_modelo(modelo: string) {
        this.modelo = modelo;
    }

    public get p_urlPrincipalImage(): string {
        return this.urlPrincipalImage;
    }

    public set p_urlPrincipalImage(urlPrincipalImage: string,) {
        this.urlPrincipalImage = urlPrincipalImage;
    }

    public get p_urlsImages(): Array<string> {
        return this.urlsImages;
    }

    public set p_urlsImages(urlsImages: Array<string>) {
        this.urlsImages = urlsImages;
    }

    public get p_classificacao(): number {
        return this.classificacao;
    }

    public set p_classificacao(classificacao: number) {
        this.classificacao = classificacao;
    }

    public get p_descricaoBreve(): string {
        return this.descricaoBreve;
    }

    public set p_descricaoBreve(descricaoBreve: string){
        this.descricaoBreve = descricaoBreve;
    }

    public get p_descricaoDetalhada(): string {
        return this.descricaoDetalhada;
    }

    public set p_descricaoDetalhada(descricaoDetalhada: string){
        this.descricaoDetalhada = descricaoDetalhada;
    }

    public get p_tipoProduto(): number {
        return this.tipoProduto;
    }

    public set p_tipoProduto(tipoProduto: number){
        this.tipoProduto = tipoProduto;
    }

    public get p_precoAtual(): number {
        return this.precoAtual;
    }

    public set p_precoAtual(precoAtual: number){
        this.precoAtual = precoAtual;
    }

    public get p_precoAntigo(): number {
        return this.precoAntigo;
    }

    public set p_precoAntigo(precoAntigo: number) {
        this.precoAntigo = precoAntigo;
    }

    public get p_marca(): string {
        return this.marca;
    }

    public set p_marca(marca: string) {
        this.marca = marca;
    }

    public get p_quantidade(): number {
        return this.quantidade;
    }

    public set p_quantidade(quantidade: number) {
        this.quantidade = quantidade;
    }

    public get p_quantidadeVendas(): number {
        return this.quantidadeVendas;
    }

    public set p_quantidadeVendas(quantidadeVendas: number) {
        this.quantidadeVendas = quantidadeVendas;
    }
}