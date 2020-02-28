let mudaString = (string) =>{
  let aux = /[0-9]+/g;
  let string2 = console.log(string.replace(aux, "[removido]"));
  return string2;
}
                     
mudaString("teste 1 de 2 string 3");
