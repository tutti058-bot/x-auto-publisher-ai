fetch("/data/news.json")
  .then(r => r.json())
  .then(news => {

    const list = document.getElementById("news-list");

    list.innerHTML = "";

    news.forEach(item => {

      list.innerHTML += `
      <div class="card">

        <div class="thumb">
          <img src="${item.image}" alt="">
        </div>

        <div class="content">

          <div class="date">${item.date}</div>

          <div class="title">${item.title}</div>

          <div class="desc">${item.summary}</div>

          <a class="button"
             href="${item.url}"
             target="_blank">
             続きを読む
          </a>

        </div>

      </div>
      `;

    });

  })
  .catch(console.error);