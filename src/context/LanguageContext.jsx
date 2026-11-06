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
      reserve: "Reserve a Table",
      dashboard: "Dashboard",
    },
    hero: {
      kicker: "Heritage Flavours • 3rd Century BCE Roots",
      line1: "Take a taste.",
      line2: "Come join us.",
      line3: "Life is so endlessly delicious.",
      desc: "Inspired by the sacred Stupa of Sanchi. We celebrate authentic Awadhi slow-cooking, woodsmoke embers, and stone-ground royal spices.",
      ctaPrimary: "Explore Menu",
      ctaSecondary: "Reserve a Table",
      copperDum: "12-Hour Copper Deg Dum",
      stoneSpices: "Stone-Ground Whole Spices",
      clayTandoor: "Live Clay Oven Embers",
    },
    sections: {
      repertoireKicker: "Crafted Over Embers",
      repertoireTitle: "Signature Culinary Repertoire",
      viewFullMenu: "View Full Menu",
      howWeCookTitle: "How We Cook",
      howWeCookDesc: "Real techniques refined across centuries. No shortcuts, no artificial emulsifiers, no microwave quick-fires.",
      visitTitle: "Join us for an evening of quiet culinary majesty.",
      visitDesc: "We host only 24 tables each evening to ensure every deg receives the personal attention of our master ustad.",
    },
    footer: {
      hours: "Sanctuary Hours",
      lunch: "Afternoon Lunch: 12:00 PM – 3:30 PM",
      dinner: "Evening Degustation: 7:00 PM – 11:30 PM",
      location: "42 Heritage Promenade, Civil Lines, Bhopal",
      rights: "Sanchi Heritage Gastronomy. All rights reserved.",
    }
  },
  hi: {
    nav: {
      home: "गृह",
      menu: "व्यंजन सूची",
      story: "हमारी गाथा",
      gallery: "चित्र दीर्घा",
      contact: "सम्पर्क",
      reserve: "मेज आरक्षित करें",
      dashboard: "प्रबंधन",
    },
    hero: {
      kicker: "विरासत के स्वाद • सांची स्तूप परंपरा",
      line1: "स्वाद चखें।",
      line2: "हमारे संग पधारें।",
      line3: "जीवन अनंत रूप से स्वादिष्ट है।",
      desc: "सांची के पवित्र स्तूप से प्रेरित। प्राचीन अवधी दम पुख्त, धीमी आंच की हांडी और पत्थर पर पिसे शाही मसालों की अनूठी साधना।",
      ctaPrimary: "व्यंजन देखें",
      ctaSecondary: "मेज आरक्षित करें",
      copperDum: "१२ घंटे तांबे की देग में दम",
      stoneSpices: "सिलबट्टे पर पिसे मसाले",
      clayTandoor: "मिट्टी के तंदूर की आंच",
    },
    sections: {
      repertoireKicker: "अंगारों पर पकी साधना",
      repertoireTitle: "शाही व्यंजन संग्रह",
      viewFullMenu: "सम्पूर्ण सूची देखें",
      howWeCookTitle: "हमारी पाक कला",
      howWeCookDesc: "शताब्दियों पुरानी शुद्ध परंपरा। कोई कृत्रिम रंग नहीं, केवल धीमी आंच का धैर्य।",
      visitTitle: "शांत गरिमा और शाही आतिथ्य का आनंद लें।",
      visitDesc: "प्रत्येक संध्या केवल २४ मेजों की सेवा, ताकि हर व्यंजन को उस्ताद का पूरा ध्यान मिल सके।",
    },
    footer: {
      hours: "भोजन समय",
      lunch: "दोपहर: १२:०० से ३:३०",
      dinner: "रात्रि भोज: ७:०० से ११:३०",
      location: "४२ हेरिटेज प्रोमेनेड, सिविल लाइन्स, भोपाल",
      rights: "सांची हेरिटेज गैस्ट्रोनॉमी। सर्वाधिकार सुरक्षित।",
    }
  }
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem('sanchi_lang');
    return (saved === 'hi') ? 'hi' : 'en';
  });

  useEffect(() => {
    localStorage.setItem('sanchi_lang', lang);
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}

