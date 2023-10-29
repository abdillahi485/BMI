// Good Luck! You got this 💪🏾
// Write your code here.
function calculateBMI(weight, height) {
    const bmi = weight / (height * height);
  
    return bmi
  }

const mohamedWeight = 75; 
const mohamedHeight = 1.75; 
const mohamedBMI = calculateBMI(mohamedWeight, mohamedHeight);

const aliWeight = 68; 
const aliHeight = 1.80; 
const aliBMI = calculateBMI(aliWeight, aliHeight);

if (mohamedBMI > aliBMI) {
  console.log("Mohamed has a higher BMI");
} else if (aliBMI > mohamedBMI) {
  console.log("Ali has a higher BMI");
} else {
  console.log("Mohamed and Ali have the same BMI");
}