module.exports = {
  content: ['./index.html', './script/**/*.js'],
  theme: {
    extend: {
      fontFamily: { geist: ['Geist', 'sans-serif'], mono: ['Geist Mono', 'monospace'] },
      colors: {
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        body: 'rgb(var(--color-body) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        line: 'rgb(var(--color-line) / <alpha-value>)',
        accent: 'rgb(var(--color-accent) / <alpha-value>)',
        sage: 'rgb(var(--color-sage) / <alpha-value>)',
        slate2: '#59746F',
        navy: '#DDE5DC',
      }
    }
  }
};
