tell application "iTunes"
	if it is running then
		if player state is stopped then
			set info to ""
		else if player state is paused then
			set info to ""
		else
			set seperator to " - "
			set songname to name of current track
			set songartist to album artist of current track
			set info to songartist & " - " & songname
			return info
		end if
	else
		return ""
	end if
end tell