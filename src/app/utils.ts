export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = hours > 0 ? `${hours}h : ` : '';
  const formattedMinutes = minutes > 0 ? `${minutes}m :` : '';
  const formattedSeconds = remainingSeconds > 0 ? `${remainingSeconds}s` : '';

  return `${formattedHours}${formattedMinutes}${formattedSeconds}`;
}
