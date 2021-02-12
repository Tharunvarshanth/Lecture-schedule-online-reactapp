import baseInstance from './api'


export default async function updateschedule(data){


    await baseInstance.post('updateschedule',data)
        .then(response => {
            console.log(response.data)

        })
        .catch(err => {
            console.log(err)
        })
}
