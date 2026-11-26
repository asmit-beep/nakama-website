'use client';

import {useEffect} from 'react';

const SECTIONS = ['tldr', 'company', 'growth', 'challenges', 'solution', 'results', 'open', 'takeaways', 'faq'];

/** Tabs, pause, wall rows, lightbox and the section nav. Markup stays in the server tree. */
export function Behaviors() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const cleanups: Array<() => void> = [];

    document.querySelectorAll<HTMLElement>('.sa .acw[data-rotate]').forEach(w => {
      const tabs = [...w.querySelectorAll<HTMLButtonElement>('[role=tab]')];
      const ks = tabs.map(b => b.dataset.k || '');
      let timer = 0;
      let stopped = reduce;
      let hover = false;
      let focused = false;
      const show = (k: string) => {
        tabs.forEach(b => {
          const on = b.dataset.k === k;
          b.setAttribute('aria-selected', String(on));
          b.tabIndex = on ? 0 : -1;
        });
        w.querySelectorAll<HTMLElement>('.state').forEach(s => {
          const on = s.dataset.for === k;
          s.classList.toggle('on', on);
          if (on) s.removeAttribute('aria-hidden');
          else s.setAttribute('aria-hidden', 'true');
        });
        w.querySelectorAll<HTMLElement>('.tagw,.ac-cap').forEach(f => {
          f.hidden = f.dataset.for !== k;
        });
        w.dataset.active = k;
      };
      const inside = () => w.contains(document.activeElement);
      const held = () => stopped || hover || focused || inside() || document.hidden;
      const arm = () => {
        window.clearTimeout(timer);
        if (held()) return;
        timer = window.setTimeout(() => {
          if (held()) {
            focused = focused || inside();
            return;
          }
          const i = ks.indexOf(w.dataset.active || ks[0]);
          show(ks[(i + 1) % ks.length]);
          arm();
        }, 6000);
      };
      const halt = () => {
        stopped = true;
        window.clearTimeout(timer);
      };
      const onClick = (e: Event) => {
        const t = e.target as HTMLElement;
        const tab = t.closest<HTMLButtonElement>('[role=tab]');
        if (tab && w.contains(tab)) {
          halt();
          show(tab.dataset.k || ks[0]);
          return;
        }
        if (t.closest('.lbo')) halt();
      };
      const onKey = (e: KeyboardEvent) => {
        const i = tabs.indexOf(document.activeElement as HTMLButtonElement);
        const map: Record<string, number> = {ArrowRight: i + 1, ArrowLeft: i - 1, Home: 0, End: tabs.length - 1};
        if (!(e.key in map) || i < 0) return;
        e.preventDefault();
        const n = (map[e.key] + tabs.length) % tabs.length;
        show(ks[n]);
        tabs[n].focus();
      };
      const onFocus = () => {
        focused = true;
        window.clearTimeout(timer);
      };
      const onBlur = (e: FocusEvent) => {
        const next = e.relatedTarget as Node | null;
        if (next && w.contains(next)) return;
        focused = false;
        arm();
      };
      const onDown = () => halt();
      const onEnter = (e: PointerEvent) => {
        if (e.pointerType !== 'mouse') return;
        hover = true;
        window.clearTimeout(timer);
      };
      const onLeave = () => {
        if (!hover) return;
        hover = false;
        arm();
      };
      const onVis = () => arm();
      w.addEventListener('click', onClick);
      w.addEventListener('keydown', onKey);
      w.addEventListener('focusin', onFocus);
      w.addEventListener('focusout', onBlur);
      w.addEventListener('pointerdown', onDown);
      w.addEventListener('pointerenter', onEnter);
      w.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVis);
      arm();
      cleanups.push(() => {
        window.clearTimeout(timer);
        w.removeEventListener('click', onClick);
        w.removeEventListener('keydown', onKey);
        w.removeEventListener('focusin', onFocus);
        w.removeEventListener('focusout', onBlur);
        w.removeEventListener('pointerdown', onDown);
        w.removeEventListener('pointerenter', onEnter);
        w.removeEventListener('pointerleave', onLeave);
        document.removeEventListener('visibilitychange', onVis);
      });
    });

    document.querySelectorAll<HTMLButtonElement>('.sa .qw .xb').forEach(b => {
      const fn = () => {
        const open = b.getAttribute('aria-expanded') !== 'true';
        b.setAttribute('aria-expanded', String(open));
        const row = document.getElementById(b.getAttribute('aria-controls') || '');
        if (row) row.hidden = !open;
      };
      b.addEventListener('click', fn);
      cleanups.push(() => b.removeEventListener('click', fn));
    });

    const more = document.querySelector<HTMLButtonElement>('.sa .qw-more');
    const wrap = document.querySelector('.sa .qw-wrap');
    if (more && wrap) {
      const fn = () => {
        const open = wrap.classList.toggle('collapsed') === false;
        more.setAttribute('aria-expanded', String(open));
        more.textContent = open ? 'Show fewer' : 'Show all 23';
      };
      more.addEventListener('click', fn);
      cleanups.push(() => more.removeEventListener('click', fn));
    }

    const lb = document.getElementById('sa-lb') as HTMLDialogElement | null;
    let opener: HTMLElement | null = null;
    const openLb = (b: HTMLElement) => {
      if (!lb) return;
      opener = b;
      const slot = document.getElementById('sa-lb-slot');
      if (slot) {
        slot.replaceChildren();
        const img = document.createElement('img');
        img.id = 'sa-lbi';
        img.alt = (b.dataset.alt || '').replace(/\u00b7/g, ',');
        img.src = b.dataset.src || '';
        img.width = Number(b.dataset.w || 0);
        img.height = Number(b.dataset.h || 0);
        img.decoding = 'async';
        slot.appendChild(img);
      }
      const title = document.getElementById('sa-lb-t');
      const meta = document.getElementById('sa-lb-m');
      const foot = document.getElementById('sa-lb-f');
      if (title) title.textContent = b.dataset.title || '';
      if (meta) meta.textContent = b.dataset.meta || '';
      if (foot) foot.textContent = b.dataset.foot || '';
      lb.style.setProperty('--lbw', `${Number(b.dataset.w || 0) + 40}px`);
      lb.showModal();
      document.getElementById('sa-lbx')?.focus();
    };
    const onDoc = (e: MouseEvent) => {
      const b = (e.target as HTMLElement).closest<HTMLElement>('.sa .lbo');
      if (b) openLb(b);
    };
    const onX = () => lb?.close();
    const onBackdrop = (e: MouseEvent) => {
      if (e.target === lb) lb?.close();
    };
    const onClose = () => {
      document.getElementById('sa-lb-slot')?.replaceChildren();
      opener?.focus();
    };
    document.addEventListener('click', onDoc);
    document.getElementById('sa-lbx')?.addEventListener('click', onX);
    lb?.addEventListener('click', onBackdrop);
    lb?.addEventListener('close', onClose);
    cleanups.push(() => {
      document.removeEventListener('click', onDoc);
      document.getElementById('sa-lbx')?.removeEventListener('click', onX);
      lb?.removeEventListener('click', onBackdrop);
      lb?.removeEventListener('close', onClose);
    });

    const links = [...document.querySelectorAll<HTMLAnchorElement>('.sa .v3-side a, .sa .v3-tabs a')];
    const mark = (id: string) => {
      links.forEach(a => {
        const on = a.getAttribute('href') === `#${id}`;
        a.classList.toggle('on', on);
        if (on) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    };
    const activationLine = () => {
      const nav = document.querySelector('.site-nav');
      const tabs = document.querySelector<HTMLElement>('.sa .v3-tabs');
      const navH = nav ? nav.getBoundingClientRect().height : 96;
      const tabsH = tabs && getComputedStyle(tabs).display !== 'none' ? tabs.getBoundingClientRect().height : 0;
      const mobile = window.matchMedia('(max-width: 1023px)').matches;
      return Math.max(navH + tabsH + 16, mobile ? 192 : 152);
    };
    const spy = () => {
      const y = activationLine();
      const doc = document.documentElement;
      const atEnd = window.innerHeight + window.scrollY >= doc.scrollHeight - 2;
      let current = SECTIONS[0];
      if (atEnd) current = SECTIONS[SECTIONS.length - 1];
      else {
        for (const id of SECTIONS) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= y) current = id;
        }
      }
      mark(current);
    };
    spy();

    const head = document.querySelector<HTMLElement>('.sa .qw thead');
    const sideNav = document.querySelector<HTMLElement>('.sa .v3-side');
    const side = sideNav?.querySelector<HTMLElement>('ul') ?? null;
    const tabs = document.querySelector<HTMLElement>('.sa .v3-tabs');
    const place = () => {
      if (head) {
        const top = head.getBoundingClientRect().top;
        head.classList.toggle('is-stuck', top <= 97);
        head.classList.toggle('is-under', top < 88);
      }
      if (side && sideNav) {
        const top = side.getBoundingClientRect().top;
        side.classList.toggle('is-under', top < 88);
        sideNav.classList.toggle('is-cover', top <= 97);
      }
      if (tabs && getComputedStyle(tabs).display !== 'none') {
        const top = tabs.getBoundingClientRect().top;
        tabs.classList.toggle('is-stuck', top <= 86);
        tabs.classList.toggle('is-under', top < 76);
      }
    };
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        place();
        spy();
      });
    };
    place();
    spy();
    document.addEventListener('scroll', onScroll, {passive: true});
    window.addEventListener('resize', onScroll);
    cleanups.push(() => {
      if (frame) window.cancelAnimationFrame(frame);
      document.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    });

    return () => cleanups.forEach(fn => fn());
  }, []);
  return null;
}
