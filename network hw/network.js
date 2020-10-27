let postInput = document.querySelector(".sub");
let text = document.querySelector(".inpValue");
let showLast = document.querySelector(".showLast");
let showAll = document.querySelector(".showAll");
let out = document.querySelector(".out")
let arr = [];
postInput.addEventListener("click", () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            postStr: text.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then((response) => response.json())
        .then(json => arr.push(json))
        text.value = "";
})

showLast.addEventListener("click", ()=> {
    arr.map(t => {
        out.innerHTML = `${t.postStr}`;
    });
})
showAll.addEventListener("click", ()=> {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
    arr.forEach(e =>{
        let sobaka = document.createElement('li');
        sobaka.textContent = e.postStr
        out.appendChild(sobaka);
    })
})
