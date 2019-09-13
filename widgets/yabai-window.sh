mkdir -p ~/Library/Application\ Support/Übersicht/widgets/lumiere/.cache/;
yabai -m query --windows --window > ~/Library/Application\ Support/Übersicht/widgets/lumiere/.cache/window.json;
# osascript -e 'tell application "Übersicht" to refresh widget id "lumiere-lumiere-window-title-jsx"'