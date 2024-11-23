function breakCamelCase(string: string): string {
  return string.split('').map(char => {
    return char === char.toUpperCase() ? ` ${char}` : char;
  }).join('');
}