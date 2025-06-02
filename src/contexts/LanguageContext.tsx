import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.rockets': 'Rockets',
    'nav.blog': 'Nova Project',
    'nav.gallery': 'Gallery',
    'nav.projects': 'Projects',
    'nav.docs': 'Docs',
    'nav.contact': 'Contact',
    'hero.title': 'Nova Project',
    'hero.subtitle': 'Engineering the future of amateur rocketry through',
    'hero.3dprinting': '3D printing',
    'hero.electronics': 'embedded electronics',
    'hero.design': 'innovative design',
    'hero.exploreRockets': 'Explore Rockets',
    'hero.watchLaunches': 'Watch Launches',
    'about.title': 'About the Engineer',
    'about.intro': 'Welcome to my aerospace engineering journey. I\'m a passionate rocketry enthusiast who designs, builds, and launches amateur rockets entirely from scratch.',
    'about.expertise': 'My expertise spans across multiple disciplines: from 3D printing rocket components in specialized materials to developing embedded electronics for flight control, and formulating homemade solid rocket fuels for optimal performance.',
    'about.philosophy': 'Every rocket represents months of careful engineering, testing, and iteration. I believe in pushing the boundaries of what\'s possible in amateur rocketry while maintaining the highest safety standards.',
    'about.skills.3dprinting': '3D Printing',
    'about.skills.3dprinting.desc': 'PETG engines, PLA body structures',
    'about.skills.arduino': 'Arduino Electronics',
    'about.skills.arduino.desc': 'Accelerometers, gyroscopes, control systems',
    'about.skills.engine': 'Engine Design',
    'about.skills.engine.desc': 'Custom rocket motors and fuel chemistry',
    'about.skills.software': 'Flight Software',
    'about.skills.software.desc': 'Autonomous flight control and recovery',
    'technical.title': 'Technical Specifications',
    'technical.subtitle': 'Every component is engineered for performance, reliability, and safety',
    'technical.3dprinted': '3D Printed Components',
    'technical.electronics': 'Flight Electronics',
    'technical.control': 'Control Systems',
    'technical.recovery': 'Recovery & Fuel Systems',
    'rockets.title': 'Rocket Comparison',
    'rockets.subtitle': 'Compare specifications and performance metrics',
    'gallery.title': 'Multimedia Gallery',
    'gallery.subtitle': 'Videos, photos, and documentation from design to launch',
    'gallery.filter.all': 'All',
    'gallery.filter.launches': 'Launches',
    'gallery.filter.manufacturing': 'Manufacturing',
    'gallery.filter.testing': 'Testing',
    'gallery.filter.electronics': 'Electronics',
    'projects.title': 'Projects in Progress',
    'projects.subtitle': 'Upcoming innovations and experimental features in development',
    'projects.status.assembly': 'Assembly Phase',
    'projects.status.software': 'Software Development',
    'projects.status.design': 'Design Phase',
    'projects.status.concept': 'Concept Stage',
    'projects.progress': 'Progress',
    'projects.target': 'Target',
    'projects.viewDetails': 'View Details →',
    'docs.title': 'Technical Documentation',
    'docs.subtitle': 'Open-source designs, code, and test data for the community',
    'docs.circuits': 'Circuit Diagrams',
    'docs.arduino': 'Arduino Code',
    'docs.models': '3D Models',
    'docs.testdata': 'Test Data',
    'docs.download': 'Download',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Have questions about rocketry? Want to collaborate? Or just interested in following the journey?',
    'contact.quickContact': 'Quick Contact',
    'contact.quickContact.desc': 'For technical discussions, collaboration opportunities, or general inquiries',
    'footer.tagline': 'Pushing the boundaries of amateur rocketry through innovative engineering, 3D printing, and open-source development.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Resources',
    'footer.madeWith': 'Made with',
    'footer.community': 'for the rocketry community',
    'footer.copyright': '© 2024 Nova Project. Open source designs for educational purposes.',
  },
  fr: {
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.rockets': 'Fusées',
    'nav.gallery': 'Galerie',
    'nav.projects': 'Projets',
    'nav.docs': 'Documentation',
    'nav.contact': 'Contact',
    'hero.title': 'Projet Nova',
    'hero.subtitle': 'Ingénierie du futur de la fusée amateur grâce à',
    'hero.3dprinting': "l'impression 3D",
    'hero.electronics': "l'électronique embarquée",
    'hero.design': 'la conception innovante',
    'hero.exploreRockets': 'Explorer les Fusées',
    'hero.watchLaunches': 'Voir les Lancements',
    'about.title': 'À propos de l\'Ingénieur',
    'about.intro': 'Bienvenue dans mon parcours d\'ingénierie aérospatiale. Je suis un passionné de fusées qui conçoit, construit et lance des fusées amateurs entièrement à partir de zéro.',
    'about.expertise': 'Mon expertise s\'étend sur plusieurs disciplines : de l\'impression 3D de composants de fusées dans des matériaux spécialisés au développement d\'électronique embarquée pour le contrôle de vol, et la formulation de carburants solides de fusées maison pour des performances optimales.',
    'about.philosophy': 'Chaque fusée représente des mois d\'ingénierie minutieuse, de tests et d\'itérations. Je crois en repousser les limites de ce qui est possible dans la fusée amateur tout en maintenant les plus hauts standards de sécurité.',
    'about.skills.3dprinting': 'Impression 3D',
    'about.skills.3dprinting.desc': 'Moteurs PETG, structures de corps PLA',
    'about.skills.arduino': 'Électronique Arduino',
    'about.skills.arduino.desc': 'Accéléromètres, gyroscopes, systèmes de contrôle',
    'about.skills.engine': 'Conception de Moteur',
    'about.skills.engine.desc': 'Moteurs de fusées personnalisés et chimie du carburant',
    'about.skills.software': 'Logiciel de Vol',
    'about.skills.software.desc': 'Contrôle de vol autonome et récupération',
    'technical.title': 'Spécifications Techniques',
    'technical.subtitle': 'Chaque composant est conçu pour la performance, la fiabilité et la sécurité',
    'technical.3dprinted': 'Composants Imprimés 3D',
    'technical.electronics': 'Électronique de Vol',
    'technical.control': 'Systèmes de Contrôle',
    'technical.recovery': 'Systèmes de Récupération et Carburant',
    'rockets.title': 'Comparaison de Fusées',
    'rockets.subtitle': 'Comparer les spécifications et métriques de performance',
    'gallery.title': 'Galerie Multimédia',
    'gallery.subtitle': 'Vidéos, photos et documentation de la conception au lancement',
    'gallery.filter.all': 'Tout',
    'gallery.filter.launches': 'Lancements',
    'gallery.filter.manufacturing': 'Fabrication',
    'gallery.filter.testing': 'Tests',
    'gallery.filter.electronics': 'Électronique',
    'projects.title': 'Projets en Cours',
    'projects.subtitle': 'Innovations à venir et fonctionnalités expérimentales en développement',
    'projects.status.assembly': 'Phase d\'Assemblage',
    'projects.status.software': 'Développement Logiciel',
    'projects.status.design': 'Phase de Conception',
    'projects.status.concept': 'Étape de Concept',
    'projects.progress': 'Progrès',
    'projects.target': 'Objectif',
    'projects.viewDetails': 'Voir Détails →',
    'docs.title': 'Documentation Technique',
    'docs.subtitle': 'Conceptions open-source, code et données de test pour la communauté',
    'docs.circuits': 'Schémas de Circuit',
    'docs.arduino': 'Code Arduino',
    'docs.models': 'Modèles 3D',
    'docs.testdata': 'Données de Test',
    'docs.download': 'Télécharger',
    'contact.title': 'Entrer en Contact',
    'contact.subtitle': 'Avez-vous des questions sur les fusées ? Voulez-vous collaborer ? Ou simplement intéressé à suivre le voyage ?',
    'contact.quickContact': 'Contact Rapide',
    'contact.quickContact.desc': 'Pour les discussions techniques, opportunités de collaboration, ou demandes générales',
    'footer.tagline': 'Repousser les limites de la fusée amateur grâce à l\'ingénierie innovante, l\'impression 3D et le développement open-source.',
    'footer.navigation': 'Navigation',
    'footer.resources': 'Ressources',
    'footer.madeWith': 'Fait avec',
    'footer.community': 'pour la communauté des fusées',
    'footer.copyright': '© 2024 Projet Nova. Conceptions open source à des fins éducatives.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
