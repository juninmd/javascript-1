// Realizando ifs alternários
const age = 12;
const ageGroup = age > 18 ? "Adulto" : "Criança";
console.log(ageGroup);


// Exemplo: Aqui podemos criar objetos (entidades)
const pessoa = {
  nome: 'Rafa',
  idade: 24,
  cargo: 'Desenvolvedoraaaaa'
};
console.log(pessoa.nome); // Rafa

// Destruct de objetos
const { nome, idade, cargo } = pessoa;
console.log(nome); // Rafa
console.log(idade); // 24
console.log(cargo); // Desenvolvedoraaaaa
