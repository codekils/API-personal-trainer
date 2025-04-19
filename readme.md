# 🚀 Desafio Dev #1 — API para Personal Trainer

## 🧠 Cenário

Um personal trainer chamado **Rafael** atende clientes em domicílio e tem dificuldades em organizar:

- Seus horários de atendimento
- Os dados dos clientes
- As sessões realizadas
- E evitar conflitos de agenda

Ele deseja uma **API simples** para cadastrar clientes, agendar sessões e visualizar seus horários disponíveis.

---

## 🎯 Objetivo

Criar uma API RESTful utilizando **Node.js**, **Express**, **Knex**, **PostgreSQL** e **JWT** que resolva os problemas do Rafael com agendamentos e gerenciamento de clientes.

---

## 🧩 Funcionalidades obrigatórias

### ✅ Cadastro de Clientes
- `POST /clientes`
- Campos obrigatórios:
  - `nome` (string)
  - `telefone` (string)
  - `email` (string)
  - `objetivo` (string)
  - `endereço` (string)

---

### ✅ Autenticação do Personal Trainer
- Apenas um usuário administrador (Rafael)
- Dados de login definidos via variáveis de ambiente:
  - `ADMIN_EMAIL`
  - `ADMIN_PASSWORD_HASH` (bcrypt)
- Rota:
  - `POST /login`
  - Retorna token JWT

---

### ✅ Agendamento de Sessões
- `POST /agendamentos`
- Requer token JWT
- Campos obrigatórios:
  - `id_cliente`
  - `data` (formato `YYYY-MM-DD`)
  - `hora_inicio` (formato `HH:mm`)
  - `hora_fim` (formato `HH:mm`)
  - `observações` (opcional)

---

### ✅ Listar Agendamentos do Dia
- `GET /agendamentos?data=YYYY-MM-DD`
- Retorna todos os agendamentos do dia especificado, com dados do cliente vinculado

---

### ✅ Validação de Conflito de Horários
- A API deve impedir o agendamento de uma sessão que sobreponha horários de outra sessão no mesmo dia

---

## 🗃️ Estrutura de Banco de Dados (sugestão)

### Tabela `clientes`
- `id`
- `nome`
- `telefone`
- `email`
- `objetivo`
- `endereço`
- `criado_em`

### Tabela `agendamentos`
- `id`
- `id_cliente` (foreign key)
- `data`
- `hora_inicio`
- `hora_fim`
- `observações`
- `criado_em`

---

## 🔒 Segurança
- Middleware de autenticação com JWT para proteger todas as rotas privadas (exceto login)

---

## 🎁 Extra (Desafio Plus)
- `PUT /agendamentos/:id` - Editar agendamento
- `DELETE /clientes/:id` - Deletar cliente (e seus agendamentos em cascata)

---

## 🛠 Tecnologias sugeridas

- Node.js
- Express
- Knex.js
- PostgreSQL
- Bcrypt
- Dotenv
- JSON Web Token (JWT)

---

## 📁 Estrutura de Pastas Sugerida

