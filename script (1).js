// Optional JS if you still want interactive effects
const button = document.getElementById('whatsappButton');

button.addEventListener('mouseenter', () => {
  button.style.transform = 'scale(1.05)';
  button.style.backgroundColor = '#128C7E';
});

button.addEventListener('mouseleave', () => {
  button.style.transform = 'scale(1)';
  button.style.backgroundColor = '#25D366';
});
