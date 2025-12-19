
import { APP_CONFIG } from '../constants';
import { Article } from '../types';

/**
 * A helper function to find and set a meta tag's content.
 * If the tag doesn't exist, it creates it.
 */
const setMetaTag = (attr: 'name' | 'property', value: string, content: string) => {
    let element = document.querySelector(`meta[${attr}='${value}']`) as HTMLMetaElement;
    if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, value);
        document.head.appendChild(element);
    }
    element.setAttribute('content', content);
};

/**
 * Updates the document's meta tags for social sharing and SEO.
 * Formats the title professionally as "Article Title | Company Name".
 * @param article The article object containing data.
 * @param lang The current language.
 */
export const updateMetaTags = (article: Article, lang: 'ar' | 'en') => {
    const isAr = lang === 'ar';
    const companyName = isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en;

    const title = `${isAr ? article.title_ar : article.title_en} | ${companyName}`;
    const imageUrl = article.image || `https://picsum.photos/seed/${article.id}/1200/630`;

    // Extract a plain text description from HTML content
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = isAr ? article.content_ar : article.content_en;
    const description = (tempDiv.textContent || "").substring(0, 155) + "...";

    // Update page title
    document.title = title;

    // Standard Meta Tags
    setMetaTag('name', 'description', description);

    // Open Graph (Facebook, LinkedIn, etc.)
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:image', imageUrl);
    setMetaTag('property', 'og:url', window.location.href);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:site_name', companyName);

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', imageUrl);
};

/**
 * Resets the meta tags to the website's default values.
 * @param lang The current language.
 */
export const resetMetaTags = (lang: 'ar' | 'en') => {
    const isAr = lang === 'ar';
    const companyName = isAr ? APP_CONFIG.siteName.ar : APP_CONFIG.siteName.en;
    const defaultDescription = isAr 
        ? 'فرست اير: شريكك الهندسي الموثوق للأعمال الكهروميكانيكية.' 
        : 'First Air: Your trusted engineering partner for MEP works.';

    document.title = `${companyName} | MEP Contracting`;

    setMetaTag('name', 'description', defaultDescription);
    
    // Reset Open Graph tags
    setMetaTag('property', 'og:title', document.title);
    setMetaTag('property', 'og:description', defaultDescription);
    setMetaTag('property', 'og:image', APP_CONFIG.logo); 
    setMetaTag('property', 'og:url', window.location.origin);
    setMetaTag('property', 'og:type', 'website');

    // Reset Twitter Card tags
    setMetaTag('name', 'twitter:title', document.title);
    setMetaTag('name', 'twitter:description', defaultDescription);
    setMetaTag('name', 'twitter:image', APP_CONFIG.logo);
};
