const userInput = document.querySelector('#Username')
const titleInput = document.querySelector('#title')
const contentInput = document.querySelector('#content')
const viewToggle = document.querySelector('#darkLight')
const submitPost = document.querySelector('#submit')
const viewBlogs = document.querySelector('#viewBlogs')

viewBlogs.addEventListener('click', function(event) {
    window.location.href = "./blog.html"
})

let blogLists = localStorage.getItem('storedBlog')
console.log("list of all stored blogs",JSON.parse(blogLists))

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const posts = []

    if (userInput.value.trim() === "") {
        alert("Please enter a Username")
        return
    }

    if (titleInput.value.trim() === "") {
        alert("Please title your blog")
        return
    }

    if (contentInput.value.trim() === "") {
        alert("Write something in your blog")
        return
    }

    const blog = {
        username: userInput.value,
        title: titleInput.value,
        content: contentInput.value,
    }

    let existingBlogs = localStorage.getItem('storedBlog') || "[]"
    existingBlogs = JSON.parse(existingBlogs)
    
    existingBlogs.push(blog)
    
    let localBlog = JSON.stringify(existingBlogs)
    localStorage.setItem('storedBlog', localBlog)

    window.location.href = "./blog.html"
});

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








