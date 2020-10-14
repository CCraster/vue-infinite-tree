module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'upd',
        'build',
        'refactor',
        'chore',
        'ci',
        'perf',
        'docs',
        'revert',
        'style'
      ]
    ],
    'scope-case': [2, 'always', 'lower-case'],
    'scope-empty': [1, 'always'],
    'scope-enum': [
      2,
      'always',
      ['page', 'router', 'auth', 'permission', 'component', 'config', '*']
    ],
    'subject-empty': [2, 'never']
  }
}
