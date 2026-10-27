import { initNavigation } from './navigation.js';
import { initProjects } from './projects.js';
import { initContact } from './contact.js';
import { initReveals } from './reveals.js';

// Independent features: one failure must not prevent the others from starting.
for (const init of [initNavigation, initProjects, initContact, initReveals]) {
  try { init(); } catch (error) { console.error('Portfolio initialization:', error); }
}
