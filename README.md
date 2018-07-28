# Newbie Go!!

## Scripts

### Main Dev Scripts

* `yarn start` or `node yarn-local.js start` (Run the local webpack dev server environment with mountebank)
* `yarn prod` or `node yarn-local.js prod` (Create and serve the production package)
* `yarn prod:build` or `node yarn-local.js prod:build` (Create the production package)
* `yarn dll` or `node yarn-local.js dll` (Generate the DLL bundle)
* `yarn update:cache` or `node yarn-local.js update:cache` (Delete yarn cache, node_modules and cache packages and install fresh package)

### Basic Dev Flow

1. Run `yarn dll` or `node yarn-local.js dll` (this will only need to be done once at the start, and then you will be prompted when you need to run again due to updates)
2. Run `yarn start` or `node yarn-local.js start`
3. Update the code
4. Track your changes using git
5. Push your code

Any changes will be watched and auto refreshed in the browser

If you wish to add a new package you can do so by below command
```sh
yarn add <package>
```
OR

for dev dependencies
```sh
yarn add <package> -D
```


To update packages
```sh
yarn upgrade 
```

### Working with Docker

To build the container:
```sh
docker build -t newbie-go .
```

Next up we want to start the container in interactive mode as there are a few manual steps that need to happen currently:
```sh
docker run -it newbie-go /bin/bash
```

We have to authenticate against Google with our user account:
```sh
gcloud auth login
```
You'll need to copy and paste a link into your browser to get a token for authentication. Once that is complete we want to set which project we are using:

```sh
gcloud config set project sprout-project-6
```

Finally we can build our app. Unfortunately with how app engine deploys, we need to symlink our build directory into a folder where our `app.yaml` file lives. This is so only files we need are pushed to appengine/cloud storage:
```sh
yarn prod:build
cd gcp
ln -s /newbie-go/build /newbie-go/gcp/build
gcloud app deploy
```

Below are the details related to differnt types of commits

https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/leonardoanalista/corp-semantic-release)
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![Sonarqube coverage](https://img.shields.io/badge/dynamic/.svg?label=SonarQube%20Coverage&colorB=brightgreen&prefix=&suffix=&query=&uri=Test)](https://dcsonarqube.service.dev/dashboard?id=csp-javascript-ui-anz-id-hub%3Adevelop)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=007dba&colorA=db748e)](https://github.com/styled-components/styled-components)