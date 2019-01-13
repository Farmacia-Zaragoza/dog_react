## Available Scripts

For development clone this project and run

### `npm install`

After installation in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Test Page

After application was built copy all files from `build` folder to `docs` folder and add `/dog_react/` before every src link in `index.html` to see actual results on [GitHub Pages](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)

### `https://farmacia-zaragoza.github.io/dog_react/`

The actual state of commited project is shown on this [page](https://farmacia-zaragoza.github.io/dog_react/).

## spec.json

Inside `public ` folder (`docs` folder for built app) presented spec.json file. It contains list of configurations that are available in app. 
List of configurations so far:

`title` - title of the page
`images` - array of links to all images that are used in rows and carousel
`photoRowMobile` - number of images per row in mobile view
`photoRowTabletSmall` - number of images per row in landscape tablet view
`photoRowTable` - number of images per row in tablet view
`photoRowDesktop` - number of images per row in desktop view
`photoRowDektopBig` - number of images per row in FULL HD and upper view