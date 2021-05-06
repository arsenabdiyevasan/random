const btn=document.querySelector('.btn')
const inputs=document.querySelector('.inputs')


window.addEventListener('load',()=>{
    let tre=localStorage.getItem('true')
    let namse=JSON.parse(localStorage.getItem('data'))
    if(!tre){
        btn.onclick=()=>{
            let prompts=prompt('сколь участников')
            localStorage.setItem('numbers',prompts)
            if(prompts <= 1){
                alert('участников слишком мало их долно быть больше одного')
            }else{
                window.open('index2.html','_self')
            }
        
        }  
    }else{
        let pel=namse.map(item =>{
            return `
            <p class="num ${item.length}">${item}</p>`
        }).join('')
        inputs.innerHTML=pel
        btn.innerHTML='запустить рандом'
        btn.onclick=(e)=>{
            e.preventDefault();
            let random=0
            for(let i=0;i<namse.length;i++){
                random=Math.floor(Math.random()*namse.length)
            }
            alert(namse[random])
            const pp=document.querySelectorAll('p')
            pp[random].classList.add('bg')


        }
        const bynt=document.querySelector('.bunt')
        let but=document.createElement('button')
        let text='новые участники'
        but.append(text)
        bynt.append(but)
        but.onclick=(e)=>{
            window.location.reload()
            localStorage.removeItem('true')

            
        }
    }
})