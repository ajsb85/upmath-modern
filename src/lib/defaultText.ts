export const DEFAULT_TEXT = `# Upmath Modern: Scientific Editor
_Professional Markdown & LaTeX authoring with real-time preview_

Upmath Modern significantly simplifies writing scientific content by combining the power of **Markdown**, **LaTeX**, and the **Monaco Editor** (the engine behind VS Code). This version is a complete high-performance rewrite built with **React 19**, **TypeScript**, and **Spectrum 2**.

![Upmath Modern](https://upmath.me/i/latex.jpg)

## Markdown Features

Upmath Modern supports standard GFM syntax along with powerful scientific extensions:

- **Professional Editing**: Powered by Monaco for multi-cursor support and IDE-grade performance.
- **Adaptive Theming**: Seamlessly switches between Light and Dark modes based on your OS.
- **Typographic Replacements**: (c) (r) (tm) +- !!!!!! ???? ,, -- ---
- **Subscripts & Superscripts**: *E*~0~=*mc*^2^.
- **Synchronized Scrolling**: The source and preview panes stay in perfect sync.

## Native LaTeX Support

Upmath converts LaTeX equations in double-dollars \`$$\`: $$ax^2+bx+c=0$$. 

Equations are rendered as high-quality SVGs. For inline equations, use the \`\\inline\` prefix: $$\\inline p={1\\over q}$$.

### Advanced Mathematics

$$x_{1,2} = {-b\\pm\\sqrt{b^2 - 4ac} \\over 2a}.$$

One can use matrices:

$$T^{\\mu\\nu}=\\begin{pmatrix}
\\varepsilon&0&0&0\\\\
0&\\varepsilon/3&0&0\\\\
0&0&\\varepsilon/3&0\\\\
0&0&0&\\varepsilon/3
\\end{pmatrix},$$

and complex integrals:

$$P_\\omega={n_\\omega\\over 2}\\hbar\\omega\\,{1+R\\over 1-v^2}\\int\\limits_{-1}^{1}dx\\,(x-v)|x-v|,$$

### Dynamic TikZ Diagrams

Upmath Modern handles complex TikZ code directly:

$$\\usetikzlibrary{decorations.pathmorphing}
\\begin{tikzpicture}[line width=0.2mm,scale=1.0545]\\small
\\tikzset{>=stealth}
\\tikzset{snake it/.style={->,semithick,
decoration={snake,amplitude=.3mm,segment length=2.5mm,post length=0.9mm},decorate}}
\\def\\h{3}
\\def\\d{0.2}
\\def\\ww{1.4}
\\def\\w{1+\\ww}
\\def\\p{1.5}
\\def\\r{0.7}
\\coordinate[label=below:$A_1$] (A1) at (\\ww,\\p);
\\coordinate[label=above:$B_1$] (B1) at (\\ww,\\p+\\h);
\\coordinate[label=below:$A_2$] (A2) at (\\w,\\p);
\\coordinate[label=above:$B_2$] (B2) at (\\w,\\p+\\h);
\\coordinate[label=left:$C$] (C1) at (0,0);
\\coordinate[label=left:$D$] (D) at (0,\\h);
\\draw[fill=blue!14](A2)--(B2)-- ++(\\d,0)-- ++(0,-\\h)--cycle;
\\draw[gray,thin](C1)-- +(\\w+\\d,0);
\\draw[dashed,gray,fill=blue!5](A1)-- (B1)-- ++(\\d,0)-- ++(0,-\\h)-- cycle;
\\draw[dashed,line width=0.14mm](A1)--(C1)--(D)--(B1);
\\draw[snake it](C1)--(A2) node[pos=0.6,below] {$c\\Delta t$};
\\draw[->,semithick](\\ww,\\p+0.44*\\h)-- +(\\w-\\ww,0) node[pos=0.6,above] {$v\\Delta t$};
\\draw[snake it](D)--(B2);
\\draw[thin](\\r,0) arc (0:atan2(\p,\\w):\\r) node[midway,right,yshift=0.06cm] {$\\theta$};
\\draw[opacity=0](-0.40,-0.14)-- ++(0,5.06);
\\end{tikzpicture}$$

## Technical Architecture

- **Zero Backend**: All rendering logic happens client-side for maximum privacy and speed.
- **Vite Optimized**: Intelligent chunk splitting for blazing fast initial loads.
- **AI-Ready**: Structured "AI Skills" included to help LLMs generate Upmath content.

The source code is published on [GitHub](https://github.com/ajsb85/upmath-modern) under the MIT license.

***

You can now erase this instruction and start writing your own scientific document. If you wish to see these examples again, simply reload the application.

Happy writing!`;
