'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Check, Copy, Loader2, Mail, MessageCircle, Send, X } from 'lucide-react';
import { WHATSAPP_URL } from '@/lib/contact';
import { USER_DATA } from '@/lib/data';

const ease = [0.16, 1, 0.3, 1];

export function QuickMessageModal({
  open,
  onClose,
  initialSource = 'Direct Message',
  title = 'Send a message to Razim',
  description = 'Tell me about your project, team, or role. Your message goes straight to my inbox.',
  reduced = false,
}) {
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleClose = useCallback(() => {
    setStatus('idle');
    setErrorMessage('');
    setCopiedEmail(false);
    onClose();
  }, [onClose]);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(USER_DATA.contact.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Fallback ignored if clipboard is unavailable
    }
  };

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, handleClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!contact.trim()) {
      setErrorMessage('Please provide an email or phone number so I can reply.');
      setStatus('error');
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Please include a brief message about your project or role.');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          contact: contact.trim(),
          notes: message.trim(),
          source: initialSource,
          hp: honeypot,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setErrorMessage(data.error || 'Could not send message. Please try WhatsApp or email directly.');
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch {
      setErrorMessage('Network connection error. Please try WhatsApp or email directly.');
      setStatus('error');
    }
  };

  const mailtoFallback = `mailto:${USER_DATA.contact.email}?subject=${encodeURIComponent(
    `Inquiry from ${name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(message)}`;

  return (
    <AnimatePresence>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="quick-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduced ? 0 : 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={reduced ? false : { opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: reduced ? 0 : 0.24, ease }}
            className="relative z-10 w-full max-w-lg rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-8"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close message dialog"
              className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg text-[var(--muted)] hover:bg-[var(--surface-hover)] hover:text-[var(--foreground)]"
            >
              <X size={18} aria-hidden="true" />
            </button>

            {status === 'success' ? (
              <div className="py-4 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <Check size={24} aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-medium tracking-tight">Message delivered!</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  Thank you{name ? `, ${name}` : ''}. Your note has been delivered directly to my inbox at{' '}
                  <span className="font-medium text-[var(--foreground)]">{USER_DATA.contact.email}</span>. I’ll reply within 24 hours.
                </p>
                <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="action-primary min-h-11 px-6 text-sm font-semibold"
                  >
                    Close
                  </button>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-secondary min-h-11 px-6 text-sm font-semibold"
                  >
                    <MessageCircle size={16} aria-hidden="true" /> Continue on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <div>
                <h3 id="quick-modal-title" className="text-2xl font-medium tracking-tight">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{description}</p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Honeypot field */}
                  <input
                    type="text"
                    name="website_hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    className="hidden"
                    aria-hidden="true"
                  />

                  <div>
                    <label htmlFor="quick-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Your name or company
                    </label>
                    <input
                      id="quick-name"
                      type="text"
                      autoComplete="name"
                      maxLength={160}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex / Acme Corp"
                      className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3.5 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="quick-contact" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Email or phone <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      id="quick-contact"
                      type="text"
                      required
                      autoComplete="email"
                      maxLength={160}
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="alex@company.com or +971…"
                      className="w-full rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3.5 py-2.5 text-sm"
                    />
                  </div>

                  <div>
                    <label htmlFor="quick-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[var(--muted)]">
                      Message <span className="text-emerald-500">*</span>
                    </label>
                    <textarea
                      id="quick-message"
                      required
                      rows={4}
                      maxLength={2000}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about what you are building, what needs solving, or the role you are looking to fill…"
                      className="w-full resize-y rounded-lg border border-[var(--control-border)] bg-[var(--surface-hover)] px-3.5 py-2.5 text-sm leading-relaxed"
                    />
                  </div>

                  {status === 'error' && (
                    <p role="alert" className="text-xs font-medium text-rose-500">
                      {errorMessage}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="action-primary flex min-h-12 w-full items-center justify-center gap-2 text-sm font-semibold transition-transform active:scale-[0.985] disabled:opacity-60"
                    >
                      {status === 'sending' ? (
                        <>
                          <Loader2 size={17} className="animate-spin" aria-hidden="true" /> Sending to Razim…
                        </>
                      ) : (
                        <>
                          <Send size={17} aria-hidden="true" /> Send message directly
                        </>
                      )}
                    </button>
                  </div>
                </form>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border)] pt-4 text-xs text-[var(--muted)]">
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
                    >
                      <MessageCircle size={13} aria-hidden="true" /> Message on WhatsApp
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1 hover:text-[var(--foreground)] transition-colors cursor-pointer"
                    >
                      {copiedEmail ? (
                        <>
                          <Check size={13} className="text-emerald-500" aria-hidden="true" /> Copied email
                        </>
                      ) : (
                        <>
                          <Copy size={13} aria-hidden="true" /> Copy email
                        </>
                      )}
                    </button>
                  </div>
                  <a
                    href={mailtoFallback}
                    className="inline-flex items-center gap-1 hover:text-[var(--foreground)] transition-colors"
                  >
                    <Mail size={13} aria-hidden="true" /> Open local mail app
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
