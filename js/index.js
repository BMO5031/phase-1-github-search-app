const user=document.getElementById('search')
const submit=document.getElementById('submit')
const repo=document.getElementById('repos-list')
const userList=document.getElementById('user-list')
const container=document.getElementById('github-container')
const form=document.getElementById('gitub-form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(user.value);
    fetchdata(user.value);
})

function fetchdata(userValue){
fetch(`https://api.github.com/users/${userValue}/repos`,
{
    headers: {
        Authorization: `Bearer ${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}`,
    },
})
.then(Response => Response.json())
.then ((data) => {
    console.log(data);

    for (const item of data) {
         // Process each repository item
         const repoItem = document.createElement('li');
         const repoLink = document.createElement('a');
         repoLink.href = item.html_url;
         repoLink.textContent = item.name;
         repoItem.appendChild(repoLink);
         repo.appendChild(repoItem);
       }
     })
     .catch((error) => {
       console.error('Error:', error);
     });
 }