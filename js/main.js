let elList = document.querySelector(".js-list");
let elBtn = document.querySelector(".js-btn");
let elPage = document.querySelector(".js-page");

let idPage = 1;

let users = fetch(`https://reqres.in/api/users?page=${idPage}`)
        .then((response)=>response.json())
        .then((data)=> renderData(data, elList))
        .catch((error)=>console.log(error));


elBtn.addEventListener("click", function(evt){
    evt.preventDefault();
    if(idPage == 1) {
        idPage = 2;
        let users = fetch(`https://reqres.in/api/users?page=${idPage}`)
        .then((response)=>response.json())
        .then((data)=> renderData(data, elList))
        .catch((error)=>console.log(error));
        elBtn.textContent = "Preview";
        elPage.textContent = `${idPage}`;
    } else {
        idPage = 1;
        let users = fetch(`https://reqres.in/api/users?page=${idPage}`)
        .then((response)=>response.json())
        .then((data)=> renderData(data, elList))
        .catch((error)=>console.log(error));
        elBtn.textContent = "Next";
        elPage.textContent = `${idPage}`;
    }
})

function renderData(arr, node) {
    node.innerHTML = "";
    arr.data.forEach((item) => {
        let newItem = document.createElement("li");
        let userImage = document.createElement("img");
        let userFirstName = document.createElement("p");
        let userLastName = document.createElement("p");
        let userEmail = document.createElement("a");
        
        userImage.src = item.avatar;
        userFirstName.textContent = `First Name : ${item.first_name}`;
        userLastName.textContent = `Last Name : ${item.last_name}`;
        userEmail.textContent =`Email : ${item.email}`;
        userEmail.href = `mailto:${item.email}`;
        userFirstName.classList.add("text-center", "mb-2");
        userLastName.classList.add("text-center", "mb-2");
        newItem.classList.add( "border", "border-1", "rounded", "p-3", "w-25", "shadow", "bg-light");
        userImage.classList.add("d-block", "mx-auto", "my-3");
        userEmail.classList.add("d-block", "text-center", "text-decoration-none", ".text-info-emphasis", "hover")
        newItem.append(userImage, userFirstName, userLastName, userEmail);
        node.appendChild(newItem);
    })
}