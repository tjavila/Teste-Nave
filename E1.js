let compara = (str1, str2) => {
  if(str1.length > str2.length)
    return 'A maior string é: ' + str1;
  else if(str2.length > str1.length)
    return 'A maior string é: ' + str2;
  else
    return 'Ambas Strings possuem o mesmo tamanho'; 
}

console.log(compara('teste 1','teste 123'));
