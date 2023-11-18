  #!/bin/bash

# Print git status
git status

# Add all changes to the staging area
git add .

# Commit changes with a custom message
git commit -m "commit done"

# Push the changes to the remote repository
git push

# Run npm command to deploy
npm run deploy
