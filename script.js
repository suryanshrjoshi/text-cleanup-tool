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

function removeExtraSpaces() {
  const inputText = document.getElementById('inputText').value;
  const cleanedText = inputText.replace(/\s+/g, ' ').trim();
  document.getElementById('outputText').value = cleanedText;
}

function removeLineBreaks() {
  const inputText = document.getElementById('inputText').value;
  const cleanedText = inputText.replace(/[\r\n]+/g, ' ').trim();
  document.getElementById('outputText').value = cleanedText;
}
