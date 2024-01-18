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