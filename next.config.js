// next.config.js
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
    // Tutaj możesz dodać konfigurację, która jest specyficzna dla środowiska developerskiego
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...defaultConfig,
            compiler: {
                styledComponents: true,  // Włącza specjalne opcje dla styled-components
            },
            // Możesz dodać więcej opcji specyficznych dla developmentu
        }
    }

    // Konfiguracja używana w produkcji oraz w innych środowiskach poza developerskim
    return {
        ...defaultConfig,
        compiler: {
            styledComponents: true,  // Zapewnia prawidłowe renderowanie styled-components
        },
        // Tutaj możesz dodać więcej konfiguracji globalnych
        images: {
            domains: ['example.com'],  // Dostosuj do domen, z których ładujesz obrazy
        },
        async redirects() {
            return [
                {
                    source: '/stara-pfodzka',
                    destination: '/nowa-pfodzka',
                    permanent: true,
                },
            ];
        },
        async rewrites() {
            return [
                {
                    source: '/api/:path*',
                    destination: 'https://api.example.com/:path*',  // Przykład przekierowania API
                },
            ];
        },
        async headers() {
            return [
                {
                    source: '/przyklad-zasobu',
                    headers: [
                        { key: 'X-Specjalny-Naglowek', value: 'wartosc' }
                    ],
                },
            ];
        },
    };
};
