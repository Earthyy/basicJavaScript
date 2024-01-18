let count = 1;

while (count <= 20) {
    document.write("ผลิตสินค้าชิ้นที่ ", count , "<br>");
    if(count >= 10) {
        document.write("<h3>หยุดการผลิตสินค้าชิ้นที่ ", count ," มีปัญหา !!!!!</h3>");
        break;
    }
    count+=2;
}