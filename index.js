let emailCollectorForm = document.getElementById("Email-Collector")
        emailCollectorForm.addEventListener("submit", event => {
            event.preventDefault()
            let ourFormData = new FormData(event.target)
            let userFirstName = ourFormData.get("firstName")
            let updateHtmlContent = `
            <h2 class="grey-heading">Congratulations, ${userFirstName}!</h2>
            <p class="orange">You are on your way to becoming a BBQ Master!</p>
            <p class="small">We'll never share your information without your permission</p>
            `
            let ourLogin = document.getElementById("Login")
            ourLogin.innerHTML = updateHtmlContent
        })