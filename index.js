
var arr1 = [10, 1, 200, 35];
var arr2 = [9, 4, 28, 7];

var totalX = [];

for(var i = 0; i < arr1.length; i++){ //นับว่าใน arr1 มีข้อมูลใน array กี่ตัว แล้วทำ loop ตามจำนวนนั้น
  totalX.push(arr1[i]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
  console.log(totalX); //แสดง totalX
}

for(var i = 0; i < arr2.length; i++){ //นับว่าใน arr1 มีข้อมูลใน array กี่ตัว แล้วทำ loop ตามจำนวนนั้น
  totalX.push(arr2[i]); //เอาข้อมูลใน array ของ arr1 เข้าไปใน totalX
  console.log(totalX); //แสดง totalX
}

totalX.sort(function(a, b){ //ในกรณีที่ต้องการเรียงข้อมูลที่เป็นตัวเลขเราจำเป็นต้องเขียน callback function เพิ่มเข้าไปใน function sort เพื่อให้การเรียงข้อมูลอยู่ในรูปแบบที่ถูกต้อง
  return a-b}
);


console.log("\n"+totalX); // 1,4,7,9,10,28,35,200

//Results
// [ 10 ]
// [ 10, 1 ]
// [ 10, 1, 200 ]
// [ 10, 1, 200, 35 ]
// [ 10, 1, 200, 35, 9 ]
// [ 10, 1, 200, 35, 9, 4 ]
// [ 10, 1, 200, 35, 9, 4, 28 ]
// [ 10, 1, 200, 35, 9, 4, 28, 7 ]
//
// 1,4,7,9,10,28,35,200
