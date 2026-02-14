(function () {
  'use strict';

  var SUPPORTED = ['en','zh-Hans','zh-Hant','es','ar','pt','id','fr','ja','ru','ko'];
  var RTL_LANGS = ['ar'];

  var T = {
    en: {
      htmlLang: 'en',
      title: 'Readmigo - AI-Powered English Reading',
      description: 'Read any book. AI has your back. Readmigo is an AI-native English reading and learning app with 100,000+ books.',
      nav_support: 'Support',
      nav_download: 'Download',
      hero_title_1: 'Read any book.',
      hero_title_2: 'AI has your back.',
      hero_subtitle: 'Readmigo is an AI-native English reading app designed for learners worldwide. Read classic literature with intelligent AI assistance.',
      hero_appstore_label: 'Download on the',
      hero_appstore_store: 'App Store',
      hero_gplay_label: 'Get it on',
      hero_gplay_store: 'Google Play',
      hero_web_label: 'Open in',
      hero_web_store: 'Browser',
      features_heading_1: 'Everything you need to ',
      features_heading_2: 'master English reading',
      f1_title: '100,000+ Books',
      f1_desc: 'Massive collection from Project Gutenberg, including classics from Shakespeare to Jane Austen.',
      f2_title: 'TTS Read Aloud',
      f2_desc: 'Listen to any book with natural AI voices. Turn your reading into a hands-free experience.',
      f3_title: 'Audiobooks',
      f3_desc: 'Access 20,000+ free audiobooks from LibriVox. Enjoy classic literature read by real narrators.',
      f4_title: 'Long-Press Translation',
      f4_desc: 'Long press any paragraph for instant bilingual translation. Understand context without leaving the page.',
      f5_title: 'Account Sync',
      f5_desc: 'Sign in with Apple ID or Google to sync your library and reading progress across devices.',
      f6_title: 'Multi-Device',
      f6_desc: 'Read seamlessly on iOS, Android, and Web. Pick up right where you left off on any device.',
      cta_title: 'Start your English reading journey today',
      cta_subtitle: 'Download Readmigo and discover the joy of reading in English.',
      cta_button: 'Get Started Free',
      footer_tagline: 'AI-powered English reading and learning for everyone.',
      footer_legal: 'Legal',
      footer_privacy: 'Privacy Policy',
      footer_terms: 'Terms of Service',
      footer_credits: 'Credits',
      footer_support: 'Support',
      footer_help: 'Help Center',
      footer_delete: 'Delete Account',
      footer_contact: 'Contact Us',
      footer_language: 'Language',
      footer_rights: '\u00a9 2025-2026 Readmigo. All rights reserved.',
      footer_address: '42 Church Ave, Mascot, NSW 2020, Sydney, Australia',
      products_heading: 'Our Products',
      products_subtitle: 'Tools and apps designed to enhance your reading and learning experience.',
      products_flagship: 'Flagship',
      p1_desc: 'AI-powered English reading app with 100,000+ books, audiobooks, and intelligent reading assistance.',
      p1_cta: 'Get the App',
      p2_desc: 'Modern three-column RSS reader for staying informed with clean, organized feeds.',
      p2_cta: 'Open Web App',
      p3_desc: 'Stay updated with the latest AI technology reviews, insights, and analysis.',
      nav_products: 'Products',
      nav_features: 'Features',
      nav_about: 'About',
      nav_get_started: 'Get Started',
      footer_col_products: 'Products',
      footer_col_company: 'Company',
      footer_blog: 'Blog',
      about_title: 'About Readmigo',
      about_subtitle: 'The AI-native English reading platform that transforms classic literature into accessible learning experiences for non-native speakers worldwide.',
      about_mission_title: 'Our Mission',
      about_mission_p1: 'To enable billions of non-native English speakers to effortlessly read and enjoy English literature through intelligent AI assistance.',
      about_mission_p2: 'We believe great books shouldn\'t be locked behind language barriers. Our AI coach understands your struggles and proactively helps you overcome every obstacle.',
      about_stat_books: 'Classic Books',
      about_stat_audiobooks: 'Audiobooks',
      about_stat_languages: 'Languages',
      about_stat_platforms: 'Platforms',
      about_story_title: 'Our Story',
      about_story_p1: 'Millions of people dream of reading English classics in their original language. But language barriers turn this dream into frustration. Traditional ebook readers offer no help when you\'re stuck.',
      about_story_p2: 'Readmigo changes everything. We\'ve built the world\'s first AI-native reading platform designed specifically for non-native English speakers. Our intelligent AI coach actively monitors your reading, detects when you\'re struggling, and provides contextual assistance exactly when needed.',
      about_story_p3: 'From tap-to-translate to sentence simplification, from audiobooks to vocabulary building with spaced repetition, Readmigo transforms reading from frustrating to effortless.',
      about_cta_title: 'Ready to start reading?',
      about_cta_subtitle: 'Join readers worldwide who are discovering the joy of English literature.'
    },
    'zh-Hans': {
      htmlLang: 'zh-CN',
      title: 'Readmigo - AI\u9a71\u52a8\u7684\u82f1\u8bed\u9605\u8bfb',
      description: '\u9605\u8bfb\u4efb\u4f55\u4e66\u7c4d\uff0cAI\u4e3a\u4f60\u4fdd\u9a7e\u62a4\u822a\u3002Readmigo\u662f\u4e00\u6b3eAI\u539f\u751f\u82f1\u8bed\u9605\u8bfb\u5b66\u4e60\u5e94\u7528\uff0c\u62e5\u670910\u4e07+\u56fe\u4e66\u3002',
      nav_support: '\u652f\u6301',
      nav_download: '\u4e0b\u8f7d',
      hero_title_1: '\u9605\u8bfb\u4efb\u4f55\u4e66\u7c4d\u3002',
      hero_title_2: 'AI\u4e3a\u4f60\u4fdd\u9a7e\u62a4\u822a\u3002',
      hero_subtitle: 'Readmigo\u662f\u4e00\u6b3e\u9762\u5411\u5168\u7403\u5b66\u4e60\u8005\u7684AI\u539f\u751f\u82f1\u8bed\u9605\u8bfb\u5e94\u7528\u3002\u5728\u667a\u80fdAI\u8f85\u52a9\u4e0b\u9605\u8bfb\u7ecf\u5178\u6587\u5b66\u3002',
      hero_appstore_label: '\u4e0b\u8f7d\u4e8e',
      hero_appstore_store: 'App Store',
      hero_gplay_label: '\u4e0b\u8f7d\u4e8e',
      hero_gplay_store: 'Google Play',
      hero_web_label: '在线使用',
      hero_web_store: '网页版',
      features_heading_1: '\u638c\u63e1\u82f1\u8bed\u9605\u8bfb\u6240\u9700\u7684',
      features_heading_2: '\u4e00\u5207\u529f\u80fd',
      f1_title: '10\u4e07+\u56fe\u4e66',
      f1_desc: '\u6d77\u91cf\u53e4\u817e\u5821\u8ba1\u5212\u4e66\u5e93\uff0c\u4ece\u838e\u58eb\u6bd4\u4e9a\u5230\u7b80\u00b7\u5965\u65af\u6c40\u7684\u7ecf\u5178\u4f5c\u54c1\u5e94\u6709\u5c3d\u6709\u3002',
      f2_title: 'AI\u8bed\u97f3\u6717\u8bfb',
      f2_desc: 'AI\u81ea\u7136\u8bed\u97f3\u6717\u8bfb\u4efb\u610f\u4e66\u7c4d\uff0c\u89e3\u653e\u53cc\u624b\uff0c\u968f\u65f6\u968f\u5730\u542c\u4e66\u3002',
      f3_title: '\u6709\u58f0\u4e66',
      f3_desc: '\u7545\u4eab2\u4e07+\u6765\u81eaLibriVox\u7684\u514d\u8d39\u6709\u58f0\u4e66\uff0c\u8046\u542c\u771f\u4eba\u6717\u8bfb\u7ecf\u5178\u6587\u5b66\u3002',
      f4_title: '\u957f\u6309\u7ffb\u8bd1',
      f4_desc: '\u957f\u6309\u6bb5\u843d\u5373\u65f6\u53cc\u8bed\u7ffb\u8bd1\uff0c\u65e0\u9700\u79bb\u5f00\u9875\u9762\u5373\u53ef\u7406\u89e3\u5168\u6587\u3002',
      f5_title: '\u8d26\u6237\u540c\u6b65',
      f5_desc: '\u4f7f\u7528Apple ID\u6216Google\u767b\u5f55\uff0c\u8de8\u8bbe\u5907\u540c\u6b65\u4e66\u5e93\u548c\u9605\u8bfb\u8fdb\u5ea6\u3002',
      f6_title: '\u591a\u7aef\u652f\u6301',
      f6_desc: '\u5728iOS\u3001Android\u548c\u7f51\u9875\u7aef\u65e0\u7f1d\u9605\u8bfb\uff0c\u4efb\u4f55\u8bbe\u5907\u90fd\u80fd\u63a5\u7eed\u4e0a\u6b21\u8fdb\u5ea6\u3002',
      cta_title: '\u7acb\u5373\u5f00\u59cb\u4f60\u7684\u82f1\u8bed\u9605\u8bfb\u4e4b\u65c5',
      cta_subtitle: '\u4e0b\u8f7dReadmigo\uff0c\u53d1\u73b0\u82f1\u8bed\u9605\u8bfb\u7684\u4e50\u8da3\u3002',
      cta_button: '免费开始使用',
      footer_tagline: '\u4e3a\u6bcf\u4e2a\u4eba\u6253\u9020\u7684AI\u82f1\u8bed\u9605\u8bfb\u5b66\u4e60\u5de5\u5177\u3002',
      footer_legal: '\u6cd5\u5f8b',
      footer_privacy: '\u9690\u79c1\u653f\u7b56',
      footer_terms: '\u670d\u52a1\u6761\u6b3e',
      footer_credits: '\u81f4\u8c22',
      footer_support: '\u652f\u6301',
      footer_help: '\u5e2e\u52a9\u4e2d\u5fc3',
      footer_delete: '\u5220\u9664\u8d26\u6237',
      footer_contact: '\u8054\u7cfb\u6211\u4eec',
      footer_language: '\u8bed\u8a00',
      footer_rights: '\u00a9 2025-2026 Readmigo. \u4fdd\u7559\u6240\u6709\u6743\u5229\u3002',
      footer_address: '42 Church Ave, Mascot, NSW 2020, Sydney, Australia',
      products_heading: '我们的产品',
      products_subtitle: '为提升你的阅读和学习体验而打造的工具与应用。',
      products_flagship: '旗舰',
      p1_desc: 'AI驱动的英语阅读应用，拥有10万+书籍、有声书和智能阅读辅助。',
      p1_cta: '获取应用',
      p2_desc: '现代三栏布局RSS阅读器，简洁有序地获取资讯。',
      p2_cta: '打开网页应用',
      p3_desc: '获取最新AI科技评测、洞察与深度分析。',
      nav_products: '产品',
      nav_features: '功能',
      nav_about: '关于',
      nav_get_started: '立即开始',
      footer_col_products: '产品',
      footer_col_company: '公司',
      footer_blog: '博客',
      about_title: '关于 Readmigo',
      about_subtitle: 'AI原生英语阅读平台，将经典文学转化为全球非英语母语者的无障碍学习体验。',
      about_mission_title: '我们的使命',
      about_mission_p1: '让数十亿非英语母语者能够轻松阅读和享受英语文学，借助智能AI辅助。',
      about_mission_p2: '我们相信优秀的书籍不应该被语言障碍所阻隔。我们的AI教练理解你的困难，并主动帮助你克服每一个障碍。',
      about_stat_books: '经典书籍',
      about_stat_audiobooks: '有声书',
      about_stat_languages: '种语言',
      about_stat_platforms: '个平台',
      about_story_title: '我们的故事',
      about_story_p1: '数百万人梦想着用原文阅读英语经典。但语言障碍让这个梦想变成了挫折。传统电子书阅读器在你遇到困难时无法提供帮助。',
      about_story_p2: 'Readmigo改变了一切。我们打造了全球首个专为非英语母语者设计的AI原生阅读平台。智能AI教练会主动监测你的阅读，在你遇到困难时精准提供上下文辅助。',
      about_story_p3: '从点按翻译到句子简化，从有声书到间隔重复的词汇学习，Readmigo让阅读从困难变为轻松。',
      about_cta_title: '准备好开始阅读了吗？',
      about_cta_subtitle: '加入全球读者，一起发现英语文学的乐趣。'
    },
    'zh-Hant': {
      htmlLang: 'zh-TW',
      title: 'Readmigo - AI\u9a45\u52d5\u7684\u82f1\u8a9e\u95b1\u8b80',
      description: '\u95b1\u8b80\u4efb\u4f55\u66f8\u7c4d\uff0cAI\u70ba\u4f60\u4fdd\u99d5\u8b77\u822a\u3002Readmigo\u662f\u4e00\u6b3eAI\u539f\u751f\u82f1\u8a9e\u95b1\u8b80\u5b78\u7fd2\u61c9\u7528\uff0c\u64c1\u670910\u842c+\u5716\u66f8\u3002',
      nav_support: '\u652f\u63f4',
      nav_download: '\u4e0b\u8f09',
      hero_title_1: '\u95b1\u8b80\u4efb\u4f55\u66f8\u7c4d\u3002',
      hero_title_2: 'AI\u70ba\u4f60\u4fdd\u99d5\u8b77\u822a\u3002',
      hero_subtitle: 'Readmigo\u662f\u4e00\u6b3e\u9762\u5411\u5168\u7403\u5b78\u7fd2\u8005\u7684AI\u539f\u751f\u82f1\u8a9e\u95b1\u8b80\u61c9\u7528\u3002\u5728\u667a\u6167AI\u8f14\u52a9\u4e0b\u95b1\u8b80\u7d93\u5178\u6587\u5b78\u3002',
      hero_appstore_label: '\u4e0b\u8f09\u65bc',
      hero_appstore_store: 'App Store',
      hero_gplay_label: '\u4e0b\u8f09\u65bc',
      hero_gplay_store: 'Google Play',
      hero_web_label: '線上使用',
      hero_web_store: '網頁版',
      features_heading_1: '\u638c\u63e1\u82f1\u8a9e\u95b1\u8b80\u6240\u9700\u7684',
      features_heading_2: '\u4e00\u5207\u529f\u80fd',
      f1_title: '10\u842c+\u5716\u66f8',
      f1_desc: '\u6d77\u91cf\u53e4\u9a30\u5821\u8a08\u756b\u66f8\u5eab\uff0c\u5f9e\u838e\u58eb\u6bd4\u4e9e\u5230\u73cd\u00b7\u5967\u65af\u6c40\u7684\u7d93\u5178\u4f5c\u54c1\u61c9\u6709\u76e1\u6709\u3002',
      f2_title: 'AI\u8a9e\u97f3\u6717\u8b80',
      f2_desc: 'AI\u81ea\u7136\u8a9e\u97f3\u6717\u8b80\u4efb\u610f\u66f8\u7c4d\uff0c\u89e3\u653e\u96d9\u624b\uff0c\u96a8\u6642\u96a8\u5730\u807d\u66f8\u3002',
      f3_title: '\u6709\u8072\u66f8',
      f3_desc: '\u66a2\u4eab2\u842c+\u4f86\u81eaLibriVox\u7684\u514d\u8cbb\u6709\u8072\u66f8\uff0c\u8046\u807d\u771f\u4eba\u6717\u8b80\u7d93\u5178\u6587\u5b78\u3002',
      f4_title: '\u9577\u6309\u7ffb\u8b6f',
      f4_desc: '\u9577\u6309\u6bb5\u843d\u5373\u6642\u96d9\u8a9e\u7ffb\u8b6f\uff0c\u7121\u9700\u96e2\u958b\u9801\u9762\u5373\u53ef\u7406\u89e3\u5168\u6587\u3002',
      f5_title: '\u5e33\u6236\u540c\u6b65',
      f5_desc: '\u4f7f\u7528Apple ID\u6216Google\u767b\u5165\uff0c\u8de8\u88dd\u7f6e\u540c\u6b65\u66f8\u5eab\u548c\u95b1\u8b80\u9032\u5ea6\u3002',
      f6_title: '\u591a\u7aef\u652f\u63f4',
      f6_desc: '\u5728iOS\u3001Android\u548c\u7db2\u9801\u7aef\u7121\u7e2b\u95b1\u8b80\uff0c\u4efb\u4f55\u88dd\u7f6e\u90fd\u80fd\u63a5\u7e8c\u4e0a\u6b21\u9032\u5ea6\u3002',
      cta_title: '\u7acb\u5373\u958b\u59cb\u4f60\u7684\u82f1\u8a9e\u95b1\u8b80\u4e4b\u65c5',
      cta_subtitle: '\u4e0b\u8f09Readmigo\uff0c\u767c\u73fe\u82f1\u8a9e\u95b1\u8b80\u7684\u6a02\u8da3\u3002',
      cta_button: '免費開始使用',
      footer_tagline: '\u70ba\u6bcf\u500b\u4eba\u6253\u9020\u7684AI\u82f1\u8a9e\u95b1\u8b80\u5b78\u7fd2\u5de5\u5177\u3002',
      footer_legal: '\u6cd5\u5f8b',
      footer_privacy: '\u96b1\u79c1\u6b0a\u653f\u7b56',
      footer_terms: '\u670d\u52d9\u689d\u6b3e',
      footer_credits: '\u81f4\u8b1d',
      footer_support: '\u652f\u63f4',
      footer_help: '\u5e6b\u52a9\u4e2d\u5fc3',
      footer_delete: '\u522a\u9664\u5e33\u6236',
      footer_contact: '\u806f\u7d61\u6211\u5011',
      footer_language: '\u8a9e\u8a00',
      footer_rights: '\u00a9 2025-2026 Readmigo. \u4fdd\u7559\u6240\u6709\u6b0a\u5229\u3002',
      footer_address: '42 Church Ave, Mascot, NSW 2020, Sydney, Australia',
      products_heading: '我們的產品',
      products_subtitle: '為提升你的閱讀和學習體驗而打造的工具與應用。',
      products_flagship: '旗艦',
      p1_desc: 'AI驅動的英語閱讀應用，擁有10萬+書籍、有聲書和智慧閱讀輔助。',
      p1_cta: '取得應用',
      p2_desc: '現代三欄布局RSS閱讀器，簡潔有序地獲取資訊。',
      p2_cta: '開啟網頁應用',
      p3_desc: '獲取最新AI科技評測、洞察與深度分析。',
      nav_products: '產品',
      nav_features: '功能',
      nav_about: '關於',
      nav_get_started: '立即開始',
      footer_col_products: '產品',
      footer_col_company: '公司',
      footer_blog: '部落格',
      about_title: '關於 Readmigo',
      about_subtitle: 'AI原生英語閱讀平台，將經典文學轉化為全球非英語母語者的無障礙學習體驗。',
      about_mission_title: '我們的使命',
      about_mission_p1: '讓數十億非英語母語者能夠輕鬆閱讀和享受英語文學，藉助智慧AI輔助。',
      about_mission_p2: '我們相信優秀的書籍不應該被語言障礙所阻隔。我們的AI教練理解你的困難，並主動幫助你克服每一個障礙。',
      about_stat_books: '經典書籍',
      about_stat_audiobooks: '有聲書',
      about_stat_languages: '種語言',
      about_stat_platforms: '個平台',
      about_story_title: '我們的故事',
      about_story_p1: '數百萬人夢想著用原文閱讀英語經典。但語言障礙讓這個夢想變成了挫折。傳統電子書閱讀器在你遇到困難時無法提供幫助。',
      about_story_p2: 'Readmigo改變了一切。我們打造了全球首個專為非英語母語者設計的AI原生閱讀平台。智慧AI教練會主動監測你的閱讀，在你遇到困難時精準提供上下文輔助。',
      about_story_p3: '從點按翻譯到句子簡化，從有聲書到間隔重複的詞彙學習，Readmigo讓閱讀從困難變為輕鬆。',
      about_cta_title: '準備好開始閱讀了嗎？',
      about_cta_subtitle: '加入全球讀者，一起發現英語文學的樂趣。'
    },
    es: { htmlLang:'es', title:'Readmigo - Lectura en ingl\u00e9s con IA', description:'Lee cualquier libro. La IA te respalda. Readmigo es una app nativa de IA para leer y aprender ingl\u00e9s con m\u00e1s de 100.000 libros.', nav_support:'Soporte', nav_download:'Descargar', hero_title_1:'Lee cualquier libro.', hero_title_2:'La IA te respalda.', hero_subtitle:'Readmigo es una app de lectura en ingl\u00e9s con IA nativa, dise\u00f1ada para estudiantes de todo el mundo. Lee literatura cl\u00e1sica con asistencia inteligente.', hero_appstore_label:'Desc\u00e1rgalo en', hero_appstore_store:'App Store', hero_gplay_label:'Disponible en', hero_gplay_store:'Google Play', hero_web_label:'Abrir en', hero_web_store:'Navegador', features_heading_1:'Todo lo que necesitas para ', features_heading_2:'dominar la lectura en ingl\u00e9s', f1_title:'100.000+ libros', f1_desc:'Gran colecci\u00f3n de Project Gutenberg, con cl\u00e1sicos de Shakespeare a Jane Austen.', f2_title:'Lectura en voz alta', f2_desc:'Escucha cualquier libro con voces naturales de IA. Convierte tu lectura en una experiencia manos libres.', f3_title:'Audiolibros', f3_desc:'Accede a m\u00e1s de 20.000 audiolibros gratuitos de LibriVox. Disfruta de la literatura cl\u00e1sica le\u00edda por narradores reales.', f4_title:'Traducci\u00f3n al mantener presionado', f4_desc:'Mant\u00e9n presionado cualquier p\u00e1rrafo para una traducci\u00f3n biling\u00fce instant\u00e1nea. Comprende el contexto sin salir de la p\u00e1gina.', f5_title:'Sincronizaci\u00f3n de cuenta', f5_desc:'Inicia sesi\u00f3n con Apple ID o Google para sincronizar tu biblioteca y progreso de lectura entre dispositivos.', f6_title:'Multidispositivo', f6_desc:'Lee sin interrupciones en iOS, Android y Web. Contin\u00faa justo donde lo dejaste en cualquier dispositivo.', cta_title:'Comienza tu viaje de lectura en ingl\u00e9s hoy', cta_subtitle:'Descarga Readmigo y descubre el placer de leer en ingl\u00e9s.', cta_button:'Comenzar gratis', footer_tagline:'Lectura y aprendizaje de ingl\u00e9s con IA para todos.', footer_legal:'Legal', footer_privacy:'Pol\u00edtica de privacidad', footer_terms:'T\u00e9rminos de servicio', footer_credits:'Cr\u00e9ditos', footer_support:'Soporte', footer_help:'Centro de ayuda', footer_delete:'Eliminar cuenta', footer_contact:'Cont\u00e1ctanos', footer_language:'Idioma', footer_rights:'\u00a9 2025-2026 Readmigo. Todos los derechos reservados.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nuestros Productos', products_subtitle:'Herramientas y apps dise\u00f1adas para mejorar tu experiencia de lectura y aprendizaje.', products_flagship:'Principal', p1_desc:'App de lectura en ingl\u00e9s con IA, con m\u00e1s de 100.000 libros, audiolibros y asistencia inteligente.', p1_cta:'Obtener la App', p2_desc:'Lector RSS moderno de tres columnas para mantenerte informado con feeds limpios y organizados.', p2_cta:'Abrir Web App', p3_desc:'Mant\u00e9nte al d\u00eda con las \u00faltimas rese\u00f1as, an\u00e1lisis y perspectivas de tecnolog\u00eda IA.', p3_cta:'Leer Art\u00edculos', nav_products:'Productos', nav_features:'Funciones', nav_about:'Acerca de', nav_get_started:'Comenzar', footer_col_products:'Productos', footer_col_company:'Empresa', footer_blog:'Blog', about_title:'Sobre Readmigo', about_subtitle:'La plataforma de lectura en inglés con IA nativa que transforma la literatura clásica en experiencias de aprendizaje accesibles.', about_mission_title:'Nuestra Misión', about_mission_p1:'Permitir que miles de millones de hablantes no nativos lean y disfruten la literatura inglesa con asistencia inteligente de IA.', about_mission_p2:'Creemos que los grandes libros no deberían estar bloqueados por barreras lingüísticas.', about_stat_books:'Libros Clásicos', about_stat_audiobooks:'Audiolibros', about_stat_languages:'Idiomas', about_stat_platforms:'Plataformas', about_story_title:'Nuestra Historia', about_story_p1:'Millones de personas sueñan con leer clásicos en inglés en su idioma original. Pero las barreras lingüísticas convierten este sueño en frustración.', about_story_p2:'Readmigo cambia todo. Hemos construido la primera plataforma de lectura con IA nativa diseñada específicamente para hablantes no nativos.', about_story_p3:'Desde traducción instantánea hasta simplificación de oraciones, Readmigo transforma la lectura de frustrante a fácil.', about_cta_title:'¿Listo para empezar a leer?', about_cta_subtitle:'Únete a lectores de todo el mundo.' },
    ar: { htmlLang:'ar', title:'Readmigo - \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a', description:'\u0627\u0642\u0631\u0623 \u0623\u064a \u0643\u062a\u0627\u0628. \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u064a\u062f\u0639\u0645\u0643. Readmigo \u062a\u0637\u0628\u064a\u0642 \u0623\u0635\u0644\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u062a\u0639\u0644\u0645 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0645\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 100,000 \u0643\u062a\u0627\u0628.', nav_support:'\u0627\u0644\u062f\u0639\u0645', nav_download:'\u062a\u062d\u0645\u064a\u0644', hero_title_1:'\u0627\u0642\u0631\u0623 \u0623\u064a \u0643\u062a\u0627\u0628.', hero_title_2:'\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u064a\u062f\u0639\u0645\u0643.', hero_subtitle:'Readmigo \u062a\u0637\u0628\u064a\u0642 \u0642\u0631\u0627\u0621\u0629 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0623\u0635\u0644\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0635\u0645\u0645 \u0644\u0644\u0645\u062a\u0639\u0644\u0645\u064a\u0646 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645. \u0627\u0642\u0631\u0623 \u0627\u0644\u0623\u062f\u0628 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a \u0628\u0645\u0633\u0627\u0639\u062f\u0629 \u0630\u0643\u064a\u0629.', hero_appstore_label:'\u062d\u0645\u0651\u0644\u0647 \u0645\u0646', hero_appstore_store:'App Store', hero_gplay_label:'\u0627\u062d\u0635\u0644 \u0639\u0644\u064a\u0647 \u0645\u0646', hero_gplay_store:'Google Play', hero_web_label:'فتح في', hero_web_store:'المتصفح', features_heading_1:'\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u0647 ', features_heading_2:'\u0644\u0625\u062a\u0642\u0627\u0646 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629', f1_title:'+100,000 \u0643\u062a\u0627\u0628', f1_desc:'\u0645\u062c\u0645\u0648\u0639\u0629 \u0636\u062e\u0645\u0629 \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 \u063a\u0648\u062a\u0646\u0628\u0631\u063a\u060c \u062a\u0634\u0645\u0644 \u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0627\u062a \u0645\u0646 \u0634\u0643\u0633\u0628\u064a\u0631 \u0625\u0644\u0649 \u062c\u064a\u0646 \u0623\u0648\u0633\u062a\u0646.', f2_title:'\u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0635\u0648\u062a \u0639\u0627\u0644\u064d', f2_desc:'\u0627\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0623\u064a \u0643\u062a\u0627\u0628 \u0628\u0623\u0635\u0648\u0627\u062a \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0637\u0628\u064a\u0639\u064a\u0629. \u062d\u0648\u0651\u0644 \u0642\u0631\u0627\u0621\u062a\u0643 \u0625\u0644\u0649 \u062a\u062c\u0631\u0628\u0629 \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u064a\u062f\u064a\u0646.', f3_title:'\u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0645\u0633\u0645\u0648\u0639\u0629', f3_desc:'\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0643\u062b\u0631 \u0645\u0646 20,000 \u0643\u062a\u0627\u0628 \u0645\u0633\u0645\u0648\u0639 \u0645\u062c\u0627\u0646\u064a \u0645\u0646 LibriVox. \u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0627\u0644\u0623\u062f\u0628 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a \u0628\u0623\u0635\u0648\u0627\u062a \u0631\u0648\u0627\u0629 \u062d\u0642\u064a\u0642\u064a\u064a\u0646.', f4_title:'\u062a\u0631\u062c\u0645\u0629 \u0628\u0627\u0644\u0636\u063a\u0637 \u0627\u0644\u0645\u0637\u0648\u0651\u0644', f4_desc:'\u0627\u0636\u063a\u0637 \u0645\u0637\u0648\u0644\u0627\u064b \u0639\u0644\u0649 \u0623\u064a \u0641\u0642\u0631\u0629 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u0631\u062c\u0645\u0629 \u062b\u0646\u0627\u0626\u064a\u0629 \u0627\u0644\u0644\u063a\u0629 \u0641\u0648\u0631\u064a\u0629. \u0627\u0641\u0647\u0645 \u0627\u0644\u0633\u064a\u0627\u0642 \u062f\u0648\u0646 \u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0635\u0641\u062d\u0629.', f5_title:'\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u062d\u0633\u0627\u0628', f5_desc:'\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0640 Apple ID \u0623\u0648 Google \u0644\u0645\u0632\u0627\u0645\u0646\u0629 \u0645\u0643\u062a\u0628\u062a\u0643 \u0648\u062a\u0642\u062f\u0645 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0639\u0628\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.', f6_title:'\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0623\u062c\u0647\u0632\u0629', f6_desc:'\u0627\u0642\u0631\u0623 \u0628\u0633\u0644\u0627\u0633\u0629 \u0639\u0644\u0649 iOS \u0648 Android \u0648\u0627\u0644\u0648\u064a\u0628. \u062a\u0627\u0628\u0639 \u0645\u0646 \u062d\u064a\u062b \u062a\u0648\u0642\u0641\u062a \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632.', cta_title:'\u0627\u0628\u062f\u0623 \u0631\u062d\u0644\u062a\u0643 \u0641\u064a \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0627\u0644\u064a\u0648\u0645', cta_subtitle:'\u062d\u0645\u0651\u0644 Readmigo \u0648\u0627\u0643\u062a\u0634\u0641 \u0645\u062a\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.', cta_button:'ابدأ مجاناً', footer_tagline:'\u0642\u0631\u0627\u0621\u0629 \u0648\u062a\u0639\u0644\u0645 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0644\u062c\u0645\u064a\u0639.', footer_legal:'\u0642\u0627\u0646\u0648\u0646\u064a', footer_privacy:'\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629', footer_terms:'\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629', footer_credits:'\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f\u0627\u062a', footer_support:'\u0627\u0644\u062f\u0639\u0645', footer_help:'\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629', footer_delete:'\u062d\u0630\u0641 \u0627\u0644\u062d\u0633\u0627\u0628', footer_contact:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', footer_language:'\u0627\u0644\u0644\u063a\u0629', footer_rights:'\u00a9 2025-2026 Readmigo. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u0645\u0646\u062a\u062c\u0627\u062a\u0646\u0627', products_subtitle:'\u0623\u062f\u0648\u0627\u062a \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u0635\u0645\u0645\u0629 \u0644\u062a\u0639\u0632\u064a\u0632 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0627\u0644\u062a\u0639\u0644\u0645.', products_flagship:'\u0627\u0644\u0631\u0626\u064a\u0633\u064a', p1_desc:'\u062a\u0637\u0628\u064a\u0642 \u0642\u0631\u0627\u0621\u0629 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 100,000 \u0643\u062a\u0627\u0628 \u0648\u0643\u062a\u0628 \u0645\u0633\u0645\u0648\u0639\u0629 \u0648\u0645\u0633\u0627\u0639\u062f\u0629 \u0630\u0643\u064a\u0629.', p1_cta:'احصل على التطبيق', p2_desc:'\u0642\u0627\u0631\u0626 RSS \u062d\u062f\u064a\u062b \u0628\u062b\u0644\u0627\u062b\u0629 \u0623\u0639\u0645\u062f\u0629 \u0644\u0644\u0628\u0642\u0627\u0621 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0645\u0639 \u062e\u0644\u0627\u0635\u0627\u062a \u0646\u0638\u064a\u0641\u0629 \u0648\u0645\u0646\u0638\u0645\u0629.', p2_cta:'\u0641\u062a\u062d \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0648\u064a\u0628', p3_desc:'\u0627\u0628\u0642\u064e \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0628\u0623\u062d\u062f\u062b \u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0648\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.', p3_cta:'\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a', nav_products:'المنتجات', nav_features:'الميزات', nav_about:'حول', nav_get_started:'ابدأ الآن', footer_col_products:'المنتجات', footer_col_company:'الشركة', footer_blog:'المدونة', about_title:'حول Readmigo', about_subtitle:'منصة القراءة بالإنجليزية الأصلية بالذكاء الاصطناعي.', about_mission_title:'مهمتنا', about_mission_p1:'تمكين مليارات الأشخاص من قراءة الأدب الإنجليزي بسهولة.', about_mission_p2:'نؤمن أن الكتب الرائعة لا يجب أن تكون محبوسة خلف حواجز اللغة.', about_stat_books:'كتب كلاسيكية', about_stat_audiobooks:'كتب مسموعة', about_stat_languages:'لغة', about_stat_platforms:'منصات', about_story_title:'قصتنا', about_story_p1:'يحلم الملايين بقراءة الكلاسيكيات بلغتها الأصلية.', about_story_p2:'Readmigo يغير كل شيء.', about_story_p3:'من الترجمة الفورية إلى بناء المفردات.', about_cta_title:'مستعد للبدء؟', about_cta_subtitle:'انضم إلى القراء حول العالم.' },
    pt: { htmlLang:'pt', title:'Readmigo - Leitura em ingl\u00eas com IA', description:'Leia qualquer livro. A IA est\u00e1 com voc\u00ea. Readmigo \u00e9 um app nativo de IA para ler e aprender ingl\u00eas com mais de 100.000 livros.', nav_support:'Suporte', nav_download:'Baixar', hero_title_1:'Leia qualquer livro.', hero_title_2:'A IA est\u00e1 com voc\u00ea.', hero_subtitle:'Readmigo \u00e9 um app de leitura em ingl\u00eas com IA nativa, projetado para estudantes do mundo todo. Leia literatura cl\u00e1ssica com assist\u00eancia inteligente.', hero_appstore_label:'Baixe na', hero_appstore_store:'App Store', hero_gplay_label:'Dispon\u00edvel no', hero_gplay_store:'Google Play', hero_web_label:'Abrir no', hero_web_store:'Navegador', features_heading_1:'Tudo que voc\u00ea precisa para ', features_heading_2:'dominar a leitura em ingl\u00eas', f1_title:'100.000+ livros', f1_desc:'Grande cole\u00e7\u00e3o do Project Gutenberg, incluindo cl\u00e1ssicos de Shakespeare a Jane Austen.', f2_title:'Leitura em voz alta', f2_desc:'Ou\u00e7a qualquer livro com vozes naturais de IA. Transforme sua leitura em uma experi\u00eancia sem as m\u00e3os.', f3_title:'Audiolivros', f3_desc:'Acesse mais de 20.000 audiolivros gratuitos do LibriVox. Aprecie literatura cl\u00e1ssica narrada por pessoas reais.', f4_title:'Tradu\u00e7\u00e3o ao pressionar', f4_desc:'Pressione qualquer par\u00e1grafo para tradu\u00e7\u00e3o bil\u00edngue instant\u00e2nea. Compreenda o contexto sem sair da p\u00e1gina.', f5_title:'Sincroniza\u00e7\u00e3o de conta', f5_desc:'Entre com Apple ID ou Google para sincronizar sua biblioteca e progresso de leitura entre dispositivos.', f6_title:'Multidispositivo', f6_desc:'Leia sem interrup\u00e7\u00f5es no iOS, Android e Web. Continue exatamente de onde parou em qualquer dispositivo.', cta_title:'Comece sua jornada de leitura em ingl\u00eas hoje', cta_subtitle:'Baixe o Readmigo e descubra o prazer de ler em ingl\u00eas.', cta_button:'Comece grátis', footer_tagline:'Leitura e aprendizado de ingl\u00eas com IA para todos.', footer_legal:'Jur\u00eddico', footer_privacy:'Pol\u00edtica de privacidade', footer_terms:'Termos de servi\u00e7o', footer_credits:'Cr\u00e9ditos', footer_support:'Suporte', footer_help:'Central de ajuda', footer_delete:'Excluir conta', footer_contact:'Fale conosco', footer_language:'Idioma', footer_rights:'\u00a9 2025-2026 Readmigo. Todos os direitos reservados.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nossos Produtos', products_subtitle:'Ferramentas e apps projetados para melhorar sua experi\u00eancia de leitura e aprendizado.', products_flagship:'Principal', p1_desc:'App de leitura em ingl\u00eas com IA, com mais de 100.000 livros, audiolivros e assist\u00eancia inteligente.', p1_cta:'Obter o App', p2_desc:'Leitor RSS moderno de tr\u00eas colunas para se manter informado com feeds limpos e organizados.', p2_cta:'Abrir Web App', p3_desc:'Fique atualizado com as \u00faltimas an\u00e1lises, insights e resenhas de tecnologia IA.', p3_cta:'Ler Artigos', nav_products:'Produtos', nav_features:'Recursos', nav_about:'Sobre', nav_get_started:'Comece Agora', footer_col_products:'Produtos', footer_col_company:'Empresa', footer_blog:'Blog', about_title:'Sobre o Readmigo', about_subtitle:'A plataforma de leitura em inglês com IA nativa que transforma a literatura clássica em experiências acessíveis.', about_mission_title:'Nossa Missão', about_mission_p1:'Permitir que bilhões de falantes não nativos leiam e apreciem a literatura inglesa com assistência inteligente.', about_mission_p2:'Acreditamos que grandes livros não devem ser bloqueados por barreiras linguísticas.', about_stat_books:'Livros Clássicos', about_stat_audiobooks:'Audiolivros', about_stat_languages:'Idiomas', about_stat_platforms:'Plataformas', about_story_title:'Nossa História', about_story_p1:'Milhões sonham em ler clássicos em inglês. Mas as barreiras linguísticas transformam esse sonho em frustração.', about_story_p2:'O Readmigo muda tudo. Construímos a primeira plataforma de leitura com IA nativa para falantes não nativos.', about_story_p3:'Da tradução instantânea à construção de vocabulário, o Readmigo transforma a leitura.', about_cta_title:'Pronto para começar a ler?', about_cta_subtitle:'Junte-se a leitores do mundo todo.' },
    id: { htmlLang:'id', title:'Readmigo - Membaca Bahasa Inggris dengan AI', description:'Baca buku apa saja. AI mendukungmu. Readmigo adalah aplikasi membaca dan belajar bahasa Inggris berbasis AI dengan 100.000+ buku.', nav_support:'Bantuan', nav_download:'Unduh', hero_title_1:'Baca buku apa saja.', hero_title_2:'AI mendukungmu.', hero_subtitle:'Readmigo adalah aplikasi membaca bahasa Inggris berbasis AI yang dirancang untuk pelajar di seluruh dunia. Baca sastra klasik dengan bantuan AI cerdas.', hero_appstore_label:'Unduh di', hero_appstore_store:'App Store', hero_gplay_label:'Dapatkan di', hero_gplay_store:'Google Play', hero_web_label:'Buka di', hero_web_store:'Browser', features_heading_1:'Semua yang kamu butuhkan untuk ', features_heading_2:'menguasai membaca bahasa Inggris', f1_title:'100.000+ Buku', f1_desc:'Koleksi besar dari Project Gutenberg, termasuk karya klasik dari Shakespeare hingga Jane Austen.', f2_title:'Baca dengan Suara', f2_desc:'Dengarkan buku apa saja dengan suara AI alami. Ubah bacaanmu menjadi pengalaman hands-free.', f3_title:'Buku Audio', f3_desc:'Akses 20.000+ buku audio gratis dari LibriVox. Nikmati sastra klasik yang dibacakan oleh narator nyata.', f4_title:'Terjemahan Tekan Lama', f4_desc:'Tekan lama paragraf mana saja untuk terjemahan bilingual instan. Pahami konteks tanpa meninggalkan halaman.', f5_title:'Sinkronisasi Akun', f5_desc:'Masuk dengan Apple ID atau Google untuk menyinkronkan perpustakaan dan progres bacaanmu di semua perangkat.', f6_title:'Multi-Perangkat', f6_desc:'Baca dengan lancar di iOS, Android, dan Web. Lanjutkan tepat di mana kamu berhenti di perangkat mana saja.', cta_title:'Mulai perjalanan membaca bahasa Inggrismu hari ini', cta_subtitle:'Unduh Readmigo dan temukan kesenangan membaca dalam bahasa Inggris.', cta_button:'Mulai Gratis', footer_tagline:'Membaca dan belajar bahasa Inggris dengan AI untuk semua orang.', footer_legal:'Hukum', footer_privacy:'Kebijakan Privasi', footer_terms:'Ketentuan Layanan', footer_credits:'Kredit', footer_support:'Bantuan', footer_help:'Pusat Bantuan', footer_delete:'Hapus Akun', footer_contact:'Hubungi Kami', footer_language:'Bahasa', footer_rights:'\u00a9 2025-2026 Readmigo. Semua hak dilindungi.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Produk Kami', products_subtitle:'Alat dan aplikasi yang dirancang untuk meningkatkan pengalaman membaca dan belajarmu.', products_flagship:'Unggulan', p1_desc:'Aplikasi membaca bahasa Inggris bertenaga AI dengan 100.000+ buku, buku audio, dan bantuan membaca cerdas.', p1_cta:'Dapatkan Aplikasi', p2_desc:'Pembaca RSS modern tiga kolom untuk tetap terinformasi dengan feed yang bersih dan terorganisir.', p2_cta:'Buka Web App', p3_desc:'Tetap update dengan ulasan, wawasan, dan analisis teknologi AI terbaru.', p3_cta:'Baca Artikel', nav_products:'Produk', nav_features:'Fitur', nav_about:'Tentang', nav_get_started:'Mulai Sekarang', footer_col_products:'Produk', footer_col_company:'Perusahaan', footer_blog:'Blog', about_title:'Tentang Readmigo', about_subtitle:'Platform membaca bahasa Inggris berbasis AI yang mengubah sastra klasik menjadi pengalaman belajar yang mudah diakses.', about_mission_title:'Misi Kami', about_mission_p1:'Memungkinkan miliaran penutur non-native membaca dan menikmati sastra Inggris dengan bantuan AI cerdas.', about_mission_p2:'Kami percaya buku hebat tidak boleh terkunci di balik hambatan bahasa.', about_stat_books:'Buku Klasik', about_stat_audiobooks:'Buku Audio', about_stat_languages:'Bahasa', about_stat_platforms:'Platform', about_story_title:'Cerita Kami', about_story_p1:'Jutaan orang bermimpi membaca klasik Inggris dalam bahasa aslinya.', about_story_p2:'Readmigo mengubah segalanya.', about_story_p3:'Dari terjemahan instan hingga pembangunan kosakata, Readmigo mengubah membaca menjadi mudah.', about_cta_title:'Siap mulai membaca?', about_cta_subtitle:'Bergabunglah dengan pembaca di seluruh dunia.' },
    fr: { htmlLang:'fr', title:'Readmigo - Lecture en anglais par IA', description:"Lisez n'importe quel livre. L'IA vous accompagne. Readmigo est une app native IA pour lire et apprendre l'anglais avec plus de 100 000 livres.", nav_support:'Assistance', nav_download:'T\u00e9l\u00e9charger', hero_title_1:"Lisez n'importe quel livre.", hero_title_2:"L'IA vous accompagne.", hero_subtitle:"Readmigo est une app de lecture en anglais par IA con\u00e7ue pour les apprenants du monde entier. Lisez la litt\u00e9rature classique avec une assistance intelligente.", hero_appstore_label:'T\u00e9l\u00e9charger sur', hero_appstore_store:"l'App Store", hero_gplay_label:'Disponible sur', hero_gplay_store:'Google Play', hero_web_label:'Ouvrir dans le', hero_web_store:'Navigateur', features_heading_1:"Tout ce qu'il faut pour ", features_heading_2:"ma\u00eetriser la lecture en anglais", f1_title:'100 000+ livres', f1_desc:"Vaste collection du Projet Gutenberg, comprenant des classiques de Shakespeare \u00e0 Jane Austen.", f2_title:'Lecture \u00e0 voix haute', f2_desc:"\u00c9coutez n'importe quel livre avec des voix IA naturelles. Transformez votre lecture en exp\u00e9rience mains libres.", f3_title:'Livres audio', f3_desc:"Acc\u00e9dez \u00e0 plus de 20 000 livres audio gratuits de LibriVox. Profitez de la litt\u00e9rature classique lue par de vrais narrateurs.", f4_title:'Traduction par appui long', f4_desc:"Appuyez longuement sur un paragraphe pour une traduction bilingue instantan\u00e9e. Comprenez le contexte sans quitter la page.", f5_title:'Synchronisation du compte', f5_desc:"Connectez-vous avec Apple ID ou Google pour synchroniser votre biblioth\u00e8que et votre progression entre appareils.", f6_title:'Multi-appareils', f6_desc:"Lisez sans interruption sur iOS, Android et le Web. Reprenez l\u00e0 o\u00f9 vous vous \u00eates arr\u00eat\u00e9 sur n'importe quel appareil.", cta_title:"Commencez votre aventure de lecture en anglais aujourd'hui", cta_subtitle:"T\u00e9l\u00e9chargez Readmigo et d\u00e9couvrez le plaisir de lire en anglais.", cta_button:'Commencer gratuitement', footer_tagline:"Lecture et apprentissage de l'anglais par IA pour tous.", footer_legal:'Mentions l\u00e9gales', footer_privacy:'Politique de confidentialit\u00e9', footer_terms:"Conditions d'utilisation", footer_credits:'Cr\u00e9dits', footer_support:'Assistance', footer_help:"Centre d'aide", footer_delete:'Supprimer le compte', footer_contact:'Nous contacter', footer_language:'Langue', footer_rights:'\u00a9 2025-2026 Readmigo. Tous droits r\u00e9serv\u00e9s.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nos Produits', products_subtitle:'Outils et applications con\u00e7us pour am\u00e9liorer votre exp\u00e9rience de lecture et d\'apprentissage.', products_flagship:'Phare', p1_desc:'App de lecture en anglais par IA avec plus de 100 000 livres, livres audio et assistance intelligente.', p1_cta:'Obtenir l'App'App Web', p2_desc:'Lecteur RSS moderne \u00e0 trois colonnes pour rester inform\u00e9 avec des flux propres et organis\u00e9s.', p2_cta:'Ouvrir l\'App Web', p3_desc:'Restez \u00e0 jour avec les derni\u00e8res analyses, critiques et perspectives sur les technologies IA.', p3_cta:'Lire les Articles', nav_products:'Produits', nav_features:'Fonctionnalités', nav_about:'À propos', nav_get_started:'Commencer', footer_col_products:'Produits', footer_col_company:'Entreprise', footer_blog:'Blog', about_title:'À propos de Readmigo', about_subtitle:'La plateforme de lecture en anglais par IA native qui transforme la littérature classique en expériences accessibles.', about_mission_title:'Notre Mission', about_mission_p1:'Permettre à des milliards de locuteurs non natifs de lire la littérature anglaise avec une assistance IA intelligente.', about_mission_p2:'Nous croyons que les grands livres ne devraient pas être bloqués par des barrières linguistiques.', about_stat_books:'Livres Classiques', about_stat_audiobooks:'Livres Audio', about_stat_languages:'Langues', about_stat_platforms:'Plateformes', about_story_title:'Notre Histoire', about_story_p1:'Des millions de personnes rêvent de lire les classiques anglais dans leur langue originale.', about_story_p2:'Readmigo change tout.', about_story_p3:'De la traduction instantanée à la construction de vocabulaire, Readmigo transforme la lecture.', about_cta_title:'Prêt à commencer à lire ?', about_cta_subtitle:'Rejoignez des lecteurs du monde entier.' },
    ja: { htmlLang:'ja', title:'Readmigo - AI\u642d\u8f09\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0', description:'\u3069\u3093\u306a\u672c\u3067\u3082\u8aad\u3081\u307e\u3059\u3002AI\u304c\u3042\u306a\u305f\u3092\u30b5\u30dd\u30fc\u30c8\u3002Readmigo\u306f10\u4e07\u518a\u4ee5\u4e0a\u306e\u66f8\u7c4d\u3092\u5099\u3048\u305fAI\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u5b66\u7fd2\u30a2\u30d7\u30ea\u3067\u3059\u3002', nav_support:'\u30b5\u30dd\u30fc\u30c8', nav_download:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_title_1:'\u3069\u3093\u306a\u672c\u3067\u3082\u8aad\u3081\u308b\u3002', hero_title_2:'AI\u304c\u3042\u306a\u305f\u3092\u30b5\u30dd\u30fc\u30c8\u3002', hero_subtitle:'Readmigo\u306f\u4e16\u754c\u4e2d\u306e\u5b66\u7fd2\u8005\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305fAI\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30d7\u30ea\u3067\u3059\u3002\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u306aAI\u30a2\u30b7\u30b9\u30bf\u30f3\u30b9\u3067\u53e4\u5178\u6587\u5b66\u3092\u8aad\u307f\u307e\u3057\u3087\u3046\u3002', hero_appstore_label:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_appstore_store:'App Store', hero_gplay_label:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_gplay_store:'Google Play', hero_web_label:'ブラウザで', hero_web_store:'開く', features_heading_1:'\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u30de\u30b9\u30bf\u30fc\u3059\u308b\u305f\u3081\u306e', features_heading_2:'\u3059\u3079\u3066\u304c\u63c3\u3063\u3066\u3044\u307e\u3059', f1_title:'10\u4e07\u518a\u4ee5\u4e0a', f1_desc:'\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30b0\u30fc\u30c6\u30f3\u30d9\u30eb\u30af\u306e\u81a8\u5927\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002\u30b7\u30a7\u30a4\u30af\u30b9\u30d4\u30a2\u304b\u3089\u30b8\u30a7\u30fc\u30f3\u30fb\u30aa\u30fc\u30b9\u30c6\u30a3\u30f3\u307e\u3067\u306e\u540d\u4f5c\u304c\u63c3\u3063\u3066\u3044\u307e\u3059\u3002', f2_title:'AI\u97f3\u58f0\u8aad\u307f\u4e0a\u3052', f2_desc:'\u81ea\u7136\u306aAI\u97f3\u58f0\u3067\u3069\u3093\u306a\u672c\u3067\u3082\u8074\u3051\u307e\u3059\u3002\u30cf\u30f3\u30ba\u30d5\u30ea\u30fc\u3067\u8aad\u66f8\u3092\u697d\u3057\u3081\u307e\u3059\u3002', f3_title:'\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af', f3_desc:'LibriVox\u306e2\u4e07\u518a\u4ee5\u4e0a\u306e\u7121\u6599\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3002\u672c\u7269\u306e\u30ca\u30ec\u30fc\u30bf\u30fc\u306b\u3088\u308b\u53e4\u5178\u6587\u5b66\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002', f4_title:'\u9577\u62bc\u3057\u7ffb\u8a33', f4_desc:'\u6bb5\u843d\u3092\u9577\u62bc\u3057\u3059\u308b\u3060\u3051\u3067\u5373\u5ea7\u306b\u30d0\u30a4\u30ea\u30f3\u30ac\u30eb\u7ffb\u8a33\u3002\u30da\u30fc\u30b8\u3092\u96e2\u308c\u305a\u306b\u6587\u8108\u3092\u7406\u89e3\u3067\u304d\u307e\u3059\u3002', f5_title:'\u30a2\u30ab\u30a6\u30f3\u30c8\u540c\u671f', f5_desc:'Apple ID\u307e\u305f\u306fGoogle\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3001\u30c7\u30d0\u30a4\u30b9\u9593\u3067\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u8aad\u66f8\u9032\u6357\u3092\u540c\u671f\u3002', f6_title:'\u30de\u30eb\u30c1\u30c7\u30d0\u30a4\u30b9', f6_desc:'iOS\u3001Android\u3001Web\u3067\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u8aad\u66f8\u3002\u3069\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u3082\u4e2d\u65ad\u3057\u305f\u3068\u3053\u308d\u304b\u3089\u518d\u958b\u3067\u304d\u307e\u3059\u3002', cta_title:'\u4eca\u65e5\u304b\u3089\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u65c5\u3092\u59cb\u3081\u307e\u3057\u3087\u3046', cta_subtitle:'Readmigo\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u3001\u82f1\u8a9e\u3067\u8aad\u3080\u697d\u3057\u3055\u3092\u767a\u898b\u3057\u307e\u3057\u3087\u3046\u3002', cta_button:'無料で始める', footer_tagline:'\u3059\u3079\u3066\u306e\u4eba\u306e\u305f\u3081\u306eAI\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\uff06\u5b66\u7fd2\u3002', footer_legal:'\u6cd5\u7684\u60c5\u5831', footer_privacy:'\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc', footer_terms:'\u5229\u7528\u898f\u7d04', footer_credits:'\u30af\u30ec\u30b8\u30c3\u30c8', footer_support:'\u30b5\u30dd\u30fc\u30c8', footer_help:'\u30d8\u30eb\u30d7\u30bb\u30f3\u30bf\u30fc', footer_delete:'\u30a2\u30ab\u30a6\u30f3\u30c8\u524a\u9664', footer_contact:'\u304a\u554f\u3044\u5408\u308f\u305b', footer_language:'\u8a00\u8a9e', footer_rights:'\u00a9 2025-2026 Readmigo. All rights reserved.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u88fd\u54c1\u30e9\u30a4\u30f3\u30ca\u30c3\u30d7', products_subtitle:'\u8aad\u66f8\u3068\u5b66\u7fd2\u4f53\u9a13\u3092\u5411\u4e0a\u3055\u305b\u308b\u30c4\u30fc\u30eb\u3068\u30a2\u30d7\u30ea\u3002', products_flagship:'\u30d5\u30e9\u30c3\u30b0\u30b7\u30c3\u30d7', p1_desc:'10\u4e07\u518a\u4ee5\u4e0a\u306e\u66f8\u7c4d\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af\u3001\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u8aad\u66f8\u652f\u63f4\u3092\u5099\u3048\u305fAI\u642d\u8f09\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30d7\u30ea\u3002', p1_cta:'アプリを入手', p2_desc:'\u6574\u7406\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c9\u3067\u60c5\u5831\u3092\u628a\u63e1\u3067\u304d\u308b\u30e2\u30c0\u30f3\u306a3\u30ab\u30e9\u30e0RSS\u30ea\u30fc\u30c0\u30fc\u3002', p2_cta:'Web\u30a2\u30d7\u30ea\u3092\u958b\u304f', p3_desc:'\u6700\u65b0\u306eAI\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u30ec\u30d3\u30e5\u30fc\u3001\u30a4\u30f3\u30b5\u30a4\u30c8\u3001\u5206\u6790\u3092\u30c1\u30a7\u30c3\u30af\u3002', p3_cta:'\u8a18\u4e8b\u3092\u8aad\u3080', nav_products:'製品', nav_features:'機能', nav_about:'概要', nav_get_started:'始める', footer_col_products:'製品', footer_col_company:'会社', footer_blog:'ブログ', about_title:'Readmigoについて', about_subtitle:'AIネイティブの英語読書プラットフォーム。古典文学をアクセシブルな学習体験に。', about_mission_title:'私たちのミッション', about_mission_p1:'数十億の非英語話者がAIの支援で英文学を楽しめるように。', about_mission_p2:'素晴らしい本が言語の壁に阻まれるべきではありません。', about_stat_books:'古典書籍', about_stat_audiobooks:'オーディオブック', about_stat_languages:'言語', about_stat_platforms:'プラットフォーム', about_story_title:'私たちのストーリー', about_story_p1:'数百万人が英語の古典を原文で読むことを夢見ています。', about_story_p2:'Readmigoがすべてを変えます。', about_story_p3:'タップ翻訳から語彙構築まで、読書を簡単に。', about_cta_title:'読書を始める準備はできましたか？', about_cta_subtitle:'世界中の読者と一緒に。' },
    ru: { htmlLang:'ru', title:'Readmigo - \u0427\u0442\u0435\u043d\u0438\u0435 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441 \u0418\u0418', description:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443. \u0418\u0418 \u0432\u0430\u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442. Readmigo \u2014 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0418\u0418-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0441 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 100 000 \u043a\u043d\u0438\u0433.', nav_support:'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', nav_download:'\u0421\u043a\u0430\u0447\u0430\u0442\u044c', hero_title_1:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443.', hero_title_2:'\u0418\u0418 \u0432\u0430\u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442.', hero_subtitle:'Readmigo \u2014 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0418\u0418-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0435 \u0434\u043b\u044f \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044f \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443. \u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443 \u0441 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0418\u0418.', hero_appstore_label:'\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432', hero_appstore_store:'App Store', hero_gplay_label:'\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432', hero_gplay_store:'Google Play', hero_web_label:'Открыть в', hero_web_store:'Браузере', features_heading_1:'\u0412\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f ', features_heading_2:'\u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c', f1_title:'100 000+ \u043a\u043d\u0438\u0433', f1_desc:'\u041e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u00ab\u0413\u0443\u0442\u0435\u043d\u0431\u0435\u0440\u0433\u00bb, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443 \u043e\u0442 \u0428\u0435\u043a\u0441\u043f\u0438\u0440\u0430 \u0434\u043e \u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d.', f2_title:'\u0427\u0442\u0435\u043d\u0438\u0435 \u0432\u0441\u043b\u0443\u0445', f2_desc:'\u0421\u043b\u0443\u0448\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0441 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u0433\u043e\u043b\u043e\u0441\u0430\u043c\u0438 \u0418\u0418. \u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u0435 \u0447\u0442\u0435\u043d\u0438\u0435 \u0432 \u043e\u043f\u044b\u0442 \u0431\u0435\u0437 \u0440\u0443\u043a.', f3_title:'\u0410\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433\u0438', f3_desc:'\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 20 000 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0430\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433 \u0438\u0437 LibriVox. \u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u043e\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0447\u0442\u0435\u0446\u043e\u0432.', f4_title:'\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0434\u043e\u043b\u0433\u0438\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c', f4_desc:'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0430\u0431\u0437\u0430\u0446 \u0434\u043b\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u0432\u0443\u044f\u0437\u044b\u0447\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430. \u041f\u043e\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.', f5_title:'\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430', f5_desc:'\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 Apple ID \u0438\u043b\u0438 Google \u0434\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438.', f6_title:'\u041c\u0443\u043b\u044c\u0442\u0438\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e', f6_desc:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u043e\u0432 \u043d\u0430 iOS, Android \u0438 \u0432 \u0432\u0435\u0431\u0435. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u0441 \u0442\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430, \u0433\u0434\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c, \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.', cta_title:'\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u0447\u0442\u0435\u043d\u0438\u0438 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441\u0435\u0433\u043e\u0434\u043d\u044f', cta_subtitle:'\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 Readmigo \u0438 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0440\u0430\u0434\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c.', cta_button:'Начать бесплатно', footer_tagline:'\u0427\u0442\u0435\u043d\u0438\u0435 \u0438 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0441 \u0418\u0418 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e.', footer_legal:'\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f', footer_privacy:'\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438', footer_terms:'\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f', footer_credits:'\u0410\u0432\u0442\u043e\u0440\u044b', footer_support:'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', footer_help:'\u0426\u0435\u043d\u0442\u0440 \u043f\u043e\u043c\u043e\u0449\u0438', footer_delete:'\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442', footer_contact:'\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438', footer_language:'\u042f\u0437\u044b\u043a', footer_rights:'\u00a9 2025-2026 Readmigo. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u041d\u0430\u0448\u0438 \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b', products_subtitle:'\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.', products_flagship:'\u0424\u043b\u0430\u0433\u043c\u0430\u043d', p1_desc:'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441 \u0418\u0418: \u0431\u043e\u043b\u0435\u0435 100 000 \u043a\u043d\u0438\u0433, \u0430\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433\u0438 \u0438 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c.', p1_cta:'Скачать', p2_desc:'\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0451\u0445\u043a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0439 RSS-\u0440\u0438\u0434\u0435\u0440 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439.', p2_cta:'\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435', p3_desc:'\u0411\u0443\u0434\u044c\u0442\u0435 \u0432 \u043a\u0443\u0440\u0441\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043e\u0431\u0437\u043e\u0440\u043e\u0432, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u0438\u043d\u0441\u0430\u0439\u0442\u043e\u0432 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0418\u0418-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439.', p3_cta:'\u0427\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438', nav_products:'Продукты', nav_features:'Функции', nav_about:'О нас', nav_get_started:'Начать', footer_col_products:'Продукты', footer_col_company:'Компания', footer_blog:'Блог', about_title:'О Readmigo', about_subtitle:'AI-платформа для чтения на английском.', about_mission_title:'Наша Миссия', about_mission_p1:'Помочь миллиардам людей читать английскую литературу с помощью AI.', about_mission_p2:'Великие книги не должны быть заперты за языковым барьером.', about_stat_books:'Классических книг', about_stat_audiobooks:'Аудиокниг', about_stat_languages:'Языков', about_stat_platforms:'Платформы', about_story_title:'Наша История', about_story_p1:'Миллионы мечтают читать классику в оригинале.', about_story_p2:'Readmigo меняет всё.', about_story_p3:'От мгновенного перевода до изучения слов.', about_cta_title:'Готовы начать читать?', about_cta_subtitle:'Присоединяйтесь к читателям по всему миру.' },
    ko: { htmlLang:'ko', title:'Readmigo - AI \uae30\ubc18 \uc601\uc5b4 \uc77d\uae30', description:'\uc5b4\ub5a4 \ucc45\uc774\ub4e0 \uc77d\uc73c\uc138\uc694. AI\uac00 \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4. Readmigo\ub294 100,000\uad8c \uc774\uc0c1\uc758 \ub3c4\uc11c\ub97c \uac16\ucda4 AI \ub124\uc774\ud2f0\ube0c \uc601\uc5b4 \uc77d\uae30 \ud559\uc2b5 \uc571\uc785\ub2c8\ub2e4.', nav_support:'\uc9c0\uc6d0', nav_download:'\ub2e4\uc6b4\ub85c\ub4dc', hero_title_1:'\uc5b4\ub5a4 \ucc45\uc774\ub4e0 \uc77d\uc73c\uc138\uc694.', hero_title_2:'AI\uac00 \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4.', hero_subtitle:'Readmigo\ub294 \uc804 \uc138\uacc4 \ud559\uc2b5\uc790\ub97c \uc704\ud574 \uc124\uacc4\ub41c AI \ub124\uc774\ud2f0\ube0c \uc601\uc5b4 \uc77d\uae30 \uc571\uc785\ub2c8\ub2e4. \uc9c0\ub2a5\ud615 AI \uc9c0\uc6d0\uc73c\ub85c \uace0\uc804 \ubb38\ud559\uc744 \uc77d\uc5b4\ubcf4\uc138\uc694.', hero_appstore_label:'\ub2e4\uc6b4\ub85c\ub4dc', hero_appstore_store:'App Store', hero_gplay_label:'\ub2e4\uc6b4\ub85c\ub4dc', hero_gplay_store:'Google Play', hero_web_label:'브라우저에서', hero_web_store:'열기', features_heading_1:'\uc601\uc5b4 \uc77d\uae30\ub97c \ub9c8\uc2a4\ud130\ud558\ub294 \ub370 \ud544\uc694\ud55c ', features_heading_2:'\ubaa8\ub4e0 \uac83', f1_title:'100,000\uad8c \uc774\uc0c1', f1_desc:'\uc168\uc775\uc2a4\ud53c\uc5b4\ubd80\ud130 \uc81c\uc778 \uc624\uc2a4\ud2f4\uae4c\uc9c0, \ud504\ub85c\uc81d\ud2b8 \uad6c\ud150\ubca0\ub974\ud06c\uc758 \ubc29\ub300\ud55c \ucee8\ub809\uc158.', f2_title:'AI \uc74c\uc131 \uc77d\uae30', f2_desc:'\uc790\uc5f0\uc2a4\ub7ec\uc6b4 AI \uc74c\uc131\uc73c\ub85c \uc5b4\ub5a4 \ucc45\uc774\ub4e0 \ub4e4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud578\uc988\ud504\ub9ac \uc77d\uae30 \uacbd\ud5d8\uc744 \uc990\uae30\uc138\uc694.', f3_title:'\uc624\ub514\uc624\ubd81', f3_desc:'LibriVox\uc758 20,000\uad8c \uc774\uc0c1 \ubb34\ub8cc \uc624\ub514\uc624\ubd81\uc5d0 \uc811\uadfc\ud558\uc138\uc694. \uc2e4\uc81c \ub0b4\ub808\uc774\ud130\uac00 \uc77d\uc5b4\uc8fc\ub294 \uace0\uc804 \ubb38\ud559\uc744 \uc990\uae30\uc138\uc694.', f4_title:'\uae38\uac8c \ub20c\ub7ec \ubc88\uc5ed', f4_desc:'\ub2e8\ub77d\uc744 \uae38\uac8c \ub204\ub974\uba74 \uc989\uc2dc \uc774\uc911 \uc5b8\uc5b4 \ubc88\uc5ed\uc774 \ub429\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \ub5a0\ub098\uc9c0 \uc54a\uace0 \ub9e5\ub77d\uc744 \uc774\ud574\ud558\uc138\uc694.', f5_title:'\uacc4\uc815 \ub3d9\uae30\ud654', f5_desc:'Apple ID \ub610\ub294 Google\ub85c \ub85c\uadf8\uc778\ud558\uc5ec \uae30\uae30 \uac04 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc77d\uae30 \uc9c4\ud589 \uc0c1\ud669\uc744 \ub3d9\uae30\ud654\ud558\uc138\uc694.', f6_title:'\uba40\ud2f0 \ub514\ubc14\uc774\uc2a4', f6_desc:'iOS, Android, \uc6f9\uc5d0\uc11c \ub04a\uae40 \uc5c6\uc774 \uc77d\uc73c\uc138\uc694. \uc5b4\ub5a4 \uae30\uae30\uc5d0\uc11c\ub4e0 \uc911\ub2e8\ud55c \uacf3\uc5d0\uc11c \ubc14\ub85c \uc774\uc5b4\uc11c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.', cta_title:'\uc624\ub298 \uc601\uc5b4 \uc77d\uae30 \uc5ec\uc815\uc744 \uc2dc\uc791\ud558\uc138\uc694', cta_subtitle:'Readmigo\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc601\uc5b4\ub85c \uc77d\ub294 \uc990\uac70\uc6c0\uc744 \ubc1c\uacac\ud558\uc138\uc694.', cta_button:'무료로 시작', footer_tagline:'\ubaa8\ub450\ub97c \uc704\ud55c AI \uc601\uc5b4 \uc77d\uae30 \ubc0f \ud559\uc2b5.', footer_legal:'\ubc95\uc801 \uc815\ubcf4', footer_privacy:'\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68', footer_terms:'\uc774\uc6a9\uc57d\uad00', footer_credits:'\ud06c\ub808\ub51f', footer_support:'\uc9c0\uc6d0', footer_help:'\ub3c4\uc6c0\ub9d0 \uc13c\ud130', footer_delete:'\uacc4\uc815 \uc0ad\uc81c', footer_contact:'\ubb38\uc758\ud558\uae30', footer_language:'\uc5b8\uc5b4', footer_rights:'\u00a9 2025-2026 Readmigo. All rights reserved.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\uc6b0\ub9ac\uc758 \uc81c\ud488', products_subtitle:'\uc77d\uae30\uc640 \ud559\uc2b5 \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 \uc124\uacc4\ub41c \ub3c4\uad6c\uc640 \uc571.', products_flagship:'\ud50c\ub798\uadf8\uc2ed', p1_desc:'100,000\uad8c \uc774\uc0c1\uc758 \ub3c4\uc11c, \uc624\ub514\uc624\ubd81, \uc9c0\ub2a5\ud615 \uc77d\uae30 \uc9c0\uc6d0\uc744 \uac16\ucda4 AI \uae30\ubc18 \uc601\uc5b4 \uc77d\uae30 \uc571.', p1_cta:'앱 다운로드', p2_desc:'\uae54\ub054\ud558\uace0 \uc815\ub9ac\ub41c \ud53c\ub4dc\ub85c \uc815\ubcf4\ub97c \ud30c\uc545\ud560 \uc218 \uc788\ub294 \ud604\ub300\uc801\uc778 3\ub2e8 RSS \ub9ac\ub354.', p2_cta:'\uc6f9 \uc571 \uc5f4\uae30', p3_desc:'\ucd5c\uc2e0 AI \uae30\uc220 \ub9ac\ubdf0, \uc778\uc0ac\uc774\ud2b8 \ubc0f \ubd84\uc11d\uc744 \ud655\uc778\ud558\uc138\uc694.', p3_cta:'\uae30\uc0ac \uc77d\uae30', nav_products:'제품', nav_features:'기능', nav_about:'소개', nav_get_started:'시작하기', footer_col_products:'제품', footer_col_company:'회사', footer_blog:'블로그', about_title:'Readmigo 소개', about_subtitle:'AI 네이티브 영어 독서 플랫폼.', about_mission_title:'우리의 미션', about_mission_p1:'수십억 비원어민 화자가 AI로 영문학을 즐길 수 있도록.', about_mission_p2:'훌륭한 책이 언어 장벽에 갇혀서는 안 됩니다.', about_stat_books:'고전 도서', about_stat_audiobooks:'오디오북', about_stat_languages:'언어', about_stat_platforms:'플랫폼', about_story_title:'우리의 이야기', about_story_p1:'수백만 명이 영어 고전을 원어로 읽는 것을 꿈꾸니다.', about_story_p2:'Readmigo가 모든 것을 바꾸니다.', about_story_p3:'즉시 번역부터 어휘 학습까지.', about_cta_title:'읽을 준비가 되셨나요?', about_cta_subtitle:'전 세계 독자와 함께하세요.' }
  };

  var LANG_LABELS = {
    'en': 'English',
    'zh-Hans': '\u7b80\u4f53\u4e2d\u6587',
    'zh-Hant': '\u7e41\u9ad4\u4e2d\u6587',
    'es': 'Espa\u00f1ol',
    'ar': '\u0627\u0644\u0639\u0631\u0628\u064a\u0629',
    'pt': 'Portugu\u00eas',
    'id': 'Bahasa Indonesia',
    'fr': 'Fran\u00e7ais',
    'ja': '\u65e5\u672c\u8a9e',
    'ru': '\u0420\u0443\u0441\u0441\u043a\u0438\u0439',
    'ko': '\ud55c\uad6d\uc5b4'
  };

  function detectLang() {
    var saved = localStorage.getItem('readmigo-lang');
    if (saved && T[saved]) return saved;

    var bl = (navigator.language || navigator.userLanguage || 'en').toLowerCase();

    for (var i = 0; i < SUPPORTED.length; i++) {
      if (bl === SUPPORTED[i].toLowerCase()) return SUPPORTED[i];
    }
    if (bl.indexOf('zh') === 0) {
      if (bl.indexOf('hant') !== -1 || bl.indexOf('tw') !== -1 || bl.indexOf('hk') !== -1 || bl.indexOf('mo') !== -1) {
        return 'zh-Hant';
      }
      return 'zh-Hans';
    }
    var prefix = bl.split('-')[0];
    for (var j = 0; j < SUPPORTED.length; j++) {
      if (SUPPORTED[j].toLowerCase() === prefix) return SUPPORTED[j];
    }
    return 'en';
  }

  function applyLang(lang) {
    var t = T[lang] || T.en;
    var isRtl = RTL_LANGS.indexOf(lang) !== -1;

    document.documentElement.lang = t.htmlLang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.title = t.title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.content = t.description;
    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.content = t.title;
    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.content = t.hero_title_1 + ' ' + t.hero_title_2;

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var key = els[i].getAttribute('data-i18n');
      if (t[key] !== undefined) els[i].textContent = t[key];
    }

    var langBtn = document.getElementById('lang-current');
    if (langBtn) langBtn.textContent = LANG_LABELS[lang] || lang;

    var items = document.querySelectorAll('[data-lang]');
    for (var j = 0; j < items.length; j++) {
      if (items[j].getAttribute('data-lang') === lang) {
        items[j].classList.add('text-primary', 'font-medium');
        items[j].classList.remove('text-gray-600');
      } else {
        items[j].classList.remove('text-primary', 'font-medium');
        items[j].classList.add('text-gray-600');
      }
    }
  }

  function createLangButton(code, container) {
    var btn = document.createElement('button');
    btn.setAttribute('data-lang', code);
    btn.className = 'block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 transition';
    btn.textContent = LANG_LABELS[code];
    btn.addEventListener('click', function () {
      localStorage.setItem('readmigo-lang', code);
      applyLang(code);
      var menu = document.getElementById('lang-menu');
      if (menu) menu.classList.add('hidden');
    });
    container.appendChild(btn);
  }

  function buildLangMenu() {
    var container = document.getElementById('lang-menu');
    if (!container) return;
    container.textContent = '';
    for (var i = 0; i < SUPPORTED.length; i++) {
      createLangButton(SUPPORTED[i], container);
    }
  }

  function createFooterLangButton(code, container) {
    var li = document.createElement('li');
    var btn = document.createElement('button');
    btn.setAttribute('data-lang', code);
    btn.className = 'hover:text-white transition text-sm';
    btn.textContent = LANG_LABELS[code];
    btn.addEventListener('click', function () {
      localStorage.setItem('readmigo-lang', code);
      applyLang(code);
      window.scrollTo(0, 0);
    });
    li.appendChild(btn);
    container.appendChild(li);
  }

  function buildFooterLangs() {
    var container = document.getElementById('footer-langs');
    if (!container) return;
    container.textContent = '';
    for (var i = 0; i < SUPPORTED.length; i++) {
      createFooterLangButton(SUPPORTED[i], container);
    }
  }

  function initLangToggle() {
    var btn = document.getElementById('lang-toggle');
    var menu = document.getElementById('lang-menu');
    if (!btn || !menu) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      menu.classList.toggle('hidden');
    });
    document.addEventListener('click', function () {
      menu.classList.add('hidden');
    });
    menu.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    buildLangMenu();
    buildFooterLangs();
    initLangToggle();
    applyLang(detectLang());
  });
})();
