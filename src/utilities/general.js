export function processRecord({ time, uvi }) {
  return {
    time: (new Date(time)).getTime(),
    uvi,
  };
}

export function getCurrentHour() {
  const value = new Date();

  value.setHours(value.getHours(), 0, 0, 0);

  return value.getTime();
}

export function printDay(dateStr) {
  const date = new Date(dateStr);
  const options = {
    day: 'numeric',
    month: 'short',
    weekday: 'short',
  };

  return date.toLocaleDateString('en-US', options);
}

export function printTime(dateStr) {
  const date = new Date(dateStr);
  const options = { hour: 'numeric' };

  return date.toLocaleTimeString('en-US', options);
}

export function getLevel(uvi) {
  if (typeof uvi !== 'number') {
    return 'unknown';
  }

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
  const place = data.city ?? data.town ?? data.village ?? data.county;

  if (place && data.state) {
    return `${place}, ${data.state}`;
  } else if (data.country) {
    return `${data.country}, ${lat.toFixed(1)}, ${long.toFixed(1)}`;
  }

  return `${lat.toFixed(3)}, ${long.toFixed(3)}`;
}
