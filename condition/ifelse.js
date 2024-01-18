var iphone16 = parseInt("120Hz"), iqoo12 = "144Hz", iqoo12price = 28000 ;
// console.log(iphone16);

if(iphone16 <= parseInt("60Hz")) { // เงื่อนไขเป็นจริงถึงจะทำ
    if(iqoo12price < 25000 || iqoo12 == "144Hz"){ //เครื่องหมาย < หรือ > ใช้กับ string ไม่ได้
        console.log("ซื้อ iqoo12 จอ ", iqoo12);
    }else if (iqoo12price >= 25000 && iqoo12price <= 27000) {
        console.log("ไปซื้อ vivo s18 pro");
    }else {
        console.log("รอไอโฟนSE4");
    }
    
}else {
    console.log("ซื้อไอโฟน");
}

//Ternary 
var decide = iphone16 <= 60 ? console.log("ซื้อ IQOO12") : console.log("ซื้อไอโฟน");