'use client';

import {useLayoutEffect} from 'react';

/**
 * Cover reels and the live-placements board.
 * Same lifecycle as the approved prototype: hover or keyboard focus plays from frame 0,
 * leaving snaps back to frame 1, touch plays while the cover is at least 60% visible.
 */
export function HubMotion() {
  useLayoutEffect(() => {
    const root = document.getElementById('work-hub');
    if (!root || root.dataset.motion === '1') return;
    root.dataset.motion = '1';

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
    const cards = Array.from(root.querySelectorAll<HTMLElement>('.wk-card'));
    const cleanups: Array<() => void> = [];

    const wordCss: string[] = [];
    root.querySelectorAll<HTMLElement>('.wl[data-w]').forEach(wl => {
      const spec = (wl.getAttribute('data-w') || '').split(',');
      const key = spec[0];
      const hide = Number(spec[1]);
      const from = Number(spec[2]);
      const to = Number(spec[3]);
      if (wl.dataset.split !== '1') {
        wl.dataset.split = '1';
        const nodes = Array.from(wl.childNodes);
        wl.textContent = '';
        nodes.forEach(n => {
          if (n.nodeType === Node.TEXT_NODE) {
            (n.textContent || '').split(/(\s+)/).forEach(part => {
              if (!part) return;
              if (/^\s+$/.test(part)) {
                wl.appendChild(document.createTextNode(part));
                return;
              }
              const s = document.createElement('span');
              s.className = 'w';
              s.textContent = part;
              wl.appendChild(s);
            });
          } else if (n.nodeType === Node.ELEMENT_NODE) {
            const s = document.createElement('span');
            s.className = 'w';
            s.appendChild(n);
            wl.appendChild(s);
          }
        });
      }
      const words = Array.from(wl.querySelectorAll<HTMLElement>(':scope > .w'));
      words.forEach((s, i) => {
        const id = `wv-${key}-${i}`;
        const at = from + ((to - from) * i) / Math.max(words.length, 1);
        s.setAttribute('data-wv', id);
        wordCss.push(
          `@keyframes ${id}{0%,${hide}%{opacity:1;transform:none}${hide + 0.5}%,${at.toFixed(2)}%{opacity:0;transform:translateY(calc(10*var(--u)))}${(at + 2.5).toFixed(2)}%,100%{opacity:1;transform:none}}` +
            `.work-hub .is-playing [data-wv="${id}"]{animation-name:${id};animation-timing-function:cubic-bezier(.16,1,.3,1)}`,
        );
      });
    });
    const wordStyle = document.createElement('style');
    wordStyle.id = 'work-hub-wv';
    wordStyle.textContent = wordCss.join('');
    document.head.appendChild(wordStyle);

    const buildTyping = () => {
      let css = '';
      let seed = 7;
      const rnd = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };
      root.querySelectorAll<HTMLElement>('[data-type]').forEach(el => {
        const spec = (el.getAttribute('data-type') || '').split(',');
        const key = spec[0];
        const hide = Number(spec[1]);
        const from = Number(spec[2]);
        const to = Number(spec[3]);
        const stage = el.closest('.stage');
        if (!stage) return;
        const u = stage.getBoundingClientRect().width / 800;
        if (!u) return;
        const tn = el.firstChild;
        if (!tn || tn.nodeType !== Node.TEXT_NODE || !tn.textContent) return;
        const text = tn.textContent;
        const n = text.length;
        const range = document.createRange();
        const left = el.getBoundingClientRect().left;
        const xs = [0];
        for (let i = 1; i <= n; i++) {
          range.setStart(tn, 0);
          range.setEnd(tn, i);
          xs.push((range.getBoundingClientRect().right - left) / u);
        }
        const W = xs[n] + 2;
        const gaps: number[] = [];
        let tot = 0;
        for (let i = 0; i < n; i++) {
          let g = 0.55 + rnd() * 0.9;
          if (text[i] === ' ') g *= 1.7;
          if (i > 0 && text[i - 1] === ' ' && rnd() > 0.6) g *= 1.8;
          gaps.push(g);
          tot += g;
        }
        let t = from;
        const ck: string[] = [];
        const cx: string[] = [];
        const id = `ty-${key}`;
        ck.push(`0%,${hide}%{clip-path:inset(0 0 0 0)}`);
        ck.push(`${hide + 0.2}%,${from}%{clip-path:inset(0 ${W.toFixed(1)}u 0 0)}`);
        cx.push(`0%,${from - 2}%{opacity:0;transform:translateX(0)}`);
        cx.push(`${from - 1.9}%{opacity:1;transform:translateX(0)}`);
        for (let i = 0; i < n; i++) {
          t += ((to - from) * gaps[i]) / tot;
          const r = W - xs[i + 1];
          ck.push(`${t.toFixed(2)}%{clip-path:inset(0 ${r.toFixed(1)}u 0 0)}`);
          cx.push(`${t.toFixed(2)}%{opacity:1;transform:translateX(${xs[i + 1].toFixed(1)}u)}`);
        }
        ck.push('100%{clip-path:inset(0 0 0 0)}');
        [1.5, 3, 4.5, 6].forEach((d, k) => {
          cx.push(`${(to + d).toFixed(2)}%{opacity:${k % 2 ? 1 : 0};transform:translateX(${xs[n].toFixed(1)}u)}`);
        });
        cx.push(`${(to + 6.1).toFixed(2)}%,100%{opacity:0;transform:translateX(${xs[n].toFixed(1)}u)}`);
        const fix = (s: string) => s.replace(/(-?\d*\.?\d+)u/g, 'calc($1*var(--u))');
        css +=
          fix(`@keyframes ${id}{${ck.join('')}}@keyframes ${id}-c{${cx.join('')}}`) +
          `.work-hub .is-playing [data-type^="${key},"]{animation-name:${id};animation-timing-function:step-end}` +
          `.work-hub .is-playing [data-type^="${key},"]+.caret{animation-name:${id}-c;animation-timing-function:step-end}`;
      });
      const st = document.getElementById('work-hub-ty') || document.createElement('style');
      st.id = 'work-hub-ty';
      st.textContent = css;
      document.head.appendChild(st);
    };
    if (document.fonts?.ready) void document.fonts.ready.then(buildTyping);
    else buildTyping();
    let tyTimer = 0;
    const onResize = () => {
      window.clearTimeout(tyTimer);
      tyTimer = window.setTimeout(buildTyping, 200);
    };
    window.addEventListener('resize', onResize);
    cleanups.push(() => window.removeEventListener('resize', onResize));

    const play = (card: HTMLElement | null) => {
      if (!card || reduce.matches || card.classList.contains('is-playing')) return;
      card.classList.add('is-playing', 'is-hover');
    };
    const stop = (card: HTMLElement | null) => {
      if (!card) return;
      card.classList.remove('is-hover');
      card.classList.remove('is-playing');
    };

    cards.forEach(card => {
      const enter = () => {
        if (fine.matches) play(card);
      };
      const leave = () => {
        if (fine.matches) stop(card);
      };
      const focusIn = () => play(card);
      const focusOut = () => stop(card);
      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);
      card.addEventListener('focusin', focusIn);
      card.addEventListener('focusout', focusOut);
      cleanups.push(() => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
        card.removeEventListener('focusin', focusIn);
        card.removeEventListener('focusout', focusOut);
      });
    });

    let io: IntersectionObserver | undefined;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (fine.matches) return;
            const card = (e.target as HTMLElement).closest<HTMLElement>('.wk-card');
            if (e.isIntersecting && e.intersectionRatio >= 0.6) play(card);
            else stop(card);
          });
        },
        {threshold: [0, 0.6, 1]},
      );
      cards.forEach(c => {
        const m = c.querySelector('.wk-media');
        if (m) io?.observe(m);
      });
    }

    const names = ['synup', 'inventive ai', 'hubengage', 'staragile', 'backlinkos'];
    const tabs = Array.from(root.querySelectorAll<HTMLButtonElement>('.wb-tabs [role="tab"]'));
    const panels = tabs.map(t => document.getElementById(t.getAttribute('aria-controls') || ''));
    const pill = root.querySelector<HTMLElement>('.wb-pill');

    const placePill = (btn: HTMLElement | null) => {
      if (!pill || !btn) return;
      pill.style.width = `${btn.offsetWidth}px`;
      pill.style.transform = `translateX(${btn.offsetLeft}px)`;
    };
    const activate = (i: number, focusPanel: boolean) => {
      tabs.forEach((t, n) => {
        const on = n === i;
        t.classList.toggle('on', on);
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        const panel = panels[n];
        if (panel) panel.hidden = !on;
      });
      placePill(tabs[i] || null);
      const panel = panels[i];
      if (focusPanel && panel) {
        panel.setAttribute('tabindex', '-1');
        panel.focus({preventScroll: true});
      }
    };
    const normalizeClient = (s: string) =>
      String(s || '')
        .trim()
        .toLowerCase()
        .replace(/\+/g, ' ')
        .replace(/[-_]+/g, ' ')
        .replace(/\s+/g, ' ');
    const indexFromSlug = (s: string) => {
      const i = names.indexOf(normalizeClient(s));
      return i < 0 ? -1 : i;
    };
    const clientIndex = () => {
      const params = new URLSearchParams(location.search);
      const fromQuery = indexFromSlug(params.get('client') || '');
      const hash = (location.hash || '').replace(/^#/, '');
      if (hash.indexOf('proof-') === 0 && hash !== 'proof-board') {
        const fromHash = indexFromSlug(hash.slice('proof-'.length));
        if (fromHash >= 0) return fromHash;
      }
      return fromQuery >= 0 ? fromQuery : 0;
    };
    const focusPanelAfterScroll = (i: number) => {
      const panel = panels[i];
      if (!panel) return;
      panel.setAttribute('tabindex', '-1');
      let ran = false;
      const go = () => {
        if (ran) return;
        ran = true;
        requestAnimationFrame(() => panel.focus({preventScroll: true}));
      };
      if (reduce.matches || !('onscrollend' in window)) {
        requestAnimationFrame(() => requestAnimationFrame(go));
        return;
      }
      window.addEventListener('scrollend', go, {once: true});
      window.setTimeout(go, 700);
    };
    const scrollToBoard = (i: number) => {
      const board = document.getElementById('proof-board');
      if (board) board.scrollIntoView({behavior: reduce.matches ? 'auto' : 'smooth', block: 'start'});
      focusPanelAfterScroll(i);
    };
    const slugFromIndex = (i: number) => names[i].replace(/\s+/g, '-');
    const urlForIndex = (i: number) => `/work?client=${slugFromIndex(i)}#proof-${slugFromIndex(i)}`;

    tabs.forEach((t, i) => {
      const onClick = () => {
        activate(i, false);
        try {
          history.replaceState(null, '', urlForIndex(i));
        } catch {
          /* ignore */
        }
      };
      t.addEventListener('click', onClick);
      cleanups.push(() => t.removeEventListener('click', onClick));
    });

    root.querySelectorAll<HTMLElement>('.wk-card.place').forEach(card => {
      const link = card.querySelector<HTMLAnchorElement>('a.wk-go');
      if (!link) return;
      const onClick = (e: MouseEvent) => {
        if (e.defaultPrevented) return;
        if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        const i = indexFromSlug(card.getAttribute('data-client') || '');
        if (i < 0) return;
        e.preventDefault();
        activate(i, false);
        try {
          history.pushState(null, '', link.getAttribute('href') || urlForIndex(i));
        } catch {
          /* ignore */
        }
        scrollToBoard(i);
      };
      link.addEventListener('click', onClick);
      cleanups.push(() => link.removeEventListener('click', onClick));
    });

    const onPop = () => {
      const i = clientIndex();
      activate(i, false);
      scrollToBoard(i);
    };
    window.addEventListener('popstate', onPop);
    cleanups.push(() => window.removeEventListener('popstate', onPop));

    root.querySelectorAll<HTMLButtonElement>('[data-copy]').forEach(btn => {
      const onClick = () => {
        const q = btn.getAttribute('data-copy') || '';
        const prev = btn.textContent;
        if (navigator.clipboard?.writeText) void navigator.clipboard.writeText(q).catch(() => undefined);
        btn.textContent = 'Copied';
        window.setTimeout(() => {
          btn.textContent = prev;
        }, 1600);
      };
      btn.addEventListener('click', onClick);
      cleanups.push(() => btn.removeEventListener('click', onClick));
    });

    const onPillResize = () => {
      const on = root.querySelector<HTMLElement>('.wb-tabs [role="tab"].on');
      placePill(on);
    };
    window.addEventListener('resize', onPillResize);
    cleanups.push(() => window.removeEventListener('resize', onPillResize));

    const start = clientIndex();
    const hash = (location.hash || '').replace(/^#/, '');
    const hasClient = /[?&]client=/.test(location.search);
    // Panels stay visible until a person picks a client. Crawlers that do not click still read every placement.
    if (hash === 'proof-board' || hash.indexOf('proof-') === 0 || hasClient) scrollToBoard(start);

    const rv = Array.from(root.querySelectorAll<HTMLElement>('.rv'));
    rv.forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.classList.add('in');
    });
    document.documentElement.classList.add('work-hub-js');
    let ro: IntersectionObserver | undefined;
    if (reduce.matches || !('IntersectionObserver' in window)) {
      rv.forEach(el => el.classList.add('in'));
    } else {
      ro = new IntersectionObserver(
        entries => {
          entries.forEach(e => {
            if (!e.isIntersecting) return;
            const el = e.target as HTMLElement;
            const idx = rv.indexOf(el);
            el.style.transitionDelay = `${(idx % 3) * 90}ms`;
            el.classList.add('in');
            ro?.unobserve(el);
          });
        },
        {threshold: 0.12, rootMargin: '0px 0px -40px 0px'},
      );
      rv.forEach(el => {
        if (!el.classList.contains('in')) ro?.observe(el);
      });
    }

    return () => {
      cleanups.forEach(fn => fn());
      io?.disconnect();
      ro?.disconnect();
      wordStyle.remove();
      document.getElementById('work-hub-ty')?.remove();
      delete root.dataset.motion;
      document.documentElement.classList.remove('work-hub-js');
    };
  }, []);
  return null;
}
