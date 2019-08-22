set info to ""
-- Set our list of players
set apps to {"iTunes", "Spotify"}

-- Loop over that list
repeat with musicApp in apps
	-- Check if the app is running.
	tell application "System Events" to set isRunning to (name of processes) contains musicApp
	-- If it is, then try to get the data
	if isRunning is true then
		try
			-- This is required to not have AppleScript freak out about missing terms..
			using terms from application "iTunes"
				tell application musicApp
					if player state is playing then
						set songname to name of current track
						set songartist to album artist of current track
						if (songartist = "") then
							set songartist to artist of current track
						end if
						
						set info to songartist & " - " & songname
					end if
				end tell
			end using terms from
		on error e
			--
		end try
	end if
end repeat

return info