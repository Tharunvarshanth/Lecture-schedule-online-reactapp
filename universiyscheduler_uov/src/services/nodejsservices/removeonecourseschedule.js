import baseInstance from './api'


export default async function removeonecourseschedule(data){

  await  baseInstance.post('removeschedule',data)
        .then(response =>{
            console.log(response)

        })
        .catch(err=> {
            console.log(err)
        })
}
