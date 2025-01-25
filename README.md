# Demo Atuh App

> ## Environment Setup

- Install Homebrew

```bash
 $ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

 # install Node, Yarn and Git
 $ brew install node
 # node --version

 $ brew install yarn
 # yarn --version

 $ brew install git
 # git --version

```

> ## React-Native Setup

- We are using [React-Native-Cli](https://www.npmjs.com/#getting-started). (Follow the link)
- Choose your operating system and follow installation instructions: https://reactnative.dev/docs/environment-setup

> ## Clone Repository

```bash
 $ git clone https://github.com/KashifBrula/DemoAuthApp.git
```

> ## Installation

- Using [Yarn](https://yarnpkg.com/): `yarn install`

```bash
# For IOS we need to install Pods
- cd ios pod install

```

> ## Run application

- IOS

```bash
 yarn ios
 # This will run application only on IOS simulator
 # To run application on real device you have to run the app from Xcode
```

- Android

```bash
 yarn android
 # This command will run application on Android emulator and device
 # You can Run application also from Android studio
```
