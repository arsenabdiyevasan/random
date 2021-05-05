const inputs =document.querySelector('.inputs');
let arr=[]
let fun=()=>{
    const numbers=localStorage.getItem('numbers');
    for(let i=0;i<numbers;i++){
        arr[i]='<input type="text" class="inp" placeholder="name">'
    }
    let join=arr.join(' ')
    inputs.innerHTML=join
}
fun()

const btn =document.querySelector('.btn');
const inp =document.querySelectorAll('.inp');
let data=[]
btn.onclick=()=>{
    if(inp.value === ' '){
        alert('gjkz gecns')
    }else{
        alert
    }

}