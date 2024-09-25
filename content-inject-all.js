console.log("JS injected");

document.addEventListener('keydown', async function(event) {

  if (event.metaKey && event.key.toLowerCase() === 'm') {
    // Get the selected text from the web page
    // Get the selected text from the web page
    const selection = window.getSelection();
    const selectedText = selection.toString();

    if (selectedText) {
      // Function to strip LaTeX commands from the text
      function stripLatexCommands(text) {
        // Remove LaTeX commands (e.g., \textit{}, \textbf{}, etc.)
        let cleanedText = text.replace(/\\[a-zA-Z]+\{([^}]*)\}/g, '$1');
        
        // Remove $ signs that wrap text
        cleanedText = cleanedText.replace(/\$([^$]+)\$/g, '$1');
        
        return cleanedText;
    }

      // Strip the LaTeX commands from the selected text
      const strippedText = stripLatexCommands(selectedText);

      // Wrap the stripped text in $$ for LaTeX-style inline math
      const formattedText = `$${strippedText}$`;

      // Replace the selected text with the formatted text in the document
      const range = selection.getRangeAt(0);
      range.deleteContents();
      range.insertNode(document.createTextNode(formattedText));
    } else {
      console.log("No text selected.");
    }
  }
});