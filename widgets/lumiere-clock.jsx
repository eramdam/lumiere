import { run } from 'uebersicht'

export const command = () => {
  run(`date +'%a %d/%-m · %I:%M'`).then(date => {
    window.LumiereDate = date;
  })
}
export const refreshFrequency = 2000;
export const render = () => {
  return null;
}