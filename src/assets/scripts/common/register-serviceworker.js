// Register Service Worker

if ('serviceWorker' in navigator) {
    if (import.meta.env.DEV || window.location.href.includes('vscode-webview')) {
        console.info('Skipping service worker registration in development or VS Code webview.');
    } else {
        window.addEventListener('load', () => {
            navigator.serviceWorker
                .register('/sw.js')
                .catch((registrationError) => {
                    console.error('SW registration failed: ', registrationError);
                });
        });
    }
}

// Disable PWA install prompt
window.addEventListener('beforeinstallprompt', (e) => e.preventDefault());
