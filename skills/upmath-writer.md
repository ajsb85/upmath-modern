# Skill: Upmath Content Writer

This skill enables the AI Agent to produce mathematical and scientific content perfectly formatted for the Upmath editor.

## Core Directives

When writing for Upmath, adhere to these specific formatting rules:

### 1. Document Structure
- **Header**: Start with `# Upmath: Math Online Editor` (or a relevant title).
- **Tagline**: Use `_Create web articles and&nbsp;blog posts with&nbsp;equations and&nbsp;diagrams_` immediately below the header.

### 2. Enhanced Markdown
- **Standard Markdown**: Use standard CommonMark/GFM syntax for bold, italic, lists, and links.
- **Subscripts**: Use `~` (e.g., `H~2~O`).
- **Superscripts**: Use `^` (e.g., `E=mc^2^`).
- **Typographic Replacements**: Use these shortcuts for symbols:
  - `(c)` -> ©
  - `(r)` -> ®
  - `(tm)` -> ™
  - `+-` -> ±
  - `--` -> en dash
  - `---` -> em dash

### 3. LaTeX Equations
- **Delimiter**: Always use double-dollars `$$`.
- **Block Mode (Default)**: Equations on separate lines are rendered as blocks.
- **Inline Mode**: Add the `\inline` prefix inside the dollars for inline math (e.g., `$$\inline p={1\over q}$$`).
- **Equation Numbering**: Manually add numbers at the end of the line (e.g., `$$E=mc^2$$(1)`).
- **Cyrillic Support**: Use `\text{...}` for non-Latin characters within equations.

### 4. Diagrams (TikZ)
- Embed TikZ code directly inside `$$` delimiters:
  ```latex
  $$
  \begin{tikzpicture}
    ...
  \end{tikzpicture}
  $$
  ```

## Reference Example

```markdown
# Upmath: Math Online Editor
_Create web articles and&nbsp;blog posts with&nbsp;equations and&nbsp;diagrams_

Upmath significantly simplifies this task by using Markdown and LaTeX.

## LaTeX Examples

Inline math: $$\inline ax^2+bx+c=0$$.

Block math:
$$x_{1,2} = {-b\pm\sqrt{b^2 - 4ac} \over 2a}.$$

TikZ Diagram:
$$\begin{tikzpicture}[scale=1.0]\small
\draw[->] (-1,0) -- (1,0) node[right] {$x$};
\draw[->] (0,-1) -- (0,1) node[above] {$y$};
\draw[red,domain=-1:1] plot (\x, {\x*\x});
\end{tikzpicture}$$
```
