# Newbie Go!!

## Scripts

### Main Dev Scripts

* `yarn start` or `npm start` (Run the local webpack dev server environment with mountebank)
* `yarn prod` or `npm run prod` (Create and serve the production package)
* `yarn prod:build` or `npm run prod:build` (Create the production package)
* `yarn dll` or `npm run dll` (Generate the DLL bundle)
* `yarn update:cache` or `npm run update:cache` (Delete yarn cache, node_modules and cache packages and install fresh package)

### Basic Dev Flow

1. Run `yarn dll` (this will only need to be done once at the start, and then you will be prompted when you need to run again due to updates)
2. Run `yarn start`
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

Below are the details related to differnt types of commits

https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/leonardoanalista/corp-semantic-release)
[![npm](https://img.shields.io/npm/l/express.svg)]()
[![Sonarqube coverage](https://img.shields.io/badge/dynamic/.svg?label=SonarQube%20Coverage&colorB=brightgreen&prefix=&suffix=&query=&uri=Test)](https://dcsonarqube.service.dev/dashboard?id=csp-javascript-ui-anz-id-hub%3Adevelop)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=007dba&colorA=db748e)](https://github.com/styled-components/styled-components)