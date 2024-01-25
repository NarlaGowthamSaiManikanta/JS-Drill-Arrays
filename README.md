## Instructions to run the Project
* First, Clone this repository and move to the repository by following commands.
```bash
   git clone http/link/to/clone/the/repository
   cd cloned_repository
   ```

* Now you need to install the NVM by either of the following commands:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```
or
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

* To verify that nvm has been installed, do:
```
command -v nvm
```
which should output `nvm` if the installation was successful. Please note that `which nvm` will not work, since nvm is a sourced shell function, not an executable binary.

* Now, to install the latest LTS (Long Term Support) version of Node.js, use the following command:
```
nvm install --lts
```

* As there are no packages used in this project, we can proceed with the running part.

* To run the JavaScript file, use the following command:
```
node path/to/javascript/file
```

* You will be getting the output in the terminal.