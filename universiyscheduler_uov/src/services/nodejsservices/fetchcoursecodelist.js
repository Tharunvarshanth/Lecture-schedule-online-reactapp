import baseInstance from './api'

export default  async function fetchcoursecodelist(data){
    var output;

  await  baseInstance.post('getcoursecode',data)
        .then(response =>{
            output = response.data

        })
        .catch(err=> {
            console.log("h")
            output = 'error'
        })

    return output


}
