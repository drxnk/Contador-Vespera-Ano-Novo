const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const AnoNovo = "1 jan 2023";

function contador() {
  const AnoNovoData = new Date(AnoNovo);
  const DataAtual = new Date();

  const TotalSegundos = (AnoNovoData - DataAtual) / 1000;

  const dias = Math.floor(TotalSegundos / 3600 / 24);
  const horas = Math.floor(TotalSegundos / 3600) % 24;
  const minutos = Math.floor(TotalSegundos / 60) % 60;
  const segundos = Math.floor(TotalSegundos) % 60;

  diasEl.innerHTML = dias
  horasEl.innerHTML = formatarTempo(horas)
  minutosEl.innerHTML = formatarTempo(minutos)
  segundosEl.innerHTML = formatarTempo(segundos)
}

function formatarTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

contador();
setInterval(contador, 1000)
