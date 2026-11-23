(function(){
var b=document.getElementById('mb'),l=document.getElementById('lk');
if(b){b.addEventListener('click',function(){var o=l.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
var c=document.getElementById('clock');
if(c){var t=function(){c.textContent=new Date().toLocaleTimeString('en-GB',{timeZone:'Africa/Cairo'})};t();setInterval(t,1000)}
var s=document.querySelectorAll('section.blk');
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(e){e.forEach(function(x){if(x.isIntersecting){x.target.classList.add('show');io.unobserve(x.target)}})},{threshold:.06});s.forEach(function(x){io.observe(x)})}else{s.forEach(function(x){x.classList.add('show')})}
})();
