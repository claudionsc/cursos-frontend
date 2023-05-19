# Lista de cursos

Este projeto em ReactJs, é uma aplicação que simula tela de vídeo de uma plataforma de cursos online.
[Ver em funcionamento]( https://claudionsc.github.io/cursos-frontend/)

<p align="center">
<img width="870" src="src\assets\to_readme\202305181706.gif">
</p>

# Neste projeto

* ReactJs
* Axios
* Api Restful
* Redux
* Styled-Components

### `npm i`

Instala todas as dependências necessárias para o a aplicação funcionar

Esta aplicação tem conexão com uma api criada por mim, hospedada num web service do [Render](https://render.com/).

Caso tenha interesse, veja o [repositório do banco de dados](https://github.com/claudionsc/cursos-backend) e siga a documentação para criar o banco de dados e testar as requisições localmente. Para a conexão do frontend local com o banco de dados local, basta seguir o caminho `src\services\api.js` e na função presente, mudar o trecho `baseURL: "https://bd-alunos.onrender.com` para `baseURL: "http://localhost:5000/"` ou a porta de sua preferência. 
