
function calcInfo(){
    const input1 = prompt("첫번째 숫자를 입력하세요!");
    const input2 = prompt("두번째 숫자를 입력하세요!");
    
    const calculator = {
    plus : function(num1,num2){
    return Number(num1) + Number(num2);
    },
    minus : function(num1,num2){
    return Number(num1) - Number(num2);
    },
    devide: function(num1,num2){
    return Number(num1) / Number(num2);
    },
    multiple : function (num1,num2) {
    return Number(num1) * Number(num2);
    },
    };
    
    if ( input1 === '' || input2 === ''){
    alert('공백은 입력하실 수 없습니다.');
    }
    else{
    let answer = prompt("연산 방법을 선택하시오. +, - , / , * ");
    switch(answer) {
    case '+' : console.log(`덧셈 결과 : ${calculator.plus(input1,input2)}`); break;
    case '-' : console.log(`뺼셈 결과 : ${calculator.minus(input1,input2)}`); break;
    case '/' : console.log(`나눗셈 결과 : ${calculator.devide(input1,input2)}`); break;
    case '*' : console.log(`곱하기 결과 : ${calculator.multiple(input1,input2)}`); break;
    default : alert('잘못된 연산방법입니다!');
    }
    }
    }
    
    calcInfo();