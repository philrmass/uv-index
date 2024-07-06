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

export function getStyle(uvi) {
  if (uvi >= 11) {
    return 'extreme';
  } else if (uvi >= 8) {
    return 'very';
  } else if (uvi >= 6) {
    return 'high';
  } else if (uvi >= 3) {
    return 'moderate';
  }
  return 'low';
}

export function determineAddress(data, lat, long) {
  if (data.city && data.state) {
    return `${data.city}, ${data.state}`;
  } else if(data.country) {
    return data.country;
  }

  return `${lat.toFixed(3)}, ${long.toFixed(3)}`;
}
