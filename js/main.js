const form = document.querySelector('[data-form]')
const lista = document.querySelector('ul.lista')

form.addEventListener('submit', (evento) => {
  evento.preventDefault()
  const nome = evento.target.elements['nome'].value
  const quantidade = evento.target.elements['quantidade'].value
  lista.appendChild(criaElemento(nome, quantidade))  
})

function criaElemento(nome, quantidade){
  const linha = document.createElement('li')
  linha.className = 'item'
  const conteudo = `<strong>${quantidade}</strong>${nome}`
  linha.innerHTML = conteudo

  return linha
}