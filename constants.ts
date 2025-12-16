
// This file contains all global configuration.
// Change values here to update them across the entire website instantly.

export const APP_CONFIG = {
    // Toggle this to true to immediately show a maintenance screen to users
    MAINTENANCE_MODE: false,

    // Logo Configuration - Updated to new brand logo
    logo: "https://i.postimg.cc/vBC0GW5k/02-frst-ayr-llmqawlat.webp", 

    // General Site Info
    siteName: {
        ar: 'فرست اير للمقاولات',
        en: 'First Air Contracting'
    },
    
    // Contact Information (Primary Contact - usually HQ or Main Branch)
    contact: {
        phone: '+966532425777', // Default/Primary
        phones: {
            ksa: '966532425777', // KSA Branch
            egypt: '201065550024' // Egypt Branch (01065550024 formatted for WA)
        },
        email: 'info@firstair-sa.com',
        address: {
            ar: 'مصر والسعودية',
            en: 'Egypt & Saudi Arabia'
        },
        // Coordinates for map links (KSA Branch as default)
        locationUrl: 'https://maps.google.com/?q=24.694970,46.724130' 
    },

    // Social Media Links
    socials: {
        facebook: 'https://web.facebook.com/firstaireg',
        linkedin: 'https://www.linkedin.com/company/firstaireg', // Updated to LinkedIn
        instagram: 'https://www.instagram.com/firstaireg',
        whatsapp: 'https://wa.me/966532425777'
    },

    // Theme Colors (matched with Tailwind config for consistency in JS logic)
    colors: {
        primary: '#0F2C59',
        secondary: '#3282B8',
        tertiary: '#E63946' // Soft Red
    }
};
