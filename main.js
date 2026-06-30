function $(s){return document.querySelector(s)}
function previewMedia(item){
  if(item.media==='video' && item.src) return `<video src="${item.src}" muted playsinline></video>`;
  if(item.src) return `<img src="${item.src}" alt="${item.title}">`;
  return `<div class="textThumb">${item.type}</div>`;
}
function itemCard(item){
  const isPost = item.type==='منشور';
  return `<article class="${isPost?'postCard archiveCard':'docCard archiveCard'}" data-type="${item.type}" data-category="${item.category}" data-title="${item.title}">
    <div class="docImg">${previewMedia(item)}</div>
    <div class="docBody ${isPost?'postBody':''}">
      <div class="typeBadge">${item.type}</div>
      <h3>${item.title}</h3>
      <div class="meta"><span>${item.year||''}</span><span>${item.category||''}</span><span>${item.place||''}</span></div>
      ${item.author?`<div class="authorLine">✍ ${item.author}</div>`:''}
      <button class="btn dark miniTop" onclick="openItem('${item.id}')">عرض التفاصيل</button>
    </div>
  </article>`;
}
function postPreviewCard(item){
  return `<article class="postPreviewCard">
    <div class="postPreviewMedia">${previewMedia(item)}</div>
    <div class="postPreviewBody">
      <span class="chip">${item.category||'منشور'}</span>
      <h3>${item.title}</h3>
      <div class="metaLine">${item.author?`<span>✍ ${item.author}</span>`:''}<span>${item.year||''}</span><span>${item.place||''}</span></div>
      <p>${(item.desc||'').slice(0,180)}${(item.desc||'').length>180?'...':''}</p>
      <button class="btn dark miniTop" onclick="openItem('${item.id}')">قراءة المنشور</button>
    </div>
  </article>`;
}
function updateCard(item){
  return `<div class="updateCard">${previewMedia(item)}<div><h3>${item.title}</h3><div class="meta"><span>${item.year||''}</span><span>${item.category||''}</span></div></div></div>`;
}
function renderHome(){
  const items=getItems();
  const docs=items.filter(x=>x.type==='وثيقة').slice(0,5);
  const updates=items.slice(-6).reverse();
  const posts=items.filter(x=>x.type==='منشور').slice(-3).reverse();
  if($('#docCards')) $('#docCards').innerHTML=docs.map(itemCard).join('');
  if($('#updates')) $('#updates').innerHTML=updates.map(updateCard).join('');
  if($('#boardPosts')) $('#boardPosts').innerHTML=posts.map(postPreviewCard).join('');
  const docCount=items.filter(x=>x.type==='وثيقة').length;
  const photoCount=items.filter(x=>x.type==='صورة').length;
  const videoCount=items.filter(x=>x.type==='فيديو').length;
  const postCount=items.filter(x=>x.type==='منشور').length;
  if($('#docCount')) $('#docCount').textContent=docCount+'+';
  if($('#photoCount')) $('#photoCount').textContent=photoCount+'+';
  if($('#videoCount')) $('#videoCount').textContent=videoCount+'+';
  if($('#postCount')) $('#postCount').textContent=postCount+'+';
}
function renderArchive(){
  const box=$('#archiveGrid'); if(!box) return;
  const q=($('#q')?.value||'').trim();
  const type=$('#typeFilter')?.value||'';
  const cat=$('#catFilter')?.value||'';
  let items=getItems().filter(x=>(!type||x.type===type)&&(!cat||x.category===cat)&&(!q||[x.title,x.desc,x.year,x.place,x.category,x.author].join(' ').includes(q)));
  box.innerHTML=items.map(itemCard).join('')||'<p class="emptyState">لا توجد نتائج مطابقة.</p>';
}
function renderBoardPage(){
  const box=$('#boardGrid'); if(!box) return;
  const q=($('#boardQ')?.value||'').trim();
  const cat=$('#boardCat')?.value||'';
  let items=getItems().filter(x=>x.type==='منشور' && (!cat||x.category===cat) && (!q||[x.title,x.desc,x.author,x.place].join(' ').includes(q)));
  box.innerHTML=items.map(postPreviewCard).join('')||'<p class="emptyState">لا توجد منشورات مطابقة.</p>';
}
function openItem(id){
  const x=byId(id); if(!x) return;
  const media = x.media==='video' && x.src ? `<video src="${x.src}" controls></video>` : (x.src?`<img src="${x.src}" alt="${x.title}">`:'');
  $('#modalTitle').textContent=x.title;
  $('#modalBody').innerHTML=`${media}<p class="modalMeta"><b>التصنيف:</b> ${x.category||'-'}<br><b>النوع:</b> ${x.type||'-'}<br><b>التاريخ:</b> ${x.year||'-'}<br><b>الموقع:</b> ${x.place||'-'}<br><b>الكاتب / المصدر:</b> ${x.author||'-'}</p><p class="modalText">${(x.desc||'').replace(/
/g,'<br>')}</p>`;
  $('#modal').style.display='flex';
}
function closeModal(){ if($('#modal')) $('#modal').style.display='none'; }
function bindFilters(){
  ['q','typeFilter','catFilter'].forEach(id=>{const el=$('#'+id); if(el) el.addEventListener('input',renderArchive)});
  ['boardQ','boardCat'].forEach(id=>{const el=$('#'+id); if(el) el.addEventListener('input',renderBoardPage)});
}
document.addEventListener('DOMContentLoaded',()=>{
  renderHome(); renderArchive(); renderBoardPage(); bindFilters();
  if($('#modal')) $('#modal').addEventListener('click',e=>{if(e.target.id==='modal') closeModal()});
});
