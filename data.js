const DEFAULT_ITEMS = [
  {id:'d1',type:'وثيقة',category:'أوقاف',title:'صك وقفي على مسجد',year:'1321 هـ',place:'جازان',desc:'وثيقة وقفية قديمة ضمن أرشيف ذاكرة جازان.',src:'archive-photo-1.png',media:'image'},
  {id:'d2',type:'وثيقة',category:'مبايعات',title:'عقد بيع أرض زراعية',year:'1347 هـ',place:'صبيا',desc:'نموذج من صكوك البيع والشراء القديمة في منطقة جازان.',src:'archive-photo-1.png',media:'image'},
  {id:'d3',type:'وثيقة',category:'ملكية وأملاك',title:'صك ملكية أرض',year:'1363 هـ',place:'صبيا',desc:'صك ملكية يوضح انتقال الملكيات وتوثيق الشهود.',src:'archive-photo-1.png',media:'image'},
  {id:'d4',type:'وثيقة',category:'مبايعات',title:'مبايعة الشيخ لقبيلة',year:'1338 هـ',place:'المسارحة',desc:'وثيقة مبايعة تاريخية محفوظة للعرض والأرشفة.',src:'archive-photo-1.png',media:'image'},
  {id:'d5',type:'وثيقة',category:'مستندات مالية',title:'حجة استلام مبلغ',year:'1352 هـ',place:'جازان',desc:'مستند مالي قديم ضمن الوثائق الأسرية والتاريخية.',src:'archive-photo-1.png',media:'image'},
  {id:'p1',type:'صورة',category:'صور تاريخية',title:'حياة القرية في جازان',year:'1396 هـ / 1976م',place:'إحدى قرى جازان',desc:'صورة أرشيفية توثق بيوت العشش والمجالس الشعبية في إحدى قرى جازان.',src:'village-1396.png',media:'image'},
  {id:'p2',type:'صورة',category:'صور تاريخية',title:'صورة قديمة من جازان',year:'1373 هـ / 1954م',place:'جازان',desc:'لقطة تاريخية من الذاكرة البصرية لمنطقة جازان.',src:'archive-photo-1.png',media:'image'}
];
function getItems(){try{return JSON.parse(localStorage.getItem('jm_items'))||DEFAULT_ITEMS}catch(e){return DEFAULT_ITEMS}}
function saveItems(items){localStorage.setItem('jm_items',JSON.stringify(items))}
function resetItems(){saveItems(DEFAULT_ITEMS)}
function byId(id){return getItems().find(x=>x.id===id)}
