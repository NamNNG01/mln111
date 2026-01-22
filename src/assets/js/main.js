// Smooth scroll nội bộ
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href').slice(1);
    if(!id) return;
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // GA4 event nav (nếu muốn theo dõi)
      if (window.gtag) gtag('event','nav_click',{section:id});
    }
  });
});

// Lazy load: nếu cần observer cho ảnh không có loading="lazy"
const imgs = document.querySelectorAll('img[loading="lazy"]');
// (Chrome đã hỗ trợ native, đoạn này để placeholder extension sau)

// Chatbot toggle
const btnChat = document.getElementById('btnChat');
btnChat?.addEventListener('click', ()=>{
  if (window.botpressWebChat) {
    window.botpressWebChat.sendEvent({ type: 'show' });
    // ARIA announce
    btnChat.setAttribute('aria-pressed','true');
    if (window.gtag) gtag('event','chatbot_open');
  } else {
    alert('Chatbot chưa sẵn sàng. Hãy cấu hình Botpress clientId!');
  }
});

// FAQ client-side search (đơn giản)
const faqInput = document.getElementById('faqSearch');
faqInput?.addEventListener('input', ()=>{
  const q = faqInput.value.toLowerCase();
  document.querySelectorAll('#faqList details').forEach(d=>{
    const text = d.innerText.toLowerCase();
    d.style.display = text.includes(q) ? '' : 'none';
  });
});

// ----- TOC scrollspy (trang chi tiết) -----
(function(){
  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  if (!tocLinks.length) return;

  // smooth scroll
  tocLinks.forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  const map = Array.from(tocLinks).map(a=>{
    const id = a.getAttribute('href').slice(1);
    return {a, el: document.getElementById(id)};
  });

  const obs = new IntersectionObserver(entries=>{
    entries.forEach(ent=>{
      const found = map.find(i=>i.el===ent.target);
      if (ent.isIntersecting && found){
        tocLinks.forEach(x=>x.classList.remove('active'));
        found.a.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

  map.forEach(i=> i.el && obs.observe(i.el));
})();
