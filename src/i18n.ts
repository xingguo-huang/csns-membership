export type Language = 'zh' | 'en'

type Copy = {
  brand: string
  brandDetail: string
  skip: string
  servicesLink: string
  aboutLink: string
  languageLabel: string
  preparing: string
  eyebrow: string
  title: string[]
  introduction: string
  explore: string
  location: string
  cardLabel: string
  cardTitle: string
  cardName: string
  cardNote: string
  servicesEyebrow: string
  servicesTitle: string
  servicesDescription: string
  upcoming: string
  services: { title: string; description: string; icon: 'card' | 'calendar' | 'scan' }[]
  communityTitle: string
  communityDescription: string
  communityTags: string[]
  footer: string
  prototype: string
}

export const copy: Record<Language, Copy> = {
  zh: {
    brand: '华协会员服务',
    brandDetail: 'CSNS COMMUNITY',
    skip: '跳到主要内容',
    servicesLink: '会员服务',
    aboutLink: '认识华协',
    languageLabel: 'Switch to English',
    preparing: '服务筹备中',
    eyebrow: '相聚于此 · 连接社区',
    title: ['让每一次参与，', '都更简单。'],
    introduction: '从一张会员卡，到一场期待已久的活动。让社区生活更方便，让人与人的连接更近一步。',
    explore: '探索会员服务',
    location: 'Halifax, Nova Scotia',
    cardLabel: '电子会员卡 · 设计预览',
    cardTitle: '属于社区的一张卡',
    cardName: '相聚 · 参与 · 连接',
    cardNote: '会员卡功能即将开放',
    servicesEyebrow: 'MEMBERSHIP, MADE SIMPLE',
    servicesTitle: '社区生活，从这里开始',
    servicesDescription: '我们正在准备更便捷的会员服务。以下功能将逐步开放。',
    upcoming: '即将开放',
    services: [
      { title: '我的会员卡', description: '查看会员信息与有效期，随时出示电子会员卡。', icon: 'card' },
      { title: '发现社区活动', description: '了解活动安排，报名参加，找到共同的兴趣。', icon: 'calendar' },
      { title: '轻松到场签到', description: '到场出示签到码，让每一次参与都有迹可循。', icon: 'scan' },
    ],
    communityTitle: '为社区而建，也为每一位参与者。',
    communityDescription: '手机、平板、电脑，熟悉的设备就能使用。中文与英文，自在切换。',
    communityTags: ['中英双语', '手机友好', '简单易用'],
    footer: '让社区的连接，发生在每一天。',
    prototype: '参赛原型 · 非华协官方上线服务',
  },
  en: {
    brand: 'CSNS Community',
    brandDetail: 'MEMBERSHIP & EVENTS',
    skip: 'Skip to main content',
    servicesLink: 'Membership',
    aboutLink: 'About CSNS',
    languageLabel: '切换到中文',
    preparing: 'Coming soon',
    eyebrow: 'A PLACE TO MEET. A COMMUNITY TO BELONG.',
    title: ['More connection.', 'Less complication.'],
    introduction: 'From your membership card to your next community event. A simpler way to take part, stay connected, and feel at home.',
    explore: 'Explore member services',
    location: 'Halifax, Nova Scotia',
    cardLabel: 'DIGITAL MEMBERSHIP · DESIGN PREVIEW',
    cardTitle: 'Your connection to community',
    cardName: 'Meet. Participate. Belong.',
    cardNote: 'Digital membership is coming soon',
    servicesEyebrow: 'MEMBERSHIP, MADE SIMPLE',
    servicesTitle: 'Your community starts here',
    servicesDescription: 'A more convenient membership experience is taking shape. These services will open in stages.',
    upcoming: 'Coming soon',
    services: [
      { title: 'Your membership card', description: 'Keep your membership details, expiry date, and digital card close at hand.', icon: 'card' },
      { title: 'Discover community events', description: 'See what is happening, register to join, and share your interests.', icon: 'calendar' },
      { title: 'An easier arrival', description: 'Show your event code at the door and spend more time being part of it.', icon: 'scan' },
    ],
    communityTitle: 'Built for community. Made for everyone taking part.',
    communityDescription: 'Use the phone, tablet, or computer you already know. Move freely between Chinese and English.',
    communityTags: ['Chinese & English', 'Mobile friendly', 'Easy to use'],
    footer: 'Making room for everyday connection.',
    prototype: 'Competition prototype · Not an official live CSNS service',
  },
}
