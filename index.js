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

// soal nomor 1
let arr = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5]
let count = {}
arr.forEach(element => {
   count[element] = (count[element] || 0) + 1;
 });

const result = []
 for (const number in count) {
   if(count[number] > 2 || count[number] > 2 && count[number] % 2 == 0){
         for(let i = 2; i <= count[number]; i = i+2){
            result.push(count[number])
         }
   }else if(count[number] > 1) {
      result.push(count[number])
   }
 }
 console.log(result.length)