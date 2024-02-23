let myself = {
    name: "supanat",
    lname: "noisupa",
    age: 20,
    iq: 200,
    allMyself:function(){ //function ใน object จะเรียกว่า method
        return "ชื่อ " + this.name + " นามสกุล " + this.lname + "<br> อายุ = " +this.age + " ความฉลาดหน่วย IQ = " + this.iq;
    }
};

document.write("<h2>เรียกใช้ด้วย object </h2>" , myself.allMyself());

let callsalary = {
    money : 18000 ,
    bonus : 15/100,
    salary:function() {
        return this.money+(this.money*this.bonus);
    }
};

document.write("<br> เงินเดือน = ",callsalary.salary());


let myObj = {
    nameProduct:"Iqoo 12",
    cpu:"Snapdragon 8 Gen 3 + Chip Q1",
    price:27999,
    ram:12,
    rom:512,
    usbtype:"C 2",
    spec:function(){
        return "สเปคของ " + this.nameProduct + " CPU " + this.cpu + " ราคา " + this.price + " แรม " + this.ram +
            " หน่วยความจำ " + this.rom + " usb " + this.usbtype;
    }
}

console.log(myObj.spec());