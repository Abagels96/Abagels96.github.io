export function ConnectFooter({ name, linkedIn }) {
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
              reach out on LinkedIn.
            </p>
          </div>
        </div>
        <div className="contact__actions">
          <a
            className="btn btn--fill btn--lg"
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn profile
          </a>
        </div>
      </section>
      <p className="footer-copy">
        © {new Date().getFullYear()} {name}
      </p>
    </footer>
  )
}
