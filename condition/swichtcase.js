let month = 0, err;

switch (month) {
    case 1:
        console.log("มกราคม");
        break;
    case 2:
        console.log("กุมภาพันธ์");
        break;
    case 3:
        console.log("มีนาคม");
        break;

    default: err = "เดือนมี 1-12 เท่านั้น";
        break;
}

console.log(err);