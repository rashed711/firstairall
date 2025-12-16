
import React, { useEffect, useState } from 'react';
import { Article, Language } from '../types';

interface ArticleDetailProps {
  article: Article;
  lang: Language;
  onBack: () => void;
}

const ArticleDetail: React.FC<ArticleDetailProps> = ({ article, lang, onBack }) => {
  const isAr = lang === 'ar';
  const [isSharing, setIsSharing] = useState(false);
  
  // Use custom image or fallback
  const imageUrl = article.image || `https://picsum.photos/seed/${article.id}/1600/900`;
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Advanced Native Share (With Image File if possible)
  const handleNativeShare = async () => {
    if (!navigator.share) {
        alert(isAr ? 'المشاركة غير مدعومة في هذا المتصفح، استخدم الأزرار بالأسفل.' : 'Sharing is not supported in this browser, use the buttons below.');
        return;
    }

    setIsSharing(true);
    const title = isAr ? article.title_ar : article.title_en;
    const url = window.location.href;
    const text = isAr 
        ? `${title}\n\nاقرأ المزيد على منصة فرست اير:` 
        : `${title}\n\nRead more at First Air Platform:`;

    try {
        // Try to fetch the image and share it as a file
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const file = new File([blob], "article_image.jpg", { type: "image/jpeg" });

        const shareData = {
            title: title,
            text: text,
            url: url,
            files: [file]
        };

        if (navigator.canShare && navigator.canShare(shareData)) {
            await navigator.share(shareData);
        } else {
            // Fallback without file
            await navigator.share({
                title: title,
                text: text,
                url: url
            });
        }
    } catch (error) {
        console.warn('Error sharing with image, falling back to link:', error);
        // Deep Fallback
        try {
             await navigator.share({
                title: title,
                text: text,
                url: url
            });
        } catch (e) {
            console.error('Share failed', e);
        }
    } finally {
        setIsSharing(false);
    }
  };

  // Handle Social Sharing Links
  const handleSocialShare = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'pinterest') => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(isAr ? article.title_ar : article.title_en);
    const img = encodeURIComponent(imageUrl);
    
    // Extract snippet
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = isAr ? article.content_ar : article.content_en;
    const plainText = tempDiv.textContent || "";
    const description = encodeURIComponent(plainText.substring(0, 150) + "...");

    let shareUrl = '';
    const windowFeatures = 'width=600,height=400,scrollbars=yes,resizable=yes';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
            break;
        case 'whatsapp':
            // Richer text for WhatsApp
            const waText = `${title}%0A%0A${description}%0A%0A${url}%0A%0A🖼️ Image: ${img}`;
            shareUrl = `https://wa.me/?text=${waText}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${url}&media=${img}&description=${title}`;
            break;
    }

    window.open(shareUrl, '_blank', windowFeatures);
  };

  return (
    <div className="bg-white min-h-screen pb-12 animate-fade-in" dir={isAr ? 'rtl' : 'ltr'}>
      {/* Article Header Image */}
      <div className="relative h-64 md:h-[500px] w-full overflow-hidden group">
        <div className="absolute inset-0 bg-primary/40 z-10 transition-opacity duration-500 group-hover:bg-primary/20"></div>
        <img 
            src={imageUrl} 
            alt="Article Banner" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute top-8 left-8 right-8 z-20 max-w-7xl mx-auto flex justify-between items-start">
             <button 
                onClick={onBack}
                className="bg-black/30 backdrop-blur-md border border-white/30 text-white px-5 py-2.5 rounded-full hover:bg-black/50 transition-all flex items-center gap-2 font-bold shadow-lg"
            >
                <i className={`fas fa-arrow-${isAr ? 'right' : 'left'}`}></i> {isAr ? 'العودة للمقالات' : 'Back to Articles'}
            </button>

            {/* Floating Share Button on Image */}
             <button 
                onClick={handleNativeShare}
                disabled={isSharing}
                className="bg-white/90 backdrop-blur-md text-primary px-5 py-2.5 rounded-full hover:bg-white transition-all flex items-center gap-2 font-bold shadow-lg transform hover:scale-105"
            >
                {isSharing ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-share-alt"></i>}
                {isAr ? 'مشاركة' : 'Share'}
            </button>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 w-full z-20 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-24 pb-12 px-4">
             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3 text-white/80 text-sm font-medium mb-3">
                    <span className="bg-tertiary px-3 py-1 rounded-md text-white font-bold shadow-sm">
                        {isAr ? 'مدونة المقاولات' : 'Contracting Blog'}
                    </span>
                    <span>•</span>
                    <time dateTime={article.created_at}>
                        {new Date(article.created_at).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </time>
                </div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                    {isAr ? article.title_ar : article.title_en}
                </h1>
             </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-30">
        <div className="bg-white rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.1)] p-8 md:p-12 border-x border-t border-gray-100">
            
            <div className="prose prose-lg prose-slate max-w-none text-gray-600 leading-9">
                {/* SEO: Rendering HTML content. In a real app we'd sanitize this. */}
                <div dangerouslySetInnerHTML={{ __html: isAr ? article.content_ar : article.content_en }} />
                
                <p className="mt-8 bg-light p-8 rounded-2xl border-r-4 border-tertiary italic text-gray-700 shadow-sm">
                    {/* Professional disclaimer/CTA */}
                    {isAr 
                     ? 'للمزيد من المعلومات حول هذا الموضوع، يمكنك التواصل مع فريق خدمة العملاء لدينا. نحن هنا لمساعدتك في اتخاذ القرارات الصحيحة.'
                     : 'For more information on this topic, feel free to contact our customer support team. We are here to help you make the right decisions.'}
                </p>
            </div>
            
            <div className="mt-16 pt-10 border-t border-gray-100">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <h3 className="text-xl font-bold text-primary flex items-center gap-2">
                        <span className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary text-sm">
                            <i className="fas fa-heart"></i>
                        </span>
                        {isAr ? 'أعجبك المقال؟ شاركه الآن' : 'Liked this? Share it now'}
                    </h3>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                        {/* Native Share Button (Mobile Friendly) */}
                        <button 
                            onClick={handleNativeShare}
                            className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-black transition-all hover:scale-110 shadow-md"
                            title={isAr ? 'مشاركة (مع الصورة)' : 'Share (with Image)'}
                        >
                            <i className="fas fa-share-alt"></i>
                        </button>

                        {/* WhatsApp */}
                        <button 
                            onClick={() => handleSocialShare('whatsapp')}
                            className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-[#20bd5a] transition-all hover:scale-110 shadow-md"
                            title="WhatsApp"
                        >
                            <i className="fab fa-whatsapp text-xl"></i>
                        </button>

                        {/* Facebook */}
                        <button 
                            onClick={() => handleSocialShare('facebook')}
                            className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center hover:bg-[#166fe5] transition-all hover:scale-110 shadow-md"
                            title="Facebook"
                        >
                            <i className="fab fa-facebook-f text-xl"></i>
                        </button>

                         {/* Twitter */}
                         <button 
                            onClick={() => handleSocialShare('twitter')}
                            className="w-12 h-12 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-[#1a94da] transition-all hover:scale-110 shadow-md"
                            title="Twitter"
                        >
                            <i className="fab fa-twitter text-xl"></i>
                        </button>

                        {/* Pinterest (Supports Image Sharing) */}
                        <button 
                            onClick={() => handleSocialShare('pinterest')}
                            className="w-12 h-12 rounded-full bg-[#E60023] text-white flex items-center justify-center hover:bg-[#cc001f] transition-all hover:scale-110 shadow-md"
                            title="Pinterest"
                        >
                            <i className="fab fa-pinterest text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
