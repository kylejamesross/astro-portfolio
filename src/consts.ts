// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Portfolio | Kyle Ross';
export const SITE_DESCRIPTION = 'Welcome to Kyle Ross\'s Portfolio: Web Developer';
export const portfolioJSON = await fetch('https://gitconnected.com/v1/portfolio/kylejamesross').then((response) => response.json());
