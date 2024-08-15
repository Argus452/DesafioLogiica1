let nome = "Arcus Thay"
let XP = 20000

if (XP <= 1000){
    console.log("O herói de nome " + nome + " está no nível de Ferro")
}else if(XP > 1001 && XP < 2000){
    console.log("O herói de nome " + nome + " está no nível de Bronze")
}if (XP > 2001 && XP < 5000){
    console.log("O herói de nome " + nome + " está no nível de Prata")
}else if(XP > 5001 && XP < 7000){
    console.log("O herói de nome " + nome + " está no nível de Ouro")
}if (XP > 7001 && XP < 8000){
    console.log("O herói de nome " + nome + " está no nível de Platina")
}else if (XP > 8001 && XP < 9000){
    console.log("O herói de nome " + nome + " está no nível de Ascendente")
}if (XP > 9001 && XP < 10000){
    console.log("O herói de nome " + nome + " está no nível de Imortal")
}else if (XP >= 10001){
    console.log("O herói de nome " + nome + " está no nível de Radiante")
}