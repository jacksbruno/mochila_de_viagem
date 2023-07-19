const form = document.querySelector('[data-form]')
const lista = document.querySelector('ul.lista')
const nome = document.querySelector('#nome')
const quantidade = document.querySelector('#quantidade')
const itens = JSON.parse(localStorage.getItem('itens')) || []

itens.forEach(item => {
  lista.appendChild(criaElemento(item))
})

form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const item = {
    nome: nome.value,
    quantidade: quantidade.value
  }

  const existe = itens.find(e => e.nome === nome.value)
  if(existe){}

  lista.appendChild(criaElemento(item))
  itens.push(item)
  localStorage.setItem('itens', JSON.stringify(itens))
  nome.value = ''
  quantidade.value = ''
})

function criaElemento(item){
  const linha = document.createElement('li')
  linha.className = 'item'
  const conteudo = `<strong>${item.quantidade}</strong>${item.nome}`
  linha.innerHTML = conteudo

  return linha
}
