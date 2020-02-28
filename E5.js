let trocaNum = (string) =>{
let dicionario = {4: "a", 3: "e", 1: "i", 5: "s"};
return string.replace(/[1345]/g, troca => dicionario[troca]);
}

console.log(trocaNum("T35t3 d3 35t4g1o"));
