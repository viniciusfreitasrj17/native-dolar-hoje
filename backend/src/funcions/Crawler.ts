import request from 'request'
import cheerio from 'cheerio'

const URL = 'https://dolarhoje.com/'

let craw: number = 0

setInterval(function () {
  request(URL, function (err, res, body) {
    if (err) console.log(`Error: ${err}`)

    const $ = cheerio.load(body)

    let dolar: any = null
    $('table[class="conversao"] td').each((i, element) => {
      if (i === 11) {
        dolar = element.children[0].data // get data element select
        const arrayWithComma = dolar.split(' ') // separate R$ to number
        const arrayWithoutComma = arrayWithComma[1].split(',').join('.') // remove comma for point
        craw = parseFloat(arrayWithoutComma) // converte string tofloat
        // craw = 6
        // console.log(craw) // testing backend
        console.log(craw)
      }
    })
  })
}, 5000)

export { craw }
