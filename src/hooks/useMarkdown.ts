import { useState, useEffect, useMemo } from 'react';
import MarkdownIt from 'markdown-it';
import markdownItSub from 'markdown-it-sub';
import markdownItSup from 'markdown-it-sup';
import markdownitS2Tex from '../lib/markdown-it-s2-tex';
import hljs from 'highlight.js';

export function useMarkdown(initialContent: string = '') {
    const [content, setContent] = useState(initialContent);
    const [html, setHtml] = useState('');

    const md = useMemo(() => {
        return new MarkdownIt({
            html: true,
            xhtmlOut: false,
            breaks: false,
            langPrefix: 'language-',
            linkify: true,
            typographer: true,
            quotes: '«»„“',
            highlight: function (str: string, lang: string) {
                if (lang && hljs.getLanguage(lang)) {
                    try {
                        return hljs.highlight(str, { language: lang }).value;
                    } catch {
                        // Ignore highlight errors
                    }
                }
                return '';
            }
        })
        .use(markdownitS2Tex)
        .use(markdownItSub)
        .use(markdownItSup);
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setHtml(md.render(content));
        }, 300); // 300ms debounce
        return () => clearTimeout(timeoutId);
    }, [content, md]);

    return { content, setContent, html };
}