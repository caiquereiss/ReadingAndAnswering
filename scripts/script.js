function captureData() {
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const techs = document.getElementById('techs').value;
  return {
    name,
    age,
    techs
  }
}

function toBring() {
  const {name, age, techs} = captureData();
  window.alert(`Olá ${name} você tem ${age} anos e já está aprendendo ${techs}`)
}