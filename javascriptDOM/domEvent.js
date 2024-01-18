function welcome() {
    if(confirm("ต้องการรับคุกกี้ไหม") == true){
        alert("ยินดีตอนรับ");
    }
    else{
        alert("ไม่ตอนรับ");
    }
}

// ใช้ได้กับพวก inputtext และ textarea
function hightlight(objects){
    objects.style.color = "blue";
}
function unhightlight(objects){
    objects.style.color = "black";
}

// function getMenu(){
//     const menu = document.getElementById("menu")
//     , displayMenu = document.getElementById("displayMenu");
    
//     console.log(menu.value.toUpperCase());
//     displayMenu.innerHTML = menu.value; //displayMenu.innerHTML ข้อมูล menu.vale ผ่านตัว displayMenu 
//     return menu.value;
// }

//event listenerevent
const menu = document.getElementById("menu") //การอ้างอิงตำเเหน่ง 
    , displayMenu = document.getElementById("displayMenu");
// เมื่อมีการเปลี่ยนค่าใน id menu HTML javascript  จะรับค่ามาผ่านmenu.addEventListene จากการอ้างอิงตำเเหน่ง เเล้วเรียกใช้ function getMenu
//เเนะนำให้ใช้ EventListene เพราะหน้า HTML จะได้ไม่ต้องไปสร้าง methon onload onchange onfocus หรือ onblur
menu.addEventListener('change',getMenu); //'change' เป็นชื่อ event ที่กำหนดขึ้นมาเองมี change และ click โดยอิงจาก DOM event ที่มีอยู่
function getMenu(){
    console.log(menu.value);
    displayMenu.innerHTML = menu.value;
}

document.getElementById("btn").addEventListener('click', function(){
    text2.innerHTML = "<strong> เก่งมาก </strong>";
});


displayMenu.addEventListener('click', function(){
    displayMenu.style.color = "red";
});