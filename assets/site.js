document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('signup-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const endpoint = form.getAttribute('action') || '';
  if (!/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]{6,}$/.test(endpoint) || endpoint.includes('REPLACE')) {
    message.textContent = 'Sign-ups are not yet available. Please check back soon.';
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  button.disabled = true;
  button.textContent = 'SENDING…';
  message.textContent = '';
  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    if (!response.ok) throw new Error('Formspree rejected the submission');
    form.reset();
    message.textContent = 'Thank you for joining the First Chapter. We look forward to sharing our story with you.';
  } catch (error) {
    message.textContent = 'We couldn’t complete your sign-up. Please try again.';
  } finally {
    button.disabled = false;
    button.textContent = 'JOIN THE FIRST CHAPTER';
  }
});
