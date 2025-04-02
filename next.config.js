module.exports = {
  reactStrictMode: true,
}
const nextConfig = {
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve("crypto-browserify"),
      };
    }
    return config;
  },
};

module.exports = nextConfig;