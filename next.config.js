/** @type {import('next').NextConfig} */
const redirects = require("./redirects.json");

const nextConfig = {
    reactStrictMode: true,
    // output: "export",

    async redirects() {
        return redirects;
    },
};

module.exports = nextConfig;
