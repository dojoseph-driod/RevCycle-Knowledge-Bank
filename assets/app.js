/* Shared renderer for series pages.
   Each series page defines: const POSTS = [...]; then calls initSeriesPage({posts: POSTS, tag: 'MON'});
   Post shape: { id, date:'YYYY-MM-DD', readTime:'3 min', title, excerpt, body:['para1','para2',...] } */

function fmtDate(d){
  return new Date(d+'T00:00:00').toLocaleDateString('en-US',{month:'short', day:'numeric', year:'numeric'});
}

function initSeriesPage({posts, tag}){
  const grid = document.getElementById('postGrid');
  const resultsLabel = document.getElementById('resultsLabel');
  const searchInput = document.getElementById('searchInput');
  const overlay = document.getElementById('overlay');
  const postDetail = document.getElementById('postDetail');
  let searchTerm = '';

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
        <div class="card-top">
          <span class="ref mono">${p.id}</span>
          <span class="stage-tag">${tag}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.excerpt}</p>
        <div class="card-meta">
          <span>${fmtDate(p.date)}</span>
          <span>${p.readTime} read</span>
        </div>`;
      card.addEventListener('click', ()=> openPost(p));
      card.addEventListener('keydown', e=>{ if(e.key==='Enter') openPost(p); });
      grid.appendChild(card);
    });
  }

  function openPost(p){
    postDetail.innerHTML = `
      <button class="close-btn" id="closeBtn" aria-label="Close">✕</button>
      <span class="ref mono">${p.id}</span>
      <h2>${p.title}</h2>
      <div class="card-meta">
        <span>${fmtDate(p.date)}</span>
        <span>${p.readTime} read</span>
      </div>
      <div class="post-body">${p.body.map(par=>`<p>${par}</p>`).join('')}</div>
    `;
    overlay.classList.add('open');
    document.getElementById('closeBtn').addEventListener('click', closePost);
  }
  function closePost(){ overlay.classList.remove('open'); }
  overlay.addEventListener('click', e=>{ if(e.target===overlay) closePost(); });
  document.addEventListener('keydown', e=>{ if(e.key==='Escape') closePost(); });

  searchInput.addEventListener('input', e=>{
    searchTerm = e.target.value.trim().toLowerCase();
    render();
  });

  document.getElementById('year').textContent = new Date().getFullYear();
  render();
}
