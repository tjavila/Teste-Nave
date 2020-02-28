let aplica = (func, arg1, arg2) => {
    return func(arg1,arg2);
}

let concatena = (arg1, arg2) => {
    return arg1 + arg2;
}

console.log (aplica(concatena, "Teste", "Teste"));
