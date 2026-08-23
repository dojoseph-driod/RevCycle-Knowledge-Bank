/* Shared renderer for series pages.
   Each series page defines: const POSTS = [...]; then calls initSeriesPage({posts: POSTS, tag: 'MON'});
   Post shape: { id, date:'YYYY-MM-DD', readTime:'3 min', title, excerpt, image:'images/ID.jpg', body:['para1',...] } */

function fmtDate(d){
  return new Date(d+'T00:00:00').toLocaleDateString('en-US',{month:'short', day:'numeric', year:'numeric'});
}

const FALLBACK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
  <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
</svg>`;

function thumbHTML(imgSrc, label){
  return `
    <div class="thumb">
      <img src="${imgSrc}" alt="" loading="lazy"
           onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
      <div class="thumb-fallback">
        ${FALLBACK_SVG}
        <span>${label}</span>
      </div>
    </div>`;
}

function initSeriesPage({posts, tag}){
  const grid = document.getElementById('postGrid');
  const resultsLabel = document.getElementById('resultsLabel');
  const searchInput = document.getElementById('searchInput');
  const overlay = document.getElementById('overlay');
  const postDetail = document.getElementById('postDetail');
  let searchTerm = '';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function render(){
    let list = posts;
    if(searchTerm){
      list = list.filter(p =>
        p.title.toLowerCase().includes(searchTerm) ||
        p.excerpt.toLowerCase().includes(searchTerm)
      );
    }
    resultsLabel.textContent = `${list.length} lesson${list.length===1?'':'s'}`;
    grid.innerHTML = '';
    if(list.length===0){
      grid.innerHTML = '<div class="empty">No lessons match that search yet. Try another term.</div>';
      return;
    }
    list.forEach(p=>{
      const card = document.createElement('article');
      card.className = 'card';
      card.tabIndex = 0;
      card.innerHTML = `
        ${thumbHTML(p.image || ('images/' + p.id + '.jpg'), 'Add infographic')}
        <div class="card-body">
          <div class="card-top">
            <span class="ref mono">${p.id}</span>
            <span class="stage-tag">${tag}</span>
          </div>
          <h3>${p.title}</h3>
          <p>${p.excerpt}</p>
          <div class="card-meta">
            <span>${fmtDate(p.date)}</span>
            <span>${p.readTime} read</span>
          </div>
        </div>`;
      card.addEventListener('click', ()=> openPost(p));
      card.addEventListener('keydown', e=>{ if(e.key==='Enter') openPost(p); });
      grid.appendChild(card);
    });
    revealCards();
  }

  function revealCards(){
    const cards = grid.querySelectorAll('.card');
    if(reduceMotion || !('IntersectionObserver' in window)){
      cards.forEach(c => c.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry, i)=>{
        if(entry.isIntersecting){
          setTimeout(()=> entry.target.classList.add('in'), i * 55);
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.1});
    cards.forEach(c => io.observe(c));
  }

  function openPost(p){
    const imgSrc = p.image || ('images/' + p.id + '.jpg');
    postDetail.innerHTML = `
      <button class="close-btn" id="closeBtn" aria-label="Close">✕</button>
      <div class="modal-hero">
        <img src="${imgSrc}" alt="" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="thumb-fallback">${FALLBACK_SVG}<span>Add infographic: ${imgSrc}</span></div>
      </div>
      <span class="ref mono">${p.id}</span>
      <h2>${p.title}</h2>
      <div class="card-meta">
        <span>${fmtDate(p.date)}</span>
        <span>${p.readTime} read</span>
      </div>
      <div class="post-body">${p.body.map(par=>`<p>${par}</p>`).join('')}</div>
    `;
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(()=> requestAnimationFrame(()=> overlay.classList.add('show')));
    document.getElementById('closeBtn').addEventListener('click', closePost);
  }

  function closePost(){
    overlay.classList.remove('show');
    document.body.style.overflow = '';
    const finish = () => { overlay.classList.remove('open'); overlay.removeEventListener('transitionend', finish); };
    if(reduceMotion){ finish(); } else { overlay.addEventListener('transitionend', finish); }
  }

  overlay.addEventListener('click', e=>{ if(e.target===overlay) closePost(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape' && overlay.classList.contains('open')) closePost(); });

  searchInput.addEventListener('input', e=>{
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  render();
}
