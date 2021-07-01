exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: './node_modules/@lottiefiles/lottie-player/dist/lottie-player.esm.js',
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }