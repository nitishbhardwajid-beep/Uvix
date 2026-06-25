export default function PageSection({ eyebrow, title, intro, children }) {
  return (
    <section className="page-shell">
      <div className="page-heading">
        {eyebrow ? <span className="section-tag">{eyebrow}</span> : null}
        <h1 className="page-title">{title}</h1>
        {intro ? <p className="page-intro">{intro}</p> : null}
      </div>
      <div className="page-body">{children}</div>
    </section>
  );
}
