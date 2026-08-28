import { useEffect } from 'react';

interface SecretTitleTriggerProps {
    onTrigger: () => void;
}

export default function SecretTitleTrigger({ onTrigger }: SecretTitleTriggerProps) {
    useEffect(() => {
        const allElements = document.querySelectorAll('h1, h2, h3, .enigma-title, [class*="title"]');

        let targetElement: Element | null = null;

        allElements.forEach((el) => {
            if (el.textContent?.includes('Click on me')) {
                targetElement = el;
            }
        });

        if (!targetElement) return;

        const el = targetElement as Element;
        const original = el.innerHTML;

        el.innerHTML = original.replace(
            /\bme\b/,
            `<span id="secret-me" style="cursor:default;user-select:none;">me</span>`
        );

        const secretSpan = document.getElementById('secret-me');
        if (!secretSpan) return;

        const handler = (e: Event) => {
            e.stopPropagation();
            onTrigger();
        };

        secretSpan.addEventListener('click', handler);

        return () => {
            secretSpan.removeEventListener('click', handler);
            el.innerHTML = original;
        };
    }, [onTrigger]);

    return null;
}