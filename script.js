let myAge = prompt("Yaşınızı Girin");

// let myAge = 29; // kendi yaşımız
let earlyYears = 2; // Köpek Yılında ilk 2 yıl
earlyYears *=10.5; // aynısı buna eşit earlyYears = earlyYears*10.5;
let laterYears = myAge - 2; // kendi yaşımızdan 2 çıkardık
laterYears = laterYears*4; //bu ifade ile laterYears *=4; eşittir. 

console.log(earlyYears);
console.log(laterYears);

let myAgeInDogYears = earlyYears+laterYears; // toplam köpek yaşımız
let myName = "Halit";
console.log(myName.toLowerCase());

console.log(`Benim adım ${myName}. Köpek yılı olarak ${myAgeInDogYears} yaşındayım, insan yılı olarak ${myAge} yaşındayım.`); // açıklayıcı cümle


let kopekyasi = 129;
let ilk2yil = 10.5*2;
let yas = kopekyasi-ilk2yil;
let sonyas = yas/4+2;
console.log(sonyas); 

