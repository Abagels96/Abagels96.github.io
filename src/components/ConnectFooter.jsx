function LinkedInIcon() {
  return (
    <svg
      className="contact-btn__icon"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="contact-btn__icon"
      viewBox="0 0 24 24"
      width={22}
      height={22}
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576A12.002 12.002 0 0024 12c0-6.627-5.373-12-12-12z"
      />
    </svg>
  )
}

export function ConnectFooter({ name, linkedIn, github }) {
  return (
    <footer className="site-footer">
      <section
        id="connect"
        className="panel panel--contact"
        aria-labelledby="contact-heading"
      >
        <div className="section-head section-head--split">
          <span className="section-num" aria-hidden="true">
            03
          </span>
          <div>
            <h2 id="contact-heading">Contact</h2>
            <p className="section-head__lead">
              If you&apos;re hiring, collaborating, or want to talk architecture and product delivery,
              reach out on LinkedIn, or browse code and activity on GitHub.
            </p>
          </div>
        </div>
        <div className="contact__actions">
          <a
            className="contact-btn contact-btn--linkedin"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
          <a
            className="contact-btn contact-btn--github"
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        </div>
      </section>
      <p className="footer-copy">
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
