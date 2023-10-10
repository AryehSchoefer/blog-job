export function capitalizeFirstLetter(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function createPreviewString(text: string, maxLength: number = 150) {
  if (text.length <= maxLength) {
    return text;
  }

  let preview = text.slice(0, maxLength - 3);

  // Ensure the preview doesn't end with a space, to turn "foo ..." into "foo..."
  if (preview.endsWith(" ")) {
    preview = preview.slice(0, -1);
  }

  return preview + "...";
}
