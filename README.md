# projeto-crud


# Dependencias

Para rodar a aplicação você deve instalar algumas ferramentas incluindo a 'Nodemon' através do node package manager:
então instale digitando no console: 'npm install nodemon --save -dev' e configure em 'scripts' 'nodemon src/server.js' no package.json como ilustra a imagem abaixo:


![image](https://github.com/matheusscarvalho1/projeto-crud/assets/73304785/f0496aea-16a4-46a8-8243-9a0cb28efaab)


Para rodar a aplicação no localhost:8080, é preciso executar 'npm run dev' no console git bash.


# Tecnologias utilizadas

<b>• Front-End</b> 

HTML/EJS e CSS - Usados para fazer o simples layout das páginas, com a finalidade somente de praticar e entender as lógicas de programação no back-end.

Para dar o início ao desenvolvimento dessa aplicação, foi utiilizado o EJS, mas para poder entende-lo é preciso saber os conceitos da estrutura da página web:

 <b>HTML</b> (Linguagem de Marcação de Hiper-Texto) que é uma linguagem de marcação utilizada para estruturar e exibir conteúdo na web. Ele é a base dos sites e é usado para criar documentos web, que podem incluir texto, imagens, vídeos e outros tipos de mídia. 

O <b>EJS</b> (Embedded JavaScript templating) é uma ferramenta de renderização que simplifica a transferência de dados do servidor para o cliente, permitindo que você utilize facilmente código JavaScript em suas páginas HTML, isso da a liberdade para desenvolvedores poderem usar loops, condicionais, variáveis, funções e outros recursos do JavaScript para gerar conteúdo dinamicamente em suas páginas da web. 

Já o <b>CSS</b> (Folhas de Estilo em Cascatas), que é uma linguagem de estilo utilizada para definir a aparência e o layout de documentos HTML/EJS, ele separa a apresentação visual do conteúdo da página, permitindo que os desenvolvedores criem páginas web mais sofisticadas e visualmente atraentes.

<hr>
<b>• Back-End</b> 

<b>Node.js</b> - software de código aberto de desenvolvimento onde é usado para desenvolver uma variedade de aplicativos, desde aplicativos web tradicionais até APIs escaláveis e aplicativos em tempo real. Sua natureza assíncrona, eficiência e suporte a streaming de dados o tornam uma escolha popular para casos de uso que exigem alta performance e escalabilidade, ele permite a criação do servidor com JS.


<b>Express.js</b> - é um framework web rápido, flexível e minimalista para o desenvolvimento de aplicativos web em Node.js. Ele fornece uma camada de abstração sobre o servidor HTTP nativo do Node.js, simplificando o processo de criação de aplicativos web e APIs, como por exemplo: Roteamento, suporte a APIs, Integração de mecanismos de modelo como o EJS utilizado nesse projeto, Manipulação de solicitações e respostas, Middleware onde usa o conceito de middleware, que são funções intermediárias que podem ser executadas antes que uma solicitação atinja sua rota final, entre outros, foi utilizado neste projeto para gerenciar o servidor, e auxiliar na definição de rotas com métodos HTTP para armazenar e recuperar dados no banco de dados.


<b>MongoDB</b> - Sistema de Gerenciamento de Banco de Dados (SGBD) NOSQL (banco de dados não relacional) que armazena dados em formato de documento <b>JSON</b> pois armazena dados em coleções de documentos com estruturas flexíveis, permitindo a modelagem de dados de forma mais dinâmica e escalável e para auxiliar na interação do banco de dados com a aplicação foi utilizado a biblioteca <b>Mongoose</b> pois Fornece uma camada de modelagem de dados para interagir com o SGBD de forma mais simples e intuitiva.

Foram utilizados também a biblioteca <b>Bcrypt</b> que é amplamente utilizada para armazenar senhas com segurança em bancos de dados, pois possui  uma função de hash de senhas criptograficamente segura, pois ela foi projetada para ser lenta e resistente a ataques de força bruta, dificultando a decodificação de senhas por meio de tentativa e erro, e para auxiliar no processo de criação da aplicação e ajustes do sistema a ferramenta de desenvolvimento <b>Nodemon</b> que ajuda desenvolvedores Node.js a monitorar e reiniciar automaticamente seus aplicativos quando ocorrem alterações nos arquivos do projeto. Ele é frequentemente usado durante o desenvolvimento para agilizar o processo de teste e depuração, eliminando a necessidade de reiniciar manualmente o servidor a cada modificação no código.

<hr>

# Padrão MVC 

Para a melhor organização do projeto, na implementação do código, foi utilizado o
padrão MVC (Model-View-Controller) que é um padrão arquitetural comumente utilizado
em desenvolvimento de software, principalmente para aplicações web.
Ele separa a aplicação em três camadas distintas:

• Model: Representa os dados e a lógica de negócio da aplicação.

• View: É a camada responsável pela apresentação dos dados ao usuário.

• Controller: É a camada intermediária que gerencia a interação entre a camada
Model e a camada View.

Essa separação permite que cada camada seja desenvolvida independentemente, o que
torna a manutenção e evolução do sistema mais fácil.

![image](https://github.com/matheusscarvalho1/projeto-crud/assets/73304785/8a909358-7732-4150-a3f8-753763b0b728)


# Resultados


<hr>
