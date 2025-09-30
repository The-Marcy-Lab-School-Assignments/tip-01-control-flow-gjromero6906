/*
Complete the function so that it returns the following:
80 or above → "Wear shorts and a t-shirt."
60–79 → "Wear jeans and a light jacket."
40–59 → "Wear a sweater and pants."
Below 40 → "Wear a heavy coat, scarf, and boots."
*/

const outfitPicker = (temp) => {
  // ✍️ Write your code here
  if(temp<40){
    console.log("Wear a heavy coat, scarf, and boots.");
  }else if(temp<60){
    console.log("Wear a sweater and pants.");
  }else if(temp<80){
    console.log("Wear jeans and a light jacket.");
  }else{
    console.log("Wear shorts and a t-shirt.");
  }
};

//Test your function below
outfitPicker(80);
outfitPicker(39);
outfitPicker(40);