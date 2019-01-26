import { Injectable } from '@angular/core';
import { Produto } from '../models/produto-model/Produto';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private produtos: Produto[] = [
    {
      p_id: 1,
      p_nome: 'Smartphone Samsung Galaxy S9 Cinza Dual Chip, Android 8.0, Câmera 12MP, 4GB RAM e Processador Octa-Core, 128GB, Cinza, Tela Infinita de 5,8',
      p_modelo: 'Galaxy S9 ',
      p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12564968/899738595/smartphone-samsung-galaxy-s9-cinza-dual-chip-android-8-0-camera-12mp-4gb-ram-e-processador-octa-core-128gb-cinza-tela-infinita-de-58-12564968.jpg',
      p_urlsImages: ['https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12564968/899738613/smartphone-samsung-galaxy-s9-cinza-dual-chip-android-8-0-camera-12mp-4gb-ram-e-processador-octa-core-128gb-cinza-tela-infinita-de-58-12564968.jpg', 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12564968/899738623/smartphone-samsung-galaxy-s9-cinza-dual-chip-android-8-0-camera-12mp-4gb-ram-e-processador-octa-core-128gb-cinza-tela-infinita-de-58-12564968.jpg', 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12564968/899738633/smartphone-samsung-galaxy-s9-cinza-dual-chip-android-8-0-camera-12mp-4gb-ram-e-processador-octa-core-128gb-cinza-tela-infinita-de-58-12564968.jpg'],
      p_classificacao: 3,
      p_descricaoBreve: '',
      p_descricaoDetalhada: 'O Samsung Galaxy S9 chega com o que há de mais avançado em tecnologia para smartphones, oferecendo ao usuário uma forma inovadora de como lidar com estes dispositivos em nosso dia a dia. Um dos destaques é o Display Infinito, que ocupa quase toda a frente do aparelho, eliminando as bordas e permitindo imersão total com imagens em altíssima resolução. Com o design mais ergonômico, agora o sensor de impressão digital está na parte de trás do aparelho, logo abaixo da câmera. Este reposicionamento facilita e muito o uso do recurso. Mas além disso, afim de proporcionar ainda mais comodidade e praticidade, é possível também fazer o desbloqueio do celular através do reconhecimento facial e leitura de íris, além do modo padrão. Mas as grandes novidades do Galaxy S9 estão por conta de sua câmera, que surge como uma nova experiência fotográfica. Sua lente conta com abertura dupla nos modos F 1.5 e F 2.4, que muda automaticamente dependendo da luminosidade, assim, em ambientes com uma condição de luz normal ela dispara com f/2.4, já em ambientes mais escuros se abre no modo f1.5. Mas não é só isso, ela traz também um novo recurso de Super Slow-Motion, que permite gravar a incríveis 960fps (quadros por segundo). A captura de momentos em supercâmera lenta é muito divertido, e você poderá criar vídeos incríveis e compartilhar nas redes sociais. É possível também fazer GIF e escolher entre seus três modos de loop: Invertido, normal ou vai e volta. As novidades não param por aí, e o Samsung Galaxy S9 traz você para o mundo da realidade aumentada. Faça uma selfie e transforme-se em um emoji, isso mesmo, com base na sua imagem o aparelho cria um emoji que se pareça com você, e até imita suas expressões. Você poderá personalizá-lo ajustando o tom da pele, estilo do cabelo, adicionar óculos e escolher a roupa que combine com seu visual. A partir daí suas mensagens não serão mais as mesmas, e você poderá também gravar um vídeo com seu emoji falando, cantando ou o que quiser fazer e compartilhar com seus amigos',
      p_tipoProduto: 4,
      p_precoAtual: 2999,
      p_precoAntigo: 4000,
      p_marca: 'Samsung',
      p_quantidade: 1
    },
    {
      p_id: 2,
      p_nome: 'Samsung Galaxy S8 Preto 64GB Dual Chip, Tela 5.8", Android 7.0, 4G, Câm. 12MP e Octa-Core',
      p_modelo: 'Samsung Galaxy S8',
      p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/11482034/811972145/samsung-galaxy-s8-preto-64gb-dual-chip-tela-5-8-android-7-0-4g-cam-12mp-e-octa-core-11482034.jpg',
      p_urlsImages: ['https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/11482034/811972096/samsung-galaxy-s8-preto-64gb-dual-chip-tela-5-8-android-7-0-4g-cam-12mp-e-octa-core-11482034.jpg', 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/11482034/811972108/samsung-galaxy-s8-preto-64gb-dual-chip-tela-5-8-android-7-0-4g-cam-12mp-e-octa-core-11482034.jpg'],
      p_classificacao: 4,
      p_descricaoBreve: '',
      p_descricaoDetalhada: 'O Samsung Galaxy S8 chegou para revolucionar o mercado de smartphones. Com um design surpreendentemente inovador, o Galaxy S8 ultrapassa os limites com o seu display infinito que se estende até as laterais do aparelho. Vivencie uma experiência ainda mais imersiva em um dispositivo móvel que se encaixa perfeitamente em suas mãos. Explore o alto desempenho do processador Octa-Core para iniciar e alternar entre os aplicativos com muita agilidade. Navegue na internet com velocidade superior e divirta-se com os seus jogos favoritos. Faça tudo isso e muito mais sem se preocupar com a duração da bateria. A incrível tecnologia permite maior autonomia e um menor consumo de energia. A câmera principal do Galaxy S8 oferece recursos avançados e você poderá registrar fotos de alta qualidade tanto de dia quanto à noite. A tecnologia Dual Pixel permite focalizar as imagens rapidamente, de forma que as fotos saiam nítidas e brilhantes, mesmo em ambientes com baixa incidência de luz. A câmera de selfie também se destaca pela praticidade, disponibilizando funções que deixam o momento muito mais divertido. Com o Auto Foco automático você não precisa se preocupar se todos na foto estarão dentro do foco. Basta posicionar o dispositivo e clicar. Os mecanismos de segurança garantem a sua privacidade e protegem os seus dados o tempo todo. Estão disponíveis no Galaxy S8 o leitor de íris, o reconhecimento facial, scanner de impressão digital, além dos modos padrão, senha e PIN. Você ainda poderá ampliar o nível de sua privacidade guardando os arquivos e aplicativos em uma Pasta Protegida, com a opção de torná-la visível apenas para você. E as novidades não param por aqui. Agora você poderá tomar chuva sem se preocupar em molhar o seu celular. Graças ao certificado IP68, o seu smartphone estará protegido contra água e poeira de forma que não precisará interromper nenhuma atividade por até 30 minutos. Garanta o seu smartphone Samsung Galaxy S8 e tenha em mãos um aparelho que fará toda a diferença.',
      p_tipoProduto: 4,
      p_precoAtual: 2399,
      p_precoAntigo: 2500,
      p_marca: 'Samsung',
      p_quantidade: 1
    }
  ];

  getProdutos() {
    return this.produtos.slice();
  }

  getProduto(index: number) {
    return this.produtos.find(p => p.p_id == index);
  }

  addProduto(index: number) {
    this.produtos.push(this.getProduto(index));
  }
}
