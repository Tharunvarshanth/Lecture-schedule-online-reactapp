import baseInstance from './api'

export default  async function fetchcourselist(department_name){

    var output;

  await  baseInstance.get('gettimetable',{params:{dep:department_name}})
        .then(response =>{
            output =  response.data

        })
        .catch(error =>{

            output ="error"
        })
    return output;
}
