const DEFAULT_ITEMS = [
  {id:'d1',type:'وثيقة',category:'أوقاف',title:'صك وقفي موثق',year:'1321 هـ',place:'منطقة جازان',desc:'نموذج أرشيفي لصك وقفي قديم، ضمن قسم الوثائق التي توثق الأوقاف والمصالح العامة والشهود.',src:'deed-1.jpg',media:'image'},
  {id:'d2',type:'وثيقة',category:'مبايعات',title:'أحد صكوك البيع والشراء القديمة',year:'1349 هـ',place:'صبيا',desc:'وثيقة بيع وشراء قديمة تحفظ تفاصيل المبايعة، الأطراف، الشهود، وحدود الملكية.',src:'deed-2.jpg',media:'image'},
  {id:'d3',type:'وثيقة',category:'ملكية وأملاك',title:'صك أرض زراعية',year:'1350 هـ',place:'صبيا',desc:'صك يوثق ملكية أرض زراعية قديمة مع بيانات الموقع والحدود، مخصص للعرض والقراءة الرقمية.',src:'deed-3.jpg',media:'image'},
  {id:'d4',type:'وثيقة',category:'مبايعات',title:'وثيقة مبايعة وشهود',year:'1329 هـ',place:'المسارحة',desc:'وثيقة مبايعة تتضمن أسماء الشهود وتفاصيل المعاملة، وهي من أهم مواد الأرشيف التاريخي.',src:'deed-4.jpg',media:'image'},
  {id:'d5',type:'وثيقة',category:'مستندات مالية',title:'حجة استلام مبلغ',year:'1352 هـ',place:'جازان',desc:'مستند مالي قديم يوثق استلام مبلغ ومعاملة بين أطراف، مع ختم/علامة أرشيفية واضحة.',src:'deed-5.jpg',media:'image'},
  {id:'d6',type:'وثيقة',category:'ملكية وأملاك',title:'وثيقة ملكية أرض',year:'1363 هـ',place:'صبيا',desc:'صورة أرشيفية لصك ملكية أرض محفوظ ضمن أرشيف ذاكرة جازان للوثائق والصكوك.',src:'deed-6.jpg',media:'image'},
  {id:'d7',type:'وثيقة',category:'مبايعات',title:'مبايعة الشيخ علي بن عقلي',year:'1336 هـ',place:'جازان',desc:'وثيقة مبايعة قديمة مضافة كنموذج ضمن قسم البيع والمبايعات.',src:'deed-10.jpg',media:'image'},
  {id:'d8',type:'وثيقة',category:'عقود ومعاملات',title:'وثيقة تقسيم ميراث',year:'1340 هـ',place:'صبيا',desc:'نموذج لوثيقة معاملات أسرية/ملكية قديمة قابلة للتصنيف والبحث.',src:'deed-8.jpg',media:'image'},
  {id:'p1',type:'صورة',category:'صور تاريخية',title:'حياة القرية في جازان',year:'1396 هـ / 1976م',place:'إحدى قرى جازان',desc:'صورة أرشيفية توثق بيوت العشش والمجالس الشعبية في إحدى قرى جازان.',src:'village-1396-color.png',media:'image'},
  {id:'p2',type:'صورة',category:'صور تاريخية',title:'قرية في جازان عام 1954م',year:'1373 هـ / 1954م',place:'إحدى قرى جازان',desc:'صورة قديمة يظهر فيها أحد الرحالة الغربيين وحوله أهل القرية وخلفهم بيوت العشش.',src:'village-1954.png',media:'image'},
  {id:'p3',type:'صورة',category:'هوية المشروع',title:'التصميم الأول لواجهة ذاكرة جازان',year:'2026م',place:'ذاكرة جازان',desc:'تصميم مرجعي أولي لهوية الموقع وأسلوبه البصري.',src:'interface-first.png',media:'image'},
  {id:'p4',type:'صورة',category:'هوية المشروع',title:'واجهة تركّز على الوثائق والصكوك',year:'2026م',place:'ذاكرة جازان',desc:'تصميم مرجعي للواجهة مع إبراز الوثائق والصكوك والبطاقات الأرشيفية.',src:'interface-docs-focus.png',media:'image'},
  {id:'v1',type:'فيديو',category:'فيديوهات',title:'مقدمة أرشيف ذاكرة جازان',year:'2026م',place:'جازان',desc:'فيديو قصير بصيغة عرض أرشيفي يدمج الهوية البصرية والصور القديمة.',src:'jazan-archive-intro.mp4',media:'video'},
  {id:'v2',type:'فيديو',category:'فيديوهات',title:'مشاهد من ذاكرة القرية',year:'2026م',place:'جازان',desc:'فيديو قصير للصور التاريخية وقسم ذاكرة القرية.',src:'village-memory.mp4',media:'video'}
];
function getItems(){try{return JSON.parse(localStorage.getItem('jm_items'))||DEFAULT_ITEMS}catch(e){return DEFAULT_ITEMS}}
function saveItems(items){localStorage.setItem('jm_items',JSON.stringify(items))}
function resetItems(){saveItems(DEFAULT_ITEMS)}
function byId(id){return getItems().find(x=>x.id===id)}
