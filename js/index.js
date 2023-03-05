import dogsData from "./data.js";
import Dog from "./dog.js";


let profileArray = ["profile1", "profile2", "profile3"]

function getNewProfile() {
    const nextProfile = dogsData[profileArray.shift()];
    return nextProfile ? new Dog(nextProfile) : alert('No More Profiles')
}

document.querySelector('.profile-select').addEventListener("click", (e) => {
    if(e.target.classList.contains("no-select")) {
        console.log("Me No Like")
        profileGallery.profileFeeback()
        console.log(profileGallery)
        profileGallery = getNewProfile()
        render()
    } else if (e.target.classList.contains("love-select")) {
        console.log("Me Like")
        profileGallery.profileFeeback()
        profileGallery.profileLoved()
        console.log(profileGallery)
        profileGallery = getNewProfile()
        render()
    }
})


// const chucho = new Dog(dogsData[0])

function render() {
    console.log(profileArray)
    // console.log(document.querySelector('.profile').innerHTML = chucho.getProfileHtml())
    document.querySelector('.profile').innerHTML = profileGallery.getProfileHtml();
}

let profileGallery = getNewProfile();

render()