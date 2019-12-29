// eslint-disable-next-line import/no-extraneous-dependencies
const { injectManifest } = require('workbox-build');
// NOTE: This should be run *AFTER* all your assets are built
let dirName = '';
if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
  dirName = 'public';
} else {
  dirName = 'build';
}
const buildSW = () =>
  // This will return a Promise
  injectManifest({
    swSrc: 'src/service-worker-custom-template.js', // this is your sw template file
    swDest: `${dirName}/service-worker-custom.js`, // this will be created in the build step
    globDirectory: 'build',
    globPatterns: ['**/*.{js,css,html,png,ico,eot,svg,ttf,woff,woff2}']
  }).then(({ count, size, warnings }) => {
    // Optionally, log any warnings and details.
    warnings.forEach(console.warn);
    console.log(`${count} files will be precached, totaling ${size} bytes.`);
  });
buildSW();
