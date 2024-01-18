let number = Array(2,3,505,120,25,30,4,9);
document.write("ก่อน .sort = ", number);
document.write("<br>หลัง .sort = ", number.sort()); //.sort จะเรียงเเค่ตัวเลขหลักเเรก

number.sort(function(min, max){ //ใช่ number หลัง .sort เเล้ว
    document.write("<br>max = ", max);
    document.write("<br>min", min);  
    return min - max;//เท่าที่คิดออกเป็นการเอาค่ามาลบกัน เผื่อนำไปเปรียบเทียบ
});

document.write("<br>หลัง .sort(call function) = ", number); 

let colors = ["red",'blue',"green","pink","white",1];
colors[1]= "ฟ้า"; //เปลี่ยนค่าที่อยู่ใน Array
document.write("<br>ก่อน pop หรือ push = ",colors);
document.write("<br>pop สี ",colors.pop());
colors.push("black");
document.write("<br>หลัง pop หรือ push = ",colors);


var numAndColors = number.concat(colors);
console.log(numAndColors);


