module.exports = {
  ci: {
    collect: {
      staticDistDir: "./out",
    },
    assert: {
      assertions: {
        "uses-long-cache-ttl": "off",
        "uses-http2": "off"
      }
    },
    upload: {
      target: "filesystem",
      outputDir: "./out/lighthouse"
    },
  },
};