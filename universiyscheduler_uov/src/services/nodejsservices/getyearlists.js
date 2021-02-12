import baseInstance from './api'


export default async function getyearlist(department_name){
    var output ;
    await baseInstance.get('academicyear',{params:{dep:department_name}})
        .then(res=>{
              output = res.data
            }
        )
        .catch(error=>{
            output='error'
        })
    return output;

}
