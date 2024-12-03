//1
// let userInput = prompt('Введите строку');
// if(!isNaN(userInput)){
//     console.log('Число')
// }
// else{
//     userInput=userInput.toLowerCase();
//     console.log(`#${userInput}`);
// }

//2
// const userInput=prompt('Введите строку');
// if(!isNaN(userInput)){
//         console.log('Число')
//     }
//     else{
//         const cleaned = userInput.toLowerCase().replaceAll(' ','')
//        if(cleaned=== cleaned.split('').reverse().join(''))
//             console.log(true)
//         else
//             console.log(false)
//     }

//3
// const userInput=prompt('Введите строку');
// if(userInput==''){
//         console.log('пустой ввод')
//     }
//     else{
//         result =  userInput.replaceAll('@','')
//         console.log(result)
//     }

//4
// const userInput=prompt('Введите строку');
// if(isNaN(userInput)){
//         console.log('не число')
//     }
//     else{
//         const cleaned = Number(userInput);
//        if(cleaned>2 && cleaned<11)
//             console.log('Верно')
//         else if(cleaned>=26 && cleaned<30)
//             console.log('Верно')
//         else
//             console.log('Не верно')
//     }

//5
// const userInput=prompt('Введите строку');
// if(userInput.includes('@') && (userInput.endsWith('.com')||userInput.endsWith('.ru')))
//     console.log(true)
// else
//     console.log(false)

//6
// const userInput=prompt('Введите строку');
// const result=userInput.split(',')
// console.log(result)

//7
// const userInput=prompt('Введите строку');
// const userNumber=prompt('Введите число');
// if(isNaN(userInput)){
//             console.log('не число')
//         }
// else{
//            console.log(userInput.repeat(userNumber));
//         }

//8
// const userInput=prompt('Введите строку');
// if(userInput.startsWith('http://') || userInput.startsWith('https://'))
// {
//     console.log(true)
// }
// else{
//     console.log(false)
// }

//9
// const userInput = prompt('Введите строку');
// let a = userInput.toUpperCase(); 
// a = a.split(' ');
// for (let i in a) {
//     a[i] = a[i][0].toLowerCase() + a[i].slice(1);
// }
// a = a.join(' ');
// console.log(a);

//10
// const userInput = prompt('Введите строку:');
// const userChar = prompt('Введите символ:');
// const index = userInput.indexOf(userChar); 
// if (index !== -1) {
//     console.log(`Символ '${userChar}' найден на индексе: ${index}`);
// } else {
//     console.log('Символ не найден');
// }

//11
// const symbol1 = Symbol('описание');
// const symbol2 = Symbol('описание');
// const areEqual = symbol1 === symbol2;
// console.log(`symbol1 === symbol2: ${areEqual}`); 

//12
// const mySymbol = Symbol('описание');
// const isSymbol = typeof mySymbol === 'symbol';
// console.log(`Тип переменной mySymbol: ${typeof mySymbol}`); 
// console.log(`Переменная имеет тип "symbol": ${isSymbol}`); 

//13
// const userInput = prompt('Введите строку:');
// let b = 0;

// for (let char of userInput) {
//     if (char === '.' || char === '!' || char === '?') {
//         b++;
//     }
// }
// console.log(b);

//14
// const userInput = prompt('Введите строку:');
// const a = userInput.lastIndexOf('/');
// console.log(userInput.slice(a+1))