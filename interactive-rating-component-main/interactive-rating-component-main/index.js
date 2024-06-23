

const ratingEl = document.querySelectorAll(".ratings li")
const btn = document.getElementById("btn")
const container = document.getElementById("container")

let active = null


ratingEl.forEach(function(rate){
    rate.addEventListener("click", function(e){
        e.preventDefault()

        if(active) {
            active.classList.remove("clicked")
        }

        this.classList.add("clicked")

        active = this

    btn.addEventListener("click", submit )

        let value = active.textContent.trim()

    function submit(){
        container.innerHTML =
                            //  Submitted state
                            `
                            <div class = "second-container">
                                <img src="./images/illustration-thank-you.svg" alt="thank you msg" class = "thanks-img" >
                                <p class = "value">You selected ${value} out of 5</p>
                                <h1 class = "thanks-msg">Thank you!</h1>
                                <p class = "thanks-para">We appreciate you taking the time to give a rating. If you ever need more support, 
                                don’t hesitate to get in touch!</p>
                            </div>
                            `
}

    })
})


