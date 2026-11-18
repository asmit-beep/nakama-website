'use client';

export const CONTACT_OPTIONS_ID = 'contact-options';

type Mixpanel = {track?: (event: string, props?: Record<string, string>) => void};

function mixpanel(): Mixpanel | undefined {
  if (typeof window === 'undefined') return;
  return (window as Window & {mixpanel?: Mixpanel}).mixpanel;
}

export function trackNavCtaClick(band: string) {
  mixpanel()?.track?.('nav_cta_click', {
    path: window.location.pathname,
    band,
  });
}

let nextCardHandler: ((event: Event) => void) | null = null;

export function armNextCardLog() {
  const root = document.getElementById(CONTACT_OPTIONS_ID);
  if (!root) return;
  if (nextCardHandler) root.removeEventListener('click', nextCardHandler);
  nextCardHandler = (event: Event) => {
    const target = event.target as HTMLElement | null;
    const action = target?.closest<HTMLElement>('a, button');
    if (!action || !root.contains(action)) return;
    const card = action.closest('[data-contact-card]')?.getAttribute('data-contact-card');
    if (!card) return;
    mixpanel()?.track?.('nav_cta_next_card', {
      path: window.location.pathname,
      card,
    });
    if (nextCardHandler) root.removeEventListener('click', nextCardHandler);
    nextCardHandler = null;
  };
  root.addEventListener('click', nextCardHandler);
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function goToContactOptions() {
  const section = document.getElementById(CONTACT_OPTIONS_ID);
  if (!section) return;
  const reduced = prefersReducedMotion();
  if (window.location.hash !== '#contact-options') {
    history.pushState(null, '', '#contact-options');
  }
  section.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block: 'start'});
  if (!reduced) {
    section.classList.remove('is-pulse');
    void section.offsetWidth;
    section.classList.add('is-pulse');
    window.setTimeout(() => section.classList.remove('is-pulse'), 650);
  }
  const focus = () => section.focus({preventScroll: true});
  if (reduced) {
    focus();
  } else {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      document.removeEventListener('scrollend', finish);
      focus();
    };
    document.addEventListener('scrollend', finish);
    window.setTimeout(finish, 700);
  }
  armNextCardLog();
}
