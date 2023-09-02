const CURRENT_DESTINATION_URL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley/";

exports.handler = async (event, context) => {
    try {
        // Validate HTTP method
        if (event.httpMethod !== 'GET') {
            return { statusCode: 405, body: 'Method Not Allowed' };
        }

        // Return the redirection response with security headers
        return {
            statusCode: 302,
            headers: {
                'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
                'X-Content-Type-Options': 'nosniff',
                'X-Frame-Options': 'DENY',
                'X-XSS-Protection': '1; mode=block',
                'Referrer-Policy': 'strict-origin-when-cross-origin',
                Location: CURRENT_DESTINATION_URL
            }
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: 'Internal Server Error'
        };
    }
};
