import { jsonResumeSchema } from './jsonResumeSchema';

export const SITE_TITLE = 'Portfolio | Kyle Ross';
export const SITE_DESCRIPTION = 'Welcome to Kyle Ross\'s Portfolio: Web Developer';
export const portfolioJSON = await fetch('https://gitconnected.com/v1/portfolio/kylejamesross').then((response) => response.json()).then((json) => jsonResumeSchema.parse(json));
