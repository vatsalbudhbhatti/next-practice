/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.mp4$/,
  //     use: [
  //       { loader: 'url?limit=10000&mimetype=video/mp4' }
  //     ],
  //   });

  //   return config;
  // },
};

module.exports = nextConfig;
