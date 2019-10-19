export const command = `date +'%a %d/%-m · %I:%M'`
export const refreshFrequency = 1000;
export const render = ({ output }) => {
  window.LumiereDate = output;

  return null
}