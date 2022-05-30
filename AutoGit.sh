#!/bin/sh

# Use this by navigating to the repo and running it as a shell command
# Only usefult o people with admin priveledges (idk how to spell this word) lol

echo "Starting automatic Git add, commit, and push to team's origin; Type commit msg here: "
message=$1

if [ ! -z "$1" ]
then
   git add * 
   git commit -m "$message"
   git push origin main
else
   echo  "Commit message is not provided you fool!"
fi