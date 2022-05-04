var szam = 0;
var txt = "";
var tiz = 0;
var maradekTiz = 0;
function romai(n) {
    //return true;
    if (n > 0) {
        return bekertSzam(n);
        
    }
    
    return "Kérlek 0-nál nagyobb számot adj meg!";
}



function tizig(n) {
    if (n === 10) {
        txt += "X";
    }

    if (n === 9) {
        txt += "IX";
    }
    
    if (n >= 5 && n <= 8) {
        maradek = n % 5;
        txt += "V";
        for (let index = 0; index < maradek; index++) {
            txt += "I";
            
        }
    }

    if (n == 4 ) {
        txt += "IV";
    }

    if (n <= 3) {
        for (let index = 0; index < n; index++) {
            txt += "I";
            
        }
    }
    console.log(txt);
    return txt;
}

function szazig(n) {
    if (n >= 11 && n <= 100) {
        tiz = n / 10; 
        tiz = Math.floor(tiz);
        maradekTiz = n % 10;
        for (let index = 0; index < tiz; index++) {
            txt += "X";
            
        }
    } 
    console.log(tiz);
    console.log(maradekTiz);
    console.log(txt);
    tizig(maradekTiz);

}
function bekertSzam(n) {
    szam = n;
    return szazig(szam);
}

//console.log(romai(8));
romai(39);
