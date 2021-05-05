const btn=document.querySelector('.btn')
const inputs=document.querySelector('.inputs')

btn.onclick=()=>{
    let prompts=prompt('сколь участников')
    localStorage.setItem('numbers',prompts)
    if(prompts <= 1){
        alert('участников слишком мало их долно быть больше одного')
    }else{
        window.open('index2.html','_self')
    }

}