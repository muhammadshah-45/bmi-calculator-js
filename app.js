const calculateButton = document.getElementById("calculateBtn");

calculateButton.addEventListener("click",()=>{
    console.log("clicked")
    
    //Retreive the User input data
    
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);
    
    
    var result = document.getElementById("result");
    // Add validate input

    if(isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
       result.innerText = "Please enter positive numbers for weight and height"
       return;
    }

    //Calculate by BMI formula 

    const bmi = weight / (height * height);
    const fixedBmi = bmi.toFixed(2);



    
    let category;
    if(bmi < 18.5){
        category = "Under Weight";
    } else if(bmi < 24.9) {
        category = "Normal Weight"
    }else if(bmi < 29.9){
        category = "Overweight";
    }else{
        category = "Obesity";
    }

  // show the results of bmi
   let div = document.getElementById("result");
   // add the bmi result
   div.innerText = `Your BMI is ${fixedBmi} and you are in the "${category}" category.`
   
})