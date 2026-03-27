export function PortfolioSection({ items }) {
  return (
    <section id="portfolios" className="panel" aria-labelledby="portfolios-heading">
      <div className="section-head section-head--split">
        <span className="section-num" aria-hidden="true">
          02
        </span>
        <div>
          <h2 id="portfolios-heading">Portfolios</h2>
          <p className="section-head__lead">
            Selected projects and live demos.
          </p>
        </div>
      </div>

      {items.length === 0 ? (
        <p className="portfolio-empty">Nothing here yet — add items to <code>portfolioItems</code>.</p>
      ) : (
        <ul className="portfolio-list">
          {items.map((item) => (
            <li key={item.id} className="portfolio-card">
              <h3 className="portfolio-card__title">{item.title}</h3>
              <p className="portfolio-card__desc">{item.description}</p>
              {item.links?.length ? (
                <ul className="portfolio-card__links">
                  {item.links.map((link) => (
                    <li key={`${item.id}-${link.label}`}>
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}
