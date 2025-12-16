
/**
 * Centralized logic to get service images.
 * This ensures ServiceCard and ServiceDetail always show the same image.
 */
export const getServiceImage = (id: number): string => {
    switch(id) {
      case 1: return "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=1200"; // HVAC/Ducts
      case 2: return "https://images.unsplash.com/photo-1615915233146-24e5b321c83c?auto=format&fit=crop&q=80&w=1200"; // Fire Pipes
      case 3: return "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1200"; // Plumbing/Industrial
      case 4: return "https://images.unsplash.com/photo-1563968743333-044cef8004c3?auto=format&fit=crop&q=80&w=1200"; // Electrical
      case 5: return "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=1200"; // Maintenance
      default: return "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=1200"; // Generic Engineering
    }
};

/**
 * Helper to clean phone numbers for WhatsApp links
 */
export const cleanPhoneNumber = (phone: string): string => {
    let clean = phone.replace(/[^\d]/g, '');
    if (clean.startsWith('0')) {
        clean = '966' + clean.substring(1);
    }
    return clean;
};