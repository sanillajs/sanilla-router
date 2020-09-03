/*
 * index.ts
 * Created on Wed Sep 02 2020
 *
 * Copyright (c) Sanilla. Licensed under the MIT License.
 */
import Sanilla from '@sanillajs/sanilla';

class SanillaRouter {
	private router!: HTMLElement;
	constructor(selector: string|HTMLElement, private routes: any) {
		if ( typeof selector === 'string' ) {
			selector = document.querySelector(selector) as HTMLElement;
		}
		this.router = selector;
		this.assign(location.pathname);
	}

	public assign(url: string) {
		if ( url[0] !== '/' ) {
			url = '/' + url;
		}

		if ( this.routes[url] ) {
			Sanilla.mount(this.router, this.routes[url]);
			history.pushState({}, '', url);
		}

	}
}

export default SanillaRouter;
