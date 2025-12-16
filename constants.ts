
// This file contains all global configuration.
// Change values here to update them across the entire website instantly.

export const APP_CONFIG = {
    // Toggle this to true to immediately show a maintenance screen to users
    MAINTENANCE_MODE: false,

    // Logo Configuration - Using a generic MEP/Engineering icon concept
    logo: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png", 

    // General Site Info
    siteName: {
        ar: 'فرست اير للمقاولات',
        en: 'First Air Contracting'
    },
    
    // Contact Information (Primary Contact - usually HQ or Main Branch)
    contact: {
        phone: '+966532425777', // KSA as primary for quick action
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
        facebook: '#',
        twitter: '#',
        instagram: '#',
        whatsapp: 'https://wa.me/966532425777'
    },

    // Theme Colors (matched with Tailwind config for consistency in JS logic)
    colors: {
        primary: '#0F2C59',
        secondary: '#3282B8',
        tertiary: '#00ADB5'
    }
};