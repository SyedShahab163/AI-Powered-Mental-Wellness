Quick setup — if you’ve done this kind of thing before
https://github.com/SyedShahab163/new.git
Get started by creating a new file or uploading an existing file. We recommend every repository include a README, LICENSE, and .gitignore.

…or create a new repository on the command line
echo "# new" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/SyedShahab163/new.git
git push -u origin main
…or push an existing repository from the command line
git remote add origin https://github.com/SyedShahab163/new.git
git branch -M main
git push -u origin main
This is the command to start the project
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/simon-ai run dev
