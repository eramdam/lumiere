WINDOW_SCRIPT="$HOME/Library/Application Support/Übersicht/widgets/lumiere/yabai/refresh-window.sh"

echo "Enabling lumiere widgets commands..."
echo $WINDOW_SCRIPT

# Uebersicht
yabai -m signal --add event=window_focused action="sh '$WINDOW_SCRIPT' 2> /dev/null"
yabai -m signal --add event=window_title_changed action="sh '$WINDOW_SCRIPT' 2> /dev/null"
yabai -m signal --add event=application_activated action="sh '$WINDOW_SCRIPT' 2> /dev/null"