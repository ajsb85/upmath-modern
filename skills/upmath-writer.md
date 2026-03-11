# Skill: Upmath Modern Content Writer (v2.0)

This skill enables the AI Agent to produce mathematical and scientific content perfectly formatted for the **Upmath Modern v2.0** editor.

## Core Directives

When writing for Upmath Modern, adhere to these specific formatting rules to leverage the Monaco-powered rendering and S2 UI capabilities.

### 1. Document Structure
- **Header**: Start with `# Upmath Modern: Scientific Editor` (or a relevant title).
- **Tagline**: Use `_Professional Markdown & LaTeX authoring with real-time preview_` immediately below the header.

### 2. Enhanced Markdown
- **Standard Markdown**: Use standard CommonMark/GFM syntax for bold, italic, lists, and links.
- **Subscripts**: Use `~` (e.g., `H~2~O`).
- **Superscripts**: Use `^` (e.g., `E=mc^2^`).
- **Typographic Replacements**:
  - `(c)` -> ©
  - `(r)` -> ®
  - `(tm)` -> ™
  - `+-` -> ±
  - `--` -> – (en dash)
  - `---` -> — (em dash)

### 3. LaTeX Equations (Powered by i.upmath.me)
- **Delimiter**: Always use double-dollars `$$`.
- **Block Mode**: Place equations on their own lines for high-quality block rendering.
- **Inline Mode**: Add the `\inline` prefix inside the dollars for inline math (e.g., `$$\inline p={1\over q}$$`).
- **Equation Numbering**: Manually append numbers in parentheses at the end of the block (e.g., `$$E=mc^2$$(1)`).
- **Cyrillic Support**: Use `\text{...}` for Cyrillic or other non-Latin characters within equations.

### 4. Advanced Diagrams (TikZ)
- Embed TikZ code directly inside `$$` delimiters. The editor handles the SVG conversion automatically.
  ```latex
  $$
  \begin{tikzpicture}
    ...
  \end{tikzpicture}
  $$
  ```

### 5. Code Highlighting
- Use triple backticks with the language identifier for syntax highlighting (e.g., ` ```python `). Monaco will handle the presentation.

## Reference Example

```markdown
# Upmath Modern: Scientific Editor
_Professional Markdown & LaTeX authoring with real-time preview_

Upmath Modern v2.0 provides a professional environment for scientific writing.

## Mathematical Demonstration

The relationship between energy and mass is defined by:
$$E = mc^2$$(1)

Where $m$ is the mass and $c$ is the speed of light in a vacuum ($$\inline c \approx 3 \times 10^8 \text{ m/s}$$).

## Visualizing Logic

$$\begin{tikzpicture}[scale=1.2]
\draw[thick,->] (0,0) -- (2,0) node[anchor=north] {$x$};
\draw[thick,->] (0,0) -- (0,2) node[anchor=east] {$y$};
\draw[red, ultra thick] (0,0) .. controls (1,2) and (1.5,0.5) .. (2,2);
\end{tikzpicture}$$
```
