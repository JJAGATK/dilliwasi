import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext(null);

export const translations = {
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      story: "Our Story",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      kicker: "100% Pure Vegetarian • Pure Desi Ghee Delights",
      line1: "Relish the Tradition.",
      line2: "Fine Dine & Rooftop.",
      line3: "Pure Desi Ghee Delights.",
      desc: "Welcome to Dilliwasi — Haridwar's premier fine dining destination and rooftop cafe since 2001. Relish the timeless taste of authentic North Indian delicacies crafted with pure desi ghee, clay tandoors, and royal spices.",
      ctaPrimary: "Explore Menu",
      ctaSecondary: "Our Story",
      copperDum: "Slow-simmered in rich pure desi ghee",
      stoneSpices: "100% Pure Veg kitchen with fresh ingredients",
      clayTandoor: "Panoramic rooftop dining in Haridwar",
    },
    sections: {
      repertoireKicker: "Pure Desi Ghee Delights",
      repertoireTitle: "Dilliwasi Signature Repertoire",
      viewFullMenu: "View Full Menu",
      howWeCookTitle: "Our Culinary Philosophy",
      howWeCookDesc: "Authentic recipes refined since 2001. Prepared exclusively with pure desi ghee, fresh whole spices, and zero compromise on purity.",
      visitTitle: "Experience fine dine & open-air rooftop dining.",
      visitDesc: "Located at Amar Complex, Shivalik Nagar, Haridwar. Warm family hospitality, rooftop ambiance, and unforgettable vegetarian cuisine.",
    },
    footer: {
      hours: "Restaurant Hours",
      lunch: "Morning & Lunch: 11:00 AM – 4:00 PM",
      dinner: "Evening & Dinner: 6:30 PM – 11:00 PM",
      location: "Outlet 2: 3rd - 4th Floor, A3 Amar Complex (Opp. ICICI Bank), Shivalik Nagar, Haridwar",
      rights: "Dilliwasi Fine Dine Restaurant & Rooftop Cafe. All rights reserved.",
    }
  },
  hi: {
    nav: {
      home: "गृह",
      menu: "व्यंजन सूची",
      story: "हमारी गाथा",
      gallery: "चित्र दीर्घा",
      contact: "सम्पर्क",
    },
    hero: {
      kicker: "१००% शुद्ध शाकाहारी • शुद्ध देसी घी के स्वाद",
      line1: "परंपरा का स्वाद लें।",
      line2: "फ़ाइन डाइन व रूफ़टॉप।",
      line3: "शुद्ध देसी घी के लज़ीज़ व्यंजन।",
      desc: "दिल्लीवासी में आपका स्वागत है — हरिद्वार का प्रतिष्ठित १००% शुद्ध शाकाहारी फ़ाइन डाइन रेस्तरां और रूफ़टॉप कैफ़े (स्थापना २००१)। शुद्ध देसी घी, मिट्टी के तंदूर और पारंपरिक मसालों से सजे अनूठे स्वाद।",
      ctaPrimary: "व्यंजन देखें",
      ctaSecondary: "हमारी गाथा",
      copperDum: "शुद्ध देसी घी में धीमी आंच पर पके व्यंजन",
      stoneSpices: "१००% शुद्ध शाकाहारी व ताज़ी सामग्री",
      clayTandoor: "हरिद्वार में मनमोहक रूफ़टॉप डाइनिंग",
    },
    sections: {
      repertoireKicker: "शुद्ध देसी घी के स्वाद",
      repertoireTitle: "दिल्लीवासी विशेष व्यंजन",
      viewFullMenu: "सम्पूर्ण सूची देखें",
      howWeCookTitle: "हमारी पाक साधना",
      howWeCookDesc: "वर्ष २००१ से लगातार शुद्धता और प्रामाणिक स्वाद की परंपरा। शुद्ध देसी घी और ताज़े मसालों का अनूठा संगम।",
      visitTitle: "शांत गरिमा और रूफ़टॉप आतिथ्य का आनंद लें।",
      visitDesc: "अमर कॉम्प्लेक्स, शिवालिक नगर, हरिद्वार। पारिवारिक माहौल, खुली हवादार रूफ़टॉप और लाजवाब शाकाहारी भोजन।",
    },
    footer: {
      hours: "भोजन समय",
      lunch: "दोपहर: ११:०० से ४:००",
      dinner: "रात्रि: ६:३० से ११:००",
      location: "आउटलेट २: तृतीय-चतुर्थ तल, ए३ अमर कॉम्प्लेक्स, शिवालिक नगर, हरिद्वार",
      rights: "दिल्लीवासी फ़ाइन डाइन रेस्तरां एवं रूफ़टॉप कैफ़े। सर्वाधिकार सुरक्षित।",
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('dilliwasi_lang');
    return (saved === 'hi') ? 'hi' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('dilliwasi_lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
