async function fetchUserData(username) {
    let userData = undefined;
    await fetch(`https://api.github.com/users/${username}`).then(response => {
        userData = response.json();
        console.log("User data fetched successfully");
    }).catch(error =>{
        console.error('Error fetching user data:', error);
    });
    return userData;
}

async function fetchUrlData(url){
    let urlData = undefined;
    await fetch(url).then(response => {
        urlData = response.json();
    }).catch(error =>{
        console.error('Error fetching URL data:', error);
    });
    return urlData;
}

async function displayUserData(){
    const box = document.querySelector('.box');
    const userData = await fetchUserData("A-Karim2003");
    box.textContent = JSON.stringify(userData);
    const userFollowers = await fetchUrlData(userData.followers_url);
    console.log(userFollowers);
}

displayUserData();
