/**
 *
 * @param timestamp Unix timestamp  162548142
 * @returns Difference from current time ex: 6d ago
 *
 */

function getDifference(timestamp: Date | string) {
  const date = new Date(timestamp * 1000);

  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return '' + interval + ' years ago';
  } else if (interval === 1) {
    return '' + interval + ' year ago';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return '' + interval + ' months ago';
  } else if (interval === 1) {
    return '' + interval + ' month ago';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return '' + interval + ' days ago';
  } else if (interval === 1) {
    return '' + interval + ' day ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return '' + interval + ' hours ago';
  } else if (interval === 1) {
    return '' + interval + ' hour ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return '' + interval + ' min ago';
  }

  if (seconds < 10) {
    return 'just now';
  }

  return Math.floor(seconds) + ' seconds ago';
}

export default getDifference;
