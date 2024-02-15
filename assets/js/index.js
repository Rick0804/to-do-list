toDoList = () => {


    createList = () => {
        const li = document.createElement("li");
        return li;
    }

    createDiv = () => {
        const div = document.createElement("div");
        return div;
    }

    takeText = () => {
        const text = document.querySelector("#instexto");
        return text;
    }

    clearInput = () => {
        const text = document.querySelector("#instexto");
        text.value = ' ';
    }

    doneText = () => {
        const lis = document.querySelectorAll("li");
        let click = true;
        for(let i = 0; i < lis.length; i++){
            lis[i].addEventListener('click', function (e) {
                if(click){
                    lis[i].classList.add("done");
                    click = false;

                } else {
                    lis[i].classList.remove("done")
                    click = true
                }
            })
        }
    }

    defineText = (e) => {
        e.preventDefault();
        const text = takeText().value;
        const li = createList();
        const div = createDiv();
        if(!text.match(/['a-z']/)){
            return;
        }

        console.log(text.length);
        document.querySelector(".list").appendChild(div);
        div.appendChild(li);
        li.innerHTML = text;
        div.classList.add("lista");
        div.classList.add("task")
        div.innerHTML += "<button class ='apag'> apagar </button>";

        clearInput();
        doneText();
        salvarTarefas();
    }

    loadInf = (inf) => {
        const text = inf;
        const li = createList();
        const div = createDiv();
        if(!text.match(/['a-z']/)){
            return;
        }

        console.log(text.length);
        document.querySelector(".list").appendChild(div);
        div.appendChild(li);
        li.innerHTML = text;
        div.classList.add("lista");
        div.classList.add("task")
        div.innerHTML += "<button class ='apag'> apagar </button>";

        clearInput();
        doneText();
    }
    
    document.querySelector(".send").addEventListener('click', defineText);  
   
    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('apag')){
            console.log(el.parentElement.remove())
            salvarTarefas();
        }
    })

    salvarTarefas = () => {
        const list = document.querySelectorAll("li");
        const listaDeTarefas = [];

        for(let tarefa of list){
            const li  = tarefa.innerText;
            listaDeTarefas.push(li);
        }

        const save = JSON.stringify(listaDeTarefas)
        localStorage.setItem('tarefas', save)
        
    }

    adicionaTarefas = () => {
        const itens = localStorage.getItem('tarefas');
        const itensP = JSON.parse(itens);

        for(let tarefa of itensP){
            loadInf(tarefa)
        }
    }
    adicionaTarefas()

}


toDoList();

