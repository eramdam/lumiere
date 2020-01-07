import { css } from "uebersicht"

// Use the command below if you want mpc/iTunes/Spotify support.
// Note that it might increase CPU usage because AppleScript is slow AF.
// export const command = `osascript lumiere/current-track.applescript`
export const command = "/usr/local/bin/mpc current --format='%albumartist% - %title%'"
// export const command = "osascript lumiere/current-track.applescript"
export const render = ({ output }) => {
  return output;
}
export const refreshFrequency = 2500;

export const className = css`
  grid-area: music;
  position: relative;
  max-width: 50ch;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`