function Footer() {
    return (
        <footer className="page-footer light-blue accent-1">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="https://github.com/Talina-V">GitHub</a>
          </div>
        </div>
      </footer>
    )
}

export { Footer };