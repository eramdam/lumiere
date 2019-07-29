export const command = `osascript lumiere/itunes.applescript`
export const render = ({ output }) => {
  window.LumiereMusic = output
}
export const refreshFrequency = 1000;