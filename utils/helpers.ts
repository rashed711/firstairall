
import { Service } from '../types';

/**
 * Centralized logic to get service images.
 * Prioritizes custom image URL from dashboard, then falls back to defaults.
 */
export const getServiceImage = (service: Service): string => {
    // إذا كانت الخدمة تحتوي على رابط صورة مخصص من لوحة التحكم، نستخدمه
    if (service.image) return service.image;

    // سقوط احتياطي (Fallback) للصور الافتراضية بناءً على المعرف
    switch(service.id) {
      case 1: return "https://i.postimg.cc/dVv64Qqx/004.webp"; // HVAC/Ducts
      case 2: return "https://i.pinimg.com/736x/41/03/ac/4103ac81a87dd14de2a7fc06d2f8c575.jpg"; // Fire Pipes
      case 3: return "https://i.pinimg.com/736x/f9/b4/09/f9b4093fa3cfb2175284e5c10d0f3781.jpg"; // Plumbing/Industrial
      case 4: return "https://i.pinimg.com/736x/2c/92/aa/2c92aa0758b6526f89cd671a315c9157.jpg"; // Electrical
      case 5: return "https://i.pinimg.com/736x/de/9b/33/de9b33bb9ce4bef56fb7849820fdda6f.jpg"; // Maintenance
      default: return "https://i.pinimg.com/1200x/24/63/81/246381c237c6fa0e851ea3130d4f40a4.jpg"; // Generic Engineering
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
