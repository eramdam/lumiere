export const command = 'ESC=`printf "e"`; ps -A -o %cpu | awk \'{s+=$1} END {printf("%.2f",s/8);}\'';
export const render = ({ output }) => {
  window.LumiereCPU = Number.isFinite(Number(output)) ? Math.round(Number(output)) : 0
}
export const refreshFrequency = 10000;
