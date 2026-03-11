import React, { useRef } from 'react';
import { useMarkdown } from '../hooks/useMarkdown';
import '../styles/Editor.css';

const DEFAULT_TEXT = `# Welcome to Upmath Modern

Write your **Markdown** here.

You can also use LaTeX math equations:

$$
\\int_{-\\infty}^{\\infty} e^{-x^2} dx = \\sqrt{\\pi}
$$

Inline math like $$\\alpha + \\beta = \\gamma$$ also works.
`;

export function Editor() {
    const { content, setContent, html } = useMarkdown(DEFAULT_TEXT);
    const sourceRef = useRef<HTMLTextAreaElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        // Simple synchronized scroll implementation
        const source = sourceRef.current;
        const preview = previewRef.current;
        if (!source || !preview) return;

        const target = e.target as HTMLElement;
        const isSource = target === source;
        const other = isSource ? preview : source;

        const percentage = target.scrollTop / (target.scrollHeight - target.clientHeight);
        const otherScrollTop = percentage * (other.scrollHeight - other.clientHeight);
        
        // Prevent recursive scrolling events
        if (Math.abs(other.scrollTop - otherScrollTop) > 2) {
            other.scrollTop = otherScrollTop;
        }
    };

    return (
        <div className="editor-container">
            <div className="toolbar">
                <div className="logo">Upmath Modern</div>
                <div className="toolbar-actions">
                    <button onClick={() => setContent('')}>Clear</button>
                    <button onClick={() => {
                        const blob = new Blob([content], { type: 'text/markdown' });
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement('a');
                        a.href = url;
                        a.download = 'document.md';
                        a.click();
                        URL.revokeObjectURL(url);
                    }}>Save</button>
                </div>
            </div>
            <div className="workspace">
                <div className="pane source-pane">
                    <textarea
                        ref={sourceRef}
                        className="source-input"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        onScroll={handleScroll}
                        placeholder="Type Markdown here..."
                        spellCheck="false"
                    />
                </div>
                <div 
                    ref={previewRef}
                    className="pane preview-pane markdown-body" 
                    dangerouslySetInnerHTML={{ __html: html }}
                    onScroll={handleScroll}
                />
            </div>
        </div>
    );
}
