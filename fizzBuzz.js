function fizzBuzz(num){

    if(num % 3 != 0 && num % 5 != 0){
        return num
    }else if(num % 3 == 0 && num % 5 == 0){
        return "FizzBuzz"
    }else if(num % 3 == 0){
        return "Fizz"
    }else if(num % 5 == 0){
        return "Buzz"
    }
    

    /*for(int i = 0; i < num; i++){
        if(num % 3 == 0 && num % 5 == 0){
            return "FizzBuzz"
        }else if(num % 3 == 0){
            return "Fizz"
        }else if(num % 5 == 0){
            return "Buzz"
        }else return i
    }*/
}
module.exports = fizzBuzz;