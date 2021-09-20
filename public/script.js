const elBtn = document.getElementById("user");
const elForm = document.getElementsByClassName("form-user");
elBtn.addEventListener('click',function (evt) {

})


//    get form value send the projects
const formSubmit = document.getElementById('form-send');

formSubmit.addEventListener('click',(evt) => {
    evt.preventDefault();
    const name = document.querySelector(".name")
    value;
    const email = document.querySelector(".email").value;
    const city = document.querySelector(".city").value;
    const status = document.querySelector(".status").value;

    const result = fetch("/api/users", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
                name,
                email,
                city,
                status
            }
        )
    })

    result.then((data)=>{
        return data.json()
    }).then((json)=>{
        console.log(json)
    }).catch((err) =>{
        console.log(err)
    })
}