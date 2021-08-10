/* eslint-disable import/extensions */
import resolutionDelete from './resolutionDelete.js';

export default function deleteRes(input, deleteform, resoltext) {
  deleteform.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!resoltext.value) {
      return;
    }
    resolutionDelete(input.value);
    resoltext.value = '';
    input.value = '';
  });
}
