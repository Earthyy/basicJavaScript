//ฟังก์ชั่นที่ไม่ได้รับค่า
function print() {
    document.write("<br>me is function <br>");
}
print(); //เรียกใช้ฟังก์ชั่น

// function displayName() {
//     document.write("ไม่บอกกกกกกก");
// }

//ฟังก์ชั่นที่มีการรับเเละส่งค่าเพื่อนำมาทำงาน
function getpluseNumber(x, y) { //(x, y) พารามินเตอร์
    console.log(x+=y);
}
getpluseNumber(5, 6); //อาร์กิวเมนต์
getpluseNumber(5, 500);

//ฟังชั่นแบบส่งค่าออกมาได้
function setSalary(salary, bonus = 20/100) {
    return (salary*bonus)+salary;
}
let a = setSalary(5000, 50/100);
let b = setSalary(6000);
document.write("เงินเดือนของนาย a = ", a, "<br>");
document.write("เงินเดือนของนาย b = ", b, "<br>");

function getfullName(name, sname) {
    return name + sname;
}
document.write(getfullName("supanat", " noisupa <br>"));

let days = ["จัน","อังคาร","พุธ","พฤหัส","ศุกร์","เสาร์","อาทิตย์"];
days.forEach(loop);

function loop(day){
    console.log(day);
}
