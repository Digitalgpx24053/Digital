// Em breve adicionaremos interações aqui com Codex
// Dark mode
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById('darkModeToggle');

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
});


// WhatsApp com mensagem automática
document.getElementById('whatsappBtn').addEventListener('click', (e) => {
  e.preventDefault();
  const nome = document.querySelector('[name="nome"]').value || 'Visitante';
  const mensagem = `Olá! Me chamo ${nome} e gostaria de saber mais sobre o projeto.`;
  const numero = '5599999999999'; // coloque seu número aqui com DDD e 55 no início
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
  window.open(link, '_blank');
});

// Simular envio do formulário (sem backend)
document.getElementById('form-contato').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Mensagem enviada! Em breve entraremos em contato.');
  document.getElementById('form-contato').reset();
});
