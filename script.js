let primeiroBotao = document.getElementById('primeiro_botao')
let segundoBotao = document.getElementById('segundo_botao')
let topo = document.getElementById('topo-do-site')

segundoBotao.addEventListener('click', ()=> {
    topo.classList.toggle('topo-do-site-JS')
})

primeiroBotao.addEventListener('click', ()=> {
    topo.classList.remove('topo-do-site-JS')
})