module.exports = function( grunt ) {

  'use strict';

  // Project configuration
  grunt.initConfig( {

    pkg: grunt.file.readJSON( 'package.json' ),

    addtextdomain: {
      options: {
        textdomain: 'etec_buddyboss_child_theme',
      },
      update_all_domains: {
        options: {
          updateDomains: true
        },
        src: [ '*.php', '**/*.php', '!\.git/**/*', '!bin/**/*', '!node_modules/**/*', '!tests/**/*' ]
      }
    },

    wp_readme_to_markdown: {
      your_target: {
        files: {
          'README.md': 'readme.txt'
        }
      },
    },

    makepot: {
      target: {
        options: {
          potFilename: 'etec_buddyboss_child_theme.pot',
          potHeaders: {
            poedit: true,
            'x-poedit-keywordslist': true
          },
          exclude: [ '\.git/*', 'bin/*', 'node_modules/*', 'tests/*' ],
          domainPath: 'languages',
          type: 'wp-plugin',
          updateTimestamp: true
        }
      }
    },

    po2mo: {
      plugin: {
        cwd: 'languages',
        src: '*.po',
        dest: 'languages',
        expand: true
      }
    }
  } );

  grunt.loadNpmTasks( 'grunt-wp-i18n' );
  grunt.loadNpmTasks( 'grunt-wp-readme-to-markdown' );
  grunt.loadNpmTasks( 'grunt-po2mo' );
  grunt.registerTask( 'default', [ 'i18n','readme' ] );
  grunt.registerTask( 'i18n', ['addtextdomain', 'makepot'] );
  grunt.registerTask( 'readme', ['wp_readme_to_markdown'] );

  grunt.util.linefeed = '\n';

};