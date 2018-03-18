# SpeechN (Speech Node)
============================
## Sobre
Este é um projeto é uma replica do livro "Aplicações web real-time com Node.js" (https://casadocodigo.refersion.com/l/630.1389) da editora Casa do Código (http://www.casadocodigo.com.br). Contedo uma atualizações de depedencias e adaptações.

## Instalando

Obs.: É necessário antes de instalar este projeto, ter instalado e rodando os bancos de dados: 
* MongoDB (http://www.mongodb.org/downloads)
* Redis (http://redis.io/download)

Para instalá-lo em sua máquina faça os comandos a seguir:

``` bash
  git clone git@github.com:AndersonFeernandes/SpeechN.git
  cd SpeechN
  npm install
  npm start
```

#### Atenção

É necessário ter a variável de ambiente: `NODE_ENV=development` configurada em seu sistema operacional para rodar em máquina local.

Se não quiser criar esta variável você rode o comando `NODE_ENV=development npm start`.

E depois acesse no seu navegador o endereço: http://localhost:3000

Caso não consiga configurar, como padrão, o projeto ja vem com o modo DEVELOPMENT

## Autor
Anderson Luiz da Cunha Fernandes
Email: <andersonlcfernandess@gmail.com>
LinkedIn: <https://www.linkedin.com/in/anderson-fernandes-b68210119/>

## Licença

The MIT License (MIT)

Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
