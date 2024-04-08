export function updateTime(element: HTMLTimeElement): void {
  const now: Date = new Date();
  const timeString: string = now.toLocaleTimeString();
  element.textContent = timeString;
  element.setAttribute('datetime', now.toISOString());
}

export function createTimeElement(): HTMLTimeElement {
  const timeElement: HTMLTimeElement = document.createElement('time');
  timeElement.id = 'current-time';
  updateTime(timeElement);
  return timeElement;
}
