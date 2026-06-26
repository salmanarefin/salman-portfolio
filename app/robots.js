const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || 'https://salman-portfolio-etyo.vercel.app/';

export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: `${siteUrl}/sitemap.xml`,
        host: siteUrl,
    };
}