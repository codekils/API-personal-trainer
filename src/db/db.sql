-- Create table clientes 
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome varchar(100) not null,
    telefone varchar(100) unique not null,
    email varchar(255) unique not null,
    objetivo varchar(255) 
    endereço varchar(255) 
);

-- Create table agendamentos
CREATE TABLE agendamentos (
  id SERIAL PRIMARY KEY,
  cliente_id INTEGER REFERENCES clientes(id) ON DELETE CASCADE,
  data DATE NOT NULL,
  hora_inicio TIME NOT NULL,
  hora_fim TIME NOT NULL
  observacoes VARCHAR(510)
);
