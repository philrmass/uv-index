export function isCurrentHour(dateStr) {
  const date = new Date(dateStr);
  const now = new Date();

  now.setHours(now.getHours(), 0, 0, 0);

  return now.getTime() === date.getTime();
}

export function printTime(dateStr) {
  const date = new Date(dateStr);
  const options = {
    day: 'numeric',
    hour: 'numeric',
    month: 'short',
    weekday: 'short',
  };

  return date.toLocaleDateString('en-US', options);
}
