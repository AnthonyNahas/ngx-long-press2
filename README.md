<p align="center">
  <img alt="angular-material-extensions's logo"
   height="256px" width="256px" style="text-align: center;" 
   src="https://cdn.jsdelivr.net/gh/angular-material-extensions/select-country@master/assets/angular-material-extensions-logo.svg">
</p>

# ngx-long-press2 - Angular Library to handle long mouse clicks event for desktop and long touch events for mobile and tablets

[![npm version](https://badge.fury.io/js/ngx-long-press2.svg)](https://badge.fury.io/js/ngx-long-press2)
[![npm demo](https://img.shields.io/badge/demo-online-ed1c46.svg)](https://anthonynahas.github.io/ngx-long-press2)
[![docs: typedoc](https://img.shields.io/badge/docs-typedoc-4D0080.svg)](https://anthonynahas.github.io/ngx-long-press2/doc/index.html)
[![Join the chat at https://gitter.im/angular-material-extensions/Lobby](https://badges.gitter.im/angular-material-extensions/Lobby.svg)](https://gitter.im/angular-material-extensions/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


<p align="center">
  <img alt="@angular-material-extensions/select-country demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-long-press2/HEAD/assets/v1.0.0/demo.gif">
</p>



## Built by and for developers :heart:
Do you have any question or suggestion ? Please do not hesitate to contact us!
Alternatively, provide a PR | open an appropriate issue [here](https://github.com/angular-material-extensions/select-country/issues)

If you like this project, support [angular-material-extensions](https://github.com/angular-material-extensions) 
by starring :star: and sharing it :loudspeaker:

## Table of Contents
- [Demo](#demo)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
- [Run Demo App Locally](#run-demo-app-locally)
- [Other Angular Libraries](#other-angular-libraries)
- [Support](#support)
- [License](#license)

<a name="demo"/>

## [Demo](https://anthonynahas.github.io/ngx-long-press2)

View all the directives and components in action at [https://anthonynahass.github.io/ngx-long-press2](https://anthonynahass.github.io/ngx-long-press2)

<a name="directives"/>

## Library's directive
- `ngxLongPress2` 

---

<a name="dependencies"/>

## Dependencies
* [Angular](https://angular.io) developed and tested with `10.x`

---

<a name="installation"/>

##  [Installation](https://anthonynahas.github.io/ngx-long-press2/getting-started)


## Install via *npm*.  

Install peer dependencies 
```shell
npm i -s ngx-long-press2
```


### Import the library


```typescript
import { NgxLongPress2Module } from 'ngx-long-press2'; 

@NgModule({
  declarations: [AppComponent, ...],
  imports: [NgxLongPress2Module, ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application like for lazy loading import ` NgxLongPress2Module ` into your feature module:


<a name="api"/>

## API


| option | bind  |  type  |   default    | description  |
|:-------------------|:--------:|:------:|:------------:|:-------------------------------------------------------------------------------------------------|    
| minTime      | `Input()`  | `number`    | `500` |  the minimum time to fire  onLongPress event (in ms)
| maxTime      | `Input()`  | `number`    | `2000` |  the maximum time to fire  onReleasePressing event (in ms)
| onLongPress  | `Output()` | `EventEmitter<void>`    | - | emits when the minTime is exceeded 
| onLongPressing  | `Output()` | `EventEmitter<number>`    | - | emits when the user is pressing and the time lapsed in ms will be emitted 
| onReleasePressing  | `Output()` | `EventEmitter<void>`    | - | emits when the maxTime is exceeded or  touchend, mouseup and mouseleave haven been emitted




<a name="usage"/>

## [Usage](https://anthonynahas.github.io/ngx-long-press2)

```html
  <button mat-raised-button
          ngxLongPress2
          [color]="this.timeLapsed1 > 1000? 'primary' : 'warn'"
          (onLongPress)="onLongPress()"
          (onLongPressing)="onLongPressing($event)"
          (onReleasePressing)="onReleasePressing()">
  {{ this.timeLapsed1 > 0 ? this.timeLapsed1 + ' ms' : 'PRESS ME'}}
</button>
```



<p align="center">
  <img alt="@angular-material-extensions/select-country demonstration" style="text-align: center;"
   src="https://raw.githubusercontent.com/anthonynahas/ngx-long-press2/HEAD/assets/v1.0.0/demo_full2.png">
</p>

```html
<button ngxLongPress2></button>
```

images




<a name="run-demo-app-locally"/>

###  Run Demo App Locally after cloning the github project


Build the library

```bash
$ npm run build:lib
```

Serve the demo app

```bash
$ npm start
```



## Other Angular Libraries
- [ngx-long-press2](https://github.com/AnthonyNahas/ngx-auth-firebaseui)
- [ngx-linkifyjs](https://github.com/AnthonyNahas/ngx-linkifyjs)
- [@angular-material-extensions/password-strength](https://github.com/angular-material-extensions/password-strength)
- [@angular-material-extensions/google-maps-autocomplete](https://github.com/angular-material-extensions/google-maps-autocomplete)
- [@angular-material-extensions/select-country](https://github.com/angular-material-extensions/select-country)
- [@angular-material-extensions/link-preview](https://github.com/angular-material-extensions/link-preview)
- [@angular-material-extensions/fab-menu](https://github.com/angular-material-extensions/fab-menu)
- [@angular-material-extensions/pages](https://github.com/angular-material-extensions/pages)
- [@angular-material-extensions/contacts](https://github.com/angular-material-extensions/contacts)
---

<a name="support"/>

## Support
+ Drop an email to: [Anthony Nahas](mailto:anthony.na@hotmail.de)
+ or open an appropriate [issue](https://github.com/angular-material-extensions/select-country/issues)
+ let us chat on [Gitter](https://gitter.im/angular-material-extensions/Lobby)
 
 Built by and for developers :heart: we will help you :punch:

---

![jetbrains logo](https://raw.githubusercontent.com/angular-material-extensions/select-country/HEAD/assets/jetbrains-variant-4_logos/jetbrains-variant-4.png)

This project is supported by [jetbrains](https://www.jetbrains.com/) with 1 ALL PRODUCTS PACK OS LICENSE incl. [webstorm](https://www.jetbrains.com/webstorm)

---

<a name="license"/>

## License

Copyright (c) 2020 [Anthony Nahas](https://github.com/AnthonyNahas). Licensed under the MIT License (MIT) <p align="center">
                                                                                                            <img alt="angular-material-extensions's logo"
                                                                                                             height="92px" width="92px" style="text-align: center;" 
                                                                                                             src="https://cdn.jsdelivr.net/gh/angular-material-extensions/select-country@master/assets/badge_made-in-germany.svg">
                                                                                                          </p>

