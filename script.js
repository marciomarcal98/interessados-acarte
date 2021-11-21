function send() {
  const indique = {
    acao: 'cadastro',
    token: '1d0c8d6a34234ec65cba0bdc21b8f2211ee63878',
    info: {
      nome: document.querySelector('#name').value,
      email: document.querySelector('#email').value,
      celular: document.querySelector('#tel').value,
      obs: `INTERESSADO.\nCURSO: ${document.querySelector('#instrumento').value}`
    }
  }


  fetch('https://api.kaits.com.br/interessados/', {
    method: 'POST',
    body: JSON.stringify(indique)
  }).then((r) => r.json()).then((json) => {
    if(json.sucesso === '1') {
      document.querySelector('.resposta p').style.color = 'green'
      document.querySelector('.resposta p').innerText = 'Enviado com sucesso!'
      return alert('Enviado com sucesso!')
    }

    document.querySelector('.resposta p').style.color = 'red'
    alert(json.msg)
    return document.querySelector('.resposta p').innerText = json.msg
  })
}