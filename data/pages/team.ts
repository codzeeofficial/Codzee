import type { TeamMember } from '@/data/types/page.types'

export const teamContent = {
  hero: {
    statement: 'The people who build what you\u2019re reading about.',
  },
  members: [
    { id: 'shahzaib', name: 'Shahzaib', role: 'Founder', description: '', photoSrc: '' },
    { id: 'wasif', name: 'Wasif Khan', role: 'Backend Developer', description: '', photoSrc: '' },
    { id: 'fazeel', name: 'Fazeel Ahmed', role: 'UX / UI Designer', description: '', photoSrc: '' },
    { id: 'talha', name: 'Talha', role: 'Developer', description: '', photoSrc: '' },
    { id: 'aqib', name: 'Aqib Khan', role: 'Product Manager', description: '', photoSrc: '' },
    { id: 'salman', name: 'Salman', role: 'Web Designer', description: '', photoSrc: '' },
  ] satisfies TeamMember[],
  workInvite: {
    line: 'Six people. Three real, live projects. Nothing shown here that isn\u2019t actually running somewhere right now.',
    cta: { label: 'Explore the Work', href: '/work' },
  },
}