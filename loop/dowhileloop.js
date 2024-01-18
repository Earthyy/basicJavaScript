var countloop = 1;

// ข้อเเตกต่างระหว่าง while กับ Do while คือ Do while จะทำก่อน 1 รอบเเลัวค่อยเช็คเงื่อนไข เเต่ While จะเช็คเงื่อนไขก่อนเเล้วค่อยทำ
document.writeln("<br>");
do {
    document.writeln(countloop, "<br> ");
    countloop++;
} while (countloop < 9);
