export function splitText(text: string): {
  beginning: string;
  lastWord: string;
} {
  const words = text.trim().split(' ');
  const lastWord = words.pop() ?? '';
  const beginning = words.join(' ');
  return { beginning, lastWord };
}
