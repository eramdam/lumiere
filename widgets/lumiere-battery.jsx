export const command = "pmset -g batt | egrep -o '([0-9]+%).*' | cut -d% -f1";
export const refreshFrequency = 60000;

export const render = event => {
  const battery = parseInt(event.output, 10);
  window.LumiereBattery = battery;

  return null
};