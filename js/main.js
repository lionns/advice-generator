const btn = document.getElementById('btn-data')
const textId = document.getElementById('advice-id')
const textAdvice = document.getElementById('advice')

const url = 'https://api.adviceslip.com/advice'

const getAdvice = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let [id, advice] = [data.slip.id, data.slip.advice]

      textId.innerHTML = `ADVICE #${id}`
      textAdvice.innerHTML = `"${advice}"`
    })
}

document.addEventListener('DOMContentLoaded', getAdvice)
btn.addEventListener('click', getAdvice)
