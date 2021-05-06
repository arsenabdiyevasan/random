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
    let data=[]
    let core=null
    for(let i=0;i<inp.length;i++){
        if(inp[i].value === ''){
            core=inp
        }else{
            data[i]=inp[i].value
        }
    }
    if(core){
        alert('поля не заполнены')
    }else{
        localStorage.setItem('data',JSON.stringify(data))
    localStorage.setItem('true',true)
    window.open('index.html','_self')
    }
}