window.addEventListener('DOMContentLoaded',(event)=>{
    getVisitCount();
})

const functionapiforworking=''
const getVisitCount=()=>{
    let count=12
    fetch(functionapiforworking).then(response=> response.json())
    .then(response =>{
        console.log("website called function API")
        count=response.count;
        document.getElementById("counter").innerText = count
    }).catch(function(error){
        console.log(error);
    });
    return count;
}