const pesoPorM = document.querySelector('#peso')
const tamanhoRolo = document.querySelector('#roloMetragem')
const pesoBobina = document.querySelector('#pesoBobina')
const calcBtn = document.querySelector('#calc')
const resultado = document.querySelector('#result')


calcBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const a = parseFloat(pesoPorM.value)
    const b = parseFloat(tamanhoRolo.value)
    const c = parseFloat(pesoBobina.value)

    const CalcularMetrosBobina = (a, b, c) => {
        const result = (a * b) + c

        return parseFloat(result).toFixed(2)
    }

    resultado.innerHTML = CalcularMetrosBobina(a, b, c)

    pesoPorM.value = ""
    tamanhoRolo.value = ""
    pesoBobina.value = ""
})