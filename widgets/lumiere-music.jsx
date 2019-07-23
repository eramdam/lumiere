import { run } from 'uebersicht'

export const command = () => {
  run('osascript lumiere/itunes.applescript').then(out => {
    window.LumiereMusic = out
  })
}
export const refreshFrequency = 1000;