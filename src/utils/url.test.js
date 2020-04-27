import base_url from './url';

describe('base_url', () => {
    test('should include default port when is define', () => {
        const location = {
            protocol: 'http:',
            hostname: 'server',
            port: '8000',
        };
        expect(base_url(location)).toBe('http://server:8080');
    });
    test('should remove port when is empty', () => {
        const location = {
            protocol: 'https:',
            hostname: 'server',
            port: '',
        };
        expect(base_url(location)).toBe('https://server');
    });
});

