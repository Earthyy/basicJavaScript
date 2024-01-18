document.write("<h2>Customer</h2>"); //เเสดงผลหน้าเว็บ

alert("อยากเป็นโปรเเกรมเมอร์เเล้วมีเงินเดือนเยอะๆ");

console.log("Hello JavaScript"); //เเสดงผลหน้า console ไว้เช็คค่าเบื่องหลัง
console.error("ถ้าขี้เกียดจะลำบาก"); //บ่งบอก error หากไม่อยู่ในเงื่อนไข
console.warn("อยากลืมหาความรู้เยอะๆ"); // warnning เเจ้งเตือนหากเจอข้อผิดพลาด

// การสร้างตัวเเปร
let Name = "supanat", Age = 20, _for = "java"; //พิมพ์เล็กพิม์ใหย๋มีผลต่อตัวเเปรทำให้มีความเเตกต่างกัน
console.log(Name);
document.writeln("ชื่อ "+ Name+ " อายุ ", Age,"<br>จากภาษา ", _for);
_for = "javaScript";
document.writeln("<br>จากภาษา ", _for);

const vat = 0.07; //ประกาศสร้างค่าคงที่
console.log(vat);
let cost = 500, price= (cost*vat)+cost;
console.log('ราคารวมของ =', price)

//คำสั่งเช็ค type ของข้อมูลที่อยู่ในตัวเเปร
console.log(typeof(vat)); 
console.log(typeof(Name));

// convert data type
let cost1 = parseInt("50"), cost2 = parseFloat('50.55'), costEZ= +"50.55"; //จาก string เป็นตัวเลขเท่านั้น
console.log(typeof(costEZ), typeof(cost2),cost2);

cost1 = cost1.toString();

console.log(cost1, typeof(cost1));
