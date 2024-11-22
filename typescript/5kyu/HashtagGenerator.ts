// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

function generateHashtag(str: string): string | false {
  const arr = str.split(' ');
  if (!arr.join('').length) return false;

  const hashTag = '#' + arr.map(el => el && el[0].toUpperCase() + el.slice(1)).join('');
  return hashTag.length > 140 ? false : hashTag;
}