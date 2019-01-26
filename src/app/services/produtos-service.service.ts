import { Injectable } from '@angular/core';
import { Produto } from '../produto-model/Produto';
import { TipoProduto } from '../produto-model/TipoProduto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {

  private produtos = new Array<Produto>(); 

  private carrinho?: Array<Produto>;

  constructor() {
   }

   private inicializarListaProdutos(){
    this.produtos = [
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
        p_marca: 'Samsung'
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
        p_marca: 'Samsung'
      },
      {
        p_id: 3,
        p_nome: 'iPhone 7 Plus Apple com iOS 11, Dupla Câmera Traseira, Resistente à Água, Wi-Fi, 4G LTE e NFC, 32GB, Dourado, Tela HD de 5,5',
        p_modelo: 'iPhone 7',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477708/622909234/iphone-7-plus-apple-com-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-dourado-tela-hd-de-55-10477708.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477708/622909253/iphone-7-plus-apple-com-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-dourado-tela-hd-de-55-10477708.jpg', 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/iPhone/10477708/623944552/iphone-7-plus-apple-com-ios-11-dupla-camera-traseira-resistente-a-agua-wi-fi-4g-lte-e-nfc-32gb-dourado-tela-hd-de-55-10477708.jpg'],
        p_classificacao: 2,
        p_descricaoBreve: '',
        p_descricaoDetalhada: 'A evolução do iPhone chega com o iPhone 7 Plus, que traz um conjunto de câmeras completamente novo. Na parte traseira você não tem apenas uma câmera, mas sim, duas câmeras de 12MP, uma com grande-angular, e outra com teleobjetiva. Graças ao sistema de câmera dupla e à tecnologia de processamento de imagens inovadora, o iPhone 7 Plus consegue bater fotos muito nítidas à curta distância e gravar vídeos com zoom óptico de 2x. O aparelho está também muito mais resistente, com certificação de proteção IP67, contra água, respingos e poeira. Sua tela de 5,5 polegadas retroiluminada por LED e tecnologia IPS está mais colorida e brilhante, o resultado são imagens ricas em detalhes, com um realismo impressionante. Seu poderoso processador chip A10 Fusion garante toda a potência do smartphone. A eficiência e rapidez fica por conta de seus quatro núcleos que trabalham de forma mais inteligente, aumentando o processamento quando você precisa e diminuindo quando não precisa. Além disso, oferece maior duração de bateria. E para completar e deixar o aparelho ainda mais perfeito e garantir a melhor experiência, ele conta com a mais nova versão do sistema operacional móvel mais avançado do mundo, o iOS 11. Seus recursos sofisticados deixam tudo que você faz muito mais fácil, rápido e divertido.',
        p_tipoProduto: 4,
        p_precoAtual: 8000,
        p_precoAntigo: 15000,
        p_marca: 'Apple'
      },
      {
        p_id: 4,
        p_nome: 'Smartphone Motorola Moto G6 Play XT1922 Dual Chip, Android 8.0, 4G, Câmera 13MP, Processador Octa-Core e 3GB de RAM, 32GB, Ouro, Tela de 5,7',
        p_modelo: 'Moto G6',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12669436/906710625/smartphone-motorola-moto-g6-play-xt1922-dual-chip-android-8-0-4g-camera-13mp-processador-octa-core-e-3gb-de-ram-32gb-ouro-tela-de-57-12669436.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12669436/906710643/smartphone-motorola-moto-g6-play-xt1922-dual-chip-android-8-0-4g-camera-13mp-processador-octa-core-e-3gb-de-ram-32gb-ouro-tela-de-57-12669436.jpg', 'https://www.pontofrio-imagens.com.br/TelefoneseCelulares/Smartphones/Android/12669436/906710653/smartphone-motorola-moto-g6-play-xt1922-dual-chip-android-8-0-4g-camera-13mp-processador-octa-core-e-3gb-de-ram-32gb-ouro-tela-de-57-12669436.jpg'],
        p_classificacao: 4,
        p_descricaoBreve: 'O Moto G6 Play vai proporcionar toda a agilidade que você precisa para rodar seus games, fazer downloads, assistir, ler ou escutar conteúdos e navegar pela web. Isso porque este smartphone conta com um processador Qualcomm Snapdragon 430 Octa-Core de 1,4 GHz e 3 GB de memória RAM.',
        p_descricaoDetalhada: 'Em constante evolução, a Motorola segue inovando em seu seguimento e, mais uma vez, nos surpreende com a apresentação de um novo integrante da família Moto G: o Smartphone Motorola Moto G6 Play XT1922 Ouro. Desenvolvido com design único, feito com polímero de vidro, este aparelho conta com um padrão estético superior, acompanhando a alta qualidade do desempenho. Feito para quem não pode parar, este Smartphone possui uma configuração robusta e características fundamentais para acompanhar o seu ritmo, a começar pela bateria duradoura (4000 mAh) de carregamento rápido. O tamanho do display é outro fator determinante para quem trabalha, estuda e se diverte com o auxílio do celular, afinal são 5.7 polegadas com proporção de 18:9. Uma dimensão extraordinária, que vai proporcionar a melhor experiência de visualização. Aproveite toda a extensão da tela para produzir conteúdos audiovisuais incríveis, até porque o Moto G6 Play conta com câmeras de alto desempenho. A principal (traseira) dispõe de uma resolução de 13MP com tecnologia PDAF (foco automático de detecção de fase), responsável por focar no objeto em um instante, evitando que você perca qualquer clique. Já a câmera frontal conta com 8 megapixels, flash, lente de ângulo aberto (80°) e abertura f/2.2, perfeita para aquela selfie com a família inteira.',
        p_tipoProduto: 4,
        p_precoAtual: 1029,
        p_precoAntigo: 2000,
        p_marca: 'Motorola'
      },
      {
        p_id: 5,
        p_nome: 'Lavadora de Roupas Consul 11 kg CWS11AB Lavagem Econômica - Branca',
        p_modelo: 'CWS11AB',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/Eletrodomesticos/maquinadelavar/Acimade10kg/11663755/850058852/lavadora-de-roupas-consul-11-kg-cws11ab-lavagem-economica-branca-11663755.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/Eletrodomesticos/maquinadelavar/Acimade10kg/11663755/850057620/lavadora-de-roupas-consul-11-kg-cws11ab-lavagem-economica-branca-11663755.jpg', 'https://www.pontofrio-imagens.com.br/Eletrodomesticos/maquinadelavar/Acimade10kg/11663755/850058862/lavadora-de-roupas-consul-11-kg-cws11ab-lavagem-economica-branca-11663755.jpg'],
        p_classificacao: 5,
        p_descricaoBreve: 'A Máquina de Lavar Consul CWS11AB conta com diversas funções que vão facilitar suas tarefas diárias, garantindo roupas limpas e ótimo desempenho. A lavadora tem 11 kg de capacidade, assim você consegue manter perfumadas e limpas as roupas de toda a família.',
        p_descricaoDetalhada: 'Quer deixar suas roupas limpas e ainda economizar tempo? A Consul apresenta a Lavadora de Roupas CWS11AB Lavagem Econômica de 11 kg, que foi desenvolvida para você que busca praticidade e economia. A Máquina de Lavar Consul CWS11AB conta com diversas funções que vão facilitar suas tarefas diárias, garantindo roupas limpas e ótimo desempenho. A lavadora tem 11 kg de capacidade, assim você consegue manter perfumadas e limpas as roupas de toda a família. Leve mais praticidade e eficácia para sua casa com a Lavadora de Roupas Consul 11 kg CWS11AB!',
        p_tipoProduto: 1,
        p_precoAtual: 1299,
        p_precoAntigo: 1400,
        p_marca: 'Consul'
      },
      {
        p_id: 6,
        p_nome: 'Refrigerador Electrolux Frost Free TF51 2 Portas Branco – 433 Litros',
        p_modelo: 'TF51',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/10212033/588268453/refrigerador-electrolux-frost-free-tf51-2-portas-branco-433-litros-10212033.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/10212033/588268469/refrigerador-electrolux-frost-free-tf51-2-portas-branco-433-litros-10212033.jpg', 'https://www.pontofrio-imagens.com.br/Eletrodomesticos/GeladeiraeRefrigerador/2Portas/10212033/588268491/refrigerador-electrolux-frost-free-tf51-2-portas-branco-433-litros-10212033.jpg'],
        p_classificacao: 4,
        p_descricaoBreve: 'Está mais do que na hora de adquirir uma geladeira eficiente de verdade. O Refrigerador Electrolux Frost Free TF51 2 Portas conta com alta tecnologia e design inteligente para armazenar e conservar melhor seus alimentos e bebidas. São 433 litros de capacidade, sendo 319 litros do refrigerador.',
        p_descricaoDetalhada: 'Organize seus alimentos com praticidade e eficiência! O Refrigerador Electrolux Frost Free TF51 2 Portas Branco oferece ótimo aproveitamento interno com prateleiras deslizantes e retráteis para organizar os itens de diferentes tamanhos na porta do refrigerador, gavetão de frutas e prateleiras funda na porta, para você armazenar grandes itens com mais segurança. Com design moderno, possui diversas funções no painel Blue Touch para você controlar o refrigerador e facilitar o dia a dia. Além disso, conta com o exclusivo compartimento para latas e garrafas que ao ser acionado pelo painel resfria as bebidas rapidamente.',
        p_tipoProduto: 1,
        p_precoAtual: 2399,
        p_precoAntigo: 3000,
        p_marca: 'Eletrolux'
      },
      {
        p_id: 7,
        p_nome: 'Guarda-Roupa Bartira Curitiba II com 8 Portas e 4 Gavetas',
        p_modelo: 'Curitiba',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/Moveis/quartos/guardaroupa/12117825/877024677/guarda-roupa-bartira-curitiba-ii-com-8-portas-e-4-gavetas-12117825.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/Moveis/quartos/guardaroupa/12117825/877024677/guarda-roupa-bartira-curitiba-ii-com-8-portas-e-4-gavetas-12117825.jpg'],
        p_classificacao: 5,
        p_descricaoBreve: 'A Bartira não para de surpreender e a cada nova linha oferece móveis ainda mais belos e funcionais, que tornam o ambiente melhor organizado. Esse é o caso do lindíssimo Guarda-Roupa Bartira Curitiba II. Ele conta com 8 portas e 4 gavetas dando diversas opções para armazenar suas peças da forma mais conveniente para você.',
        p_descricaoDetalhada: 'A Bartira não para de surpreender e a cada nova linha oferece móveis ainda mais belos e funcionais, que tornam o ambiente melhor organizado. Esse é o caso do lindíssimo Guarda-Roupa Bartira Curitiba II. Ele conta com 8 portas e 4 gavetas dando diversas opções para armazenar suas peças da forma mais conveniente para você. Essa peça é confeccionada em MDP e possui puxadores externos em MDF. Ambos são materiais muito resistentes, que proporcionarão longa vida ao armário. O acabamento em pintura UV garante durabilidade e beleza ao móvel, além de ser muito fácil de higienizar. Aliás, cada detalhe do guarda-roupa Curitiba II faz diferença e se destaca no dormitório. Para completar, esse móvel vem com um amplo espaço interno, cabideiros, gavetas e prateleiras que o dividem de maneira que contribui para uma melhor disposição de seus pertences. Aproveite as condições de pagamento do Pontofrio e leve o seu para casa já!',
        p_tipoProduto: 4,
        p_precoAtual: 500,
        p_precoAntigo: 400,
        p_marca: 'Bartira'
      },
      {
        p_id: 8,
        p_nome: 'Guarda-Roupa Bartira Fortaleza ',
        p_modelo: 'Bartira Fortaleza II ',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/Moveis/quartos/guardaroupa/11116963/802202095/guarda-roupa-bartira-fortaleza-ii-com-2-portas-de-correr-e-4-gavetas-11116913.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/Moveis/quartos/guardaroupa/11116963/965323632/guarda-roupa-bartira-fortaleza-ii-com-2-portas-de-correr-e-4-gavetas-11116913.jpg', 'https://www.pontofrio-imagens.com.br/Moveis/quartos/guardaroupa/11116963/965323642/guarda-roupa-bartira-fortaleza-ii-com-2-portas-de-correr-e-4-gavetas-11116913.jpg'],
        p_classificacao: 4,
        p_descricaoBreve: 'Com o Bartira Fortaleza você terá diversas vantagens, pois é um guarda-roupa espaçoso e tem quatro gavetas e duas portas de correr acomoda todo o seu vestuário e ainda pode receber objetos e acessórios. Versátil, ele possui tripla função em sua parte central, que pode funcionar como penteadeira, porta-joias e até espaço para a TV. O design charmoso deixa o quarto mais sofisticado! A estrutura em MDP, as prateleiras metálicas e os puxadores em MDF proporcionam longa durabilidade.',
        p_descricaoDetalhada: 'Utilize o Guarda-Roupa Bartira Fortaleza II com 2 Portas de Correr e 4 Gavetas para manter o seu dormitório sempre bem organizado e estruturado para o cotidiano, pois ele foi desenvolvido para que você não perca tempo procurando seus pertences. Desenvolvido em MDP de qualidade, possui duas portas, conjunto de rodízios reguláveis que deslizam sobre resistentes trilhos de plásticos, espaço interno amplo, prateleiras e cabideiros metálicos, gavetas externas, um maravilhoso espelho, porta jóias e maior durabilidade para que você aproveite ainda mais o produto. Bartira: a escolha certa para quem gosta de inovar!',
        p_tipoProduto: 2,
        p_precoAtual: 599,
        p_precoAntigo: 1000,
        p_marca: 'Bartira'
      },
      {
        p_id: 9,
        p_nome: 'Conjunto de Panelas Tramontina Turim Alumínio - 10 Peças',
        p_modelo: 'Turim',
        p_urlPrincipalImage: 'https://www.pontofrio.com.br/UtilidadesDomesticas/Panelas/conjuntodepanelas/conjunto-de-panelas-tramontina-turim-aluminio-10-pecas-11668969.html?recsource=busca-int&rectype=busca-374',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/UtilidadesDomesticas/Panelas/conjuntodepanelas/11668969/852250218/conjunto-de-panelas-tramontina-turim-aluminio-10-pecas-11668969.jpg'],
        p_classificacao: 3,
        p_descricaoBreve: 'Para preparar as melhores receitas, nada melhor que um conjunto de panelas de alto desempenho para facilitar o dia a dia. A Tramontina, marca de tradição quando se trata de oferecer produtos de alta qualidade para cozinha, apresenta a Linha Turim, composta por produtos desenvolvidos para promover o cozimento mais uniforme dos alimentos, levar mais praticidade à rotina doméstica, além de ser fácil de limpar devido ao revestimento antiaderente.',
        p_descricaoDetalhada: 'Cozinhar sem que os alimentos grudem nas panelas é maravilhoso. Além de otimizar as tarefas domésticas, mantém as panelas em ótimo estado e fáceis de limpar. Assim são os itens do Conjunto de Panelas Tramontina Turim, que contam com revestimento interno e externo feito com antiaderente Starflon T1. Conta ainda com pegadores em baquilite antitérmico e nylon, que evitam possíveis queimaduras. Já as tampas de vidro temperado com borda de aço inox são altamente resistentes e facilitam a visualização dos alimentos. Assim você consegue ver como está ficando seu prato delicioso. Do café da manhã ao jantar, a dica é Conjunto de Panelas Tramontina Turim!',
        p_tipoProduto: 5,
        p_precoAtual: 500,
        p_precoAntigo: 400,
        p_marca: 'Tramontina'
      },
      {
        p_id: 10,
        p_nome: 'Panela de Pressão Tramontina Vancouver - 4,5 L',
        p_modelo: 'Tramontina Vancouver',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/UtilidadesDomesticas/Panelas/PanelasdePressao/6346419/247464860/panela-de-pressao-tramontina-vancouver-45-l-4419320.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/UtilidadesDomesticas/Panelas/PanelasdePressao/6346419/247464882/panela-de-pressao-tramontina-vancouver-45-l-4419320.jpg'],
        p_classificacao: 4,
        p_descricaoBreve: 'A panela de pressão 20 cm Tramontina Vancouver 20582720 possibilita que você cozinhe alimentos mais duros em menos tempo. Ela tem capacidade para 4,5 litros, conseguindo fazer grandes quantidades de comida.',
        p_descricaoDetalhada: 'No elenco que as panelas formam na cozinha, a panela de pressão é a estrela maior. Por suas características e pelas facilidades que gera no preparo das receitas, um bom utensílio é fundamental para que suas refeições saiam sempre perfeitas e com o resultado desejado. A panela de pressão 20 cm Tramontina Vancouver 20582720 possibilita que você cozinhe alimentos mais duros em menos tempo. Ela tem capacidade para 4,5 litros, conseguindo fazer grandes quantidades de comida. Mantendo a tradição da fabricante na qualidade do produto, o utensílio é todo produzido em alumínio, com acabamento interno e externo antiaderente Starflon, em um design ousado, inovador e elegante. Pela sua beleza, a panela acaba se tornando um item de decoração, além de sua funcionalidade. Sua tampa conta com acabamento externo polido e interno satinado, combinando com o restante da peça. A panela é versátil e pode ser utilizada nos fogões a gás, elétrico e vitrocerâmicos, por indução elétrica',
        p_tipoProduto: 5,
        p_precoAtual: 50,
        p_precoAntigo: 200,
        p_marca: 'Tramontina'
      },
      {
        p_id: 11,
        p_nome: 'Bicicleta Aro 26 Caloi Mobilidade Ventura com 21 Marchas – Azul',
        p_modelo: 'Bicicleta Aro 26 Caloi',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/13853790/1038984780/bicicleta-aro-26-caloi-mobilidade-ventura-com-21-marchas-azul-13853790.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/13853790/1038984808/bicicleta-aro-26-caloi-mobilidade-ventura-com-21-marchas-azul-13853790.jpg'],
        p_classificacao: 5,
        p_descricaoBreve: 'aloi Ventura tem a inspiração no estilo de vida californiano. Na cor azul, possui cesto frontal para carregar pequenos objetos, enquanto você realiza seus passeios pela cidade.',
        p_descricaoDetalhada: 'Charmosa, a Bicicleta Caloi Ventura tem a inspiração no estilo de vida californiano. Na cor azul, possui cesto frontal para carregar pequenos objetos, enquanto você realiza seus passeios pela cidade. Seu quadro é feito de aço, muito resistente e acompanha 21 marchas, ideal para todos os tipos de percursos, sejam retas ou subidas. Para facilitar a troca de marchas, o sistema de trocador é o Grip System, assim, você consegue achar rapidamente qual a marcha mais adequada para diversos tipos de passeios. Indicada para pedaladas em parques e na cidade, ela possui selim com molas, muito mais conforto mesmo em terrenos irregulares. O sistema de freios V-Brake é resistente e eficiente, muito mais seguro, inclusive em momentos de paradas repentinas. Passeios com mais praticidade , conforto e estilo é com a Caloi Ventura!',
        p_tipoProduto: 6,
        p_precoAtual: 100,
        p_precoAntigo: 200,
        p_marca: 'Caloi'
      },
      {
        p_id: 12,
        p_nome: 'Bicicleta Aro 26 Caloi Andes 21 Marchas Suspensão Dianteira',
        p_modelo: 'Andes',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/11482378/817738192/bicicleta-aro-26-caloi-andes-21-marchas-suspensao-dianteira-11482378.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/11482378/817738223/bicicleta-aro-26-caloi-andes-21-marchas-suspensao-dianteira-11482378.jpg'],
        p_classificacao: 5,
        p_descricaoBreve: 'A Caloi desenvolveu a Bicicleta Andes com o que há de melhor em matéria-prima e design para suprir a necessidade de seus consumidores mais exigentes.',
        p_descricaoDetalhada: '',
        p_tipoProduto: 6,
        p_precoAtual: 500,
        p_precoAntigo: 400,
        p_marca: 'Caloi'
      },
      {
        p_id: 13,
        p_nome: 'Smart TV LED 32" HD Samsung 32J4290 com Wide Color Enhancer Plus, Espelhamento de Tela, Wi-Fi, Dolby Digital Plus, HDMI e USB',
        p_modelo: 'Samsung 32J4290',
        p_urlPrincipalImage: 'https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/11482378/817738192/bicicleta-aro-26-caloi-andes-21-marchas-suspensao-dianteira-11482378.jpg',
        p_urlsImages: ['https://www.pontofrio-imagens.com.br/EsporteLazer/Bicicletas/Aro26/11482378/817738223/bicicleta-aro-26-caloi-andes-21-marchas-suspensao-dianteira-11482378.jpg'],
        p_classificacao: 5,
        p_descricaoBreve: 'Navegue pela internet e assista seus vídeos no Youtube com a Smart TV LED 32" HD Samsung 32J4290.',
        p_descricaoDetalhada: 'Navegue pela internet e assista seus vídeos no Youtube com a Smart TV LED 32" HD Samsung 32J4290. Explore diversos aplicativos incluindo o Netflix e assista a séries e filme aclamados pela crítica, tudo isso em uma plataforma smart rápida e intuitiva. Você também pode usar o recurso de Espelhamento de Tela para acessar conteúdos do seu Smartphone direto na tela da TV, ou se preferir, conecte um dispositivo USB e acesse seus arquivos. Tudo isso, em uma tela de alta resolução HD e tecnologia Wide Color Enhancer Plus da Samsung que melhora consideravelmente a qualidade de qualquer imagem e revela detalhes antes ocultos. Clique e confira o manual disponível do produto e tire todas as dúvidas',
        p_tipoProduto: 7,
        p_precoAtual: 1044,
        p_precoAntigo: 2000,
        p_marca: 'Samsung'
      }

    ]
  }
}
