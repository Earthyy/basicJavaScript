// let text1 = document.getElementsByTagName('p');
// console.log(text1);

let text2 = document.getElementById('demo'); //อ้างอิง id ในหน้า htm เก็บลงใน text2
console.log(text2);


function displayText() {//เเสดงผลเปลี่ยนข้อความเมื่อกดปุ่ม
    text2.innerText = "<strong>อยากเก่งอ่ะ</strong>"; //เเสดงผลเเค่ตัวหนังสือด้วยการอ้างอิง id ในหน้า html เเสดงผล element tag html ไม่ได้
    text2.innerHTML = "<strong>อยากเก่งอ่ะ</strong>"; //แสดงผลทั้งข้อความเเละ element tag html
}

let text3 = document.getElementById('change');
let one = 1;
function displayText2() {
    text3.innerHTML = `และเชื่อม string ด้วย $ {variable} จะได้เท่ากับ ${one} `;
}

// ปัจจุบันนิยมให้ querySelector กับ class,tag และมักสร้างตัวเเปรมาเก็บค่าเป็น const เป็นค่าคงที่
// เพราะเป็นการอ้างอิงตำเเหน่ง แต่ let ที่จะใช้กับพวกตัวเเปรที่ต้องนำไปประมวลผลต่อ
let text4 = document.querySelector('#demo');// id มักใช้ getelementbyid มากกว่า
let text5 = document.querySelector('.changes'); //class ทุกคลาส
let text6 = document.querySelectorAll('p'); //tag p ทุกตัว 

console.log(text4);
console.log(text5);
console.log(text6);
