exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: '../node_modules/@lottiefiles/lottie-player/dist/lottie-player"',
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }