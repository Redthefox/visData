for(let i=0; i<data.results.length; i++){
    let title = data.results[i].name.title;
    let firstName = data.results[i].name.first;
    let lastName = data.results[i].name.last;
    let age = data.results[i].dob.age;
    let dob = data.results[i].dob.date;
    let city = data.results[i].location.city;
    let state = data.results[i].location.state;
    let street = data.results[i].location.street;
    let email = data.results[i].email;
    let username = data.results[i].login.username;
// let date = data.results[i].dob.date;
    let phone = data.results[i].phone;
    let cell = data.results[i].cell;

    let profile = document.createElement("div");
    profile.className = "profile";

    let nameElement = document.createElement("div");
    nameElement.className = "name";

    let ageElement = document.createElement("div");
    ageElement.className = "age";

    let streetElement = document.createElement("div");
    streetElement.className = "street";

    let cityElement = document.createElement("div");
    cityElement.className = "city";

    let stateElement = document.createElement("div");
    stateElement.className = "state";

    let logElement = document.createElement("div");
    logElement.className = "login";

    let emailElement = document.createElement("div");
    emailElement.className = "email";

    let phoneElement = document.createElement("div");
    phoneElement.className = "phone";

    let cellElement = document.createElement("div");
    cellElement.className = "cell";


    nameElement.innerHTML = title + " " +firstName + " " + lastName;
    logElement.innerHTML = "Username:" + username;
    ageElement.innerHTML = "Age:" + age + " " + "DOB:" + dob;
    streetElement.innerHTML = street;
    cityElement.innerHTML = city;
    stateElement.innerHTML = state;
    emailElement.innerHTML = "Email:" + email;
    phoneElement.innerHTML = "Phone Number:" + phone;
    cellElement.innerHTML = "Cell Phone Number:" + cell;

    profile.appendChild(nameElement);
    profile.appendChild(logElement);
    profile.appendChild(ageElement);
    profile.appendChild(streetElement);
    profile.appendChild(cityElement);
    profile.appendChild(stateElement);
    profile.appendChild(emailElement);
    profile.appendChild(phoneElement);
    profile.appendChild(cellElement);

    document.body.appendChild(profile);

    let imageURL = data.results[i].picture.medium;

    let imageElement = document.createElement("img");
    imageElement.src = imageURL;
    profile.appendChild(imageElement);

}


// let namebox = document.getElementById("name");
// let locationbox = document.getElementById("location");
// let loginbox = document.getElementById("login");
// let dobbox = document.getElementById("dob");
// let contactbox = document.getElementById("contact")




// //console.log(name);

// namebox.innerHTML = `Name: ${title}. ${firstName} ${lastName}`;
// locationbox.innerHTML = `Location: ${street}, ${city}, ${state}`;
// loginbox.innerHTML = `Login:${username} Email:${email}`;
// dobbox.innerHTML = `DOB:${date} Age: ${age}`;
// contactbox.innerHTML = `Phone Number: ${phone} Cell Number: ${cell}`;


// let imageURL = data.results[0].picture.large;
// namebox.innerHTML = title + " " + firstName + " " + lastName;
// let imageElement = document.createElement("img");
// imageElement.src = imageURL;
// namebox.appendChild(imageElement);