const blogContainer = document.getElementById('blogContainer');

const blogPosts = [
    {
        title: "Test 2",
        date: "2024-10-10",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perspiciatis quam praesentium repudiandae odio amet dolore saepe explicabo. Possimus voluptates provident soluta. Eius dolore doloribus atque? Possimus quaerat laborum consequuntur expedita maiores aut laboriosam delectus molestias id odio. Amet ducimus minima, culpa nobis atque quidem sunt, incidunt, dicta ut eius fugiat est voluptas eos hic perspiciatis sed? Ab tenetur, voluptatum aspernatur id, incidunt quas pariatur aliquam quod quos reprehenderit distinctio dignissimos! Dignissimos inventore asperiores voluptatum, quis, nostrum quod odit fuga accusamus quia consectetur modi perferendis, magni et harum deleniti. Optio neque corporis, id accusantium soluta provident consequatur commodi eveniet, et labore fugit eius accusamus laborum fuga perspiciatis! Quo, consequuntur. Corrupti deserunt earum hic, expedita quae itaque nihil repellat pariatur! Hic ipsam veniam amet illum esse reprehenderit assumenda! Repellendus exercitationem delectus incidunt nisi. Omnis, reprehenderit. Ullam dicta veniam eveniet temporibus id pariatur necessitatibus totam sit assumenda sunt ab nobis, porro praesentium consectetur tenetur quos expedita ipsa voluptas molestias placeat cum iusto consequatur? Omnis voluptates quaerat nemo molestiae eos voluptas illum est cupiditate totam nihil ducimus nesciunt neque fugit, pariatur molestias repellendus, expedita rerum! Iste voluptas aut laboriosam reiciendis exercitationem obcaecati, explicabo voluptate quis. Cumque sunt est excepturi inventore reprehenderit at fugiat ducimus dolor vel omnis, nisi error sequi. Voluptatum aperiam veniam, magni ex natus ad velit vero doloribus possimus dolorum tenetur maxime officiis minima qui rem nobis magnam commodi et ipsam voluptatem architecto suscipit minus ipsum! Eos a totam repellat numquam ad possimus labore molestias eligendi illum, eum deleniti est inventore, temporibus, amet maiores enim recusandae debitis sunt ratione. Totam molestiae sed earum voluptates voluptatem quisquam quam distinctio maiores iste, ipsa explicabo similique amet, dolorem sunt fugiat iure asperiores assumenda consectetur non perspiciatis voluptas magni debitis magnam! Laborum itaque repellat magnam possimus dignissimos voluptatibus aperiam, voluptatem deserunt iusto, aut sit in eveniet illo temporibus fugit impedit deleniti cumque. Id voluptas consequuntur blanditiis voluptate quae tempore sapiente quasi, fugiat quibusdam? Tempora saepe ad itaque consequuntur eligendi odit illum earum adipisci similique ut. Tempora nesciunt dolorum incidunt natus aliquid enim culpa accusantium a repellat hic sint aperiam perferendis molestias doloremque temporibus, nemo quia sit officia quis obcaecati? Assumenda hic voluptatibus sint possimus et nihil ducimus quia qui, quasi pariatur veniam maiores necessitatibus, eum quae ea quas facilis quisquam, velit nam optio cupiditate? Fugiat quibusdam corporis eos, dolor natus, at optio rem nisi enim magnam aspernatur quos tempore aliquam a mollitia expedita corrupti voluptates fuga pariatur non ipsam. Eius error saepe quos quisquam, illo veritatis minus placeat non quas in quis sit earum facere ex exercitationem ratione voluptatum ut sunt totam eligendi. Nobis non iste placeat explicabo doloribus, accusamus saepe quidem ut fugiat? Necessitatibus culpa in cupiditate impedit, corporis itaque ipsa non quisquam? Doloribus natus animi odio. Accusantium ad harum omnis, numquam adipisci dolorum atque hic beatae culpa asperiores ipsam modi saepe alias amet sunt repellendus perspiciatis neque sed, optio possimus, aperiam suscipit. Praesentium magni deserunt aliquid reprehenderit asperiores magnam vero, et minus voluptates officiis minima quaerat, ea quo. Nulla minima quaerat natus reiciendis"
    },
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
