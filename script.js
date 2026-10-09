const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}
const form = document.getElementById('contactForm');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const d = new FormData(form);
  const subject = encodeURIComponent(`Yêu cầu tư vấn ${d.get('service')} - ${d.get('name')}`);
  const body = encodeURIComponent(
    `Xin chào ODS,\n\nTôi muốn trao đổi về dịch vụ.\n\nNgười liên hệ: ${d.get('name')}\nDoanh nghiệp: ${d.get('company') || 'Chưa cung cấp'}\nDịch vụ quan tâm: ${d.get('service')}\nNhu cầu: ${d.get('message') || 'Chưa cung cấp'}\n\nTrân trọng.`
  );
  window.location.href = `mailto:nhupth@ods.vn?subject=${subject}&body=${body}`;
});
