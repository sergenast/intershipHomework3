const title = document.querySelector(".title");
const text = document.querySelector(".text");
const button = document.querySelector(".button");

(() => {
    setTimeout( async () => { //сделала async/await, чтобы рендеринг срабатывал после промиса, подсмотрела у ребят в чатике))
        await Promise.resolve().then(() => {
            console.log ('promise 1');
    });
        title.style.color = 'red';       
}, 0)

     setTimeout(async () =>{
        await Promise.resolve().then(()=>{
            console.log('promise 4');                
        })
        text.textContent = "Новый текст";
    }, 2000)

    setTimeout(()=>{
        Promise.resolve().then(()=>{
            console.log('promise 2')
        })
        Promise.resolve().then(()=>{
            console.log('promise 3')
        })
    }, 0)
    
})()