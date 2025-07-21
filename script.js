async function fetchUserData(username) {
    let userData = undefined;
    await fetch(`https://api.github.com/users/${username}`).then(response => {
        console.log("User data fetched successfully");
        return response.json();
    }).catch(error =>{
        console.error('Error fetching user data:', error);
        return false;
    }).then(data => {
        userData = data;
    });
    return userData;
}
async function displayUserData(username){
    const box = document.querySelector('.box');
    const userData = await fetchUserData(username);

    if (userData === false) return false;
    if (userData === undefined) return false;
    document.querySelector(".display").classList.remove("hidden")
    console.log(userData);

    const userName = userData.name;
    const userImage = userData.avatar_url;
    const userFollowersCount = userData.followers;
    const userFollowingCount = userData.following;
    const displayContainer = document.querySelector(".display");
    displayContainer.innerHTML = '';

    const html = `
            <div class="imagecontainer">
                <img src="${userImage}" alt="user_image">
            </div>
            <div class="description">
                <p>Name: ${userName}</p><p>Followers: ${userFollowersCount}</p><p>Followings: ${userFollowingCount}</p>
            </div>
    `;
    displayContainer.insertAdjacentHTML("afterbegin", html);
    return true;
}

document.getElementById("username_search_form").addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    // form object
    const data = Object.fromEntries(form.entries());
    const userDisplayed = await displayUserData(data.username_input.trim());

    if (userDisplayed === true) {
        e.target.querySelector('[name="username_input"]').value = '';
    }else{
        alert("Username is Invalid!!!");
    }
})