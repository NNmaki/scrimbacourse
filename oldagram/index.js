
const postEl = document.getElementById("post-section")


const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

function renderPost () {
    let renderedPost = "";
    for (let i = 0; i < posts.length; i++) {
        renderedPost += 
        `
        <div class="post">
            <div class="post-section">
                <div class="post-info">
                    <img src="${posts[i].avatar}" id="post-avatar">  
                    <div class="name-location">
                        <h2>${posts[i].name}</h2>
                        <h3>${posts[i].location}</h3>
                    </div>
                </div>
                
                <div class="post-pic">
                    <img src="${posts[i].post}" id="post-pic-img" alt="Main image of post">
                </div>

                <div class="post-icons">
                    <img src="images/icon-heart.png" class="icon heart-icon" alt="Button for like">
                    <img src="images/icon-comment.png" class="icon" alt="Button for comment">
                    <img src="images/icon-dm.png" class="icon" alt="Button for direct message">
                </div>

                <div class="post-data">
                    <p><strong>${posts[i].likes} likes</strong></p>
                    <p><strong>${posts[i].username}</strong> ${posts[i].comment}</p>
                </div>
            </div>
        </div>
        `;    
    }
    postEl.innerHTML = renderedPost;
}

function addEventListeners() {
    const likeEl = document.querySelectorAll(".heart-icon");
    likeEl.forEach((el, index) => {
        el.addEventListener("click", function() {
            console.log(`Post ${index +1}: Heart icon clicked`);
            posts[index].likes++;
            renderPost();
            addEventListeners();
        });
    });
}

renderPost();
addEventListeners();





