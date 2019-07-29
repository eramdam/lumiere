export const command = `date +'%a %d/%-m · %I:%M'`
export const refreshFrequency = 2000;
export const render = ({ output }) => {
  window.LumiereDate = output;

  return null
}