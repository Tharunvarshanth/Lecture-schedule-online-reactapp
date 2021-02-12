import baseInstance from './api'



export default async function getdepartmentlist(){

    var output;
   await  baseInstance.get('getdepartment')
       .then(response=>{
            output = response.data

    })
    .catch(error=>{
        output = [{name:"empty",db_name:'error in the server ',degree:'no data'}]
    })
   return output
}
