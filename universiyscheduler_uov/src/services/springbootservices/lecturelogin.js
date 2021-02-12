import baseInstance from "./api";

export default async function lecturelogincheck(data){

   var output;
    await  baseInstance.post('signin',data)
        .then(response => {
            if(response.data){
                output= response.data
            }
            else{
                window.alert("User not exists")
                output= "no-data"
            }
        })
        .catch(error => {
            console.log(error)
            output= 'error'
        })
    return output
}
