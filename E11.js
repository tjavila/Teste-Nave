let objetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]

console.log(objetos.sort((p1,p2)=>{
    if (p1.idade < p2.idade) return 1
    if (p1.idade > p2.idade) return -1
    if (p1.id > p2.id) return 1
    if (p1.id < p2.id) return -1
    else return 0;
  }));
