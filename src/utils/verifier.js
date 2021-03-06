const { fetchText } = require('./index')

module.exports = {
  /**
   * Verifies that the gist contains the given muportDID and returns the users github handle.
   * Throws an error otherwise.
   *
   * @param     {String}            did                     The muport DID of the user
   * @param     {Object}            gistUrl                 URL of the proof
   * @return    {String}                                    The github handle of the user
   */
  verifyGithub: async (did, gistUrl) => {
    if (!gistUrl || gistUrl.trim() === '') {
      throw new Error('The proof of your Github is not available')
    }

    let gistFileContent = await fetchText(gistUrl)

    if (gistFileContent.indexOf(did) === -1) {
      throw new Error('Gist File provided does not contain the correct DID of the user')
    }

    const githubUsername = gistUrl.split('/')[3]
    return githubUsername
  },
  /**
   * Verifies that the tweet contains the given muportDID and returns the users twitter handle.
   * Throws an error otherwise.
   *
   * @param     {String}            did                     The muport DID of the user
   * @param     {Object}            tweetUrl                URL of the proof
   * @return    {String}                                    The twitter handle of the user
   */
  verifyTwitter: (did, tweetUrl) => {
    return ''
  }
}
