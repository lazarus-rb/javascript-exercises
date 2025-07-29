const fibonacci = function(num) {
    num = parseInt(num);
    

    if(num <= 1) {
        if(num<0)
            return 'OOPS';
        if(num == 0) 
            return 0;
        else
            return 1;
    }

    num += 1; 

    let sequence = [0, 1, 1];


    for(let i = 3; i < num; i++) {
        let n1 = sequence[i - 1];
        let n2 = sequence[i - 2];

        let n = n1 + n2;

        sequence.push(n);

    }
    
    return sequence[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
