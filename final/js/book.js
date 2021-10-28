let bookNowBtn = document.getElementById("bookNow")
bookNowBtn.addEventListener("click", function () {
    let userName = document.getElementById("userName")
    let userNameVal = userName.value

    let userEmail = document.getElementById("userEmail")
    let userEmailVal = userEmail.value

    let userPax = document.getElementById("userPax")
    let userPaxVal = userPax.value

    let userPax1 = document.getElementById("userPax1")
    let userPax1Val = userPax1.value

    let userRemarks = document.getElementById("userRemarks")
    let userRemarksVal = userRemarks.value

    BookNow(userNameVal, userEmailVal, userPaxVal,userPax1Val, userRemarksVal)
})

function BookNow(userName, userEmail, userPax,userPax1, userRemarks) {
    let url = 'https://api.sheety.co/1b4d883bde4bce33e5bf0ed240ebcefe/bookingApp/bookings';;
    let body = {
        booking: {
            name: userName,
            email: userEmail,
            adults: userPax,
            children:userPax1,
            remarks: userRemarks
        }
    }
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then((response) => response.json())
        .then(json => {
            // Do something with object
            console.log(json.booking);
            alert(json.booking.name + " added in the list!")
        });
}