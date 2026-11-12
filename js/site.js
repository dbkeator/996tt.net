
(function(){
  var y=document.getElementById('y'); if(y) y.textContent=new Date().getFullYear();
  var mb=document.querySelector('.menu'), ul=document.querySelector('nav ul');
  if(mb) mb.onclick=function(){ul.classList.toggle('open')};
  var items=[].slice.call(document.querySelectorAll('[data-full]'));
  if(!items.length) return;
  var lb=document.createElement('div'); lb.className='lb';
  lb.innerHTML='<button class="x" aria-label="Close">&times;</button><button class="prev" aria-label="Previous">&#8249;</button><img alt=""><p></p><button class="next" aria-label="Next">&#8250;</button>';
  document.body.appendChild(lb);
  var im=lb.querySelector('img'), cap=lb.querySelector('p'), i=0;
  function show(n){i=(n+items.length)%items.length; im.src=items[i].getAttribute('data-full'); cap.textContent=items[i].alt; lb.classList.add('open');}
  items.forEach(function(el,n){ (el.closest('figure')||el).addEventListener('click',function(){show(n)}) });
  lb.querySelector('.x').onclick=function(){lb.classList.remove('open')};
  lb.querySelector('.prev').onclick=function(e){e.stopPropagation();show(i-1)};
  lb.querySelector('.next').onclick=function(e){e.stopPropagation();show(i+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)lb.classList.remove('open')});
  document.addEventListener('keydown',function(e){if(!lb.classList.contains('open'))return;if(e.key==='Escape')lb.classList.remove('open');if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1);});
})();
