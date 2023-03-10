const withFonts = require('next-fonts');

/** @type {import('next').NextConfig} */
const nextConfig = withFonts({
  reactStrictMode: true,
  async headers() {
    return [
      // Neue Montreal
      {
        source: '/fonts/PPNeueMontreal-Thin.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPNeueMontreal-Book.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPNeueMontreal-Medium.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPNeueMontreal-Italic.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPNeueMontreal-SemiBoldItalic.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPNeueMontreal-Bold.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      // Monument
      {
        source: '/fonts/PPMonumentExtended-Light.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPMonumentExtended-LightItalic.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPMonumentExtended-Regular.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPMonumentExtended-RegularItalic.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPMonumentExtended-Black.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/PPMonumentExtended-BlackItalic.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      // Right Gothic Wide
      {
        source: '/fonts/RightGothic/PPRightGothic-WideMedium.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
      {
        source: '/fonts/RightGothic/PPRightGothic-WideBlack.otf',
        headers: [
          {
            key: 'Cache-control',
            value: 'public, immutable, max-age=31536000',
          },
        ],
      },
    ];
  },
});

module.exports = nextConfig;
