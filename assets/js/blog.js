//dark mode
const viewToggle = document.querySelector('#darkLight')
let darkLight = localStorage.getItem("darkLight")

const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkLight', 'enabled');
}

if (darkLight === 'enabled') {
    enableDarkMode();
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');

    localStorage.setItem('darkLight', null);
}

viewToggle.addEventListener('click', function (event) {
    darkLight = localStorage.getItem("darkLight")
    if (darkLight !== 'enabled') {
        enableDarkMode();
        console.log(darkLight)
    } else {
        disableDarkMode();
        console.log(darkLight)
    }
});

const back = document.querySelector('#backToForm')

back.addEventListener('click', function(event) {
    window.location.href = "./index.html"
})

// grabbing the item to display
console.log(localStorage)
let postBlog = localStorage.getItem('storedBlog')
postBlog = JSON.parse(postBlog)

console.log("these are the stored blogs you see on the page", postBlog)

function addBlog(post) {

    // defining elements
    const container = document.querySelector('.container')
    const contentDiv = document.createElement('div')
    const newUser = document.createElement('h4')
    const newTitle = document.createElement('h4')
    const newBlog = document.createElement('p')

    //adding class
    contentDiv.classList.add('card')
    newUser.classList.add('Username')
    newTitle.classList.add('title')
    newBlog.classList.add('content')

    //giving text
    newUser.textContent = "Author - " + post.username
    newTitle.textContent = "title - " + post.title
    newBlog.textContent = "Blog - " + post.content

    //attaching them
    container.appendChild(contentDiv)
    contentDiv.appendChild(newUser)
    contentDiv.appendChild(newTitle)
    contentDiv.appendChild(newBlog)

}

for (const post of postBlog) {
    addBlog(post)
}
