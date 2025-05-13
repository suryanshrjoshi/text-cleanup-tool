function removeBlankLines() {
  const inputText = document.getElementById('inputText').value;
  const cleanedText = inputText
    .split('\n')
    .filter(line => line.trim() !== '')
    .join('\n');
  document.getElementById('outputText').value = cleanedText;
}

function clearText() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
}
