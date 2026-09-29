
// document.addEventListener("click", function(e) {
//     for (let i = 0; i < 4; i++) {   // عدد الدواير
//       let ripple = document.createElement("span");
//       ripple.classList.add("ripple");
//       document.body.appendChild(ripple);

//       let size = 20; // حجم الدائرة
//       ripple.style.width = ripple.style.height = size + "px";
//       ripple.style.left = (e.clientX - size / 2) + "px";
//       ripple.style.top = (e.clientY - size / 2) + "px";

//       // كل دايرة تتأخر شوية عن اللي قبلها
//       ripple.style.animationDelay = (i * 0.2) + "s";

//       setTimeout(() => {
//         ripple.remove();
//       }, 1000);
//     }
//   });
// document.querySelectorAll('.btn-wrap').forEach((wrap, i) => {
//   const orderBtn = wrap.querySelector('.orderBtn');
//   const orderBox = wrap.querySelector('.orderBox');
//   const modalId = orderBtn.getAttribute('data-bs-target');
//   const modalEl = document.querySelector(modalId);

//   // لما المودال يفتح
//   modalEl.addEventListener('shown.bs.modal', () => {
//     orderBox.classList.add('visible');
//   });

//   // لما المودال يقفل
//   modalEl.addEventListener('hidden.bs.modal', () => {
//     orderBox.classList.remove('visible');
//   });
// });
