let button = document.getElementById('data');

const getData = () => {

fetch('https://akademia108.pl/api/ajax/get-post.php', {
    method: 'GET',
})
.then(res => res.json())
.then(resJSON => {
    console.log(resJSON);
    let pId = document.createElement('p');
    let pUserId = document.createElement('p');
    let pTitle = document.createElement('p');
    let pBody = document.createElement('p');
    let hr = document.createElement('hr');
    
    pId.innerText = `Post ID: ${resJSON.id}`;
    pUserId.innerText = `Post UserID: ${resJSON.userId}`;
    pTitle.innerText = `Post Title: ${resJSON.title}`;
    pBody.innerText = `Post Body: ${resJSON.body}`;

    document.body.appendChild(pId);
    document.body.appendChild(pUserId);
    document.body.appendChild(pTitle);
    document.body.appendChild(pBody);
    document.body.appendChild(hr);
})
.catch((error) => {
    console.error('Error:', error);
});

}

button.addEventListener('click', getData);
