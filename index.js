const wordWithoutSpecialChar = (word) => {
   let result = word.split(' ')
   let output = []
   for(let i = 0; i < result.length; i++) {
     if(!result[i].includes('*') && !result[i].includes('_') && !result[i].includes('[') || !result[i].includes('(') && !result[i].includes('!') && !result[i].includes('?') && !result[i].includes('=') && !result[i].includes('&')){
        output.push(result[i])
     }else{
        console.log("masuk")
     }
   }
   console.log(output)
}

wordWithoutSpecialChar('Saat meng*ecat tembok, Agung dib_antu oleh Raihan.')