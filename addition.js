var numbers = []; //Allows for any amount of numbers to add; No decimals or fractions though (See float files)

//Get input from console

/*Debug values*/
numbers[0] = [4, 4, 6];
numbers[1] = [5, 6, 7, 1];

FormatVariables();

//Flips the values; [0] = ones; [1] = tens, etc
function FormatVariables(){ 
    for(var i = 0; i < numbers.length; i++){
        for(var j = 0; j < Math.floor(numbers[i].length / 2); j++){
            let bufferVal = numbers[i][j];
            numbers[i][j] = numbers[i][numbers[i].length - j - 1];
            numbers[i][numbers[i].length - j - 1] = bufferVal;
        }
    }

    console.log(numbers[0]);
}

function AddNumbers(){
    
}