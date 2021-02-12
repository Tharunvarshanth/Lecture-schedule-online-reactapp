import baseInstance from './api'


export default  async function  fetchtimetablebyyear(data){
    var output
    await baseInstance.get('gettimetablebyyear',{params:{dep:data.dep,year:data.year}})
        .then((response)=>{
             output = response.data
        })
        .catch(err=>{
            output = 'error'
        })
    return output
}
