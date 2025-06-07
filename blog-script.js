const blogContainer = document.getElementById('blogContainer');

const blogPosts = [
    
    {
        title: "Testing ",
        date: "2024-10-05",
        content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque maxime ipsa, aliquam dicta quam corporis reprehenderit mollitia iure? Natus odit sunt perferendis? Corporis delectus expedita voluptate tenetur reprehenderit ullam nulla repellendus eos recusandae, nostrum culpa consequatur voluptas iste quo cum provident voluptatem atque sit mollitia saepe reiciendis ex? Repellat, alias"

    }
];

// Render posts as cards with title and date
function renderBlogCards() {
    blogContainer.innerHTML = '';
    blogPosts.forEach((post, index) => {
        const blogPostCard = document.createElement('div');
        blogPostCard.className = 'blog-post';
        blogPostCard.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-date">${post.date}</p>
        `;
        blogPostCard.addEventListener('click', () => renderFullPost(index));
        blogContainer.appendChild(blogPostCard);
    });
}

// Show full content of the clicked post
function renderFullPost(index) {
    const post = blogPosts[index];
    blogContainer.innerHTML = `
        <div class="full-post">
            <h2 class="post-title">${post.title}</h2>
            <p class="post-date">${post.date}</p>
            <p class="post-content">${post.content}</p>
            <button class="back-button" onclick="renderBlogCards()">Back</button>
        </div>
    `;
}

// Initial load of blog cards
renderBlogCards();
