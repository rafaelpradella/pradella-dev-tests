const axios = require('axios')

const getExchangeRate = (from, to)=> {
    return axios.get(`http://api.fixer.io/latest?base=${from}`)
        .then((res)=>{
            return res.data.rates[to]
        })
}

const getCountries = (currencyCode) => {
    return axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`)
        .then((res) => {
            return res.data.map((country) => country.name)
        })
}

const convertCurrencyAlt = async (from, to, amount) => {
    const countries = await getCountries(to)
    const rate = await getExchangeRate(from, to)
    const exchangedAmount = Math.ceil(amount * rate)
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
}

convertCurrencyAlt("BRL","USD", 200).then((status) => {  
    console.log(status)
})


/* NOT USING ASYNC/AWAIT
    sconst convertCurrency = (from, to, amount) => {
    let countries
    return getCountries(to).then((tempCountries) => {
        countries = tempCountries
        return getExchangeRate(from, to)
    }).then((rate) => {
        const exchangedAmount = Math.ceil(amount * rate)
        return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries: ${countries.join(', ')}`
    })
}*/