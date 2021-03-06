# Forest Watcher 2.0

Forest Watcher is a mobile application that helps people report or verify deforestation activity in the field using their smartphone.

## Set up
Before installing the dependencies to run the app, you must install the following depending on the environment you'll work on:

#### iOS Environment
* XCode [How to install](https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
* XCode Command Line tools:
```bash
xcode-select --install
```
* CocoaPods [How to install](https://cocoapods.org/)

#### Android Environment
* [Android Studio](https://developer.android.com/studio/index.html)
* [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

#### Ruby (transifex API scripts)
* install ruby 2.4.0, ideally via rvm: `rvm install 2.4.0'
* install bundler: `gem install bundler`
* `cd ruby/transifex`
* install dependencies: `bundle install`
* set `TRANSIFEX_API_TOKEN` in the `.env` file ([regenerate token here](https://www.transifex.com/user/settings/api/))

## Installing dependencies

- Homebrew [How to install](http://brew.sh/)
- Node.js:
```bash
brew install node
```
- Watchman:
```bash
brew install watchman
```
- The React Native CLI:
```bash
npm install -g react-native-cli
```
- Project dependencies
```bash
npm install
```
- For **iOS only**
```bash
cd /ios/
pod install
```
- Create the .env file from .env.sample

## Running the application

#### iOS Environment

1. Open XCode
2. File > Open > ios/ForestWatcher.xcworkspace
3. Run

#### Android Environment

1. Open Android Studio
2. Open an existing Android Studio Project > /android
3. Run

#### Ruby (transifex API scripts)

1. `cd ruby/transifex`
2. To push the source file (EN): `bundle exec rake transifex:push`
3. To pull translation files (ES, FR, ID, PT): `bundle exec rake transifex:pull`
