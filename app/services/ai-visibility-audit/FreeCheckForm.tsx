'use client';

import {useId, useRef, useState, type FormEvent} from 'react';
import Link from 'next/link';
import {
  BOOK, Q_HREF, SAMPLE_BODY, SAMPLE_EYE, SAMPLE_H2, SAMPLE_SCOPE, SEE_PRICING, SEND,
  THANKS, THANKS_K, THANKS_NEXT,
} from './copy';
import {ERRORS, MIN_SUBMIT_MS, validateFreeCheck, type FieldErrors} from '@/lib/free-check';

const STARTED_AT = Date.now();

export function FreeCheckRequest() {
  const formId = useId();
  const thanksRef = useRef<HTMLDivElement>(null);
  const [fields, setFields] = useState({email: '', siteUrl: '', competitors: '', prompts: ''});
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState('');
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);

  function id(name: string) {
    return `${formId}-${name}`;
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
    if (pending) return;
    setFormError('');
    setSent(false);

    const checked = validateFreeCheck(fields);
    if (!checked.ok) {
      setErrors(checked.fields);
      return;
    }
    setErrors({});
    setPending(true);
    try {
      const form = event.currentTarget;
      const honeypot = String(new FormData(form).get('company') || '');
      const wait = MIN_SUBMIT_MS - (Date.now() - STARTED_AT);
      if (wait > 0) await new Promise(resolve => setTimeout(resolve, wait));
      const res = await fetch('/api/free-check', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({...fields, company: honeypot, startedAt: STARTED_AT}),
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || !data || data.ok !== true) {
        if (data?.fields && typeof data.fields === 'object') setErrors(data.fields);
        const isFieldError = Boolean(data?.fields && typeof data.fields === 'object');
        setFormError(isFieldError && typeof data?.error === 'string' ? data.error : ERRORS.generic);
        return;
      }
      setSent(true);
      requestAnimationFrame(() => {
        thanksRef.current?.scrollIntoView({block: 'nearest', behavior: 'smooth'});
      });
    } catch {
      setFormError(ERRORS.generic);
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
        <div className="ty" hidden={!sent} ref={thanksRef} role={sent ? 'status' : undefined}>
          <b>{THANKS_K}</b>
          {THANKS}
          <br />
          {THANKS_NEXT} <Link href={Q_HREF}>{BOOK}</Link> · <Link href="#pricing">{SEE_PRICING}</Link>
        </div>
      </div>
      <form
        className="form"
        onSubmit={onSubmit}
        noValidate
        aria-label="Free AI visibility check request"
        aria-busy={pending}
      >
        <div className="hp" aria-hidden="true">
          <label htmlFor={id('company')}>Company</label>
          <input id={id('company')} name="company" type="text" tabIndex={-1} autoComplete="off" />
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
            disabled={pending}
          />
          {errors.email && <p className="err" id={id('email-err')}>{errors.email}</p>}
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
            disabled={pending}
          />
          {errors.siteUrl && <p className="err" id={id('site-err')}>{errors.siteUrl}</p>}
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
            disabled={pending}
          />
          {errors.competitors && <p className="err" id={id('competitors-err')}>{errors.competitors}</p>}
        </div>
        <div className="f full">
          <label htmlFor={id('prompts')}>Buyer prompts <small>· 1 to 3</small></label>
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
            disabled={pending}
          />
          {errors.prompts && <p className="err" id={id('prompts-err')}>{errors.prompts}</p>}
        </div>
        {formError && <p className="err full" role="alert">{formError}</p>}
        <div className="f full">
          <button type="submit" className="btn btn-g btn-w" disabled={pending}>
            {SEND}
          </button>
        </div>
      </form>
    </div>
  );
}
