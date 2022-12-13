var numbers = []; //Allows for any amount of numbers to add; No decimals or fractions though (See float files)

//Get input from console

/*Inputs*/
numbers[0] = [4, 4, 6];
numbers[1] = [5, 6, 7, 1];

FormatVariables();
console.log(AddNumbers());

//Flips the values; [0] = ones; [1] = tens, etc
function FormatVariables(){ 
    for(var i = 0; i < numbers.length; i++){
        for(var j = 0; j < Math.floor(numbers[i].length / 2); j++){
            let bufferVal = numbers[i][j];
            numbers[i][j] = numbers[i][numbers[i].length - j - 1];
            numbers[i][numbers[i].length - j - 1] = bufferVal;
        }
    }
}

function AddNumbers(){
    let outputBuffer = 0;
    for(var i = 0; i < GetLargestNumberIndex(); i++){
        outputBuffer += (numbers[0][i] * Math.pow(10, i)) + (numbers[1][i] * Math.pow(10, i))
    }

    return outputBuffer;
}

//Also adds extra zeros to the end of the shortest arrays to make math terminate properly
function GetLargestNumberIndex(){
    let largestBuffer = 0;
    for(var i = 0; i < numbers.length; i++){
        if(numbers[i].length > largestBuffer){
            largestBuffer = numbers[i].length;
        }
    }

    for(var i = 0; i < numbers.length; i++){
        if(numbers[i].length < largestBuffer){
            //Ding ding ding
            for(var j = numbers[i].length; j < largestBuffer; j++){
                numbers[i][j] = 0;
            }
        }
    }

    return largestBuffer;
}