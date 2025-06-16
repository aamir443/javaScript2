function one(){
    let name= 'aamir';
    function two(){
        let age = 22;
        console.log(name);
    }
    // console.log(age);
    // two();
}

one();
// This code will throw an error because age is not defined in the scope of function one