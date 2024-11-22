// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds: number): string | false {
  if (seconds > 359999) return false;

  const HH = Math.floor(seconds / 3600);
  const MM = Math.floor((seconds % 3600) / 60);
  const SS = seconds % 60;

  const formatTime = (time: number): string => String(time).padStart(2, '0');

  return `${formatTime(HH)}:${formatTime(MM)}:${formatTime(SS)}`;
}