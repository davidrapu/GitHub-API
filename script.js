async function fetchUserData(username) {
    await fetch(`https://api.github.com/users/${username}`).then(response => {
        console.log("User data fetched successfully");
        return response.json();
    }).catch(error =>{
        console.error('Error fetching user data:', error);
        return false;
    });
}

async function fetchUrlData(url){
    await fetch(url).then(response => {
        return response.json();
    }).catch(error =>{
        console.error('Error fetching URL data:', error);
        return false
    });
}

async function displayUserData(username){
    const box = document.querySelector('.box');
    const userData = await fetchUserData(username);

    if (userData === false) return false;

    const userName = userData.name;
    const userImage = userData.avatar_url;
    const userFollowersCount = userData.followers;
    const userFollowingCount = userData.following;

    console.log(userName);
}

document.getElementById("username_search_form").addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    // form object
    const data = Object.fromEntries(form.entries());
    console.log(data.username_input);
})