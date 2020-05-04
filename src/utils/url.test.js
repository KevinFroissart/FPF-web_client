import base_url from './url';

describe('base_url', () => {
    test('should include default port when is define', () => {
        const location = {
            protocol: 'http:',
            port: '8000',
        };
        expect(base_url(location)).toBe('http://groupe9.azae.eu:8080');
    });
    test('should remove port when is empty', () => {
        const location = {
            protocol: 'https:',
            port: '',
        };
        expect(base_url(location)).toBe('https://groupe9.azae.eu');
    });
});

