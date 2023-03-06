let likedTotal = 0;

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    // Profile Loved
    profileLoved() {
        this.hasBeenLiked = true;
        likedTotal += 1;
    }    

    // Profile Update
    profileUpdate() {
        this.hasBeenSwiped = true;
        if(this.hasBeenLiked) {
            document.getElementById('result').classList.add('profile-loved')
        } else {
            document.getElementById('result').classList.add('profile-disliked')
        }
    }

    // Create a dog profile html/css
    getProfileHtml() {
        /*Deconstructing Object*/
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this;
        /*Set a bkg photo*/
        const profilePic = document.querySelector('.profile').style.backgroundImage = `url(${avatar})`;
        /*html*/
        return `
                <div class="profile-result-util hidden" id="result"></div>
                <h1 class="user">${name}, ${age}</h1>
                <h2 class="tag-line">${bio}</h2>
        `
    }
}

export {Dog, likedTotal}