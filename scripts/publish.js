const shell = require('shelljs')
const standardVersion = require('standard-version')

if (shell.exec('git commit -am "chore: build dist types"').code !== 0) {
  shell.echo('Error: Git commit failed')
  shell.exit(1)
}

standardVersion({
  noVerify: true,
  infile: 'CHANGELOG.md',
  silent: true,
  changelogHeader: '# fe-toolsbox'
})
  .then(() => {
    if (shell.exec('git push --follow-tags origin main').code !== 0) {
      shell.echo('Error: Git Push Tag Failed, Please Tryagain')
      shell.exit(1)
    } else {
      shell.echo(`release success`)
    }
  })
  .catch(err => {
    shell.echo(`standard-version failed with message: ${err.message}`)
    shell.exit(1)
  })
