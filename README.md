# Projeto-CRUD

Desenvolvido para estudos afim aprimorar e enriquecer meus conhecimentos na stack back-end de uma aplicação web com node.js

# Dependências

Para rodar a aplicação você deve instalar algumas ferramentas incluindo a 'Nodemon' através do node package manager:
então instale digitando no console: 'npm install nodemon --save -dev' e configure em 'scripts' 'nodemon src/server.js' no package.json (para que o servidor inicie através do nodemon e assim reiniciar automaticamente a cada mudança no código) como ilustra a imagem abaixo:


![image](https://github.com/matheusscarvalho1/projeto-crud/assets/73304785/f0496aea-16a4-46a8-8243-9a0cb28efaab)


## Comandos

Para instalar as bibliotecas e dependências:

```bash
npm i
```

Para rodar o projeto:

```bash
npm run dev
```


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

# Página Inicial
Como dito anteriormente, a aplicação não possui um layout robusto, foi desenvolvido com a finalidade de praticar conceitos de criação de servidor e armazenamento em banco de dados através de APIs com métodos HTTP.
Então, esta é a página inicial, contendo as duas os botões para o cadastro e listagem dos dados já cadastrados.

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/58b53ce0-7320-497a-9444-143265aeb21e)


# Página de Cadastro de clientes - Create

Ao clicar no primeiro botão como ilustra a imagem abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/23e16c53-4daa-410c-aa01-0079d1d7313a)

O formulário de cadastro de clientes será aberto, nesse formulário o usuário vai armazenar o nome completo do cliente, idade e-mail e senha, como ilustra a figura abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/18ca6868-e4ff-4c60-906e-30342ed0118a)


Nas imagens abaixo ilustram o preenchimento dos campos e o armazenamento no banco de dados como é possível ver na imagem do MongoDB Compass que é uma ferramenta interativa para consultar, otimizar e analisar os dados do MongoDB.

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/b57aee85-f44e-4318-948f-d684459dba99)

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/d7dc33ff-1822-46cc-8f38-1f2fd135f8ba)

MongoDB Compass

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/5f4cbef4-ab02-45d6-a470-de5f32de8a31)

Perceba que as senhas armazenadas estão diferentes do que foi preenchido, ela esta criptografada graças a ferramenta 'bcrypt'.



# Página de listagem de clientes cadastrados - Read

Ao clicar no segundo botão como ilustra a imagem abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/ca4f3417-10c2-4882-8e62-640ac88e4a8b)

Será exibido todos os cadastro realizados na página de cadastro previamente, dados completos do formulárco como: nome completo do cliente, idade e e-mail, como ilustra a figura abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/5a72b2b5-e5a6-489a-9e7a-664c19a2d5d6)

# Editando cadastro - Update

Ao clicar no botão '[EDITAR]' será aberto um formulário preenchido com os dados salvos do registro feito anteriormente para o usuário efetuar a correção dos dados, como ilustra nas imagens abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/a0868fc0-4006-430d-bdec-fd210e07e3aa)

Dados previamentes preenchidos:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/a7ef1bab-ecde-4831-806f-701e5a973da6)

Dados sendo corrigidos:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/fa9a646c-6057-4864-b6b1-060f75de2a65)

Registrando os dados editados e salvando no banco de dados sobrescrevendo o que estava salvo anteriormente:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/58ae4a95-2c4f-4d4a-8690-6bf4e0578fc5)

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/38dab9a2-8fd3-47dc-8118-0de9ef71da7a)


# Apagando cadastro - Delete

E para completar as quatro operações básicas permite realizar as principais tarefas de manipulação de dados em um banco de dados, o Delete, ao clicar no botão '[REMOVER]' o registro no banco de dados é apagado, conforme ilustram as imagens abaixo:

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/cbf4c553-aca9-4f0e-b52c-b4105e7abd06)

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/aa9165d5-7735-46cb-ad5f-e7f63157ef65)

![image](https://github.com/matheusscarvalho1/Projeto-CRUD/assets/73304785/c27e90e4-eb20-4d1d-82c9-185fb918037a)



# Autor

Matheus de Souza Carvalho

Linkedin: https://www.linkedin.com/in/matheusscarvalho/

E-mail: matheusdocarvalho@gmail.com
