class Funcionario {
    constructor(nome, idade, cargo) {
      this.nome = nome;
      this.idade = idade;
      this.cargo = cargo;
    }
  
    seApresentar() {
      return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }
  
    trabalhar() {
      return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
  }
  
  class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
      super(nome, idade, cargo);
      this.departamento = departamento;
    }
  
    gerenciar() {
      return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
  }
  
  class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
      super(nome, idade, cargo);
      this.linguagem = linguagem;
    }
  
    programar() {
      return `${this.nome} está programando em ${this.linguagem}.`;
    }
  }
  
  function exibirErro(mensagem) {
    const erroDiv = document.getElementById('erro');
    erroDiv.innerText = mensagem;
  }
  
  function criarFuncionario() {
    try {
      const nome = document.getElementById('nome').value;
      const idade = parseInt(document.getElementById('idade').value, 10);
      const cargo = document.getElementById('cargo').value;
      const departamento = document.getElementById('departamento').value;
      const linguagem = document.getElementById('linguagem').value;
  
      if (!nome || isNaN(idade) || !cargo) {
        throw new Error("Nome, idade e cargo são obrigatórios.");
      }
  
      const gerente = new Gerente(nome, idade, cargo, departamento);
      const desenvolvedor = new Desenvolvedor(nome, idade, cargo, linguagem);
  
      document.getElementById('info').innerHTML = `
        <h2>Gerente:</h2>
        <p>${gerente.seApresentar()}</p>
        <p>${gerente.trabalhar()}</p>
        <p>${gerente.gerenciar()}</p>
        <h2>Desenvolvedor:</h2>
        <p>${desenvolvedor.seApresentar()}</p>
        <p>${desenvolvedor.trabalhar()}</p>
        <p>${desenvolvedor.programar()}</p>
      `;
    } catch (error) {
      exibirErro(error.message);
    }
  }
  
  document.getElementById('submit').addEventListener('click', criarFuncionario);