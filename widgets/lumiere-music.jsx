export const command = `osascript lumiere/current-track.applescript`
export const render = ({ output }) => {
  window.LumiereMusic = output
}
export const refreshFrequency = 2500;