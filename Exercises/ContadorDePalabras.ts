let text = "Hola que tal, bienvenidos a BettaTech. Si os esta gustando"
+ " este video, suscribiros y darle a la campanita para ver los nuevos"
+ " videos que vata subiendo";

function normalize(word: string){
    return word.toLowerCase().replace(/[.!,]/g, "");
}

function wordRepetitions(text: string){
    let dict: {[key: string]: number} = {};
    let separateWords = text.split(" ");
    for(let word of separateWords){
        if(normalize(word) in dict){
            ++dict[normalize(word)];
        }else{
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);
}

wordRepetitions(text);