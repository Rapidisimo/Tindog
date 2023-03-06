import dogsData from "./data.js";
import {Dog, likedTotal} from "./dog.js";


let profileArray = ["profile1", "profile2", "profile3"]

function labelStatus() {
    document.getElementById('result').classList.toggle('hidden')
}

// disable or enable buttons based on paramater
function buttonStatus(par) {
    const buttons = document.querySelectorAll('button');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = par;
    }
}

function getNewProfile() {
    const nextProfile = dogsData[profileArray.shift()];
    return nextProfile ? new Dog(nextProfile) : {}
}

document.querySelector('.profile-select').addEventListener("click", (e) => {
    if(e.target.classList.contains("no-select")) {
        buttonStatus(true) /* Disables buttons based on parameter */
        profileGallery.profileUpdate() /* Add Liked or Disliked Image */
        labelStatus() /* Makes label image visible or hidden */
        setTimeout( () => {
            labelStatus()
            profileGallery = getNewProfile()
            buttonStatus(false)
            render()    
        }, 2000)
    } else if (e.target.classList.contains("love-select")) {
        buttonStatus(true)
        profileGallery.profileLoved()
        profileGallery.profileUpdate() /*Add Liked or Disliked Image*/
        labelStatus()
        setTimeout( () => {
            if(profileArray.length > 0) {
                labelStatus()
                profileGallery = getNewProfile()
                buttonStatus(false)
                render()        
            } else {
                buttonStatus(true)
                document.querySelector('.wrapper').innerHTML = `
                <header>
                    <div class="settings bkg-icon-util"></div>
                    <div class="paw bkg-icon-util"></div>
                    <div class="chat bkg-icon-util"></div>
                </header>
                <section>
                    <h1>No more profile left 😄</h1>
                    <h2>You liked a total of ${likedTotal} profiles 🐶.</h2>
                </section>
                `
            }
        }, 2000)
    }
})

function render() {
    document.querySelector('.profile').innerHTML = profileGallery.getProfileHtml();
}

let profileGallery = getNewProfile();

render()