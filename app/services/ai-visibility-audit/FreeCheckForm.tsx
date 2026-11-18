'use client';

import {useId, useRef, useState, type FormEvent} from 'react';
import Link from 'next/link';
import {prefersReducedMotion} from '@/app/nav-cta';
import {
  BOOK, Q_HREF, SAMPLE_BODY, SAMPLE_EYE, SAMPLE_H2, SAMPLE_SCOPE, SEE_PRICING, SEND,
  THANKS, THANKS_K, THANKS_NEXT,
} from './copy';
import {
  ERRORS, HONEYPOT_NAME, MIN_SUBMIT_MS, validateFreeCheck, type FieldErrors, type FieldKey,
} from '@/lib/free-check';

type Mixpanel = {track?: (event: string, props?: Record<string, string>) => void};

function mixpanel(): Mixpanel | undefined {
  if (typeof window === 'undefined') return;
  return (window as Window & {mixpanel?: Mixpanel}).mixpanel;
}

function track(event: string, props?: Record<string, string>) {
  mixpanel()?.track?.(event, {path: window.location.pathname, ...props});
}

const FIELD_ORDER: FieldKey[] = ['email', 'siteUrl', 'competitors', 'prompts'];
const MAILTO = 'mailto:contact@nakama.in?subject=Free%20AI%20visibility%20check%20request';

function collectAttribution() {
  const url = new URL(window.location.href);
  return {
    page: window.location.pathname,
    referrer: document.referrer,
    utmSource: url.searchParams.get('utm_source') ?? '',
    utmMedium: url.searchParams.get('utm_medium') ?? '',
    utmCampaign: url.searchParams.get('utm_campaign') ?? '',
  };
}

export function FreeCheckRequest() {
  const formId = useId();
  const thanksRef = useRef<HTMLDivElement>(null);
  const startedAtRef = useRef<number | null>(null);
  const startedTracked = useRef(false);
  const [fields, setFields] = useState({email: '', siteUrl: '', competitors: '', prompts: ''});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<{fallback: boolean} | null>(null);
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  function id(name: string) {
    return `${formId}-${name}`;
  }

  function fieldDomId(key: FieldKey) {
    return id(key === 'siteUrl' ? 'site' : key);
  }

  function focusFirstError(next: FieldErrors) {
    const first = FIELD_ORDER.find(key => next[key]);
    if (!first) return;
    requestAnimationFrame(() => {
      document.getElementById(fieldDomId(first))?.focus();
    });
  }

  function onInteract() {
    if (startedAtRef.current == null) startedAtRef.current = Date.now();
    if (startedTracked.current) return;
    startedTracked.current = true;
    track('free_check_start');
  }

  function update<K extends keyof typeof fields>(key: K, value: string) {
    setFields(current => ({...current, [key]: value}));
    if (errors[key]) setErrors(current => {
      const next = {...current};
      delete next[key];
      return next;
    });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending || sent) return;
    setFormError(null);

    const checked = validateFreeCheck(fields);
    if (!checked.ok) {
      setErrors(checked.fields);
      track('free_check_error', {
        reason: 'validation',
        fields: FIELD_ORDER.filter(key => checked.fields[key]).join(','),
      });
      focusFirstError(checked.fields);
      return;
    }
    setErrors({});
    setPending(true);
    track('free_check_submit');
    try {
      const form = event.currentTarget;
      const honeypot = String(new FormData(form).get(HONEYPOT_NAME) || '');
      const startedAt = startedAtRef.current ?? Date.now();
      startedAtRef.current = startedAt;
      const wait = MIN_SUBMIT_MS - (Date.now() - startedAt);
      if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
      const res = await fetch('/api/free-check', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          ...fields,
          [HONEYPOT_NAME]: honeypot,
          startedAt,
          ...collectAttribution(),
        }),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || data.ok !== true) {
        const isFieldError = Boolean(data?.fields && typeof data.fields === 'object');
        if (isFieldError) {
          const next = data.fields as FieldErrors;
          setErrors(next);
          track('free_check_error', {
            reason: 'validation',
            status: String(res.status),
            fields: FIELD_ORDER.filter(key => next[key]).join(','),
          });
          focusFirstError(next);
          return;
        }
        setFormError({fallback: res.status === 503 || res.status >= 500});
        track('free_check_error', {reason: 'server', status: String(res.status)});
        return;
      }
      setSent(true);
      track('free_check_success');
      requestAnimationFrame(() => {
        const reduce = prefersReducedMotion();
        thanksRef.current?.scrollIntoView({block: 'nearest', behavior: reduce ? 'auto' : 'smooth'});
        thanksRef.current?.focus({preventScroll: true});
      });
    } catch {
      setFormError({fallback: true});
      track('free_check_error', {reason: 'network'});
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="wrap fs">
      <div>
        <p className="eyb">{SAMPLE_EYE}</p>
        <h2>{SAMPLE_H2}</h2>
        <div className="scope">
          <div><b>1<em>to</em>3</b><span>prompts</span></div>
          <div><b>2</b><span>engines</span></div>
          <div><b>3</b><span>runs each</span></div>
        </div>
        <p className="body">{SAMPLE_SCOPE}</p>
        <p className="body">{SAMPLE_BODY}</p>
      </div>
      <div className="fs-slot">
        <div
          className={sent ? 'ty' : 'ty is-pending'}
          ref={thanksRef}
          role={sent ? "status" : undefined}
          tabIndex={-1}
          aria-hidden={sent ? undefined : true}
        >
          <b>{THANKS_K}</b>
          {THANKS}
          <br />
          {THANKS_NEXT} <Link href={Q_HREF}>{BOOK}</Link> · <Link href="#pricing">{SEE_PRICING}</Link>
        </div>
        <form
          className={sent ? 'form is-sent' : 'form'}
          method="post"
          action="#free-ai-visibility-check"
          onSubmit={onSubmit}
          onFocusCapture={onInteract}
          onInput={onInteract}
          noValidate
          aria-label="Free AI visibility check request"
          aria-busy={pending}
          aria-hidden={sent ? true : undefined}
          inert={sent ? true : undefined}
        >
        <div className="hp" aria-hidden="true">
          <label htmlFor={id('hp-x')}>Leave this empty</label>
          <input id={id('hp-x')} name={HONEYPOT_NAME} type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <div className="f">
          <label htmlFor={id('email')}>Work email</label>
          <input
            className="in"
            id={id('email')}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            placeholder="you@company.com"
            value={fields.email}
            onChange={e => update('email', e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? id('email-err') : undefined}
            disabled={pending || sent}
          />
          <p className="err" id={id('email-err')}>{errors.email ?? ''}</p>
        </div>
        <div className="f">
          <label htmlFor={id('site')}>Site URL</label>
          <input
            className="in"
            id={id('site')}
            name="siteUrl"
            type="text"
            inputMode="url"
            autoComplete="url"
            required
            placeholder="company.com"
            value={fields.siteUrl}
            onChange={e => update('siteUrl', e.target.value)}
            aria-invalid={errors.siteUrl ? true : undefined}
            aria-describedby={errors.siteUrl ? id('site-err') : undefined}
            disabled={pending || sent}
          />
          <p className="err" id={id('site-err')}>{errors.siteUrl ?? ''}</p>
        </div>
        <div className="f full">
          <label htmlFor={id('competitors')}>Competitors <small>· up to 3</small></label>
          <input
            className="in"
            id={id('competitors')}
            name="competitors"
            type="text"
            autoComplete="off"
            placeholder="rival-one.com, rival-two.com"
            value={fields.competitors}
            onChange={e => update('competitors', e.target.value)}
            aria-invalid={errors.competitors ? true : undefined}
            aria-describedby={errors.competitors ? id('competitors-err') : undefined}
            disabled={pending || sent}
          />
          <p className="err" id={id('competitors-err')}>{errors.competitors ?? ''}</p>
        </div>
        <div className="f full">
          <label htmlFor={id('prompts')}>Buyer prompts <small>· 1 to 3, one per line</small></label>
          <textarea
            className="in ta"
            id={id('prompts')}
            name="prompts"
            rows={3}
            required
            autoComplete="off"
            placeholder="best onboarding software for mid-market SaaS"
            value={fields.prompts}
            onChange={e => update('prompts', e.target.value)}
            aria-invalid={errors.prompts ? true : undefined}
            aria-describedby={errors.prompts ? id('prompts-err') : undefined}
            disabled={pending || sent}
          />
          <p className="err" id={id('prompts-err')}>{errors.prompts ?? ''}</p>
        </div>
        <p className="err full" role={formError ? 'alert' : undefined}>
          {formError ? (
            formError.fallback ? (
              <>
                We could not send your request. Please try again, or{' '}
                <a href={MAILTO}>email contact@nakama.in</a>
                {' '}with your site and prompts.
              </>
            ) : ERRORS.generic
          ) : null}
        </p>
        <div className="f full">
          <button type="submit" className="btn btn-g btn-w" disabled={pending || sent}>
            {SEND}
          </button>
        </div>
        </form>
      </div>
    </div>
  );
}
