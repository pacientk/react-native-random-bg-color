
# react-native-random-bg-color

## Install

`$ npm install react-native-random-bg-color --save`

or

`$ yarn add react-native-random-bg-color`
#

### Manual installation

##### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-random-bg-color` and add `RNReactNativeRandomBgColor.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNReactNativeRandomBgColor.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

##### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.reactlibrary.RNReactNativeRandomBgColorPackage;` to the imports at the top of the file
  - Add `new RNReactNativeRandomBgColorPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-random-bg-color'
  	project(':react-native-random-bg-color').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-random-bg-color/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-random-bg-color')
  	```
## Getting started

### Import
```javascript
import RNRandomBgColor from 'react-native-random-bg-color';
```

### Wrap components
```react-native
<RNRandomBgColor color={'pink'}>
  {your child components}
</RNRandomBgColor>
```
If the `color` parameter is not passed the background color will change randomly by clicking on the button.
