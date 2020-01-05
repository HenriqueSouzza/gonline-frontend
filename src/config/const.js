
export const BASE_API = (

    process.env.NODE_ENV === 'production' ? 
        // 'http://spcomapi.cnec.br/api'
        console.log('production')
    :
    process.env.NODE_ENV === 'homologation' ?
        console.log('homologation')
        // 'http://hmlapidescontos.cnec.br/api'
    :
        console.log('desenv')
        // 'http://localhost:8888/api'

);