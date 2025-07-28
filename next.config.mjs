/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.themealdb.com'
            }
        ],
    },
    // async redirects() {
    //     return [
    //         // Basic redirect
    //         // {
    //         //     source: '/products/add',
    //         //     destination: '/dashboard/products',
    //         //     permanent: true,
    //         // },

    //     ]
    // },
}


export default nextConfig;
