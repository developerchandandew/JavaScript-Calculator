const input = document.querySelector('input');
const button = document.querySelectorAll('button');
const but=Array.from(button);
let string = '';

but.forEach(button=>{
    button.addEventListener('click',(e)=>{
        // input.value += button.innerHTML;
        // console.log(input.value);

        if(e.target.innerHTML == '='){
            string = eval(string)
            input.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            input.value = string;
        }else if(e.target.innerHTML == 'DEL'){
            // string = string.slice(0,-1) both methods are work same
            string = string.substring(0,string.length-1)
            input.value = string
        }
        else{
            string += e.target.innerHTML;
            input.value = string
        }

    })
})
