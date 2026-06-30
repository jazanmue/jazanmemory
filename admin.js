const PASSWORD='1351';
function toast(msg){const t=document.querySelector('#toast');t.textContent=msg;t.style.display='block';setTimeout(()=>t.style.display='none',2600)}
function login(){const pass=document.querySelector('#pass').value;if(pass===PASSWORD){sessionStorage.setItem('jm_admin','1');showAdmin()}else toast('كلمة المرور غير صحيحة')}
function logout(){sessionStorage.removeItem('jm_admin');location.reload()}
function showAdmin(){document.querySelector('#login').classList.add('hide');document.querySelector('#dashboard').classList.remove('hide');renderAdmin()}
function fileToDataURL(file){return new Promise((res,rej)=>{if(!file)return res('');const r=new FileReader();r.onload=()=>res(r.result);r.onerror=rej;r.readAsDataURL(file)})}
async function saveItem(e){
  e.preventDefault();
  const f=id=>document.querySelector('#'+id);
  const id=f('itemId').value||('x'+Date.now());
  const file=f('file').files[0];
  const old=byId(id);
  let src=old?.src||'deed-1.jpg';
  let media=old?.media||'image';
  if(file){
    src=await fileToDataURL(file);
    media=file.type.startsWith('video/')?'video':'image';
  } else if(f('type').value==='فيديو') {
    media='video';
  } else {
    media='image';
  }
  if(f('type').value==='منشور' && !file && !old){ src='region-tihama.png'; media='image'; }
  const item={
    id,
    type:f('type').value,
    category:f('category').value,
    title:f('title').value,
    author:f('author').value,
    year:f('year').value,
    place:f('place').value,
    desc:f('desc').value,
    src, media
  };
  let items=getItems();
  const idx=items.findIndex(x=>x.id===id);
  if(idx>-1) items[idx]=item; else items.push(item);
  saveItems(items);
  e.target.reset(); f('itemId').value='';
  renderAdmin(); toast('تم حفظ الإضافة بنجاح');
}
function renderAdmin(){
  const tbody=document.querySelector('#itemsTable tbody');
  let items=getItems();
  tbody.innerHTML=items.map(x=>`<tr><td>${x.media==='video'?'<span class="smallImg videoMark">🎥</span>':`<img class="smallImg" src="${x.src}">`}</td><td>${x.title}</td><td>${x.type}</td><td>${x.category}</td><td>${x.author||''}</td><td>${x.year||''}</td><td><button class="btn dark mini" onclick="editItem('${x.id}')">تعديل</button> <button class="btn mini" onclick="deleteItem('${x.id}')">حذف</button></td></tr>`).join('')
}
function editItem(id){const x=byId(id);if(!x)return;itemId.value=x.id;type.value=x.type;category.value=x.category;title.value=x.title;author.value=x.author||'';year.value=x.year;place.value=x.place;desc.value=x.desc;window.scrollTo({top:0,behavior:'smooth'});toast('يمكنك الآن تعديل البيانات ثم الحفظ')}
function deleteItem(id){if(!confirm('تأكيد حذف العنصر؟'))return;saveItems(getItems().filter(x=>x.id!==id));renderAdmin();toast('تم الحذف')}
function exportData(){const data=JSON.stringify(getItems(),null,2);const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([data],{type:'application/json'}));a.download='jazan-memory-data.json';a.click();toast('تم تنزيل نسخة البيانات')}
function importData(e){const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{try{const data=JSON.parse(r.result);if(!Array.isArray(data))throw Error();saveItems(data);renderAdmin();toast('تم استيراد البيانات')}catch{toast('ملف غير صالح')}};r.readAsText(f)}
function resetAll(){if(confirm('سيتم استرجاع البيانات الافتراضية وحذف إضافات هذا المتصفح. هل أنتِ متأكدة؟')){resetItems();renderAdmin();toast('تم استرجاع البيانات الافتراضية')}}
document.addEventListener('DOMContentLoaded',()=>{if(sessionStorage.getItem('jm_admin')==='1')showAdmin();document.querySelector('#itemForm').addEventListener('submit',saveItem);document.querySelector('#importFile').addEventListener('change',importData)})
