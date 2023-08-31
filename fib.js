






let inputValue = document.getElementById("number-input"),
msg = document.getElementById("msg"),
res = ""


function fib2(n){
    if (n==0) return 0;
    else if (n==1) return 1
    return fib(n-1)+fib(n-2)
}

function fib(n){
    res = " "
    if (n==1)
     return "0";
    else if (n==2)
     return "0,1"
     else{
        num =[0,1]
        res +="0 1 " 

        for (let i = 2; i < n; i++) 
        {
            num.push( num[num.length - 1] + num[num.length-2])
            res += num[i] +" " 
        }

     }
    return res
}

function isPositive(value)
{
    if (value > 1 && value< 100) 
    {
        return true
    }
    else
    {
        msg.style.color = "red"
        msg.innerHTML = "Value must be number and greater larger than 0"
        console.log(msg.innerHTML)
            return  false ;
    }
}

function fibHandle2()
{ 
    res = "Result = "
    if(isPositive(inputValue.value))
    {
        for (let index = 0; index < (inputValue.value) ; index++) {
            res += fib(index)+ "  "
        }    
        msg.innerHTML = res

    }
    
}

function fibHandle()
{ 
    res = "Result = "
    if(isPositive(inputValue.value))
    {
        msg.innerHTML = fib(inputValue.value) 
    }
    
}
