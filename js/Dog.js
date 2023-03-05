

class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    // Profile Viewed
    profileFeeback() {
        this.hasBeenSwiped = true;
    }

    // Profile Loved
    profileLoved() {
        this.hasBeenLiked = true;
    }

    // Create a do profile html/css
    getProfileHtml() {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this; /*Deconstructing Object*/
        const profilePic = document.querySelector('.profile').style.backgroundImage = `url(${avatar})`;
        return `
                <h1 class="user">${name}, ${age}</h1>
                <h2 class="tag-line">${bio}</h2>
        `
    }
}

export default Dog