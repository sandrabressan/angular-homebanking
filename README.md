# Homebanking

## Sumário

<br>

- [Sobre](#Sobre)
- [Instalação](#Instalação)
- [Utilização](#Utilização)

<br>

## Sobre
<br>
Aplicativo Web de homebanking desenvolvido com o framework Angular, apresentando as funcionalidades de login, lista de movimentos, depositar e retirar fundos, serviços de autenticação e log. 

<br>

## Instalação
<br>

Instalar a versão mais recente do Node [Node](https://nodejs.org/en/).

Instalar o TypeScript:

```
$ npm install -g typescript
```

Instalar o Angular:
```
$ npm install -g @angular/cli
```

Baixar o projeto e instalar dependências:

```
git clone git@github.com:sandrabressan/homebanking.git
cd homebanking-main
npm install
```
<br>

## Utilização
<br>

No terminal rodar o comando:

```
$ ng serve
```
Abrir o browser e navegar para o endereço   http://localhost:4200.

Na página principal clicar em **Acessar sua Conta**, você será redirecionado para a página de **Login**.

A página de **Lista de Movimentos** é protegida por um serviço de autenticação.

Atualmente há 02 usuários cadastrados: Maria e José. Para entrar com estes usuários, é preciso utilizar as seguintes credenciais:

Maria: 

```
Agência: 1234
Conta: 12345678-9
Senha: 1234qwer
```
José:

```
Agência: 5678
Conta: 98765432-1
Senha: qwer1234
```
Utilizando qualquer uma destas credenciais você será direcionado para a página **Lista de Movimentos**, onde é mostrado o saldo atual e histórico de transações.

A **Lista de Movimentos** carrega o histórico de transações do usuário usando o serviço **ContaService**, que simula uma requisição para um endpoint HTTP e exibe os 10 últimos movimentos.

Para depositar ou retirar fundos, basta inserir um valor numérico no campo **Insira o valor (R$)** e clicar em **Depositar** ou **Retirar**.

Para fazer Log Out clique em **Log Out**.

As tentativas de login e transações são registradas por meio do serviço de log, o qual imprime no console e salva os logs criptografados no local storage do browser.


