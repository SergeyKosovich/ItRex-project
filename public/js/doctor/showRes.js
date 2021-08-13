export default function showRes(form, input, resoltext) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`/resolution?name=${input.value}`);
      const data = await res.json();
      resoltext.value = data;
    } catch (err) {
      console.log('incorrect input');
    }
  });
}
