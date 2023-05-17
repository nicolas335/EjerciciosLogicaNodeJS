const rangeVision = (num) => {

    let digits = num.toString().split('').map(numero => Number(numero));

    let visionValues = [];
    
    for (let i = 0; i < digits.length; i++) {
      let range = digits[i];
      let leftSum = 0;
      let rightSum = 0;
      
      for (let j = i - 1; j >= Math.max(0, i - range); j--) {
        leftSum += digits[j];

      }
      
      for (let k = i + 1; k <= Math.min(digits.length - 1, i + range); k++) {
        rightSum += digits[k];
      }
      
      visionValues.push(leftSum + rightSum);

    }
    
    let minVision = Math.min(...visionValues);
    return visionValues.some((value, index) => digits[index] === 1 && value === minVision);
  }

  console.log(rangeVision(34315));
  

  
      
      


  