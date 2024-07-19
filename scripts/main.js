(function() {
  "use strict";

  window.addEventListener('load', () => {
    on_page_load()
  });

  /**
   * Function gets called when page is loaded.
   */
  function on_page_load() {
    // Initialize On-scroll Animations
    AOS.init({
      anchorPlacement: 'top-left',
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
      disable: 'mobile'
    });
  }

  /**
   * Navbar effects and scrolltop buttons upon scrolling
   */
  const navbar = document.getElementById('header-nav')
  var body = document.getElementsByTagName("body")[0]
  const scrollTop = document.getElementById('scrolltop')
  window.onscroll = () => {
    if (window.scrollY > 0) {
      navbar.classList.add('fixed-top', 'shadow-sm')
      body.style.paddingTop = navbar.offsetHeight + "px"
      scrollTop.style.visibility = "visible";
      scrollTop.style.opacity = 1;
    } else {
      navbar.classList.remove('fixed-top', 'shadow-sm')
      body.style.paddingTop = "0px"
      scrollTop.style.visibility = "hidden";
      scrollTop.style.opacity = 0;
    }
  };

  /**
   * Masonry Grid
   */
  var elem = document.querySelector('.grid');
  if(elem) {
    imagesLoaded(elem, function() {
      new Masonry(elem, {
        itemSelector: '.grid-item',
        percentPosition: true,
        horizontalOrder: true
      });
    })
  }

  /**
   * Big Picture Popup for images and videos
   */
   document.querySelectorAll("[data-bigpicture]").forEach((function(e) {
     e.addEventListener("click", (function(t){
       t.preventDefault();
       const data =JSON.parse(e.dataset.bigpicture)
       BigPicture({
        el: t.target,
        ...data
      })
     })
    )
  }))

  /**
   * Big Picture Popup for Photo Gallary
   */
   document.querySelectorAll(".bp-gallery a").forEach((function(e) {
    var caption = e.querySelector('figcaption')
    var img = e.querySelector('img')
    // set the link present on the item to the caption in full view
    img.dataset.caption = '<a class="link-light" target="_blank" href="' + e.href + '">' + caption.innerHTML + '</a>';
    window.console.log(caption, img)
     e.addEventListener("click", (function(t){
       t.preventDefault();
       BigPicture({
        el: t.target,
        gallery: '.bp-gallery',
      })
     })
    )
  }))

  //Afterwards Add:- Abishek Neupane aka VirtualAbishek


})();

const quotes = [
  {text: `"If you’re thinking about what others are thinking by yourself, then what will they think about?"`, date: "July 19, 2024"},
  /*  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""},
  {text: "", date: ""} */
  {text: `"No matter how intelligent you are, always be humble. Don't act like you know everything or try to prove your abilities. If you do, there will be two types of people: those who support you and those who try to pull you back. Supporters are rare, but many will try to prove you wrong and hold you back "`, date: "July 18, 2024"},
  { text: `"No matter how negative the people around you are, try to take positive things from everyone. Everyone has their own perspective and way of living, shaped by their childhood and what they learned from their parents. Look for the positive in everything, no matter how bad the person or situation may seem."`, date: "July 17, 2024" }
  

];

const quotesPerPage = 5;
let currentPage = 1;

function displayQuotes(page) {
  const start = (page - 1) * quotesPerPage;
  const end = start + quotesPerPage;
  const quotesToShow = quotes.slice(start, end);

  const container = document.getElementById('quotes-container');
  container.innerHTML = '';
  quotesToShow.forEach(quote => {
      const quoteBox = document.createElement('div');
      quoteBox.className = 'quote-box';
      quoteBox.innerHTML = `
          <p class="quote-text mb-1">${quote.text}</p>
          <p class="quote-date text-muted mb-0">- ${quote.date}</p>
      `;
      container.appendChild(quoteBox);
  });
}

function setupPagination() {
  const pageCount = Math.ceil(quotes.length / quotesPerPage);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  for (let i = 1; i <= pageCount; i++) {
      const pageItem = document.createElement('li');
      pageItem.className = 'page-item' + (i === currentPage ? ' active' : '');
      const pageLink = document.createElement('a');
      pageLink.className = 'page-link';
      pageLink.href = '#';
      pageLink.innerText = i;
      pageLink.addEventListener('click', (e) => {
          e.preventDefault();
          currentPage = i;
          displayQuotes(currentPage);
          setupPagination();
      });
      pageItem.appendChild(pageLink);
      pagination.appendChild(pageItem);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayQuotes(currentPage);
  setupPagination();
});