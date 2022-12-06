# Dependency Lister
Handy for when some compliance team asks you for a CSV of all your dependencies. Note that this is just top level dependencies, I should add an option to parse the package-lock to list out dependencies of dependencies.

## Installing
I've commited the build node-14-mac executeable to make life a little easier for some people.
It's handy to copy the built executable to your bin folder so you can use it anywhere. To do this run

```
sudo cp depout /usr/local/bin
```

If you need another build just run the following command, it'll build using your current node version.
```
npx pkg -o depout
```

## Usage
Navigate to the directory of the project you want to list out and run

```
cat package.json | depout >> dependencies.csv
```

Send the CSV to your compliance team, and they will never get back to you.
