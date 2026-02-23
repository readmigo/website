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
      nav_blog: 'Blog',
      nav_download: 'Download',
      hero_title_1: 'Read any book.',
      hero_title_2: 'AI has your back.',
      hero_subtitle: 'Readmigo is an AI-native English reading app designed for learners worldwide. Read classic literature with intelligent AI assistance.',
      hero_appstore_label: 'Download on the',
      hero_appstore_store: 'App Store',
      hero_gplay_label: 'Get it on',
      hero_gplay_store: 'Google Play',
      hero_gplay_soon: 'Coming Soon',
      hero_web_label: 'Launch',
      hero_web_store: 'Web App',
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
      about_story_title: 'Built for the World',
      about_story_subtitle: 'Readmigo is localized for the top 10 global languages — not just the UI, but the entire reading experience.',
      about_l10n_ui_title: '11 UI Languages',
      about_l10n_ui_desc: 'The entire app interface — menus, settings, notifications — is fully translated into 11 languages.',
      about_l10n_content_title: 'Content Localization',
      about_l10n_content_desc: 'Book titles, descriptions, author bios, genres, and booklists are all localized — not just the UI.',
      about_l10n_translate_title: 'Long-Press Translation',
      about_l10n_translate_desc: 'Long-press any paragraph to instantly translate into your native language. 10 languages supported.',
      about_l10n_langs_title: 'Supported Languages',
      about_l10n_extra: '+ Hindi and German for long-press translation',
      banner_reading_title: "Great books shouldn't be this hard.",
      banner_reading_subtitle: 'AI-powered translation and vocabulary tools make classic literature accessible to every English learner.',
      banner_classics_title: 'Read English classics like never before.',
      banner_classics_subtitle: 'Join millions of learners discovering the joy of reading original English literature with AI assistance.',
      ai_title_1: "Don't translate.",
      ai_title_2: 'Understand.',
      ai_subtitle: "Readmigo's AI reads alongside you, providing instant context, translation, and vocabulary help exactly when you need it.",
      sources_title: 'Built on Open Knowledge',
      sources_subtitle: 'Readmigo is open source and powered by the world\'s largest free libraries. Every book and audiobook is freely available.',
      source_gutenberg_title: 'Project Gutenberg',
      source_gutenberg_desc: 'Over 100,000 free ebooks from the world\'s oldest digital library, founded in 1971.',
      source_librivox_title: 'LibriVox',
      source_librivox_desc: 'Over 20,000 free audiobooks read by volunteers from around the world.',
      source_github_title: 'Open Source',
      source_github_desc: 'Readmigo is open source. View our code, contribute, and help us improve.',
      footer_docs: 'Documentation',
      footer_blog_official: 'Blog',
      footer_col_language: 'Language',
      about_vision_title: 'Vision',
      about_vision_text: 'Discover the classics. Read anything. Understand everything.',
      about_mission_new_title: 'Mission',
      about_mission_new_text: 'Bringing the world\'s greatest literature to your fingertips — with AI that makes every page accessible, every word understandable, and every classic a source of strength.',
      about_values_title: 'Values',
      about_values_opensource: 'Open Source',
      about_values_opensource_desc: 'We build in the open, for everyone.',
      about_values_share: 'Share Knowledge',
      about_values_share_desc: 'Great books belong to the world, not behind paywalls.',
      about_values_ai: 'AI for Understanding',
      about_values_ai_desc: 'Technology that empowers readers, not replaces them.',
      about_library_title: 'Our Library',
      about_library_subtitle: 'A world of literature, free and open to all.',
      about_lib_curated_title: 'Curated Classics',
      about_lib_curated_desc: '1,300+ hand-edited, publication-quality English editions from Standard Ebooks.',
      about_lib_gutenberg_title: 'Public Domain Library',
      about_lib_gutenberg_desc: '70,000+ free classic books from Project Gutenberg, automatically enhanced for the best reading experience.',
      about_lib_global_title: 'Expanding Global Collection',
      about_lib_global_desc: 'Working to bring millions more public domain books from archives worldwide, covering 60+ languages across 6 continents.',
      about_lib_stat_langs: 'Book Languages',
      about_lib_stat_continents: 'Continents',
      about_lib_stat_growing: 'Growing Every Day',
      exp_title_1: 'A Reading Experience',
      exp_title_2: 'Like No Other',
      exp_subtitle: 'Every detail crafted for the joy of reading.',
      exp_typo_title: 'Publication-Quality Typography',
      exp_typo_desc: 'Beautiful typesetting that faithfully renders every book as the author intended.',
      exp_format_title: 'Read Any Format',
      exp_format_desc: 'Import your own EPUB, PDF, and MOBI files — one app for all your books.',
      exp_langs_title: '60+ Book Languages',
      exp_langs_desc: 'Literature in English, French, German, Spanish, Chinese, Japanese, and 50+ more with native typography support.',
      exp_page_title: 'Immersive Page Turning',
      exp_page_desc: '10 page turn styles including realistic 3D curl with physics, haptic feedback, and paper sounds.',
      exp_highlight_title: 'Read-Along Highlights',
      exp_highlight_desc: 'Follow every word as it\'s spoken. Sentence-level highlighting keeps you in sync — karaoke, underline, or paragraph mode.',
      exp_tts_title: 'AI Text-to-Speech',
      exp_tts_desc: 'Listen to any book with multiple AI voices, adjustable speed, and natural pauses.',
      exp_audiobook_title: '20,000+ Audiobooks',
      exp_audiobook_desc: 'Free human-narrated audiobooks from LibriVox with sentence-level subtitles synced to the text.',
      exp_device_title: 'Seamless on Every Device',
      exp_device_desc: 'Native performance on iOS, Android, and Web — pick up right where you left off.'
    },
    'zh-Hans': {
      htmlLang: 'zh-CN',
      title: 'Readmigo - AI\u9a71\u52a8\u7684\u82f1\u8bed\u9605\u8bfb',
      description: '\u9605\u8bfb\u4efb\u4f55\u4e66\u7c4d\uff0cAI\u4e3a\u4f60\u4fdd\u9a7e\u62a4\u822a\u3002Readmigo\u662f\u4e00\u6b3eAI\u539f\u751f\u82f1\u8bed\u9605\u8bfb\u5b66\u4e60\u5e94\u7528\uff0c\u62e5\u670910\u4e07+\u56fe\u4e66\u3002',
      nav_support: '\u652f\u6301',
      nav_blog: '\u535a\u5ba2',
      nav_download: '\u4e0b\u8f7d',
      hero_title_1: '\u9605\u8bfb\u4efb\u4f55\u4e66\u7c4d\u3002',
      hero_title_2: 'AI\u4e3a\u4f60\u4fdd\u9a7e\u62a4\u822a\u3002',
      hero_subtitle: 'Readmigo\u662f\u4e00\u6b3e\u9762\u5411\u5168\u7403\u5b66\u4e60\u8005\u7684AI\u539f\u751f\u82f1\u8bed\u9605\u8bfb\u5e94\u7528\u3002\u5728\u667a\u80fdAI\u8f85\u52a9\u4e0b\u9605\u8bfb\u7ecf\u5178\u6587\u5b66\u3002',
      hero_appstore_label: '\u4e0b\u8f7d\u4e8e',
      hero_appstore_store: 'App Store',
      hero_gplay_label: '\u4e0b\u8f7d\u4e8e',
      hero_gplay_store: 'Google Play',
      hero_gplay_soon: '即将上线',
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
      about_story_title: '为全球用户而生',
      about_story_subtitle: 'Readmigo 支持全球 Top 10 语言的本地化——不仅是界面，而是整个阅读体验。',
      about_l10n_ui_title: '11 种界面语言',
      about_l10n_ui_desc: '整个应用界面——菜单、设置、通知——已完整翻译为 11 种语言。',
      about_l10n_content_title: '内容本地化',
      about_l10n_content_desc: '书名、简介、作者传记、分类和书单全部本地化——不仅仅是界面。',
      about_l10n_translate_title: '长按翻译',
      about_l10n_translate_desc: '长按任意段落，即可翻译成你的母语。支持 10 种语言。',
      about_l10n_langs_title: '支持的语言',
      about_l10n_extra: '+ 印地语和德语支持长按翻译',
      about_cta_subtitle: '加入全球读者，一起发现英语文学的乐趣。',
      banner_reading_title: '好书不该这么难读。',
      banner_reading_subtitle: 'AI翻译和词汇工具，让经典文学对每位英语学习者触手可及。',
      banner_classics_title: '以前所未有的方式阅读英语经典。',
      banner_classics_subtitle: '加入数百万学习者，一起发现用AI辅助阅读英语原著的乐趣。',
      ai_title_1: '不要翻译。',
      ai_title_2: '去理解。',
      ai_subtitle: 'Readmigo的AI伴你阅读，在你需要时即时提供上下文、翻译和词汇帮助。',
      sources_title: '基于开放知识构建',
      sources_subtitle: 'Readmigo是开源的，由全球最大的免费图书馆提供支持。所有书籍和有声书均可免费获取。',
      source_gutenberg_title: 'Project Gutenberg',
      source_gutenberg_desc: '来自世界上最古老的数字图书馆（创建于1971年）的超过10万本免费电子书。',
      source_librivox_title: 'LibriVox',
      source_librivox_desc: '来自世界各地志愿者朗读的超过2万本免费有声书。',
      source_github_title: '开源',
      source_github_desc: 'Readmigo是开源的。查看我们的代码、参与贡献、帮助我们改进。',
      footer_docs: '文档',
      footer_blog_official: '博客',
      footer_col_language: '语言',
      about_vision_title: '愿景',
      about_vision_text: '发现经典。阅读一切。理解万物。',
      about_mission_new_title: '使命',
      about_mission_new_text: '将世界上最伟大的文学作品送到你指尖——借助AI让每一页触手可及，每一个词清晰易懂，每一部经典成为力量之源。',
      about_values_title: '价值观',
      about_values_opensource: '开源',
      about_values_opensource_desc: '我们公开构建，为每个人服务。',
      about_values_share: '共享知识',
      about_values_share_desc: '伟大的书籍属于全世界，而非隐藏在付费墙之后。',
      about_values_ai: 'AI助力理解',
      about_values_ai_desc: '赋能读者的技术，而非取代读者。',
      about_library_title: '我们的图书馆',
      about_library_subtitle: '文学的世界，免费且向所有人开放。',
      about_lib_curated_title: '精选经典',
      about_lib_curated_desc: '1,300+ 部来自 Standard Ebooks 的手工编辑、出版级英语版本。',
      about_lib_gutenberg_title: '公共领域图书馆',
      about_lib_gutenberg_desc: '70,000+ 部来自古腾堡计划的免费经典书籍，自动优化以获得最佳阅读体验。',
      about_lib_global_title: '不断扩展的全球馆藏',
      about_lib_global_desc: '正在从全球档案馆引入数百万更多公共领域书籍，覆盖6大洲60+种语言。',
      about_lib_stat_langs: '图书语言',
      about_lib_stat_continents: '个大洲',
      about_lib_stat_growing: '每天都在增长',
      exp_title_1: '前所未有的',
      exp_title_2: '阅读体验',
      exp_subtitle: '每一个细节，都为阅读的愉悦而精心打造。',
      exp_typo_title: '出版级排版',
      exp_typo_desc: '精美排版，忠实呈现每本书作者的原始意图。',
      exp_format_title: '阅读任何格式',
      exp_format_desc: '导入你自己的 EPUB、PDF 和 MOBI 文件——一个应用搞定所有书籍。',
      exp_langs_title: '60+ 种图书语言',
      exp_langs_desc: '涵盖英语、法语、德语、西班牙语、中文、日语等50+种语言的文学作品，原生排版支持。',
      exp_page_title: '沉浸式翻页',
      exp_page_desc: '10种翻页样式，包括逼真的3D卷曲物理效果、触觉反馈和纸张声音。',
      exp_highlight_title: '跟读高亮',
      exp_highlight_desc: '跟随每一个被朗读的词。句级高亮让你保持同步——卡拉OK、下划线或段落模式。',
      exp_tts_title: 'AI语音朗读',
      exp_tts_desc: '用多种AI语音收听任何书籍，可调节语速，自然停顿。',
      exp_audiobook_title: '20,000+ 有声书',
      exp_audiobook_desc: '来自LibriVox的免费真人朗读有声书，配有与文本同步的句级字幕。',
      exp_device_title: '全设备无缝体验',
      exp_device_desc: 'iOS、Android 和网页端原生性能——随时从上次阅读处继续。'
    },
    'zh-Hant': {
      htmlLang: 'zh-TW',
      title: 'Readmigo - AI\u9a45\u52d5\u7684\u82f1\u8a9e\u95b1\u8b80',
      description: '\u95b1\u8b80\u4efb\u4f55\u66f8\u7c4d\uff0cAI\u70ba\u4f60\u4fdd\u99d5\u8b77\u822a\u3002Readmigo\u662f\u4e00\u6b3eAI\u539f\u751f\u82f1\u8a9e\u95b1\u8b80\u5b78\u7fd2\u61c9\u7528\uff0c\u64c1\u670910\u842c+\u5716\u66f8\u3002',
      nav_support: '\u652f\u63f4',
      nav_blog: '\u90e8\u843d\u683c',
      nav_download: '\u4e0b\u8f09',
      hero_title_1: '\u95b1\u8b80\u4efb\u4f55\u66f8\u7c4d\u3002',
      hero_title_2: 'AI\u70ba\u4f60\u4fdd\u99d5\u8b77\u822a\u3002',
      hero_subtitle: 'Readmigo\u662f\u4e00\u6b3e\u9762\u5411\u5168\u7403\u5b78\u7fd2\u8005\u7684AI\u539f\u751f\u82f1\u8a9e\u95b1\u8b80\u61c9\u7528\u3002\u5728\u667a\u6167AI\u8f14\u52a9\u4e0b\u95b1\u8b80\u7d93\u5178\u6587\u5b78\u3002',
      hero_appstore_label: '\u4e0b\u8f09\u65bc',
      hero_appstore_store: 'App Store',
      hero_gplay_label: '\u4e0b\u8f09\u65bc',
      hero_gplay_store: 'Google Play',
      hero_gplay_soon: '即將上線',
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
      about_story_title: '為全球用戶而生',
      about_story_subtitle: 'Readmigo 支援全球 Top 10 語言的本地化——不僅是介面，而是整個閱讀體驗。',
      about_l10n_ui_title: '11 種介面語言',
      about_l10n_ui_desc: '整個應用介面——選單、設定、通知——已完整翻譯為 11 種語言。',
      about_l10n_content_title: '內容本地化',
      about_l10n_content_desc: '書名、簡介、作者傳記、分類和書單全部本地化——不僅僅是介面。',
      about_l10n_translate_title: '長按翻譯',
      about_l10n_translate_desc: '長按任意段落，即可翻譯成你的母語。支援 10 種語言。',
      about_l10n_langs_title: '支援的語言',
      about_l10n_extra: '+ 印地語和德語支援長按翻譯',
      banner_reading_title: '好書不該這麼難讀。',
      banner_reading_subtitle: 'AI翻譯和詞彙工具，讓經典文學對每位英語學習者觸手可及。',
      banner_classics_title: '以前所未有的方式閱讀英語經典。',
      banner_classics_subtitle: '加入數百萬學習者，一起發現用AI輔助閱讀英語原著的樂趣。',
      ai_title_1: '不要翻譯。',
      ai_title_2: '去理解。',
      ai_subtitle: 'Readmigo的AI伴你閱讀，在你需要時即時提供上下文、翻譯和詞彙幫助。',
      sources_title: '基於開放知識構建',
      sources_subtitle: 'Readmigo是開源的，由全球最大的免費圖書館提供支持。所有書籍和有聲書均可免費獲取。',
      source_gutenberg_title: 'Project Gutenberg',
      source_gutenberg_desc: '來自世界上最古老的數位圖書館（創建於1971年）的超過10萬本免費電子書。',
      source_librivox_title: 'LibriVox',
      source_librivox_desc: '來自世界各地志願者朗讀的超過2萬本免費有聲書。',
      source_github_title: '開源',
      source_github_desc: 'Readmigo是開源的。查看我們的程式碼、參與貢獻、幫助我們改進。',
      footer_docs: '文檔',
      footer_blog_official: '部落格',
      footer_col_language: '語言',
      about_vision_title: '願景',
      about_vision_text: '發現經典。閱讀一切。理解萬物。',
      about_mission_new_title: '使命',
      about_mission_new_text: '將世界上最偉大的文學作品送到你指尖——藉助AI讓每一頁觸手可及，每一個詞清晰易懂，每一部經典成為力量之源。',
      about_values_title: '價值觀',
      about_values_opensource: '開源',
      about_values_opensource_desc: '我們公開構建，為每個人服務。',
      about_values_share: '共享知識',
      about_values_share_desc: '偉大的書籍屬於全世界，而非隱藏在付費牆之後。',
      about_values_ai: 'AI助力理解',
      about_values_ai_desc: '賦能讀者的技術，而非取代讀者。',
      about_library_title: '我們的圖書館',
      about_library_subtitle: '文學的世界，免費且向所有人開放。',
      about_lib_curated_title: '精選經典',
      about_lib_curated_desc: '1,300+ 部來自 Standard Ebooks 的手工編輯、出版級英語版本。',
      about_lib_gutenberg_title: '公共領域圖書館',
      about_lib_gutenberg_desc: '70,000+ 部來自古騰堡計畫的免費經典書籍，自動優化以獲得最佳閱讀體驗。',
      about_lib_global_title: '不斷擴展的全球館藏',
      about_lib_global_desc: '正在從全球檔案館引入數百萬更多公共領域書籍，覆蓋6大洲60+種語言。',
      about_lib_stat_langs: '圖書語言',
      about_lib_stat_continents: '個大洲',
      about_lib_stat_growing: '每天都在增長',
      exp_title_1: '前所未有的',
      exp_title_2: '閱讀體驗',
      exp_subtitle: '每一個細節，都為閱讀的愉悅而精心打造。',
      exp_typo_title: '出版級排版',
      exp_typo_desc: '精美排版，忠實呈現每本書作者的原始意圖。',
      exp_format_title: '閱讀任何格式',
      exp_format_desc: '匯入你自己的 EPUB、PDF 和 MOBI 檔案——一個應用搞定所有書籍。',
      exp_langs_title: '60+ 種圖書語言',
      exp_langs_desc: '涵蓋英語、法語、德語、西班牙語、中文、日語等50+種語言的文學作品，原生排版支援。',
      exp_page_title: '沉浸式翻頁',
      exp_page_desc: '10種翻頁樣式，包括逼真的3D捲曲物理效果、觸覺回饋和紙張聲音。',
      exp_highlight_title: '跟讀高亮',
      exp_highlight_desc: '跟隨每一個被朗讀的詞。句級高亮讓你保持同步——卡拉OK、底線或段落模式。',
      exp_tts_title: 'AI語音朗讀',
      exp_tts_desc: '用多種AI語音收聽任何書籍，可調節語速，自然停頓。',
      exp_audiobook_title: '20,000+ 有聲書',
      exp_audiobook_desc: '來自LibriVox的免費真人朗讀有聲書，配有與文本同步的句級字幕。',
      exp_device_title: '全裝置無縫體驗',
      exp_device_desc: 'iOS、Android 和網頁端原生效能——隨時從上次閱讀處繼續。'
    },
    es: { htmlLang:'es', title:'Readmigo - Lectura en ingl\u00e9s con IA', description:'Lee cualquier libro. La IA te respalda. Readmigo es una app nativa de IA para leer y aprender ingl\u00e9s con m\u00e1s de 100.000 libros.', nav_support:'Soporte', nav_blog:'Blog', nav_download:'Descargar', hero_title_1:'Lee cualquier libro.', hero_title_2:'La IA te respalda.', hero_subtitle:'Readmigo es una app de lectura en ingl\u00e9s con IA nativa, dise\u00f1ada para estudiantes de todo el mundo. Lee literatura cl\u00e1sica con asistencia inteligente.', hero_appstore_label:'Desc\u00e1rgalo en', hero_appstore_store:'App Store', hero_gplay_label:'Disponible en', hero_gplay_store:'Google Play', hero_gplay_soon:'Próximamente', hero_web_label:'Abrir', hero_web_store:'Web App', features_heading_1:'Todo lo que necesitas para ', features_heading_2:'dominar la lectura en ingl\u00e9s', f1_title:'100.000+ libros', f1_desc:'Gran colecci\u00f3n de Project Gutenberg, con cl\u00e1sicos de Shakespeare a Jane Austen.', f2_title:'Lectura en voz alta', f2_desc:'Escucha cualquier libro con voces naturales de IA. Convierte tu lectura en una experiencia manos libres.', f3_title:'Audiolibros', f3_desc:'Accede a m\u00e1s de 20.000 audiolibros gratuitos de LibriVox. Disfruta de la literatura cl\u00e1sica le\u00edda por narradores reales.', f4_title:'Traducci\u00f3n al mantener presionado', f4_desc:'Mant\u00e9n presionado cualquier p\u00e1rrafo para una traducci\u00f3n biling\u00fce instant\u00e1nea. Comprende el contexto sin salir de la p\u00e1gina.', f5_title:'Sincronizaci\u00f3n de cuenta', f5_desc:'Inicia sesi\u00f3n con Apple ID o Google para sincronizar tu biblioteca y progreso de lectura entre dispositivos.', f6_title:'Multidispositivo', f6_desc:'Lee sin interrupciones en iOS, Android y Web. Contin\u00faa justo donde lo dejaste en cualquier dispositivo.', cta_title:'Comienza tu viaje de lectura en ingl\u00e9s hoy', cta_subtitle:'Descarga Readmigo y descubre el placer de leer en ingl\u00e9s.', cta_button:'Comenzar gratis', footer_tagline:'Lectura y aprendizaje de ingl\u00e9s con IA para todos.', footer_legal:'Legal', footer_privacy:'Pol\u00edtica de privacidad', footer_terms:'T\u00e9rminos de servicio', footer_credits:'Cr\u00e9ditos', footer_support:'Soporte', footer_help:'Centro de ayuda', footer_delete:'Eliminar cuenta', footer_contact:'Cont\u00e1ctanos', footer_language:'Idioma', footer_rights:'\u00a9 2025-2026 Readmigo. Todos los derechos reservados.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nuestros Productos', products_subtitle:'Herramientas y apps dise\u00f1adas para mejorar tu experiencia de lectura y aprendizaje.', products_flagship:'Principal', p1_desc:'App de lectura en ingl\u00e9s con IA, con m\u00e1s de 100.000 libros, audiolibros y asistencia inteligente.', p1_cta:'Obtener la App', p2_desc:'Lector RSS moderno de tres columnas para mantenerte informado con feeds limpios y organizados.', p2_cta:'Abrir Web App', p3_desc:'Mant\u00e9nte al d\u00eda con las \u00faltimas rese\u00f1as, an\u00e1lisis y perspectivas de tecnolog\u00eda IA.', p3_cta:'Leer Art\u00edculos', nav_products:'Productos', nav_features:'Funciones', nav_about:'Acerca de', nav_get_started:'Comenzar', footer_col_products:'Productos', footer_col_company:'Empresa', footer_blog:'Blog', about_title:'Sobre Readmigo', about_subtitle:'La plataforma de lectura en inglés con IA nativa que transforma la literatura clásica en experiencias de aprendizaje accesibles.', about_mission_title:'Nuestra Misión', about_mission_p1:'Permitir que miles de millones de hablantes no nativos lean y disfruten la literatura inglesa con asistencia inteligente de IA.', about_mission_p2:'Creemos que los grandes libros no deberían estar bloqueados por barreras lingüísticas.', about_stat_books:'Libros Clásicos', about_stat_audiobooks:'Audiolibros', about_stat_languages:'Idiomas', about_stat_platforms:'Plataformas', about_story_title:'Hecho para el mundo', about_story_subtitle:'Readmigo está localizado para los 10 idiomas principales del mundo, no solo la interfaz, sino toda la experiencia de lectura.', about_l10n_ui_title:'11 idiomas de interfaz', about_l10n_ui_desc:'Toda la interfaz de la app está completamente traducida a 11 idiomas.', about_l10n_content_title:'Contenido localizado', about_l10n_content_desc:'Títulos, descripciones, biografías de autores y listas de libros están localizados.', about_l10n_translate_title:'Traducción con pulsación larga', about_l10n_translate_desc:'Mantén pulsado cualquier párrafo para traducirlo a tu idioma nativo. 10 idiomas.', about_l10n_langs_title:'Idiomas soportados', about_l10n_extra:'+ Hindi y alemán para traducción con pulsación larga', banner_reading_title:'Los grandes libros no deberían ser tan difíciles.', banner_reading_subtitle:'Herramientas de traducción y vocabulario con IA hacen la literatura clásica accesible para cada estudiante de inglés.', banner_classics_title:'Lee clásicos en inglés como nunca antes.', banner_classics_subtitle:'Únete a millones de estudiantes descubriendo el placer de leer literatura inglesa original con asistencia de IA.', ai_title_1:'No traduzcas.', ai_title_2:'Comprende.', ai_subtitle:'La IA de Readmigo lee contigo, ofreciéndote contexto, traducción y ayuda con vocabulario al instante.', sources_title:'Construido sobre conocimiento abierto', sources_subtitle:'Readmigo es de código abierto y funciona con las bibliotecas gratuitas más grandes del mundo.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'Más de 100.000 libros electrónicos gratuitos de la biblioteca digital más antigua del mundo, fundada en 1971.', source_librivox_title:'LibriVox', source_librivox_desc:'Más de 20.000 audiolibros gratuitos leídos por voluntarios de todo el mundo.', source_github_title:'Código Abierto', source_github_desc:'Readmigo es de código abierto. Consulta nuestro código, contribuye y ayúdanos a mejorar.', footer_docs:'Documentación', footer_blog_official:'Blog',footer_col_language:'Idioma', about_vision_title:'Visión', about_vision_text:'Descubre los clásicos. Lee cualquier cosa. Entiéndelo todo.', about_mission_new_title:'Misión', about_mission_new_text:'Llevando la mayor literatura del mundo a tus manos — con IA que hace cada página accesible, cada palabra comprensible y cada clásico una fuente de fortaleza.', about_values_title:'Valores', about_values_opensource:'Código Abierto', about_values_opensource_desc:'Construimos en abierto, para todos.', about_values_share:'Compartir Conocimiento', about_values_share_desc:'Los grandes libros pertenecen al mundo, no detrás de muros de pago.', about_values_ai:'IA para Comprender', about_values_ai_desc:'Tecnología que empodera a los lectores, no los reemplaza.', about_library_title:'Nuestra Biblioteca', about_library_subtitle:'Un mundo de literatura, gratuito y abierto para todos.', about_lib_curated_title:'Clásicos Seleccionados', about_lib_curated_desc:'1.300+ ediciones en inglés editadas a mano con calidad de publicación de Standard Ebooks.', about_lib_gutenberg_title:'Biblioteca de Dominio Público', about_lib_gutenberg_desc:'70.000+ libros clásicos gratuitos de Project Gutenberg, mejorados automáticamente.', about_lib_global_title:'Colección Global en Expansión', about_lib_global_desc:'Trabajando para traer millones más de libros de dominio público de archivos de todo el mundo, cubriendo 60+ idiomas en 6 continentes.', about_lib_stat_langs:'Idiomas de Libros', about_lib_stat_continents:'Continentes', about_lib_stat_growing:'Creciendo Cada Día', exp_title_1:'Una Experiencia de Lectura', exp_title_2:'Sin Igual', exp_subtitle:'Cada detalle diseñado para el placer de leer.', exp_typo_title:'Tipografía de Calidad Editorial', exp_typo_desc:'Composición tipográfica hermosa que reproduce fielmente cada libro como el autor quiso.', exp_format_title:'Lee Cualquier Formato', exp_format_desc:'Importa tus propios archivos EPUB, PDF y MOBI — una app para todos tus libros.', exp_langs_title:'60+ Idiomas de Libros', exp_langs_desc:'Literatura en inglés, francés, alemán, español, chino, japonés y 50+ más con soporte tipográfico nativo.', exp_page_title:'Paso de Página Inmersivo', exp_page_desc:'10 estilos de paso de página incluyendo curvatura 3D realista con física, retroalimentación háptica y sonidos de papel.', exp_highlight_title:'Resaltado de Lectura', exp_highlight_desc:'Sigue cada palabra mientras se lee. El resaltado a nivel de oración te mantiene sincronizado — modo karaoke, subrayado o párrafo.', exp_tts_title:'Texto a Voz con IA', exp_tts_desc:'Escucha cualquier libro con múltiples voces IA, velocidad ajustable y pausas naturales.', exp_audiobook_title:'20.000+ Audiolibros', exp_audiobook_desc:'Audiolibros gratuitos narrados por humanos de LibriVox con subtítulos sincronizados al texto.', exp_device_title:'Perfecto en Cada Dispositivo', exp_device_desc:'Rendimiento nativo en iOS, Android y Web — continúa justo donde lo dejaste.' },
    ar: { htmlLang:'ar', title:'Readmigo - \u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a', description:'\u0627\u0642\u0631\u0623 \u0623\u064a \u0643\u062a\u0627\u0628. \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u064a\u062f\u0639\u0645\u0643. Readmigo \u062a\u0637\u0628\u064a\u0642 \u0623\u0635\u0644\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u062a\u0639\u0644\u0645 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0645\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 100,000 \u0643\u062a\u0627\u0628.', nav_support:'\u0627\u0644\u062f\u0639\u0645', nav_blog:'مدونة', nav_download:'\u062a\u062d\u0645\u064a\u0644', hero_title_1:'\u0627\u0642\u0631\u0623 \u0623\u064a \u0643\u062a\u0627\u0628.', hero_title_2:'\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u064a\u062f\u0639\u0645\u0643.', hero_subtitle:'Readmigo \u062a\u0637\u0628\u064a\u0642 \u0642\u0631\u0627\u0621\u0629 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0623\u0635\u0644\u064a \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0635\u0645\u0645 \u0644\u0644\u0645\u062a\u0639\u0644\u0645\u064a\u0646 \u062d\u0648\u0644 \u0627\u0644\u0639\u0627\u0644\u0645. \u0627\u0642\u0631\u0623 \u0627\u0644\u0623\u062f\u0628 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a \u0628\u0645\u0633\u0627\u0639\u062f\u0629 \u0630\u0643\u064a\u0629.', hero_appstore_label:'\u062d\u0645\u0651\u0644\u0647 \u0645\u0646', hero_appstore_store:'App Store', hero_gplay_label:'\u0627\u062d\u0635\u0644 \u0639\u0644\u064a\u0647 \u0645\u0646', hero_gplay_store:'Google Play', hero_gplay_soon:'قريباً', hero_web_label:'افتح', hero_web_store:'تطبيق الويب', features_heading_1:'\u0643\u0644 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u0647 ', features_heading_2:'\u0644\u0625\u062a\u0642\u0627\u0646 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629', f1_title:'+100,000 \u0643\u062a\u0627\u0628', f1_desc:'\u0645\u062c\u0645\u0648\u0639\u0629 \u0636\u062e\u0645\u0629 \u0645\u0646 \u0645\u0634\u0631\u0648\u0639 \u063a\u0648\u062a\u0646\u0628\u0631\u063a\u060c \u062a\u0634\u0645\u0644 \u0643\u0644\u0627\u0633\u064a\u0643\u064a\u0627\u062a \u0645\u0646 \u0634\u0643\u0633\u0628\u064a\u0631 \u0625\u0644\u0649 \u062c\u064a\u0646 \u0623\u0648\u0633\u062a\u0646.', f2_title:'\u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0635\u0648\u062a \u0639\u0627\u0644\u064d', f2_desc:'\u0627\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0623\u064a \u0643\u062a\u0627\u0628 \u0628\u0623\u0635\u0648\u0627\u062a \u0630\u0643\u0627\u0621 \u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0637\u0628\u064a\u0639\u064a\u0629. \u062d\u0648\u0651\u0644 \u0642\u0631\u0627\u0621\u062a\u0643 \u0625\u0644\u0649 \u062a\u062c\u0631\u0628\u0629 \u0628\u062f\u0648\u0646 \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0627\u0644\u064a\u062f\u064a\u0646.', f3_title:'\u0627\u0644\u0643\u062a\u0628 \u0627\u0644\u0645\u0633\u0645\u0648\u0639\u0629', f3_desc:'\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0623\u0643\u062b\u0631 \u0645\u0646 20,000 \u0643\u062a\u0627\u0628 \u0645\u0633\u0645\u0648\u0639 \u0645\u062c\u0627\u0646\u064a \u0645\u0646 LibriVox. \u0627\u0633\u062a\u0645\u062a\u0639 \u0628\u0627\u0644\u0623\u062f\u0628 \u0627\u0644\u0643\u0644\u0627\u0633\u064a\u0643\u064a \u0628\u0623\u0635\u0648\u0627\u062a \u0631\u0648\u0627\u0629 \u062d\u0642\u064a\u0642\u064a\u064a\u0646.', f4_title:'\u062a\u0631\u062c\u0645\u0629 \u0628\u0627\u0644\u0636\u063a\u0637 \u0627\u0644\u0645\u0637\u0648\u0651\u0644', f4_desc:'\u0627\u0636\u063a\u0637 \u0645\u0637\u0648\u0644\u0627\u064b \u0639\u0644\u0649 \u0623\u064a \u0641\u0642\u0631\u0629 \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u0631\u062c\u0645\u0629 \u062b\u0646\u0627\u0626\u064a\u0629 \u0627\u0644\u0644\u063a\u0629 \u0641\u0648\u0631\u064a\u0629. \u0627\u0641\u0647\u0645 \u0627\u0644\u0633\u064a\u0627\u0642 \u062f\u0648\u0646 \u0645\u063a\u0627\u062f\u0631\u0629 \u0627\u0644\u0635\u0641\u062d\u0629.', f5_title:'\u0645\u0632\u0627\u0645\u0646\u0629 \u0627\u0644\u062d\u0633\u0627\u0628', f5_desc:'\u0633\u062c\u0651\u0644 \u0627\u0644\u062f\u062e\u0648\u0644 \u0628\u0640 Apple ID \u0623\u0648 Google \u0644\u0645\u0632\u0627\u0645\u0646\u0629 \u0645\u0643\u062a\u0628\u062a\u0643 \u0648\u062a\u0642\u062f\u0645 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0639\u0628\u0631 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.', f6_title:'\u0645\u062a\u0639\u062f\u062f \u0627\u0644\u0623\u062c\u0647\u0632\u0629', f6_desc:'\u0627\u0642\u0631\u0623 \u0628\u0633\u0644\u0627\u0633\u0629 \u0639\u0644\u0649 iOS \u0648 Android \u0648\u0627\u0644\u0648\u064a\u0628. \u062a\u0627\u0628\u0639 \u0645\u0646 \u062d\u064a\u062b \u062a\u0648\u0642\u0641\u062a \u0639\u0644\u0649 \u0623\u064a \u062c\u0647\u0627\u0632.', cta_title:'\u0627\u0628\u062f\u0623 \u0631\u062d\u0644\u062a\u0643 \u0641\u064a \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0627\u0644\u064a\u0648\u0645', cta_subtitle:'\u062d\u0645\u0651\u0644 Readmigo \u0648\u0627\u0643\u062a\u0634\u0641 \u0645\u062a\u0639\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0628\u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629.', cta_button:'ابدأ مجاناً', footer_tagline:'\u0642\u0631\u0627\u0621\u0629 \u0648\u062a\u0639\u0644\u0645 \u0627\u0644\u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0644\u0644\u062c\u0645\u064a\u0639.', footer_legal:'\u0642\u0627\u0646\u0648\u0646\u064a', footer_privacy:'\u0633\u064a\u0627\u0633\u0629 \u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629', footer_terms:'\u0634\u0631\u0648\u0637 \u0627\u0644\u062e\u062f\u0645\u0629', footer_credits:'\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f\u0627\u062a', footer_support:'\u0627\u0644\u062f\u0639\u0645', footer_help:'\u0645\u0631\u0643\u0632 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629', footer_delete:'\u062d\u0630\u0641 \u0627\u0644\u062d\u0633\u0627\u0628', footer_contact:'\u0627\u062a\u0635\u0644 \u0628\u0646\u0627', footer_language:'\u0627\u0644\u0644\u063a\u0629', footer_rights:'\u00a9 2025-2026 Readmigo. \u062c\u0645\u064a\u0639 \u0627\u0644\u062d\u0642\u0648\u0642 \u0645\u062d\u0641\u0648\u0638\u0629.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u0645\u0646\u062a\u062c\u0627\u062a\u0646\u0627', products_subtitle:'\u0623\u062f\u0648\u0627\u062a \u0648\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u0635\u0645\u0645\u0629 \u0644\u062a\u0639\u0632\u064a\u0632 \u062a\u062c\u0631\u0628\u0629 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0648\u0627\u0644\u062a\u0639\u0644\u0645.', products_flagship:'\u0627\u0644\u0631\u0626\u064a\u0633\u064a', p1_desc:'\u062a\u0637\u0628\u064a\u0642 \u0642\u0631\u0627\u0621\u0629 \u0625\u0646\u062c\u0644\u064a\u0632\u064a\u0629 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a \u0645\u0639 \u0623\u0643\u062b\u0631 \u0645\u0646 100,000 \u0643\u062a\u0627\u0628 \u0648\u0643\u062a\u0628 \u0645\u0633\u0645\u0648\u0639\u0629 \u0648\u0645\u0633\u0627\u0639\u062f\u0629 \u0630\u0643\u064a\u0629.', p1_cta:'احصل على التطبيق', p2_desc:'\u0642\u0627\u0631\u0626 RSS \u062d\u062f\u064a\u062b \u0628\u062b\u0644\u0627\u062b\u0629 \u0623\u0639\u0645\u062f\u0629 \u0644\u0644\u0628\u0642\u0627\u0621 \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0645\u0639 \u062e\u0644\u0627\u0635\u0627\u062a \u0646\u0638\u064a\u0641\u0629 \u0648\u0645\u0646\u0638\u0645\u0629.', p2_cta:'\u0641\u062a\u062d \u062a\u0637\u0628\u064a\u0642 \u0627\u0644\u0648\u064a\u0628', p3_desc:'\u0627\u0628\u0642\u064e \u0639\u0644\u0649 \u0627\u0637\u0644\u0627\u0639 \u0628\u0623\u062d\u062f\u062b \u0645\u0631\u0627\u062c\u0639\u0627\u062a \u0648\u062a\u062d\u0644\u064a\u0644\u0627\u062a \u062a\u0642\u0646\u064a\u0627\u062a \u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064a.', p3_cta:'\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0642\u0627\u0644\u0627\u062a', nav_products:'المنتجات', nav_features:'الميزات', nav_about:'حول', nav_get_started:'ابدأ الآن', footer_col_products:'المنتجات', footer_col_company:'الشركة', footer_blog:'المدونة', about_title:'حول Readmigo', about_subtitle:'منصة القراءة بالإنجليزية الأصلية بالذكاء الاصطناعي.', about_mission_title:'مهمتنا', about_mission_p1:'تمكين مليارات الأشخاص من قراءة الأدب الإنجليزي بسهولة.', about_mission_p2:'نؤمن أن الكتب الرائعة لا يجب أن تكون محبوسة خلف حواجز اللغة.', about_stat_books:'كتب كلاسيكية', about_stat_audiobooks:'كتب مسموعة', about_stat_languages:'لغة', about_stat_platforms:'منصات', about_story_title:'مصمم للعالم', about_story_subtitle:'Readmigo مترجم لأفضل 10 لغات عالمية — ليس فقط الواجهة، بل تجربة القراءة بأكملها.', about_l10n_ui_title:'11 لغة واجهة', about_l10n_ui_desc:'واجهة التطبيق بالكامل مترجمة إلى 11 لغة.', about_l10n_content_title:'محتوى مترجم', about_l10n_content_desc:'عناوين الكتب والأوصاف وسير المؤلفين والتصنيفات كلها مترجمة.', about_l10n_translate_title:'ترجمة بالضغط المطول', about_l10n_translate_desc:'اضغط مطولاً على أي فقرة للترجمة الفورية إلى لغتك الأم. 10 لغات.', about_l10n_langs_title:'اللغات المدعومة', about_l10n_extra:'+ الهندية والألمانية للترجمة بالضغط المطول', banner_reading_title:'الكتب الرائعة لا يجب أن تكون بهذه الصعوبة.', banner_reading_subtitle:'أدوات الترجمة والمفردات بالذكاء الاصطناعي تجعل الأدب الكلاسيكي في متناول كل متعلم للإنجليزية.', banner_classics_title:'اقرأ الكلاسيكيات الإنجليزية كما لم تفعل من قبل.', banner_classics_subtitle:'انضم إلى ملايين المتعلمين الذين يكتشفون متعة قراءة الأدب الإنجليزي الأصلي بمساعدة الذكاء الاصطناعي.', ai_title_1:'لا تترجم.', ai_title_2:'افهم.', ai_subtitle:'يقرأ الذكاء الاصطناعي في Readmigo معك، ويوفر السياق والترجمة ومساعدة المفردات فوراً.', sources_title:'مبني على المعرفة المفتوحة', sources_subtitle:'Readmigo مفتوح المصدر ومدعوم بأكبر المكتبات المجانية في العالم.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'أكثر من 100,000 كتاب إلكتروني مجاني من أقدم مكتبة رقمية في العالم.', source_librivox_title:'LibriVox', source_librivox_desc:'أكثر من 20,000 كتاب صوتي مجاني يقرأها متطوعون من جميع أنحاء العالم.', source_github_title:'مفتوح المصدر', source_github_desc:'Readmigo مفتوح المصدر. اطلع على الكود وساهم وساعدنا في التحسين.', footer_docs:'التوثيق', footer_blog_official:'مدونة',footer_col_language:'اللغة', about_vision_title:'الرؤية', about_vision_text:'اكتشف الكلاسيكيات. اقرأ أي شيء. افهم كل شيء.', about_mission_new_title:'المهمة', about_mission_new_text:'نضع أعظم أدب في العالم بين يديك — بذكاء اصطناعي يجعل كل صفحة سهلة الوصول، وكل كلمة مفهومة، وكل كتاب كلاسيكي مصدر قوة.', about_values_title:'القيم', about_values_opensource:'مفتوح المصدر', about_values_opensource_desc:'نبني بشكل مفتوح، للجميع.', about_values_share:'مشاركة المعرفة', about_values_share_desc:'الكتب العظيمة ملك للعالم، وليست خلف جدران مدفوعة.', about_values_ai:'الذكاء الاصطناعي للفهم', about_values_ai_desc:'تقنية تمكّن القراء، لا تحل محلهم.', about_library_title:'مكتبتنا', about_library_subtitle:'عالم من الأدب، مجاني ومفتوح للجميع.', about_lib_curated_title:'كلاسيكيات مختارة', about_lib_curated_desc:'أكثر من 1,300 إصدار إنجليزي محرر يدوياً بجودة النشر من Standard Ebooks.', about_lib_gutenberg_title:'مكتبة الملكية العامة', about_lib_gutenberg_desc:'أكثر من 70,000 كتاب كلاسيكي مجاني من Project Gutenberg، محسّن تلقائياً.', about_lib_global_title:'مجموعة عالمية متنامية', about_lib_global_desc:'نعمل على جلب ملايين الكتب الإضافية من الأرشيفات حول العالم، تغطي 60+ لغة عبر 6 قارات.', about_lib_stat_langs:'لغات الكتب', about_lib_stat_continents:'قارات', about_lib_stat_growing:'ينمو كل يوم', exp_title_1:'تجربة قراءة', exp_title_2:'لا مثيل لها', exp_subtitle:'كل التفاصيل مصممة لمتعة القراءة.', exp_typo_title:'طباعة بجودة النشر', exp_typo_desc:'تنسيق جميل يعرض كل كتاب كما أراده المؤلف.', exp_format_title:'اقرأ أي تنسيق', exp_format_desc:'استورد ملفات EPUB وPDF وMOBI الخاصة بك — تطبيق واحد لجميع كتبك.', exp_langs_title:'60+ لغة كتب', exp_langs_desc:'أدب بالإنجليزية والفرنسية والألمانية والإسبانية والصينية واليابانية و50+ لغة أخرى مع دعم طباعة أصلي.', exp_page_title:'تقليب صفحات غامر', exp_page_desc:'10 أنماط تقليب صفحات بما في ذلك تجعيد ثلاثي الأبعاد واقعي مع فيزياء واستجابة لمسية وأصوات ورق.', exp_highlight_title:'تمييز أثناء القراءة', exp_highlight_desc:'تابع كل كلمة أثناء نطقها. تمييز على مستوى الجملة يبقيك متزامناً — وضع كاريوكي أو تسطير أو فقرة.', exp_tts_title:'تحويل النص إلى كلام بالذكاء الاصطناعي', exp_tts_desc:'استمع لأي كتاب بأصوات ذكاء اصطناعي متعددة، سرعة قابلة للتعديل، وتوقفات طبيعية.', exp_audiobook_title:'20,000+ كتاب مسموع', exp_audiobook_desc:'كتب مسموعة مجانية بصوت بشري من LibriVox مع ترجمات مرئية على مستوى الجملة متزامنة مع النص.', exp_device_title:'سلس على كل جهاز', exp_device_desc:'أداء أصلي على iOS وAndroid والويب — تابع من حيث توقفت.' },
    pt: { htmlLang:'pt', title:'Readmigo - Leitura em ingl\u00eas com IA', description:'Leia qualquer livro. A IA est\u00e1 com voc\u00ea. Readmigo \u00e9 um app nativo de IA para ler e aprender ingl\u00eas com mais de 100.000 livros.', nav_support:'Suporte', nav_blog:'Blog', nav_download:'Baixar', hero_title_1:'Leia qualquer livro.', hero_title_2:'A IA est\u00e1 com voc\u00ea.', hero_subtitle:'Readmigo \u00e9 um app de leitura em ingl\u00eas com IA nativa, projetado para estudantes do mundo todo. Leia literatura cl\u00e1ssica com assist\u00eancia inteligente.', hero_appstore_label:'Baixe na', hero_appstore_store:'App Store', hero_gplay_label:'Dispon\u00edvel no', hero_gplay_store:'Google Play', hero_gplay_soon:'Em breve', hero_web_label:'Abrir', hero_web_store:'Web App', features_heading_1:'Tudo que voc\u00ea precisa para ', features_heading_2:'dominar a leitura em ingl\u00eas', f1_title:'100.000+ livros', f1_desc:'Grande cole\u00e7\u00e3o do Project Gutenberg, incluindo cl\u00e1ssicos de Shakespeare a Jane Austen.', f2_title:'Leitura em voz alta', f2_desc:'Ou\u00e7a qualquer livro com vozes naturais de IA. Transforme sua leitura em uma experi\u00eancia sem as m\u00e3os.', f3_title:'Audiolivros', f3_desc:'Acesse mais de 20.000 audiolivros gratuitos do LibriVox. Aprecie literatura cl\u00e1ssica narrada por pessoas reais.', f4_title:'Tradu\u00e7\u00e3o ao pressionar', f4_desc:'Pressione qualquer par\u00e1grafo para tradu\u00e7\u00e3o bil\u00edngue instant\u00e2nea. Compreenda o contexto sem sair da p\u00e1gina.', f5_title:'Sincroniza\u00e7\u00e3o de conta', f5_desc:'Entre com Apple ID ou Google para sincronizar sua biblioteca e progresso de leitura entre dispositivos.', f6_title:'Multidispositivo', f6_desc:'Leia sem interrup\u00e7\u00f5es no iOS, Android e Web. Continue exatamente de onde parou em qualquer dispositivo.', cta_title:'Comece sua jornada de leitura em ingl\u00eas hoje', cta_subtitle:'Baixe o Readmigo e descubra o prazer de ler em ingl\u00eas.', cta_button:'Comece grátis', footer_tagline:'Leitura e aprendizado de ingl\u00eas com IA para todos.', footer_legal:'Jur\u00eddico', footer_privacy:'Pol\u00edtica de privacidade', footer_terms:'Termos de servi\u00e7o', footer_credits:'Cr\u00e9ditos', footer_support:'Suporte', footer_help:'Central de ajuda', footer_delete:'Excluir conta', footer_contact:'Fale conosco', footer_language:'Idioma', footer_rights:'\u00a9 2025-2026 Readmigo. Todos os direitos reservados.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nossos Produtos', products_subtitle:'Ferramentas e apps projetados para melhorar sua experi\u00eancia de leitura e aprendizado.', products_flagship:'Principal', p1_desc:'App de leitura em ingl\u00eas com IA, com mais de 100.000 livros, audiolivros e assist\u00eancia inteligente.', p1_cta:'Obter o App', p2_desc:'Leitor RSS moderno de tr\u00eas colunas para se manter informado com feeds limpos e organizados.', p2_cta:'Abrir Web App', p3_desc:'Fique atualizado com as \u00faltimas an\u00e1lises, insights e resenhas de tecnologia IA.', p3_cta:'Ler Artigos', nav_products:'Produtos', nav_features:'Recursos', nav_about:'Sobre', nav_get_started:'Comece Agora', footer_col_products:'Produtos', footer_col_company:'Empresa', footer_blog:'Blog', about_title:'Sobre o Readmigo', about_subtitle:'A plataforma de leitura em inglês com IA nativa que transforma a literatura clássica em experiências acessíveis.', about_mission_title:'Nossa Missão', about_mission_p1:'Permitir que bilhões de falantes não nativos leiam e apreciem a literatura inglesa com assistência inteligente.', about_mission_p2:'Acreditamos que grandes livros não devem ser bloqueados por barreiras linguísticas.', about_stat_books:'Livros Clássicos', about_stat_audiobooks:'Audiolivros', about_stat_languages:'Idiomas', about_stat_platforms:'Plataformas', about_story_title:'Feito para o mundo', about_story_subtitle:'Readmigo é localizado para os 10 principais idiomas globais — não apenas a interface, mas toda a experiência de leitura.', about_l10n_ui_title:'11 idiomas de interface', about_l10n_ui_desc:'Toda a interface do app está traduzida para 11 idiomas.', about_l10n_content_title:'Conteúdo localizado', about_l10n_content_desc:'Títulos, descrições, biografias de autores e listas de livros são todos localizados.', about_l10n_translate_title:'Tradução com toque longo', about_l10n_translate_desc:'Toque longo em qualquer parágrafo para traduzir para seu idioma nativo. 10 idiomas.', about_l10n_langs_title:'Idiomas suportados', about_l10n_extra:'+ Hindi e alemão para tradução com toque longo', banner_reading_title:'Grandes livros não deveriam ser tão difíceis.', banner_reading_subtitle:'Ferramentas de tradução e vocabulário com IA tornam a literatura clássica acessível para cada estudante de inglês.', banner_classics_title:'Leia clássicos em inglês como nunca antes.', banner_classics_subtitle:'Junte-se a milhões de estudantes descobrindo o prazer de ler literatura inglesa original com assistência de IA.', ai_title_1:'Não traduza.', ai_title_2:'Compreenda.', ai_subtitle:'A IA do Readmigo lê junto com você, oferecendo contexto, tradução e ajuda com vocabulário instantaneamente.', sources_title:'Construído com conhecimento aberto', sources_subtitle:'Readmigo é open source e funciona com as maiores bibliotecas gratuitas do mundo.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'Mais de 100.000 e-books gratuitos da biblioteca digital mais antiga do mundo, fundada em 1971.', source_librivox_title:'LibriVox', source_librivox_desc:'Mais de 20.000 audiolivros gratuitos lidos por voluntários de todo o mundo.', source_github_title:'Código Aberto', source_github_desc:'Readmigo é open source. Veja nosso código, contribua e nos ajude a melhorar.', footer_docs:'Documentação', footer_blog_official:'Blog',footer_col_language:'Idioma', about_vision_title:'Visão', about_vision_text:'Descubra os clássicos. Leia qualquer coisa. Entenda tudo.', about_mission_new_title:'Missão', about_mission_new_text:'Trazendo a maior literatura do mundo às suas mãos — com IA que torna cada página acessível, cada palavra compreensível e cada clássico uma fonte de força.', about_values_title:'Valores', about_values_opensource:'Código Aberto', about_values_opensource_desc:'Construímos abertamente, para todos.', about_values_share:'Compartilhar Conhecimento', about_values_share_desc:'Grandes livros pertencem ao mundo, não atrás de paywalls.', about_values_ai:'IA para Compreensão', about_values_ai_desc:'Tecnologia que capacita leitores, não os substitui.', about_library_title:'Nossa Biblioteca', about_library_subtitle:'Um mundo de literatura, gratuito e aberto a todos.', about_lib_curated_title:'Clássicos Selecionados', about_lib_curated_desc:'1.300+ edições em inglês editadas à mão com qualidade de publicação da Standard Ebooks.', about_lib_gutenberg_title:'Biblioteca de Domínio Público', about_lib_gutenberg_desc:'70.000+ livros clássicos gratuitos do Project Gutenberg, aprimorados automaticamente.', about_lib_global_title:'Coleção Global em Expansão', about_lib_global_desc:'Trabalhando para trazer milhões de livros de domínio público de arquivos mundiais, cobrindo 60+ idiomas em 6 continentes.', about_lib_stat_langs:'Idiomas de Livros', about_lib_stat_continents:'Continentes', about_lib_stat_growing:'Crescendo Todos os Dias', exp_title_1:'Uma Experiência de Leitura', exp_title_2:'Sem Igual', exp_subtitle:'Cada detalhe projetado para o prazer da leitura.', exp_typo_title:'Tipografia de Qualidade Editorial', exp_typo_desc:'Composição tipográfica linda que reproduz fielmente cada livro como o autor pretendia.', exp_format_title:'Leia Qualquer Formato', exp_format_desc:'Importe seus próprios arquivos EPUB, PDF e MOBI — um app para todos os seus livros.', exp_langs_title:'60+ Idiomas de Livros', exp_langs_desc:'Literatura em inglês, francês, alemão, espanhol, chinês, japonês e 50+ com suporte tipográfico nativo.', exp_page_title:'Virada de Página Imersiva', exp_page_desc:'10 estilos de virada de página incluindo curvatura 3D realista com física, feedback tátil e sons de papel.', exp_highlight_title:'Destaque de Leitura', exp_highlight_desc:'Acompanhe cada palavra enquanto é lida. Destaque no nível da frase mantém você sincronizado — modo karaokê, sublinhado ou parágrafo.', exp_tts_title:'Texto para Fala com IA', exp_tts_desc:'Ouça qualquer livro com múltiplas vozes IA, velocidade ajustável e pausas naturais.', exp_audiobook_title:'20.000+ Audiolivros', exp_audiobook_desc:'Audiolivros gratuitos narrados por humanos do LibriVox com legendas sincronizadas ao texto.', exp_device_title:'Perfeito em Qualquer Dispositivo', exp_device_desc:'Desempenho nativo em iOS, Android e Web — continue exatamente de onde parou.' },
    id: { htmlLang:'id', title:'Readmigo - Membaca Bahasa Inggris dengan AI', description:'Baca buku apa saja. AI mendukungmu. Readmigo adalah aplikasi membaca dan belajar bahasa Inggris berbasis AI dengan 100.000+ buku.', nav_support:'Bantuan', nav_blog:'Blog', nav_download:'Unduh', hero_title_1:'Baca buku apa saja.', hero_title_2:'AI mendukungmu.', hero_subtitle:'Readmigo adalah aplikasi membaca bahasa Inggris berbasis AI yang dirancang untuk pelajar di seluruh dunia. Baca sastra klasik dengan bantuan AI cerdas.', hero_appstore_label:'Unduh di', hero_appstore_store:'App Store', hero_gplay_label:'Dapatkan di', hero_gplay_store:'Google Play', hero_gplay_soon:'Segera Hadir', hero_web_label:'Buka', hero_web_store:'Web App', features_heading_1:'Semua yang kamu butuhkan untuk ', features_heading_2:'menguasai membaca bahasa Inggris', f1_title:'100.000+ Buku', f1_desc:'Koleksi besar dari Project Gutenberg, termasuk karya klasik dari Shakespeare hingga Jane Austen.', f2_title:'Baca dengan Suara', f2_desc:'Dengarkan buku apa saja dengan suara AI alami. Ubah bacaanmu menjadi pengalaman hands-free.', f3_title:'Buku Audio', f3_desc:'Akses 20.000+ buku audio gratis dari LibriVox. Nikmati sastra klasik yang dibacakan oleh narator nyata.', f4_title:'Terjemahan Tekan Lama', f4_desc:'Tekan lama paragraf mana saja untuk terjemahan bilingual instan. Pahami konteks tanpa meninggalkan halaman.', f5_title:'Sinkronisasi Akun', f5_desc:'Masuk dengan Apple ID atau Google untuk menyinkronkan perpustakaan dan progres bacaanmu di semua perangkat.', f6_title:'Multi-Perangkat', f6_desc:'Baca dengan lancar di iOS, Android, dan Web. Lanjutkan tepat di mana kamu berhenti di perangkat mana saja.', cta_title:'Mulai perjalanan membaca bahasa Inggrismu hari ini', cta_subtitle:'Unduh Readmigo dan temukan kesenangan membaca dalam bahasa Inggris.', cta_button:'Mulai Gratis', footer_tagline:'Membaca dan belajar bahasa Inggris dengan AI untuk semua orang.', footer_legal:'Hukum', footer_privacy:'Kebijakan Privasi', footer_terms:'Ketentuan Layanan', footer_credits:'Kredit', footer_support:'Bantuan', footer_help:'Pusat Bantuan', footer_delete:'Hapus Akun', footer_contact:'Hubungi Kami', footer_language:'Bahasa', footer_rights:'\u00a9 2025-2026 Readmigo. Semua hak dilindungi.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Produk Kami', products_subtitle:'Alat dan aplikasi yang dirancang untuk meningkatkan pengalaman membaca dan belajarmu.', products_flagship:'Unggulan', p1_desc:'Aplikasi membaca bahasa Inggris bertenaga AI dengan 100.000+ buku, buku audio, dan bantuan membaca cerdas.', p1_cta:'Dapatkan Aplikasi', p2_desc:'Pembaca RSS modern tiga kolom untuk tetap terinformasi dengan feed yang bersih dan terorganisir.', p2_cta:'Buka Web App', p3_desc:'Tetap update dengan ulasan, wawasan, dan analisis teknologi AI terbaru.', p3_cta:'Baca Artikel', nav_products:'Produk', nav_features:'Fitur', nav_about:'Tentang', nav_get_started:'Mulai Sekarang', footer_col_products:'Produk', footer_col_company:'Perusahaan', footer_blog:'Blog', about_title:'Tentang Readmigo', about_subtitle:'Platform membaca bahasa Inggris berbasis AI yang mengubah sastra klasik menjadi pengalaman belajar yang mudah diakses.', about_mission_title:'Misi Kami', about_mission_p1:'Memungkinkan miliaran penutur non-native membaca dan menikmati sastra Inggris dengan bantuan AI cerdas.', about_mission_p2:'Kami percaya buku hebat tidak boleh terkunci di balik hambatan bahasa.', about_stat_books:'Buku Klasik', about_stat_audiobooks:'Buku Audio', about_stat_languages:'Bahasa', about_stat_platforms:'Platform', about_story_title:'Dibuat untuk dunia', about_story_subtitle:'Readmigo dilokalkan untuk 10 bahasa global teratas — bukan hanya antarmuka, tapi seluruh pengalaman membaca.', about_l10n_ui_title:'11 bahasa antarmuka', about_l10n_ui_desc:'Seluruh antarmuka aplikasi diterjemahkan ke 11 bahasa.', about_l10n_content_title:'Konten lokal', about_l10n_content_desc:'Judul buku, deskripsi, biografi penulis, dan daftar buku semuanya dilokalkan.', about_l10n_translate_title:'Terjemahan tekan lama', about_l10n_translate_desc:'Tekan lama paragraf mana saja untuk menerjemahkan ke bahasa ibu Anda. 10 bahasa.', about_l10n_langs_title:'Bahasa yang didukung', about_l10n_extra:'+ Hindi dan Jerman untuk terjemahan tekan lama', banner_reading_title:'Buku hebat tidak seharusnya sesulit ini.', banner_reading_subtitle:'Alat terjemahan dan kosakata bertenaga AI membuat sastra klasik mudah diakses oleh setiap pelajar bahasa Inggris.', banner_classics_title:'Baca klasik Inggris seperti belum pernah sebelumnya.', banner_classics_subtitle:'Bergabunglah dengan jutaan pelajar yang menemukan kesenangan membaca sastra Inggris asli dengan bantuan AI.', ai_title_1:'Jangan terjemahkan.', ai_title_2:'Pahami.', ai_subtitle:'AI Readmigo membaca bersamamu, memberikan konteks, terjemahan, dan bantuan kosa kata secara instan.', sources_title:'Dibangun di atas pengetahuan terbuka', sources_subtitle:'Readmigo bersifat open source dan didukung oleh perpustakaan gratis terbesar di dunia.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'Lebih dari 100.000 e-book gratis dari perpustakaan digital tertua di dunia.', source_librivox_title:'LibriVox', source_librivox_desc:'Lebih dari 20.000 buku audio gratis yang dibacakan oleh sukarelawan dari seluruh dunia.', source_github_title:'Open Source', source_github_desc:'Readmigo bersifat open source. Lihat kode kami, berkontribusi, dan bantu kami berkembang.', footer_docs:'Dokumentasi', footer_blog_official:'Blog',footer_col_language:'Bahasa', about_vision_title:'Visi', about_vision_text:'Temukan klasik. Baca apa saja. Pahami segalanya.', about_mission_new_title:'Misi', about_mission_new_text:'Membawa sastra terhebat dunia ke ujung jari Anda — dengan AI yang membuat setiap halaman mudah diakses, setiap kata mudah dipahami, dan setiap klasik menjadi sumber kekuatan.', about_values_title:'Nilai', about_values_opensource:'Open Source', about_values_opensource_desc:'Kami membangun secara terbuka, untuk semua orang.', about_values_share:'Berbagi Pengetahuan', about_values_share_desc:'Buku hebat milik dunia, bukan di balik dinding berbayar.', about_values_ai:'AI untuk Pemahaman', about_values_ai_desc:'Teknologi yang memberdayakan pembaca, bukan menggantikan mereka.', about_library_title:'Perpustakaan Kami', about_library_subtitle:'Dunia sastra, gratis dan terbuka untuk semua.', about_lib_curated_title:'Klasik Terkurasi', about_lib_curated_desc:'1.300+ edisi bahasa Inggris yang diedit tangan dengan kualitas publikasi dari Standard Ebooks.', about_lib_gutenberg_title:'Perpustakaan Domain Publik', about_lib_gutenberg_desc:'70.000+ buku klasik gratis dari Project Gutenberg, ditingkatkan secara otomatis.', about_lib_global_title:'Koleksi Global yang Berkembang', about_lib_global_desc:'Berupaya membawa jutaan buku domain publik lainnya dari arsip seluruh dunia, mencakup 60+ bahasa di 6 benua.', about_lib_stat_langs:'Bahasa Buku', about_lib_stat_continents:'Benua', about_lib_stat_growing:'Bertumbuh Setiap Hari', exp_title_1:'Pengalaman Membaca', exp_title_2:'Tak Tertandingi', exp_subtitle:'Setiap detail dirancang untuk kesenangan membaca.', exp_typo_title:'Tipografi Kualitas Publikasi', exp_typo_desc:'Tata letak indah yang mereproduksi setiap buku dengan setia sesuai keinginan penulisnya.', exp_format_title:'Baca Format Apa Saja', exp_format_desc:'Impor file EPUB, PDF, dan MOBI Anda — satu aplikasi untuk semua buku Anda.', exp_langs_title:'60+ Bahasa Buku', exp_langs_desc:'Sastra dalam bahasa Inggris, Prancis, Jerman, Spanyol, Cina, Jepang, dan 50+ lainnya dengan dukungan tipografi asli.', exp_page_title:'Pembalikan Halaman Imersif', exp_page_desc:'10 gaya pembalikan halaman termasuk lipatan 3D realistis dengan fisika, umpan balik haptic, dan suara kertas.', exp_highlight_title:'Sorotan Baca-Bersama', exp_highlight_desc:'Ikuti setiap kata saat diucapkan. Sorotan tingkat kalimat menjaga Anda tetap sinkron — mode karaoke, garis bawah, atau paragraf.', exp_tts_title:'Teks ke Suara AI', exp_tts_desc:'Dengarkan buku apa saja dengan beberapa suara AI, kecepatan yang dapat disesuaikan, dan jeda alami.', exp_audiobook_title:'20.000+ Buku Audio', exp_audiobook_desc:'Buku audio gratis yang dinarasikan manusia dari LibriVox dengan subtitle tingkat kalimat yang disinkronkan dengan teks.', exp_device_title:'Mulus di Setiap Perangkat', exp_device_desc:'Performa asli di iOS, Android, dan Web — lanjutkan tepat di mana Anda berhenti.' },
    fr: { htmlLang:'fr', title:'Readmigo - Lecture en anglais par IA', description:"Lisez n'importe quel livre. L'IA vous accompagne. Readmigo est une app native IA pour lire et apprendre l'anglais avec plus de 100 000 livres.", nav_support:'Assistance', nav_blog:'Blog', nav_download:'T\u00e9l\u00e9charger', hero_title_1:"Lisez n'importe quel livre.", hero_title_2:"L'IA vous accompagne.", hero_subtitle:"Readmigo est une app de lecture en anglais par IA con\u00e7ue pour les apprenants du monde entier. Lisez la litt\u00e9rature classique avec une assistance intelligente.", hero_appstore_label:'T\u00e9l\u00e9charger sur', hero_appstore_store:"l'App Store", hero_gplay_label:'Disponible sur', hero_gplay_store:'Google Play', hero_gplay_soon:'Bientôt', hero_web_label:'Lancer', hero_web_store:'Web App', features_heading_1:"Tout ce qu'il faut pour ", features_heading_2:"ma\u00eetriser la lecture en anglais", f1_title:'100 000+ livres', f1_desc:"Vaste collection du Projet Gutenberg, comprenant des classiques de Shakespeare \u00e0 Jane Austen.", f2_title:'Lecture \u00e0 voix haute', f2_desc:"\u00c9coutez n'importe quel livre avec des voix IA naturelles. Transformez votre lecture en exp\u00e9rience mains libres.", f3_title:'Livres audio', f3_desc:"Acc\u00e9dez \u00e0 plus de 20 000 livres audio gratuits de LibriVox. Profitez de la litt\u00e9rature classique lue par de vrais narrateurs.", f4_title:'Traduction par appui long', f4_desc:"Appuyez longuement sur un paragraphe pour une traduction bilingue instantan\u00e9e. Comprenez le contexte sans quitter la page.", f5_title:'Synchronisation du compte', f5_desc:"Connectez-vous avec Apple ID ou Google pour synchroniser votre biblioth\u00e8que et votre progression entre appareils.", f6_title:'Multi-appareils', f6_desc:"Lisez sans interruption sur iOS, Android et le Web. Reprenez l\u00e0 o\u00f9 vous vous \u00eates arr\u00eat\u00e9 sur n'importe quel appareil.", cta_title:"Commencez votre aventure de lecture en anglais aujourd'hui", cta_subtitle:"T\u00e9l\u00e9chargez Readmigo et d\u00e9couvrez le plaisir de lire en anglais.", cta_button:'Commencer gratuitement', footer_tagline:"Lecture et apprentissage de l'anglais par IA pour tous.", footer_legal:'Mentions l\u00e9gales', footer_privacy:'Politique de confidentialit\u00e9', footer_terms:"Conditions d'utilisation", footer_credits:'Cr\u00e9dits', footer_support:'Assistance', footer_help:"Centre d'aide", footer_delete:'Supprimer le compte', footer_contact:'Nous contacter', footer_language:'Langue', footer_rights:'\u00a9 2025-2026 Readmigo. Tous droits r\u00e9serv\u00e9s.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'Nos Produits', products_subtitle:'Outils et applications con\u00e7us pour am\u00e9liorer votre exp\u00e9rience de lecture et d\'apprentissage.', products_flagship:'Phare', p1_desc:'App de lecture en anglais par IA avec plus de 100 000 livres, livres audio et assistance intelligente.', p1_cta:"Obtenir l'App", p2_desc:'Lecteur RSS moderne \u00e0 trois colonnes pour rester inform\u00e9 avec des flux propres et organis\u00e9s.', p2_cta:'Ouvrir l\'App Web', p3_desc:'Restez \u00e0 jour avec les derni\u00e8res analyses, critiques et perspectives sur les technologies IA.', p3_cta:'Lire les Articles', nav_products:'Produits', nav_features:'Fonctionnalités', nav_about:'À propos', nav_get_started:'Commencer', footer_col_products:'Produits', footer_col_company:'Entreprise', footer_blog:'Blog', about_title:'À propos de Readmigo', about_subtitle:'La plateforme de lecture en anglais par IA native qui transforme la littérature classique en expériences accessibles.', about_mission_title:'Notre Mission', about_mission_p1:'Permettre à des milliards de locuteurs non natifs de lire la littérature anglaise avec une assistance IA intelligente.', about_mission_p2:'Nous croyons que les grands livres ne devraient pas être bloqués par des barrières linguistiques.', about_stat_books:'Livres Classiques', about_stat_audiobooks:'Livres Audio', about_stat_languages:'Langues', about_stat_platforms:'Plateformes', about_story_title:'Conçu pour le monde', about_story_subtitle:"Readmigo est localisé pour les 10 premières langues mondiales — pas seulement l'interface, mais toute l'expérience de lecture.", about_l10n_ui_title:"11 langues d'interface", about_l10n_ui_desc:"L'interface complète de l'app est traduite en 11 langues.", about_l10n_content_title:'Contenu localisé', about_l10n_content_desc:"Titres, descriptions, biographies d'auteurs et listes de livres sont tous localisés.", about_l10n_translate_title:'Traduction par appui long', about_l10n_translate_desc:'Appuyez longuement sur un paragraphe pour le traduire dans votre langue maternelle. 10 langues.', about_l10n_langs_title:'Langues prises en charge', about_l10n_extra:'+ Hindi et allemand pour la traduction par appui long', banner_reading_title:'Les grands livres ne devraient pas être si difficiles.', banner_reading_subtitle:"Les outils de traduction et de vocabulaire par IA rendent la littérature classique accessible à chaque apprenant d'anglais.", banner_classics_title:'Lisez les classiques anglais comme jamais auparavant.', banner_classics_subtitle:"Rejoignez des millions d'apprenants découvrant le plaisir de lire la littérature anglaise originale avec l'assistance de l'IA.", ai_title_1:'Ne traduisez pas.', ai_title_2:'Comprenez.', ai_subtitle:"L\u2019IA de Readmigo lit \u00e0 vos c\u00f4t\u00e9s, offrant contexte, traduction et aide au vocabulaire instantan\u00e9ment.", sources_title:'Construit sur le savoir ouvert', sources_subtitle:'Readmigo est open source et fonctionne avec les plus grandes biblioth\u00e8ques gratuites du monde.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'Plus de 100 000 livres num\u00e9riques gratuits de la plus ancienne biblioth\u00e8que num\u00e9rique au monde.', source_librivox_title:'LibriVox', source_librivox_desc:'Plus de 20 000 livres audio gratuits lus par des b\u00e9n\u00e9voles du monde entier.', source_github_title:'Open Source', source_github_desc:'Readmigo est open source. Consultez notre code, contribuez et aidez-nous.', footer_docs:'Documentation', footer_blog_official:'Blog',footer_col_language:'Langue', about_vision_title:'Vision', about_vision_text:'Découvrez les classiques. Lisez tout. Comprenez tout.', about_mission_new_title:'Mission', about_mission_new_text:'Mettre la plus grande littérature du monde à portée de main — avec une IA qui rend chaque page accessible, chaque mot compréhensible et chaque classique une source de force.', about_values_title:'Valeurs', about_values_opensource:'Open Source', about_values_opensource_desc:'Nous construisons ouvertement, pour tous.', about_values_share:'Partager le Savoir', about_values_share_desc:'Les grands livres appartiennent au monde, pas derrière des murs payants.', about_values_ai:'IA pour Comprendre', about_values_ai_desc:'Une technologie qui renforce les lecteurs, pas qui les remplace.', about_library_title:'Notre Bibliothèque', about_library_subtitle:'Un monde de littérature, gratuit et ouvert à tous.', about_lib_curated_title:'Classiques Sélectionnés', about_lib_curated_desc:'1 300+ éditions anglaises éditées à la main avec qualité de publication de Standard Ebooks.', about_lib_gutenberg_title:'Bibliothèque du Domaine Public', about_lib_gutenberg_desc:'70 000+ livres classiques gratuits de Project Gutenberg, automatiquement améliorés.', about_lib_global_title:'Collection Mondiale en Expansion', about_lib_global_desc:'Nous travaillons à apporter des millions de livres du domaine public d\'archives du monde entier, couvrant 60+ langues sur 6 continents.', about_lib_stat_langs:'Langues de Livres', about_lib_stat_continents:'Continents', about_lib_stat_growing:'En Croissance Chaque Jour', exp_title_1:'Une Expérience de Lecture', exp_title_2:'Sans Pareille', exp_subtitle:'Chaque détail conçu pour le plaisir de lire.', exp_typo_title:'Typographie de Qualité Éditoriale', exp_typo_desc:'Une mise en page magnifique qui reproduit fidèlement chaque livre comme l\'auteur le voulait.', exp_format_title:'Lisez N\'importe Quel Format', exp_format_desc:'Importez vos propres fichiers EPUB, PDF et MOBI — une seule app pour tous vos livres.', exp_langs_title:'60+ Langues de Livres', exp_langs_desc:'Littérature en anglais, français, allemand, espagnol, chinois, japonais et 50+ autres avec support typographique natif.', exp_page_title:'Tournage de Page Immersif', exp_page_desc:'10 styles de tournage de page dont un enroulement 3D réaliste avec physique, retour haptique et sons de papier.', exp_highlight_title:'Surlignage de Lecture', exp_highlight_desc:'Suivez chaque mot prononcé. Le surlignage au niveau de la phrase vous garde synchronisé — mode karaoké, souligné ou paragraphe.', exp_tts_title:'Synthèse Vocale IA', exp_tts_desc:'Écoutez n\'importe quel livre avec plusieurs voix IA, vitesse réglable et pauses naturelles.', exp_audiobook_title:'20 000+ Livres Audio', exp_audiobook_desc:'Livres audio gratuits narrés par des humains de LibriVox avec sous-titres synchronisés au texte.', exp_device_title:'Parfait sur Chaque Appareil', exp_device_desc:'Performance native sur iOS, Android et Web — reprenez là où vous vous êtes arrêté.' },
    ja: { htmlLang:'ja', title:'Readmigo - AI\u642d\u8f09\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0', description:'\u3069\u3093\u306a\u672c\u3067\u3082\u8aad\u3081\u307e\u3059\u3002AI\u304c\u3042\u306a\u305f\u3092\u30b5\u30dd\u30fc\u30c8\u3002Readmigo\u306f10\u4e07\u518a\u4ee5\u4e0a\u306e\u66f8\u7c4d\u3092\u5099\u3048\u305fAI\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u5b66\u7fd2\u30a2\u30d7\u30ea\u3067\u3059\u3002', nav_support:'\u30b5\u30dd\u30fc\u30c8', nav_blog:'ブログ', nav_download:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_title_1:'\u3069\u3093\u306a\u672c\u3067\u3082\u8aad\u3081\u308b\u3002', hero_title_2:'AI\u304c\u3042\u306a\u305f\u3092\u30b5\u30dd\u30fc\u30c8\u3002', hero_subtitle:'Readmigo\u306f\u4e16\u754c\u4e2d\u306e\u5b66\u7fd2\u8005\u306e\u305f\u3081\u306b\u8a2d\u8a08\u3055\u308c\u305fAI\u30cd\u30a4\u30c6\u30a3\u30d6\u306e\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30d7\u30ea\u3067\u3059\u3002\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u306aAI\u30a2\u30b7\u30b9\u30bf\u30f3\u30b9\u3067\u53e4\u5178\u6587\u5b66\u3092\u8aad\u307f\u307e\u3057\u3087\u3046\u3002', hero_appstore_label:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_appstore_store:'App Store', hero_gplay_label:'\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9', hero_gplay_store:'Google Play', hero_gplay_soon:'近日公開', hero_web_label:'起動', hero_web_store:'Webアプリ', features_heading_1:'\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u3092\u30de\u30b9\u30bf\u30fc\u3059\u308b\u305f\u3081\u306e', features_heading_2:'\u3059\u3079\u3066\u304c\u63c3\u3063\u3066\u3044\u307e\u3059', f1_title:'10\u4e07\u518a\u4ee5\u4e0a', f1_desc:'\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30fb\u30b0\u30fc\u30c6\u30f3\u30d9\u30eb\u30af\u306e\u81a8\u5927\u306a\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u3002\u30b7\u30a7\u30a4\u30af\u30b9\u30d4\u30a2\u304b\u3089\u30b8\u30a7\u30fc\u30f3\u30fb\u30aa\u30fc\u30b9\u30c6\u30a3\u30f3\u307e\u3067\u306e\u540d\u4f5c\u304c\u63c3\u3063\u3066\u3044\u307e\u3059\u3002', f2_title:'AI\u97f3\u58f0\u8aad\u307f\u4e0a\u3052', f2_desc:'\u81ea\u7136\u306aAI\u97f3\u58f0\u3067\u3069\u3093\u306a\u672c\u3067\u3082\u8074\u3051\u307e\u3059\u3002\u30cf\u30f3\u30ba\u30d5\u30ea\u30fc\u3067\u8aad\u66f8\u3092\u697d\u3057\u3081\u307e\u3059\u3002', f3_title:'\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af', f3_desc:'LibriVox\u306e2\u4e07\u518a\u4ee5\u4e0a\u306e\u7121\u6599\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af\u306b\u30a2\u30af\u30bb\u30b9\u3002\u672c\u7269\u306e\u30ca\u30ec\u30fc\u30bf\u30fc\u306b\u3088\u308b\u53e4\u5178\u6587\u5b66\u3092\u304a\u697d\u3057\u307f\u304f\u3060\u3055\u3044\u3002', f4_title:'\u9577\u62bc\u3057\u7ffb\u8a33', f4_desc:'\u6bb5\u843d\u3092\u9577\u62bc\u3057\u3059\u308b\u3060\u3051\u3067\u5373\u5ea7\u306b\u30d0\u30a4\u30ea\u30f3\u30ac\u30eb\u7ffb\u8a33\u3002\u30da\u30fc\u30b8\u3092\u96e2\u308c\u305a\u306b\u6587\u8108\u3092\u7406\u89e3\u3067\u304d\u307e\u3059\u3002', f5_title:'\u30a2\u30ab\u30a6\u30f3\u30c8\u540c\u671f', f5_desc:'Apple ID\u307e\u305f\u306fGoogle\u3067\u30b5\u30a4\u30f3\u30a4\u30f3\u3057\u3001\u30c7\u30d0\u30a4\u30b9\u9593\u3067\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u8aad\u66f8\u9032\u6357\u3092\u540c\u671f\u3002', f6_title:'\u30de\u30eb\u30c1\u30c7\u30d0\u30a4\u30b9', f6_desc:'iOS\u3001Android\u3001Web\u3067\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u8aad\u66f8\u3002\u3069\u306e\u30c7\u30d0\u30a4\u30b9\u3067\u3082\u4e2d\u65ad\u3057\u305f\u3068\u3053\u308d\u304b\u3089\u518d\u958b\u3067\u304d\u307e\u3059\u3002', cta_title:'\u4eca\u65e5\u304b\u3089\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u306e\u65c5\u3092\u59cb\u3081\u307e\u3057\u3087\u3046', cta_subtitle:'Readmigo\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u3001\u82f1\u8a9e\u3067\u8aad\u3080\u697d\u3057\u3055\u3092\u767a\u898b\u3057\u307e\u3057\u3087\u3046\u3002', cta_button:'無料で始める', footer_tagline:'\u3059\u3079\u3066\u306e\u4eba\u306e\u305f\u3081\u306eAI\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\uff06\u5b66\u7fd2\u3002', footer_legal:'\u6cd5\u7684\u60c5\u5831', footer_privacy:'\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u30dd\u30ea\u30b7\u30fc', footer_terms:'\u5229\u7528\u898f\u7d04', footer_credits:'\u30af\u30ec\u30b8\u30c3\u30c8', footer_support:'\u30b5\u30dd\u30fc\u30c8', footer_help:'\u30d8\u30eb\u30d7\u30bb\u30f3\u30bf\u30fc', footer_delete:'\u30a2\u30ab\u30a6\u30f3\u30c8\u524a\u9664', footer_contact:'\u304a\u554f\u3044\u5408\u308f\u305b', footer_language:'\u8a00\u8a9e', footer_rights:'\u00a9 2025-2026 Readmigo. All rights reserved.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u88fd\u54c1\u30e9\u30a4\u30f3\u30ca\u30c3\u30d7', products_subtitle:'\u8aad\u66f8\u3068\u5b66\u7fd2\u4f53\u9a13\u3092\u5411\u4e0a\u3055\u305b\u308b\u30c4\u30fc\u30eb\u3068\u30a2\u30d7\u30ea\u3002', products_flagship:'\u30d5\u30e9\u30c3\u30b0\u30b7\u30c3\u30d7', p1_desc:'10\u4e07\u518a\u4ee5\u4e0a\u306e\u66f8\u7c4d\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d6\u30c3\u30af\u3001\u30a4\u30f3\u30c6\u30ea\u30b8\u30a7\u30f3\u30c8\u8aad\u66f8\u652f\u63f4\u3092\u5099\u3048\u305fAI\u642d\u8f09\u82f1\u8a9e\u30ea\u30fc\u30c7\u30a3\u30f3\u30b0\u30a2\u30d7\u30ea\u3002', p1_cta:'アプリを入手', p2_desc:'\u6574\u7406\u3055\u308c\u305f\u30d5\u30a3\u30fc\u30c9\u3067\u60c5\u5831\u3092\u628a\u63e1\u3067\u304d\u308b\u30e2\u30c0\u30f3\u306a3\u30ab\u30e9\u30e0RSS\u30ea\u30fc\u30c0\u30fc\u3002', p2_cta:'Web\u30a2\u30d7\u30ea\u3092\u958b\u304f', p3_desc:'\u6700\u65b0\u306eAI\u30c6\u30af\u30ce\u30ed\u30b8\u30fc\u30ec\u30d3\u30e5\u30fc\u3001\u30a4\u30f3\u30b5\u30a4\u30c8\u3001\u5206\u6790\u3092\u30c1\u30a7\u30c3\u30af\u3002', p3_cta:'\u8a18\u4e8b\u3092\u8aad\u3080', nav_products:'製品', nav_features:'機能', nav_about:'概要', nav_get_started:'始める', footer_col_products:'製品', footer_col_company:'会社', footer_blog:'ブログ', about_title:'Readmigoについて', about_subtitle:'AIネイティブの英語読書プラットフォーム。古典文学をアクセシブルな学習体験に。', about_mission_title:'私たちのミッション', about_mission_p1:'数十億の非英語話者がAIの支援で英文学を楽しめるように。', about_mission_p2:'素晴らしい本が言語の壁に阻まれるべきではありません。', about_stat_books:'古典書籍', about_stat_audiobooks:'オーディオブック', about_stat_languages:'言語', about_stat_platforms:'プラットフォーム', about_story_title:'世界のために作られた', about_story_subtitle:'Readmigoはグローバルトップ10言語にローカライズ——UIだけでなく、読書体験全体が対応。', about_l10n_ui_title:'11のUI言語', about_l10n_ui_desc:'アプリのインターフェース全体が11言語に完全翻訳されています。', about_l10n_content_title:'コンテンツのローカライズ', about_l10n_content_desc:'書名、説明、著者紹介、ジャンル、ブックリストすべてがローカライズ。', about_l10n_translate_title:'長押し翻訳', about_l10n_translate_desc:'段落を長押しして母語に即座に翻訳。10言語対応。', about_l10n_langs_title:'対応言語', about_l10n_extra:'+ ヒンディー語とドイツ語の長押し翻訳対応', banner_reading_title:'名作は、こんなに難しくないはず。', banner_reading_subtitle:'AI翻訳と語彙ツールで、クラシック文学をすべての英語学習者に身近なものに。', banner_classics_title:'かつてない方法で英語の名作を読む。', banner_classics_subtitle:'AI支援で英語原書を楽しむ数百万の学習者に加わりましょう。', ai_title_1:'翻訳するな。', ai_title_2:'理解しろ。', ai_subtitle:'ReadmigoのAIがあなたと一緒に読み、必要な時に文脈、翻訳、語彙のサポートを即座に提供します。', sources_title:'オープンな知識で構築', sources_subtitle:'Readmigoはオープンソースで、世界最大の無料図書館をベースにしています。', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'1971年設立の世界最古のデジタル図書館から10万冊以上の無料電子書籍。', source_librivox_title:'LibriVox', source_librivox_desc:'世界中のボランティアが朗読した2万冊以上の無料オーディオブック。', source_github_title:'オープンソース', source_github_desc:'Readmigoはオープンソースです。コードを見る、貢献する、改善に協力する。', footer_docs:'ドキュメント', footer_blog_official:'ブログ',footer_col_language:'言語', about_vision_title:'ビジョン', about_vision_text:'名作を発見。何でも読める。すべてを理解。', about_mission_new_title:'ミッション', about_mission_new_text:'世界最高の文学をあなたの指先に——AIがすべてのページをアクセシブルに、すべての言葉を理解可能に、すべての名作を力の源に。', about_values_title:'価値観', about_values_opensource:'オープンソース', about_values_opensource_desc:'オープンに構築し、すべての人のために。', about_values_share:'知識の共有', about_values_share_desc:'偉大な本は世界のもの。有料の壁の向こうにあるべきではありません。', about_values_ai:'理解のためのAI', about_values_ai_desc:'読者を力づける技術であり、取って代わるものではありません。', about_library_title:'私たちの図書館', about_library_subtitle:'文学の世界、無料ですべての人に開かれています。', about_lib_curated_title:'厳選された名作', about_lib_curated_desc:'Standard Ebooksの手編集、出版品質の英語版1,300+作品。', about_lib_gutenberg_title:'パブリックドメインライブラリ', about_lib_gutenberg_desc:'Project Gutenbergの70,000+の無料古典書籍、自動的に最適化。', about_lib_global_title:'拡大するグローバルコレクション', about_lib_global_desc:'世界中のアーカイブから数百万のパブリックドメイン書籍を追加中。6大陸60+言語をカバー。', about_lib_stat_langs:'書籍言語', about_lib_stat_continents:'大陸', about_lib_stat_growing:'毎日成長中', exp_title_1:'比類なき', exp_title_2:'読書体験', exp_subtitle:'すべてのディテールが、読書の喜びのために作られています。', exp_typo_title:'出版品質のタイポグラフィ', exp_typo_desc:'著者の意図通りに忠実に再現する美しい組版。', exp_format_title:'あらゆるフォーマットを読む', exp_format_desc:'EPUB、PDF、MOBIファイルをインポート——1つのアプリですべての本を。', exp_langs_title:'60+の書籍言語', exp_langs_desc:'英語、フランス語、ドイツ語、スペイン語、中国語、日本語など50+言語の文学をネイティブタイポグラフィでサポート。', exp_page_title:'没入型ページめくり', exp_page_desc:'リアルな3Dカール物理、触覚フィードバック、紙の音を含む10種類のページめくりスタイル。', exp_highlight_title:'リードアロングハイライト', exp_highlight_desc:'話される各単語を追いかける。文レベルのハイライトで同期——カラオケ、アンダーライン、段落モード。', exp_tts_title:'AIテキスト読み上げ', exp_tts_desc:'複数のAI音声、調節可能な速度、自然なポーズで任意の本を聴く。', exp_audiobook_title:'20,000+オーディオブック', exp_audiobook_desc:'LibriVoxの無料の人間ナレーションオーディオブック、テキストと同期した文レベルの字幕付き。', exp_device_title:'あらゆるデバイスでシームレス', exp_device_desc:'iOS、Android、Webでネイティブパフォーマンス——前回の続きから読めます。' },
    ru: { htmlLang:'ru', title:'Readmigo - \u0427\u0442\u0435\u043d\u0438\u0435 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441 \u0418\u0418', description:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443. \u0418\u0418 \u0432\u0430\u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442. Readmigo \u2014 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0418\u0418-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0441 \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 100 000 \u043a\u043d\u0438\u0433.', nav_support:'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', nav_blog:'Блог', nav_download:'\u0421\u043a\u0430\u0447\u0430\u0442\u044c', hero_title_1:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443.', hero_title_2:'\u0418\u0418 \u0432\u0430\u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442.', hero_subtitle:'Readmigo \u2014 \u043d\u0430\u0442\u0438\u0432\u043d\u043e\u0435 \u0418\u0418-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c, \u0441\u043e\u0437\u0434\u0430\u043d\u043d\u043e\u0435 \u0434\u043b\u044f \u0443\u0447\u0430\u0449\u0438\u0445\u0441\u044f \u043f\u043e \u0432\u0441\u0435\u043c\u0443 \u043c\u0438\u0440\u0443. \u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443 \u0441 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u043e\u0439 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u0418\u0418.', hero_appstore_label:'\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432', hero_appstore_store:'App Store', hero_gplay_label:'\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432', hero_gplay_store:'Google Play', hero_gplay_soon:'Скоро', hero_web_label:'Открыть', hero_web_store:'Веб-приложение', features_heading_1:'\u0412\u0441\u0451, \u0447\u0442\u043e \u043d\u0443\u0436\u043d\u043e \u0434\u043b\u044f ', features_heading_2:'\u043e\u0441\u0432\u043e\u0435\u043d\u0438\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c', f1_title:'100 000+ \u043a\u043d\u0438\u0433', f1_desc:'\u041e\u0433\u0440\u043e\u043c\u043d\u0430\u044f \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0438\u0437 \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u00ab\u0413\u0443\u0442\u0435\u043d\u0431\u0435\u0440\u0433\u00bb, \u0432\u043a\u043b\u044e\u0447\u0430\u044f \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u0443 \u043e\u0442 \u0428\u0435\u043a\u0441\u043f\u0438\u0440\u0430 \u0434\u043e \u0414\u0436\u0435\u0439\u043d \u041e\u0441\u0442\u0438\u043d.', f2_title:'\u0427\u0442\u0435\u043d\u0438\u0435 \u0432\u0441\u043b\u0443\u0445', f2_desc:'\u0421\u043b\u0443\u0448\u0430\u0439\u0442\u0435 \u043b\u044e\u0431\u0443\u044e \u043a\u043d\u0438\u0433\u0443 \u0441 \u0435\u0441\u0442\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u043c\u0438 \u0433\u043e\u043b\u043e\u0441\u0430\u043c\u0438 \u0418\u0418. \u041f\u0440\u0435\u0432\u0440\u0430\u0442\u0438\u0442\u0435 \u0447\u0442\u0435\u043d\u0438\u0435 \u0432 \u043e\u043f\u044b\u0442 \u0431\u0435\u0437 \u0440\u0443\u043a.', f3_title:'\u0410\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433\u0438', f3_desc:'\u0414\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u043e\u043b\u0435\u0435 \u0447\u0435\u043c 20 000 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u0430\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433 \u0438\u0437 LibriVox. \u041d\u0430\u0441\u043b\u0430\u0436\u0434\u0430\u0439\u0442\u0435\u0441\u044c \u043a\u043b\u0430\u0441\u0441\u0438\u043a\u043e\u0439 \u0432 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0445 \u0447\u0442\u0435\u0446\u043e\u0432.', f4_title:'\u041f\u0435\u0440\u0435\u0432\u043e\u0434 \u0434\u043e\u043b\u0433\u0438\u043c \u043d\u0430\u0436\u0430\u0442\u0438\u0435\u043c', f4_desc:'\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0430\u0431\u0437\u0430\u0446 \u0434\u043b\u044f \u043c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u043e\u0433\u043e \u0434\u0432\u0443\u044f\u0437\u044b\u0447\u043d\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u0432\u043e\u0434\u0430. \u041f\u043e\u043d\u0438\u043c\u0430\u0439\u0442\u0435 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442, \u043d\u0435 \u043f\u043e\u043a\u0438\u0434\u0430\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443.', f5_title:'\u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0430\u043a\u043a\u0430\u0443\u043d\u0442\u0430', f5_desc:'\u0412\u043e\u0439\u0434\u0438\u0442\u0435 \u0447\u0435\u0440\u0435\u0437 Apple ID \u0438\u043b\u0438 Google \u0434\u043b\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0438 \u0438 \u043f\u0440\u043e\u0433\u0440\u0435\u0441\u0441\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c\u0438.', f6_title:'\u041c\u0443\u043b\u044c\u0442\u0438\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e', f6_desc:'\u0427\u0438\u0442\u0430\u0439\u0442\u0435 \u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0440\u044b\u0432\u043e\u0432 \u043d\u0430 iOS, Android \u0438 \u0432 \u0432\u0435\u0431\u0435. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439\u0442\u0435 \u0441 \u0442\u043e\u0433\u043e \u043c\u0435\u0441\u0442\u0430, \u0433\u0434\u0435 \u043e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u043b\u0438\u0441\u044c, \u043d\u0430 \u043b\u044e\u0431\u043e\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0435.', cta_title:'\u041d\u0430\u0447\u043d\u0438\u0442\u0435 \u0441\u0432\u043e\u0451 \u043f\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u0435 \u0432 \u0447\u0442\u0435\u043d\u0438\u0438 \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441\u0435\u0433\u043e\u0434\u043d\u044f', cta_subtitle:'\u0421\u043a\u0430\u0447\u0430\u0439\u0442\u0435 Readmigo \u0438 \u043e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0440\u0430\u0434\u043e\u0441\u0442\u044c \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c.', cta_button:'Начать бесплатно', footer_tagline:'\u0427\u0442\u0435\u043d\u0438\u0435 \u0438 \u0438\u0437\u0443\u0447\u0435\u043d\u0438\u0435 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u0433\u043e \u0441 \u0418\u0418 \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e.', footer_legal:'\u041f\u0440\u0430\u0432\u043e\u0432\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f', footer_privacy:'\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438', footer_terms:'\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f', footer_credits:'\u0410\u0432\u0442\u043e\u0440\u044b', footer_support:'\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430', footer_help:'\u0426\u0435\u043d\u0442\u0440 \u043f\u043e\u043c\u043e\u0449\u0438', footer_delete:'\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442', footer_contact:'\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f \u0441 \u043d\u0430\u043c\u0438', footer_language:'\u042f\u0437\u044b\u043a', footer_rights:'\u00a9 2025-2026 Readmigo. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\u041d\u0430\u0448\u0438 \u041f\u0440\u043e\u0434\u0443\u043a\u0442\u044b', products_subtitle:'\u0418\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u044b \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043e\u043f\u044b\u0442\u0430 \u0447\u0442\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f.', products_flagship:'\u0424\u043b\u0430\u0433\u043c\u0430\u043d', p1_desc:'\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u0430 \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u043e\u043c \u0441 \u0418\u0418: \u0431\u043e\u043b\u0435\u0435 100 000 \u043a\u043d\u0438\u0433, \u0430\u0443\u0434\u0438\u043e\u043a\u043d\u0438\u0433\u0438 \u0438 \u0438\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u043c\u043e\u0449\u044c.', p1_cta:'Скачать', p2_desc:'\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0442\u0440\u0451\u0445\u043a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0439 RSS-\u0440\u0438\u0434\u0435\u0440 \u0434\u043b\u044f \u0443\u0434\u043e\u0431\u043d\u043e\u0433\u043e \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u043e\u0433\u043e \u0447\u0442\u0435\u043d\u0438\u044f \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439.', p2_cta:'\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435', p3_desc:'\u0411\u0443\u0434\u044c\u0442\u0435 \u0432 \u043a\u0443\u0440\u0441\u0435 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0445 \u043e\u0431\u0437\u043e\u0440\u043e\u0432, \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u0438\u043d\u0441\u0430\u0439\u0442\u043e\u0432 \u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u0418\u0418-\u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439.', p3_cta:'\u0427\u0438\u0442\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u044c\u0438', nav_products:'Продукты', nav_features:'Функции', nav_about:'О нас', nav_get_started:'Начать', footer_col_products:'Продукты', footer_col_company:'Компания', footer_blog:'Блог', about_title:'О Readmigo', about_subtitle:'AI-платформа для чтения на английском.', about_mission_title:'Наша Миссия', about_mission_p1:'Помочь миллиардам людей читать английскую литературу с помощью AI.', about_mission_p2:'Великие книги не должны быть заперты за языковым барьером.', about_stat_books:'Классических книг', about_stat_audiobooks:'Аудиокниг', about_stat_languages:'Языков', about_stat_platforms:'Платформы', about_story_title:'Создано для всего мира', about_story_subtitle:'Readmigo локализован для 10 ведущих мировых языков — не только интерфейс, но и весь опыт чтения.', about_l10n_ui_title:'11 языков интерфейса', about_l10n_ui_desc:'Весь интерфейс приложения полностью переведён на 11 языков.', about_l10n_content_title:'Локализация контента', about_l10n_content_desc:'Названия книг, описания, биографии авторов и списки книг — всё локализовано.', about_l10n_translate_title:'Перевод долгим нажатием', about_l10n_translate_desc:'Нажмите и удерживайте абзац для мгновенного перевода на родной язык. 10 языков.', about_l10n_langs_title:'Поддерживаемые языки', about_l10n_extra:'+ Хинди и немецкий для перевода долгим нажатием', banner_reading_title:'Великие книги не должны быть такими сложными.', banner_reading_subtitle:'Инструменты перевода и словарного запаса на основе ИИ делают классическую литературу доступной для каждого изучающего английский.', banner_classics_title:'Читайте английскую классику как никогда раньше.', banner_classics_subtitle:'Присоединяйтесь к миллионам учащихся, открывающих радость чтения оригинальной английской литературы с помощью ИИ.', ai_title_1:'Не переводите.', ai_title_2:'Понимайте.', ai_subtitle:'ИИ Readmigo читает вместе с вами, мгновенно предоставляя контекст, перевод и помощь с лексикой.', sources_title:'Построено на открытых знаниях', sources_subtitle:'Readmigo — проект с открытым кодом, работающий на крупнейших бесплатных библиотеках мира.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'Более 100 000 бесплатных электронных книг из старейшей цифровой библиотеки мира.', source_librivox_title:'LibriVox', source_librivox_desc:'Более 20 000 бесплатных аудиокниг, озвученных волонтёрами со всего мира.', source_github_title:'Открытый код', source_github_desc:'Readmigo — проект с открытым кодом. Смотрите код и помогайте нам улучшаться.', footer_docs:'Документация', footer_blog_official:'Блог',footer_col_language:'Язык', about_vision_title:'Видение', about_vision_text:'Откройте классику. Читайте всё. Понимайте всё.', about_mission_new_title:'Миссия', about_mission_new_text:'Делаем величайшую литературу мира доступной — с ИИ, который делает каждую страницу понятной, каждое слово ясным, а каждую классику источником силы.', about_values_title:'Ценности', about_values_opensource:'Открытый код', about_values_opensource_desc:'Мы строим открыто, для всех.', about_values_share:'Делиться знаниями', about_values_share_desc:'Великие книги принадлежат миру, а не скрыты за платными стенами.', about_values_ai:'ИИ для понимания', about_values_ai_desc:'Технология, которая помогает читателям, а не заменяет их.', about_library_title:'Наша библиотека', about_library_subtitle:'Мир литературы, бесплатный и открытый для всех.', about_lib_curated_title:'Отобранная классика', about_lib_curated_desc:'1 300+ вручную отредактированных изданий на английском издательского качества от Standard Ebooks.', about_lib_gutenberg_title:'Библиотека общественного достояния', about_lib_gutenberg_desc:'70 000+ бесплатных классических книг из Project Gutenberg, автоматически улучшенных.', about_lib_global_title:'Растущая мировая коллекция', about_lib_global_desc:'Работаем над добавлением миллионов книг общественного достояния из архивов по всему миру — 60+ языков на 6 континентах.', about_lib_stat_langs:'Языков книг', about_lib_stat_continents:'Континентов', about_lib_stat_growing:'Растёт каждый день', exp_title_1:'Чтение', exp_title_2:'как никогда раньше', exp_subtitle:'Каждая деталь создана для удовольствия от чтения.', exp_typo_title:'Типографика издательского качества', exp_typo_desc:'Красивая вёрстка, воспроизводящая каждую книгу так, как задумал автор.', exp_format_title:'Читайте любой формат', exp_format_desc:'Импортируйте свои EPUB, PDF и MOBI файлы — одно приложение для всех книг.', exp_langs_title:'60+ языков книг', exp_langs_desc:'Литература на английском, французском, немецком, испанском, китайском, японском и 50+ других языках с нативной типографикой.', exp_page_title:'Иммерсивное перелистывание', exp_page_desc:'10 стилей перелистывания, включая реалистичный 3D-загиб с физикой, тактильной отдачей и звуками бумаги.', exp_highlight_title:'Подсветка при чтении', exp_highlight_desc:'Следите за каждым произносимым словом. Подсветка на уровне предложения — караоке, подчёркивание или абзац.', exp_tts_title:'Озвучка текста ИИ', exp_tts_desc:'Слушайте любую книгу с несколькими голосами ИИ, регулируемой скоростью и естественными паузами.', exp_audiobook_title:'20 000+ аудиокниг', exp_audiobook_desc:'Бесплатные аудиокниги от LibriVox с субтитрами на уровне предложений, синхронизированными с текстом.', exp_device_title:'Идеально на любом устройстве', exp_device_desc:'Нативная производительность на iOS, Android и Web — продолжайте с того места, где остановились.' },
    ko: { htmlLang:'ko', title:'Readmigo - AI \uae30\ubc18 \uc601\uc5b4 \uc77d\uae30', description:'\uc5b4\ub5a4 \ucc45\uc774\ub4e0 \uc77d\uc73c\uc138\uc694. AI\uac00 \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4. Readmigo\ub294 100,000\uad8c \uc774\uc0c1\uc758 \ub3c4\uc11c\ub97c \uac16\ucda4 AI \ub124\uc774\ud2f0\ube0c \uc601\uc5b4 \uc77d\uae30 \ud559\uc2b5 \uc571\uc785\ub2c8\ub2e4.', nav_support:'\uc9c0\uc6d0', nav_blog:'블로그', nav_download:'\ub2e4\uc6b4\ub85c\ub4dc', hero_title_1:'\uc5b4\ub5a4 \ucc45\uc774\ub4e0 \uc77d\uc73c\uc138\uc694.', hero_title_2:'AI\uac00 \ub3c4\uc640\ub4dc\ub9bd\ub2c8\ub2e4.', hero_subtitle:'Readmigo\ub294 \uc804 \uc138\uacc4 \ud559\uc2b5\uc790\ub97c \uc704\ud574 \uc124\uacc4\ub41c AI \ub124\uc774\ud2f0\ube0c \uc601\uc5b4 \uc77d\uae30 \uc571\uc785\ub2c8\ub2e4. \uc9c0\ub2a5\ud615 AI \uc9c0\uc6d0\uc73c\ub85c \uace0\uc804 \ubb38\ud559\uc744 \uc77d\uc5b4\ubcf4\uc138\uc694.', hero_appstore_label:'\ub2e4\uc6b4\ub85c\ub4dc', hero_appstore_store:'App Store', hero_gplay_label:'\ub2e4\uc6b4\ub85c\ub4dc', hero_gplay_store:'Google Play', hero_gplay_soon:'곧 출시', hero_web_label:'실행', hero_web_store:'웹 앱', features_heading_1:'\uc601\uc5b4 \uc77d\uae30\ub97c \ub9c8\uc2a4\ud130\ud558\ub294 \ub370 \ud544\uc694\ud55c ', features_heading_2:'\ubaa8\ub4e0 \uac83', f1_title:'100,000\uad8c \uc774\uc0c1', f1_desc:'\uc168\uc775\uc2a4\ud53c\uc5b4\ubd80\ud130 \uc81c\uc778 \uc624\uc2a4\ud2f4\uae4c\uc9c0, \ud504\ub85c\uc81d\ud2b8 \uad6c\ud150\ubca0\ub974\ud06c\uc758 \ubc29\ub300\ud55c \ucee8\ub809\uc158.', f2_title:'AI \uc74c\uc131 \uc77d\uae30', f2_desc:'\uc790\uc5f0\uc2a4\ub7ec\uc6b4 AI \uc74c\uc131\uc73c\ub85c \uc5b4\ub5a4 \ucc45\uc774\ub4e0 \ub4e4\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud578\uc988\ud504\ub9ac \uc77d\uae30 \uacbd\ud5d8\uc744 \uc990\uae30\uc138\uc694.', f3_title:'\uc624\ub514\uc624\ubd81', f3_desc:'LibriVox\uc758 20,000\uad8c \uc774\uc0c1 \ubb34\ub8cc \uc624\ub514\uc624\ubd81\uc5d0 \uc811\uadfc\ud558\uc138\uc694. \uc2e4\uc81c \ub0b4\ub808\uc774\ud130\uac00 \uc77d\uc5b4\uc8fc\ub294 \uace0\uc804 \ubb38\ud559\uc744 \uc990\uae30\uc138\uc694.', f4_title:'\uae38\uac8c \ub20c\ub7ec \ubc88\uc5ed', f4_desc:'\ub2e8\ub77d\uc744 \uae38\uac8c \ub204\ub974\uba74 \uc989\uc2dc \uc774\uc911 \uc5b8\uc5b4 \ubc88\uc5ed\uc774 \ub429\ub2c8\ub2e4. \ud398\uc774\uc9c0\ub97c \ub5a0\ub098\uc9c0 \uc54a\uace0 \ub9e5\ub77d\uc744 \uc774\ud574\ud558\uc138\uc694.', f5_title:'\uacc4\uc815 \ub3d9\uae30\ud654', f5_desc:'Apple ID \ub610\ub294 Google\ub85c \ub85c\uadf8\uc778\ud558\uc5ec \uae30\uae30 \uac04 \ub77c\uc774\ube0c\ub7ec\ub9ac\uc640 \uc77d\uae30 \uc9c4\ud589 \uc0c1\ud669\uc744 \ub3d9\uae30\ud654\ud558\uc138\uc694.', f6_title:'\uba40\ud2f0 \ub514\ubc14\uc774\uc2a4', f6_desc:'iOS, Android, \uc6f9\uc5d0\uc11c \ub04a\uae40 \uc5c6\uc774 \uc77d\uc73c\uc138\uc694. \uc5b4\ub5a4 \uae30\uae30\uc5d0\uc11c\ub4e0 \uc911\ub2e8\ud55c \uacf3\uc5d0\uc11c \ubc14\ub85c \uc774\uc5b4\uc11c \uc77d\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.', cta_title:'\uc624\ub298 \uc601\uc5b4 \uc77d\uae30 \uc5ec\uc815\uc744 \uc2dc\uc791\ud558\uc138\uc694', cta_subtitle:'Readmigo\ub97c \ub2e4\uc6b4\ub85c\ub4dc\ud558\uace0 \uc601\uc5b4\ub85c \uc77d\ub294 \uc990\uac70\uc6c0\uc744 \ubc1c\uacac\ud558\uc138\uc694.', cta_button:'무료로 시작', footer_tagline:'\ubaa8\ub450\ub97c \uc704\ud55c AI \uc601\uc5b4 \uc77d\uae30 \ubc0f \ud559\uc2b5.', footer_legal:'\ubc95\uc801 \uc815\ubcf4', footer_privacy:'\uac1c\uc778\uc815\ubcf4 \ucc98\ub9ac\ubc29\uce68', footer_terms:'\uc774\uc6a9\uc57d\uad00', footer_credits:'\ud06c\ub808\ub51f', footer_support:'\uc9c0\uc6d0', footer_help:'\ub3c4\uc6c0\ub9d0 \uc13c\ud130', footer_delete:'\uacc4\uc815 \uc0ad\uc81c', footer_contact:'\ubb38\uc758\ud558\uae30', footer_language:'\uc5b8\uc5b4', footer_rights:'\u00a9 2025-2026 Readmigo. All rights reserved.', footer_address:'42 Church Ave, Mascot, NSW 2020, Sydney, Australia', products_heading:'\uc6b0\ub9ac\uc758 \uc81c\ud488', products_subtitle:'\uc77d\uae30\uc640 \ud559\uc2b5 \uacbd\ud5d8\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\uae30 \uc704\ud574 \uc124\uacc4\ub41c \ub3c4\uad6c\uc640 \uc571.', products_flagship:'\ud50c\ub798\uadf8\uc2ed', p1_desc:'100,000\uad8c \uc774\uc0c1\uc758 \ub3c4\uc11c, \uc624\ub514\uc624\ubd81, \uc9c0\ub2a5\ud615 \uc77d\uae30 \uc9c0\uc6d0\uc744 \uac16\ucda4 AI \uae30\ubc18 \uc601\uc5b4 \uc77d\uae30 \uc571.', p1_cta:'앱 다운로드', p2_desc:'\uae54\ub054\ud558\uace0 \uc815\ub9ac\ub41c \ud53c\ub4dc\ub85c \uc815\ubcf4\ub97c \ud30c\uc545\ud560 \uc218 \uc788\ub294 \ud604\ub300\uc801\uc778 3\ub2e8 RSS \ub9ac\ub354.', p2_cta:'\uc6f9 \uc571 \uc5f4\uae30', p3_desc:'\ucd5c\uc2e0 AI \uae30\uc220 \ub9ac\ubdf0, \uc778\uc0ac\uc774\ud2b8 \ubc0f \ubd84\uc11d\uc744 \ud655\uc778\ud558\uc138\uc694.', p3_cta:'\uae30\uc0ac \uc77d\uae30', nav_products:'제품', nav_features:'기능', nav_about:'소개', nav_get_started:'시작하기', footer_col_products:'제품', footer_col_company:'회사', footer_blog:'블로그', about_title:'Readmigo 소개', about_subtitle:'AI 네이티브 영어 독서 플랫폼.', about_mission_title:'우리의 미션', about_mission_p1:'수십억 비원어민 화자가 AI로 영문학을 즐길 수 있도록.', about_mission_p2:'훌륭한 책이 언어 장벽에 갇혀서는 안 됩니다.', about_stat_books:'고전 도서', about_stat_audiobooks:'오디오북', about_stat_languages:'언어', about_stat_platforms:'플랫폼', about_story_title:'전 세계를 위해 만들어졌습니다', about_story_subtitle:'Readmigo는 글로벌 상위 10개 언어로 현지화되어 있습니다 — UI뿐만 아니라 전체 읽기 경험이 대상입니다.', about_l10n_ui_title:'11개 UI 언어', about_l10n_ui_desc:'앱 인터페이스 전체가 11개 언어로 완전히 번역되어 있습니다.', about_l10n_content_title:'콘텐츠 현지화', about_l10n_content_desc:'도서 제목, 설명, 저자 소개, 장르, 도서 목록 모두 현지화되어 있습니다.', about_l10n_translate_title:'길게 누르기 번역', about_l10n_translate_desc:'아무 단락이나 길게 눌러 모국어로 즉시 번역하세요. 10개 언어 지원.', about_l10n_langs_title:'지원 언어', about_l10n_extra:'+ 힌디어와 독일어 길게 누르기 번역 지원', banner_reading_title:'좋은 책이 이렇게 어려울 필요는 없습니다.', banner_reading_subtitle:'AI 번역 및 어휘 도구로 고전 문학을 모든 영어 학습자에게 쉽게.', banner_classics_title:'전에 없던 방식으로 영어 고전을 읽으세요.', banner_classics_subtitle:'AI 지원으로 영어 원서 읽기의 즐거움을 발견하는 수백만 학습자와 함께하세요.', ai_title_1:'번역하지 마세요.', ai_title_2:'이해하세요.', ai_subtitle:'Readmigo AI가 함께 읽으며 필요한 순간에 문맥, 번역, 어휘 도움을 즉시 제공합니다.', sources_title:'열린 지식으로 구축', sources_subtitle:'Readmigo는 오픈소스이며 세계 최대 무료 도서관을 기반으로 합니다.', source_gutenberg_title:'Project Gutenberg', source_gutenberg_desc:'1971년 설립된 세계에서 가장 오래된 디지털 도서관에서 10만 권 이상의 무료 전자책.', source_librivox_title:'LibriVox', source_librivox_desc:'전 세계 자원봉사자가 낭독한 2만 권 이상의 무료 오디오북.', source_github_title:'오픈소스', source_github_desc:'Readmigo는 오픈소스입니다. 코드를 확인하고, 기여하고, 개선에 동참하세요.', footer_docs:'문서', footer_blog_official:'블로그',footer_col_language:'언어', about_vision_title:'비전', about_vision_text:'고전을 발견하세요. 무엇이든 읽으세요. 모든 것을 이해하세요.', about_mission_new_title:'미션', about_mission_new_text:'세계 최고의 문학을 당신의 손끝에 — AI가 모든 페이지를 접근 가능하게, 모든 단어를 이해 가능하게, 모든 고전을 힘의 원천으로 만듭니다.', about_values_title:'가치관', about_values_opensource:'오픈 소스', about_values_opensource_desc:'우리는 공개적으로, 모두를 위해 구축합니다.', about_values_share:'지식 공유', about_values_share_desc:'위대한 책은 세상의 것이지, 유료 장벽 뒤에 있어서는 안 됩니다.', about_values_ai:'이해를 위한 AI', about_values_ai_desc:'독자를 대체하는 것이 아닌 독자에게 힘을 주는 기술.', about_library_title:'우리의 도서관', about_library_subtitle:'문학의 세계, 무료이며 모두에게 열려 있습니다.', about_lib_curated_title:'엄선된 고전', about_lib_curated_desc:'Standard Ebooks의 수작업 편집, 출판 품질 영어판 1,300+ 작품.', about_lib_gutenberg_title:'공공 도메인 도서관', about_lib_gutenberg_desc:'Project Gutenberg의 70,000+ 무료 고전 도서, 자동 최적화.', about_lib_global_title:'확장하는 글로벌 컬렉션', about_lib_global_desc:'전 세계 아카이브에서 수백만 권의 공공 도메인 도서를 추가 중. 6대륙 60+ 언어 커버.', about_lib_stat_langs:'도서 언어', about_lib_stat_continents:'대륙', about_lib_stat_growing:'매일 성장 중', exp_title_1:'비할 데 없는', exp_title_2:'독서 경험', exp_subtitle:'독서의 기쁨을 위해 모든 디테일을 정성껏 만들었습니다.', exp_typo_title:'출판 품질 타이포그래피', exp_typo_desc:'저자의 의도대로 모든 책을 충실히 재현하는 아름다운 조판.', exp_format_title:'모든 포맷 읽기', exp_format_desc:'EPUB, PDF, MOBI 파일을 가져오세요 — 하나의 앱으로 모든 책을.', exp_langs_title:'60+ 도서 언어', exp_langs_desc:'영어, 프랑스어, 독일어, 스페인어, 중국어, 일본어 등 50+ 언어의 문학을 네이티브 타이포그래피로 지원.', exp_page_title:'몰입형 페이지 넘기기', exp_page_desc:'물리 효과의 사실적인 3D 곡선, 햅틱 피드백, 종이 소리를 포함한 10가지 페이지 넘기기 스타일.', exp_highlight_title:'따라 읽기 하이라이트', exp_highlight_desc:'읽히는 모든 단어를 따라가세요. 문장 수준 하이라이트로 동기화 — 가라오케, 밑줄 또는 단락 모드.', exp_tts_title:'AI 텍스트 음성 변환', exp_tts_desc:'여러 AI 목소리, 조절 가능한 속도, 자연스러운 일시 정지로 모든 책을 들으세요.', exp_audiobook_title:'20,000+ 오디오북', exp_audiobook_desc:'LibriVox의 무료 사람 내레이션 오디오북, 텍스트와 동기화된 문장 수준 자막.', exp_device_title:'모든 기기에서 완벽', exp_device_desc:'iOS, Android, Web에서 네이티브 성능 — 마지막 읽던 곳에서 바로 이어서.' },
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
    btn.className = 'hover:text-white transition';
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
