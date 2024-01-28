export const formatVowelSoundLabel = (label?: string): string => {
  if (!label) return '';

  const vowelSound = ['a', 'e', 'i', 'o', 'h'];
  const vocalSound = ['a', 'e', 'i', 'o', 'u'];
  const word = label.toLowerCase();
  const firstLetter = word[0];
  const isStartWithVowel = vowelSound.includes(firstLetter);

  if (firstLetter === 'h') {
    const silent = ['hour', 'honest', 'heir', 'honor'];
    const includeSilent = silent.some((phrase) => word.includes(phrase));

    if (!vocalSound.includes(word.slice(2, 3)) && !includeSilent)
      return `a ${label}`;
    return `an ${label}`;
  }

  return isStartWithVowel ||
    (firstLetter === 'u' && !vowelSound.includes(word.slice(2, 3)))
    ? `an ${label}`
    : `a ${label}`;
};
