# NetShow TesteApp

Este projeto consome uma API local rodando com JSON Server, exibe vídeos em formato HLS e contém animações para aprimorar a experiência do usuário. A estrutura de arquivos é organizada, utilizando boas práticas de desenvolvimento.

## Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Instalação](#instalação)
- [Observações](#observações)

## Sobre

Esse projeto foi criado com o intuito de testar e avaliar as seguintes capacidades:

- Configuração e uso do React Native com Expo.
- Roteamento e navegação utilizando react-navigation.
- Integração e consumo de dados de uma API.
- Implementação de skeletons para melhorar a experiência do usuário durante o carregamento de dados.
- Criação e implementação de pequenas animações para uma experiência de usuário mais fluida e agradável.

## Tecnologias

Este app utiliza as seguintes tecnologias:

- **React Native** com **Expo** para desenvolvimento para Android.
- **Styled Components** para estilização.
- **expo-av** para reprodução de vídeos HLS.
- **JSON Server** para rodar um servidor local (instalado como uma dependência de desenvolvimento).
- **react-content-loader** para animações de skeleton.
- **Axios** para chamadas HTTP.
- **Context API** para armazenamento de dados globais.
- Hooks como `useState`, `useEffect`, entre outros.

## Instalação

Clone o repositório e instale as dependências utilizando os comandos abaixo:

## Observações

Observação: O servidor local do JSON Server roda na porta http://localhost:3000/, mas essa porta não é acessível diretamente pelo dispositivo Android. Portanto, no arquivo API.js localizado em ./src/services/, você verá que a porta foi alterada para http://10.0.2.2:3000. Essa configuração permite que o Android consiga acessar os dados dinâmicos.

```bash
# Clone o repositório
git clone https://github.com/GilliardGR/NetshowTesteAPP.git

# Entre no diretório do projeto
cd NetshowTesteAPP # Entre na pasta raiz do repositório

# Instale as dependências
yarn install

# Abra outro terminal dentro do VSCode e rode o comando abaixo para iniciar o JSON Server
npx json-server ./src/services/db.json

# Mantenha o servidor local rodando

# Rode o projeto
yarn android


```
