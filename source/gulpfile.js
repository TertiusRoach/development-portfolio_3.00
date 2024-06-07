const gulp = require('gulp');
const { dest } = require('gulp');
const clean = require('gulp-clean');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const ignore = require('gulp-ignore');
const htmlmin = require('gulp-htmlmin');
const gap = require('gulp-append-prepend');
const uglifycss = require('gulp-uglifycss');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const replace = require('gulp-string-replace');
const deletefile = require('gulp-delete-file');
const sass = require('gulp-sass')(require('sass'));
const cleanHTML = require('gulp-remove-html-comments');

gulp.task('copyIndex', async () => {
  let pageName = 'index';

  copyHTML(pageName);
  compileSASS(pageName);
  copyContent(pageName);
});

const copyHTML = (pageName) => {
  //--🠋 Copy main HTML file into root folder 🠋--//
  gulp
    //--| Find *.html reference files in the 'src' folder |--//
    .src(`./front-end/pages/${pageName}/${pageName}.html`, { allowEmpty: true })
    //--| Clear comments from HTML file |--//
    .pipe(cleanHTML())
    //--| Compress HTML file |--//
    .pipe(htmlmin({ collapseWhitespace: true }))
    //--| Copy the pageName.html into 'root' folder |--//
    .pipe(gulp.dest('./'));
};
const compileSASS = (pageName) => {
  //--🠋 Combine all *.scss files 🠋--//
  let concatenate = (pageName) => {
    gulp
      //--| The style.scss file is stored in the root parent |--//
      .src([`source/front-end/pages/${pageName}/style.css`], { allowEmpty: true })
      //--| Delete style.scss file using Regex |--//
      .pipe(
        deletefile({
          reg: /\w*(\-\w{8}\.js){1}$|\w*(\-\w{8}\.css){1}$/, //--🠈 Regex: Why are you so confusing? 🠈--//
          deleteMatch: false,
        })
      );
    console.log(`|🠊 Deleted old *.css for ${pageName}.html`);

    gulp
      //--| Find all the *.scss files |--//
      .src(
        [
          `source/front-end/pages/${pageName}/${pageName}.scss`,
          // `source/front-end/pages/${pageName}/A-body/**/*.scss`,
          // `source/front-end/pages/${pageName}/B-overlay/**/*.scss`,
          // `source/front-end/pages/${pageName}/C-header/**/*.scss`,
          // `source/front-end/pages/${pageName}/D-footer/**/*.scss`,
          // `source/front-end/pages/${pageName}/E-leftbar/**/*.scss`,
          // `source/front-end/pages/${pageName}/F-rightbar/**/*.scss`,
          // `source/front-end/pages/${pageName}/G-main/**/*.scss`,
          // `source/front-end/pages/${pageName}/H-data/**/*.scss`,
          // 'source/front-end/pages/override-bootstrap.scss',
          // 'source/front-end/pages/scale-text.scss',
        ],
        { allowEmpty: true }
      )
      //--| Combine the selected *.scss files |--//
      .pipe(concat('style.scss'))
      //--| Export the combined files as style.scss |--//
      .pipe(dest(`source/front-end/pages/${pageName}`));

    console.log(`|🠊 Merged SASS stylesheets for ${pageName}.html`);
  };

  //--🠋 Create style.css file 🠋--//
  let compile = (pageName) => {
    gulp
      //--| Select style.scss |--//
      .src([`source/front-end/pages/${pageName}/style.scss`])
      //--| Convert to file to CSS |--//
      .pipe(sass().on('error', sass.logError))
      //--| Compress style.css document |--//
      .pipe(
        uglifycss({
          maxLineLen: 1000,
          uglyComments: true,
        })
      )
      //--| Distribute the style.css file |--//
      .pipe(dest(`source/front-end/pages/${pageName}/`));

    console.log(`|🠊 Compiling SASS to CSS for ${pageName}.html`);
  };

  //--🠋 Delete style.scss 🠋--//
  let remove = (pageName) => {
    gulp
      //--| The style.scss file is stored in the root parent |--//
      .src([`source/front-end/pages/${pageName}/style.scss`])
      //--| Delete style.scss file using Regex |--//
      .pipe(
        deletefile({
          reg: /\w*(\-\w{8}\.js){1}$|\w*(\-\w{8}\.css){1}$/, //--🠈 Regex: Why are you so confusing? 🠈--//
          deleteMatch: false,
        })
      );

    console.log(`|🠊 Deleted concatenated SASS document for ${pageName}.html`);
  };

  //--🠋 Add Bootstrap to style.css 🠋--//
  let prepend = (pageName) => {
    gulp
      .src([`source/front-end/pages/${pageName}/style.css`])
      //--| Remove @charset "UTF-8"; |--//
      .pipe(replace('@charset "UTF-8";', ''))
      //--| Get Bootstrap file and add to style.css |--//
      .pipe(gap.prependFile('source/front-end/vendors/bootstrap/5.3.2/css/bootstrap.min.css'))
      .pipe(
        uglifycss({
          maxLineLen: 1000,
          uglyComments: true,
        })
      )
      //--| Save style.css with Bootstrap |--//
      .pipe(dest(`source/front-end/pages/${pageName}/`));
    console.log(`|🠊 Bootstrap added to style.css for ${pageName}.html`);
  };

  //--🠋 Execute functions asynchronously 🠋--//
  concatenate(pageName);
  setTimeout(compile, 5000, pageName);
  // setTimeout(remove, 15000, pageName);
  // setTimeout(prepend, 10000, pageName);
};
const copyContent = (pageName) => {
  //--🠋 Copy content into distributable folder 🠋--//
  const contentFolders = ['gif-files', 'ico-files', 'jpg-files', 'mp3-files', 'mp4-files', 'pdf-files', 'png-files', 'svg-files'];
  let copyContent = (item, index, array) => {
    gulp
      //--| Find Source Content |--//
      .src(`source/front-end/pages/${pageName}/~content/**/*.${array[index].split('-')[0]}`)
      //--| Ignore Placeholder Files |--//
      .pipe(ignore('**/*sample*'))
      //--| Copy Files for Distribution |--//
      .pipe(gulp.dest(`source/front-end/pages/${pageName}/content/`));

    console.log(`|🠊 Copied ${array[index]}`);
  };
  contentFolders.forEach(copyContent);
};

gulp.task('cleanBuild', function (done) {
  try {
    // Delete Directories in 'dist' directory
    gulp.src(['build/back-end', 'build/front-end'], { allowEmpty: true }).pipe(clean());

    console.log('|🠊 Cleaned Distributable!');
    done();
  } catch (err) {
    console.error('|🠊 Error:', err);
    done(err); // Pass the error to the callback
  }
});
