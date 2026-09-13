type IconProps = {
  className?: string;
};

export function IconPhone({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M7.2 3.8h2.3c.5 0 .9.3 1 .8l.8 2.6c.1.5 0 1-.4 1.3L9.4 10c.8 1.7 2 2.9 3.7 3.7l1.5-1.5c.3-.4.8-.5 1.3-.4l2.6.8c.5.1.8.5.8 1v2.3c0 .6-.5 1.1-1.1 1-6.2-.8-11.1-5.7-11.9-11.9-.1-.6.4-1.1 1-1.1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMail({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="m4.5 7.5 7.5 6 7.5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPin({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M12 21s6.5-5.4 6.5-10.2A6.5 6.5 0 0 0 12 4.3a6.5 6.5 0 0 0-6.5 6.5C5.5 15.6 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="10.6" r="1.8" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function IconFacebook({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M14.2 8.4h2.1V5.6h-2.1c-2.3 0-3.8 1.4-3.8 3.8v1.6H8.6v2.8h1.8V20h3.1v-6.2h2.2l.5-2.8h-2.7V9.6c0-.7.3-1.2 1.2-1.2Z" />
    </svg>
  );
}

export function IconInstagram({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16.4" cy="7.6" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function IconYoutube({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20.6 8.2a2.4 2.4 0 0 0-1.7-1.7C17.3 6.2 12 6.2 12 6.2s-5.3 0-6.9.3a2.4 2.4 0 0 0-1.7 1.7C3.1 9.8 3.1 12 3.1 12s0 2.2.3 3.8a2.4 2.4 0 0 0 1.7 1.7c1.6.3 6.9.3 6.9.3s5.3 0 6.9-.3a2.4 2.4 0 0 0 1.7-1.7c.3-1.6.3-3.8.3-3.8s0-2.2-.3-3.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="m10.6 14.6 4.2-2.6-4.2-2.6v5.2Z" fill="currentColor" />
    </svg>
  );
}

export function IconMenu({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="M4 7h16M4 12h16M4 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path d="m6 6 12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 52" fill="none" aria-hidden="true" className={className}>
      <circle cx="20" cy="6.2" r="4.3" fill="currentColor" />
      <path
        d="M8 19 32 48.5M32 19 8 48.5"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
