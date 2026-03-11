import MarkdownIt from 'markdown-it';

interface MarkdownItS2TexOptions {
    inlineOpen?: string;
    inlineClose?: string;
    protocol?: string;
    noreplace?: boolean;
}

function scanDelims(state: any, start: number) {
    let pos = state.pos, lastChar, nextChar, count,
        isLastWhiteSpace, isLastPunctChar,
        isNextWhiteSpace, isNextPunctChar,
        can_open = true,
        can_close = true,
        max = state.posMax;
        
    const isWhiteSpace = state.md.utils.isWhiteSpace;
    const isPunctChar = state.md.utils.isPunctChar;
    const isMdAsciiPunct = state.md.utils.isMdAsciiPunct;

    lastChar = start > 0 ? state.src.charCodeAt(start - 1) : 0x20;
    if (pos >= max) {
        can_open = false;
    }
    count = pos - start;

    nextChar = pos < max ? state.src.charCodeAt(pos) : 0x20;
    isLastPunctChar = isMdAsciiPunct(lastChar) || isPunctChar(String.fromCharCode(lastChar));
    isNextPunctChar = isMdAsciiPunct(nextChar) || isPunctChar(String.fromCharCode(nextChar));
    isLastWhiteSpace = isWhiteSpace(lastChar);
    isNextWhiteSpace = isWhiteSpace(nextChar);

    if (isNextWhiteSpace) {
        can_open = false;
    } else if (isNextPunctChar) {
        if (!(isLastWhiteSpace || isLastPunctChar)) {
            can_open = false;
        }
    }
    if (isLastWhiteSpace) {
        can_close = false;
    } else if (isLastPunctChar) {
        if (!(isNextWhiteSpace || isNextPunctChar)) {
            can_close = false;
        }
    }

    return {
        can_open: can_open,
        can_close: can_close,
        delims: count
    };
}

function makeMath_inline(open: string, close: string) {
    return function math_inline(state: any, silent: boolean) {
        let startCount,
            found,
            res,
            token,
            closeDelim,
            max = state.posMax,
            start = state.pos,
            openDelim = state.src.slice(start, start + open.length);

        if (openDelim !== open) {
            return false;
        }
        if (silent) {
            return false;
        }

        res = scanDelims(state, start + open.length);
        startCount = res.delims;

        if (!res.can_open) {
            state.pos += startCount;
            state.pending += state.src.slice(start, state.pos);
            return true;
        }

        state.pos = start + open.length;

        while (state.pos < max) {
            closeDelim = state.src.slice(state.pos, state.pos + close.length);
            if (closeDelim === close) {
                res = scanDelims(state, state.pos + close.length);
                if (res.can_close) {
                    found = true;
                    break;
                }
            }
            state.md.inline.skipToken(state);
        }

        if (!found) {
            state.pos = start;
            return false;
        }

        let m = null,
            tag = 'tex-inline';

        if (start === 0) {
            const srcEnd = state.src.substring(state.pos + close.length);
            const match = srcEnd.match(/^\s*(\([ \t]*\S+[ \t]*\))\s*$/);
            if (match || srcEnd === '') {
                m = match;
                tag = 'tex-block';
            }
        }

        state.posMax = state.pos;
        state.pos = start + close.length;

        token = state.push('math_inline', tag, 0);
        token.content = state.src.slice(state.pos, state.posMax);
        token.markup = open;

        state.pos = m ? max : state.posMax + close.length;
        state.posMax = max;

        if (m) {
            token = state.push('math_number', 'tex-number', 0);
            token.content = m[1];
            token.markup = '()';
        }

        return true;
    };
}

export default function markdownitS2Tex(md: MarkdownIt, options: MarkdownItS2TexOptions = {}) {
    const inlineOpen = options.inlineOpen || '$$';
    const inlineClose = options.inlineClose || '$$';

    const math_inline = makeMath_inline(inlineOpen, inlineClose);

    md.inline.ruler.before('escape', 'math_inline', math_inline);

    const protocol = typeof options.protocol !== 'undefined' ? options.protocol : (typeof location !== 'undefined' && location.protocol === 'https:' ? 'https:' : 'http:');

    md.renderer.rules.math_inline = (tokens, idx) => {
        const formula = tokens[idx].content;

        if (options.noreplace) {
            const str = inlineOpen + formula + inlineClose;
            return str
                .replace(/&/g, '&amp;')
                .replace(/>/g, '&gt;')
                .replace(/</g, '&lt;')
                .replace(/"/g, '&quot;');
        }

        const url = protocol + '//i.upmath.me/svg/' + encodeURIComponent(formula);
        const isInline = "tex-inline" === tokens[idx].tag;

        return isInline
            ? `<img src="${url}" alt="${md.utils.escapeHtml(formula)}" />`
            : `<img align="center" src="${url}" alt="${md.utils.escapeHtml(formula)}" />`;
    };

    md.renderer.rules.math_number = (tokens, idx) => {
        return `<span style="float:right">${tokens[idx].content}</span>`;
    };
}
