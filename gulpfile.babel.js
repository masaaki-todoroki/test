import gulp from 'gulp';
import yargs from 'yargs';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import gulpif from 'gulp-if';
import sourcemaps from 'gulp-sourcemaps';
import imagemin from 'gulp-imagemin';
import del from 'del';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import named from 'vinyl-named';
import browserSync from 'browser-sync';
import zip from 'gulp-zip';
import replace from 'gulp-replace';
import info from './package.json';

const server = browserSync.create();
const PRODUCTION = yargs.argv.prod;

const paths = {
	styles: {
		src: [
			"src/assets/scss/bundle.scss",
			"src/assets/scss/admin.scss",
			"src/assets/scss/swiper.scss",
			"src/assets/scss/contactform.scss",
			"src/assets/scss/block-editor.scss",
			"src/assets/scss/editor-style-plus.scss",
			"src/assets/scss/style-plus.scss",
		],
		dest: "dist/assets/css"
	},
	scripts: {
		src: [
			'src/assets/js/bundle.js',
			'src/assets/js/admin.js',
			'src/assets/js/contactform-ecd-jp.js',
			'src/assets/js/contactform-inquiry-en.js',
			'src/assets/js/contactform-inquiry-jp.js',
			'src/assets/js/contactform-mynumber-jp.js',
			'src/assets/js/contactform-neworder-jp.js',
			'src/assets/js/contactform-production-en.js',
			'src/assets/js/contactform-production-jp.js',
			'src/assets/js/contactform-recruit-en.js',
			'src/assets/js/contactform-recruit-jp.js',
			'src/assets/js/block-editor.js',
			'src/assets/js/customize-default-block-with-css.js',
			'src/assets/js/editor-style.js',
		],
		dest: 'dist/assets/js'
	},
	images: {
		src: 'src/assets/images/**/*.{jpg,jpeg,png,svg,gif}',
		dest: 'dist/assets/images'
	},
	other: {
		src: [
			'src/assets/**/*',
			'!src/assets/{images,js,scss}',
			'!src/assets/{images,js,scss}/**/*'
		],
		dest: 'dist/assets'
	},
	package: {
		src: [
			'**/*',
			'!.vscode',
			'!node_modules{,/**}',
			'!packaged{,/**}',
			'!src{,/**}',
			'!.babelrc',
			'!.gitignore',
			'!gulpfile.babel.js',
			'!package.json',
			'!package-lock.json'
		],
		dest: 'packaged'
	}
};

export const serve = done => {
	server.init({
		proxy: "http://localhost:8888/last/"
	});
	done();
};

export const reload = done => {
	server.reload();
	done();
};

export const clean = () => del(['dist']);

export const styles = () => {
	return gulp
		.src(paths.styles.src)
		.pipe(gulpif(!PRODUCTION, sourcemaps.init()))
		.pipe(sass().on("error", sass.logError))
		.pipe(gulpif(PRODUCTION, cleanCSS({ compatibility: "ie8" })))
		.pipe(gulpif(!PRODUCTION, sourcemaps.write()))
		.pipe(gulp.dest(paths.styles.dest))
		.pipe(server.stream());
};

export const scripts = () => {
	return gulp
		.src(paths.scripts.src)
		.pipe(named())
		.pipe(webpack({
			module: {
				loaders: [
					{
						test: /\.js$/,
						use: {
							loader: 'babel-loader',
							options: {
								presets: ['babel-preset-env']
							}
						}
					}
				]
			},
			output: {
				filename: '[name].js'
			},
			devtool: !PRODUCTION ? 'inline-source-map' : false
		}))
		.pipe(gulpif(PRODUCTION, uglify()))
		.pipe(gulp.dest(paths.scripts.dest));
};

export const images = () => {
	return gulp
		.src(paths.images.src)
		.pipe(gulpif(PRODUCTION, imagemin()))
		.pipe(gulp.dest(paths.images.dest));
};

export const copy = () => {
	return gulp
		.src(paths.other.src)
		.pipe(gulp.dest(paths.other.dest));
};

export const watch = () => {
	gulp.watch('src/assets/scss/**/*.scss', styles);
	gulp.watch('src/assets/js/**/*.js', gulp.series(scripts, reload));
	gulp.watch('**/*.php', reload);
	gulp.watch(paths.images.src, gulp.series(images, reload));
	gulp.watch(paths.other.src, gulp.series(copy, reload));
};

export const compress = () => {
	return gulp
		.src(paths.package.src)
		.pipe(replace('_themename', info.name))
		.pipe(zip(`${info.name}.zip`))
		.pipe(gulp.dest(paths.package.dest));
};

export const dev = gulp.series(
	clean,
	gulp.parallel(styles, scripts, images, copy),
	serve,
	watch
);

export const build = gulp.series(
	clean,
	gulp.parallel(styles, scripts, images, copy)
);

export const bundle = gulp.series(
	build,
	compress
);

export default dev; 
