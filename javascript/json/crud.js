let adduserform = document.querySelector("#adduser")
let fname = document.querySelector("#fname")
let lname = document.querySelector("#lname")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let mobile = document.querySelector("#mobile")
let infoTable = document.querySelector("#viewdata");



// edit 
let edituserform = document.querySelector("#edituser")
let editfname = document.querySelector("#editfname")
let editlname = document.querySelector("#editlname")
let editemail = document.querySelector("#editemail")
let editpassword = document.querySelector("#editpassword")
let editmobile = document.querySelector("#editmobile")

// let editIndex = null;

// add data into localstorage

adduserform.addEventListener('submit', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let newuser = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        password: password.value,
        mobile: mobile.value
    }

    if (editIndex === null) {
        users.push(newuser); // New user
    } else {
        users[editIndex] = newuser; // Update existing user
        editIndex = null;
    }


    users.push(newuser);
    localStorage.setItem("users", JSON.stringify(users));
    adduserform.reset();
    displaydata();
})

// data display form localStorage

function displaydata() {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    let data = "";
    users.forEach((users, index) => {
        let row = `
    <tr>
    <td>${index}</td>
    <td>${users.fname}</td>
    <td>${users.lname}</td>
    <td>${users.email}</td>
    <td>${users.mobile}</td>
 <td>
  <button class="edit-btn" onclick="editUser(${index})">Edit</button>
  <button class="delete-btn" onclick="deleteUser(${index})">Delete</button>
</td>


    </tr>
    `;
        data = data + row;
    });
    infoTable.innerHTML = data;
}
displaydata();


// Delete a user
function deleteUser(index) {

    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displaydata();

}

// edit data
function editUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];

    adduserform.style.display = "none"
    edituserform.style.display = "block"
    let user = users[index];
    editfname.value = user.fname;
    editlname.value = user.lname;
    editemail.value = user.email;
    editpassword.value = user.password;
    editmobile.value = user.mobile;
    editIndex = index;
}


edituserform.addEventListener('submit', (e) => {
    e.preventDefault();
    let users = JSON.parse(localStorage.getItem("users"))
    users[editIndex] = {
        fname: editfname.value,
        lname: editlname.value,
        email: editemail.value,
        password: editpassword.value,
        mobile: editmobile.value
    }
    localStorage.setItem("users", JSON.stringify(users));
    adduserform.style.display = "block"
    edituserform.style.display = "none"
    displaydata()
    editIndex = null

})