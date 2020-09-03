# Sanilla Router

HTML5 history api router for [Sanilla](https://github.com/sanillajs/sanilla)

![enter image description here](https://github.com/sanillajs/sanilla-router/spa.gif)

## Install
npm
```sh
npm install -D @sanillajs/sanilla-router
```

yarn
```sh
yarn add -D @sanillajs/sanilla-router
```

## How to use

```sh
import Sanilla from '@sanillajs/sanilla';
import SanillaRouter from '@sanillajs/sanilla-router';

import app from './app.html';
import home from './views/home.html';
import about from './views/about.html';
import hello from './views/hello.html';

Sanilla.append('#root', app);
Sanilla.router = new SanillaRouter('#router', {
	'/': home,
	'/about': about,
	'/hello': hello,
});
```
