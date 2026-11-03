export const defaultFooterCta = Object.freeze({
  eyebrow: 'For AI founders and product teams',
  title: 'Get your AI tool discovered.',
  accent: 'Reach the right audience.',
  description: 'Submit your product for an editorial review and put it in front of people actively comparing AI tools.',
  buttonLabel: 'Submit your tool',
  buttonTo: '/submit'
});

const footerCtaByPath = Object.freeze({
  '/': {
    eyebrow: 'For AI founders and software teams',
    title: 'Put your AI product in front of',
    accent: 'buyers across the US and UK.',
    description: 'Submit your product for editorial review and reach professionals actively comparing AI software for work and business.',
    buttonLabel: 'Submit your AI tool',
    buttonTo: '/submit'
  },
  '/submit': {
    eyebrow: 'Launch with more confidence',
    title: 'Choose the right founder plan.',
    accent: 'Grow your product visibility.',
    description: 'Compare listing and promotion options designed for AI founders and product teams.',
    buttonLabel: 'View founder plans',
    buttonTo: '/pricing'
  },
  '/pricing': {
    eyebrow: 'Ready to get discovered?',
    title: 'Put your AI product in front of',
    accent: 'people actively comparing tools.',
    description: 'Start your submission and share the details our editorial team needs to review your product.',
    buttonLabel: 'Submit your tool',
    buttonTo: '/submit'
  }
});

export function getFooterCta(pathname = '') {
  return footerCtaByPath[pathname] || defaultFooterCta;
}
