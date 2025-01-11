let news = document.getElementById('news');
console.log(news);


// Show a loading indicator
news.innerHTML = '<div class="loading">Loading news...</div>';

// Fetch data from API
fetch('https://660cfe7a3a0766e85dbf2f12.mockapi.io/News') // Replace with your actual API endpoint
  .then(response => response.json())
  .then(newsItems => {
    // Remove the loading indicator and update the content
    news.innerHTML = newsItems.map(item => `
      <div class="col-lg-6">
        <div class="meeting-item">
          <div class="thumb">
            <a href="${item.link}"><img height="400px" style="object-fit: cover;" src="${item.imgSrc}" alt="${item.imgAlt}"></a>
          </div>
          <div class="down-content">
            <a href="${item.link}"><h4>${item.title}</h4></a>
            <p>${item.description}</p>
          </div>
        </div>
      </div>
    `).join('');
  })
  .catch(error => {
    console.error('Error fetching news:', error);
    news.innerHTML = '<div class="error">Failed to load news. Please try again later.</div>';
  });


