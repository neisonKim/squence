var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var uglify = require('gulp-uglify');

//SCSS 컴파일러 설정

gulp.task('styles', function() {
    return gulp.src('/GITHUB_STUDY/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('/GITHUB_STUDY/css/'));
});


gulp.task('uglify', function() {
    return gulp.src('/GITHUB_STUDY/js/*.js')
        .pipe(gulp.dest('/GITHUB_STUDY/dist/js'));
});



//파일 변경 감지하여 자동 컴파일
gulp.task('watch', function() {
    gulp.watch('/GITHUB_STUDY/scss/**/*.scss', gulp.series('styles'))
});

gulp.task('default', gulp.series('styles','uglify','watch',));
/*series, - 순차적으로 실행 pararell - 한꺼번에 실행*/