import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Keep track of your loved ones in real time!",
          description: "We noticed the high level of insecurity in the world, and we thought of how technology could be used to combat these insecurities.",
          joinWaitlist: "Join Our Waitlist!",
          placeholder: "Your email address",
          joinButton: "Join List",
          navbar: {
            logo: "YOUR LOGO",
            assets: "Assets",
            creators: "Creators",
            careers: "Careers",
            goPro: "Go Pro"
          },
        },
      },
      ru: {
        translation: {
          title: "Следите за своими близкими в реальном времени!",
          description: "Мы заметили высокий уровень нестабильности в мире и подумали, как технологии могут помочь в борьбе с этой нестабильностью.",
          joinWaitlist: "Присоединяйтесь к нашему списку ожидания!",
          placeholder: "Ваш адрес электронной почты",
          joinButton: "Присоединиться к списку",
          navbar: {
            logo: "ВАШ ЛОГО",
            assets: "Активы",
            creators: "Создатели",
            careers: "Карьеры",
            goPro: "Станьте профессионалом"
          },
        },
      },
      uz: {
        translation: {
          title: "Sevgi yurtlaringizni real vaqtda kuzating!",
          description: "Biz dunyoda yuqori darajadagi xavfsizlik tahdidlarini kuzatdik va texnologiyaning ushbu xavflar bilan kurashishda qanday yordam bera olishini o'yladik.",
          joinWaitlist: "Kutish ro'yxatimizga qo'shiling!",
          placeholder: "Sizning elektron pochta manzilingiz",
          joinButton: "Ro'yxatga qo'shiling",
          navbar: {
            logo: "SIZNING LOGO",
            assets: "Aktivlar",
            creators: "Ijodkorlar",
            careers: "Karyera",
            goPro: "Pro bo'ling"
          },
        },
      },
    },
    
    lng: "en", 
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;
