import React, { useRef, useEffect } from 'react';
import * as monaco from 'monaco-editor';
import { useMarkdown } from '../hooks/useMarkdown';
import { Button, ButtonGroup, Heading, Content } from '@react-spectrum/s2';
import { DEFAULT_TEXT } from '../lib/defaultText';
import '../styles/Editor.css';

export function Editor() {
    const { content, setContent, html } = useMarkdown(DEFAULT_TEXT);
    const editorRef = useRef<HTMLDivElement>(null);
    const previewRef = useRef<HTMLDivElement>(null);
    // Use ref for the instance to avoid useEffect dependency issues
    const editorInstanceRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    useEffect(() => {
        if (editorRef.current && !editorInstanceRef.current) {
            const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            
            const instance = monaco.editor.create(editorRef.current, {
                value: DEFAULT_TEXT,
                language: 'markdown',
                theme: isDark ? 'vs-dark' : 'vs-light',
                minimap: { enabled: false },
                wordWrap: 'on',
                lineNumbers: 'off',
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 20, bottom: 20 },
                fontSize: 14,
                fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
            });

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const themeChangeListener = (e: MediaQueryListEvent) => {
                monaco.editor.setTheme(e.matches ? 'vs-dark' : 'vs-light');
            };
            mediaQuery.addEventListener('change', themeChangeListener);

            instance.onDidChangeModelContent(() => {
                setContent(instance.getValue());
            });

            instance.onDidScrollChange((e: monaco.IScrollEvent) => {
                const preview = previewRef.current;
                if (!preview) return;
                
                // Only sync if the editor triggered the scroll
                if (e.scrollTopChanged) {
                    const scrollHeight = instance.getScrollHeight();
                    const clientHeight = editorRef.current?.clientHeight || 0;
                    
                    // Prevent divide by zero and negative percentages
                    const maxScrollTop = Math.max(0, scrollHeight - clientHeight);
                    if (maxScrollTop === 0) return;

                    const percentage = e.scrollTop / maxScrollTop;
                    const previewMaxScroll = preview.scrollHeight - preview.clientHeight;
                    
                    const targetScroll = percentage * previewMaxScroll;
                    if (Math.abs(preview.scrollTop - targetScroll) > 2) {
                        preview.scrollTop = targetScroll;
                    }
                }
            });

            editorInstanceRef.current = instance;

            return () => {
                mediaQuery.removeEventListener('change', themeChangeListener);
                instance.dispose();
                editorInstanceRef.current = null;
            };
        }
    }, [setContent]); 

    const handleClear = () => {
        if (editorInstanceRef.current) {
            editorInstanceRef.current.setValue('');
            setContent('');
        }
    };

    const handleSave = () => {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'document.md';
        a.click();
        URL.revokeObjectURL(url);
    };

    const handlePreviewScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const instance = editorInstanceRef.current;
        if (!instance) return;
        
        const preview = e.target as HTMLDivElement;
        const percentage = preview.scrollTop / (preview.scrollHeight - preview.clientHeight);
        
        const scrollHeight = instance.getScrollHeight();
        const clientHeight = editorRef.current?.clientHeight || 0;
        const editorMaxScroll = Math.max(0, scrollHeight - clientHeight);
        
        const targetScroll = percentage * editorMaxScroll;
        
        if (Math.abs(instance.getScrollTop() - targetScroll) > 2) {
            instance.setScrollTop(targetScroll);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', overflow: 'hidden', backgroundColor: 'var(--s2-color-bg-base)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', height: '60px', borderBottom: '1px solid var(--s2-color-border-subtle)', backgroundColor: 'var(--s2-color-bg-layer-1)' }}>
                <Heading level={2}>Upmath Modern</Heading>
                <ButtonGroup>
                    <Button variant="secondary" onPress={handleClear}>Clear</Button>
                    <Button variant="primary" onPress={handleSave}>Save</Button>
                </ButtonGroup>
            </div>
            <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
                <div style={{ flex: 1, borderRight: '1px solid var(--s2-color-border-subtle)' }}>
                    <div ref={editorRef} style={{ width: '100%', height: '100%' }} />
                </div>
                <div 
                    ref={previewRef}
                    style={{ flex: 1, backgroundColor: 'var(--s2-color-bg-layer-1)', padding: '24px', overflowY: 'auto' }}
                    onScroll={handlePreviewScroll}
                >
                    <Content>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: html }} />
                    </Content>
                </div>
            </div>
        </div>
    );
}
