const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

// Public review snapshot. Keep this manually refreshed when ratings change.
const reviewsSection = document.querySelector('.reviews');

if (reviewsSection) {
  const videoReview = document.createElement('section');
  videoReview.className = 'video-review-section section-pad';
  videoReview.innerHTML = `
    <div class="container video-review-grid">
      <div class="video-review-copy">
        <p class="eyebrow dark">Featured YouTube review</p>
        <h2>See Brolls through a diner's lens.</h2>
        <p>An independent YouTube creator visited Brolls and shared the experience on video. Watch the full review for a closer look at the food, setting and overall visit.</p>
        <a class="button button-dark" href="https://www.youtube.com/watch?v=jEnMEuilGVQ" target="_blank" rel="noopener">Watch on YouTube</a>
      </div>
      <div class="video-frame-wrap">
        <iframe
          src="https://www.youtube.com/embed/jEnMEuilGVQ"
          title="Featured YouTube review of Brolls Vietnamese Rolling Broth"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  `;
  reviewsSection.parentNode.insertBefore(videoReview, reviewsSection);

  reviewsSection.innerHTML = `
    <div class="container public-reviews">
      <div class="review-summary">
        <div class="review-summary-copy">
          <p class="eyebrow">Public reviews</p>
          <h2>What diners are saying about Brolls.</h2>
          <p class="review-summary-text">Recent public feedback repeatedly mentions the food, friendly service, intimate setting and hidden-gem atmosphere.</p>
        </div>
        <div class="google-rating-card" aria-label="Google rating snapshot">
          <div class="google-label"><span class="google-g">G</span> Google</div>
          <div class="rating-row"><strong>3.9</strong><span>/ 5</span></div>
          <div class="rating-stars" aria-hidden="true">★★★★☆</div>
          <p>44 public reviews</p>
          <a href="https://www.google.com/maps/search/?api=1&query=Brolls+Vietnamese+Rolling+Broth+Olongapo" target="_blank" rel="noopener">View on Google Maps →</a>
        </div>
      </div>

      <div class="public-review-grid">
        <article class="public-review-card">
          <div class="review-card-top">
            <div>
              <strong>Carrie Kyle Emia Ravina</strong>
              <span>Google review</span>
            </div>
            <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          </div>
          <p>Praised the hidden-resto atmosphere, flavorful food, fried spring rolls, welcoming staff and attentive service, and said they would return.</p>
          <div class="review-tags"><span>Food 5/5</span><span>Service 5/5</span><span>Atmosphere 5/5</span></div>
        </article>

        <article class="public-review-card">
          <div class="review-card-top">
            <div>
              <strong>Jester Velasco</strong>
              <span>Google review</span>
            </div>
            <div class="review-stars" aria-label="Google review">★★★★★</div>
          </div>
          <p>Described the food as flavorful and the indoor space as clean, air-conditioned and well suited to intimate groups, while noting some outdoor seating drawbacks.</p>
          <div class="review-tags"><span>Food 5/5</span><span>Service 5/5</span><span>Atmosphere 3/5</span></div>
        </article>

        <article class="public-review-card">
          <div class="review-card-top">
            <div>
              <strong>kairi</strong>
              <span>Google review</span>
            </div>
            <div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
          </div>
          <p>Called Brolls a hidden gem, liked the food and photogenic atmosphere, complimented the friendly staff, and planned to come back for more menu items.</p>
          <div class="review-tags"><span>Food 5/5</span><span>Service 5/5</span><span>Atmosphere 5/5</span></div>
        </article>

        <article class="public-review-card balanced-review">
          <div class="review-card-top">
            <div>
              <strong>More public feedback</strong>
              <span>Google listing summary</span>
            </div>
            <div class="review-stars muted-stars" aria-hidden="true">★★★★☆</div>
          </div>
          <p>Not every review is uniformly positive. A more moderate public review liked the food but felt it was missing some of the Vietnamese character they expected.</p>
          <div class="review-tags"><span>Balanced feedback</span></div>
        </article>
      </div>

      <div class="review-sources">
        <p>Ratings change over time. This demo shows a current Google listing snapshot plus public Google reviews surfaced through Restaurant Guru.</p>
        <div>
          <a href="https://www.google.com/maps/search/?api=1&query=Brolls+Vietnamese+Rolling+Broth+Olongapo" target="_blank" rel="noopener">Google Maps</a>
          <a href="https://restaurantguru.com/Brolls-Vietnamese-Rolling-Broth-Olongapo" target="_blank" rel="noopener">Restaurant Guru</a>
        </div>
      </div>
    </div>
  `;

  const style = document.createElement('style');
  style.textContent = `
    .video-review-section{background:#f3ebdd}.video-review-grid{display:grid;grid-template-columns:.8fr 1.2fr;gap:54px;align-items:center}.video-review-copy h2{font-family:'Playfair Display',serif;font-size:clamp(42px,5vw,68px);line-height:.98;margin:0 0 24px}.video-review-copy p:not(.eyebrow){font-size:17px;line-height:1.7;color:#5b534a;margin:0 0 26px}.video-frame-wrap{position:relative;padding-top:56.25%;border-radius:24px;overflow:hidden;background:#27221c;box-shadow:0 24px 60px rgba(39,34,28,.14)}.video-frame-wrap iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
    .public-reviews{display:grid;gap:42px}.review-summary{display:grid;grid-template-columns:1fr 290px;gap:60px;align-items:end}.review-summary-copy{max-width:760px}.review-summary-text{max-width:660px;color:rgba(243,235,221,.68);font-size:17px;line-height:1.7;margin:22px 0 0}.google-rating-card{background:#f3ebdd;color:#27221c;border-radius:22px;padding:26px}.google-label{font-weight:700;display:flex;align-items:center;gap:8px;font-size:14px}.google-g{display:grid;place-items:center;width:26px;height:26px;border-radius:50%;background:#fff;color:#4285f4;font-weight:800}.rating-row{display:flex;align-items:end;gap:6px;margin-top:18px}.rating-row strong{font-family:'Playfair Display',serif;font-size:62px;line-height:.9}.rating-row span{color:#756b60;margin-bottom:7px}.rating-stars,.review-stars{letter-spacing:.08em;color:#d8a341}.google-rating-card p{margin:7px 0 18px;color:#756b60;font-size:13px}.google-rating-card a{color:#183c31;text-decoration:none;font-weight:700;font-size:13px}.public-review-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}.public-review-card{border:1px solid rgba(243,235,221,.16);border-radius:22px;padding:26px;min-height:270px;display:flex;flex-direction:column}.review-card-top{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}.review-card-top>div:first-child{display:flex;flex-direction:column;gap:5px}.review-card-top strong{font-size:15px}.review-card-top span{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:rgba(243,235,221,.52)}.public-review-card>p{font-family:'Playfair Display',serif;font-size:23px;line-height:1.38;margin:34px 0 24px}.review-tags{display:flex;flex-wrap:wrap;gap:8px;margin-top:auto}.review-tags span{font-size:10px!important;text-transform:uppercase;letter-spacing:.08em;padding:7px 9px;border:1px solid rgba(243,235,221,.14);border-radius:999px;color:rgba(243,235,221,.66)!important}.balanced-review{background:rgba(255,255,255,.03)}.muted-stars{opacity:.55}.review-sources{border-top:1px solid rgba(243,235,221,.14);padding-top:20px;display:flex;justify-content:space-between;gap:24px;align-items:center}.review-sources p{margin:0;max-width:700px;font-size:12px;line-height:1.6;color:rgba(243,235,221,.48)}.review-sources>div{display:flex;gap:10px}.review-sources a{color:#f3ebdd;text-decoration:none;border:1px solid rgba(243,235,221,.2);padding:9px 12px;border-radius:999px;font-size:12px;font-weight:700}@media(max-width:900px){.video-review-grid{grid-template-columns:1fr}.review-summary{grid-template-columns:1fr}.google-rating-card{max-width:330px}.public-review-grid{grid-template-columns:1fr}}@media(max-width:620px){.review-sources{flex-direction:column;align-items:flex-start}.review-card-top{flex-direction:column}.public-review-card>p{font-size:21px}.video-review-copy h2{font-size:44px}}
  `;
  document.head.appendChild(style);
}