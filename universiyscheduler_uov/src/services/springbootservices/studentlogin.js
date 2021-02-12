import baseInstance from "./api";


export default async function studentlogincheck(data) {
    var output;

    await   baseInstance.post('studentlogin',data)
        .then(response=> {
            if(response.data){
                output = response.data
            }else{
                window.alert("User not exists")
                output= "no-data"
            }
        })
        .catch( error =>{
            output = 'error'
        })
    return output;
}
