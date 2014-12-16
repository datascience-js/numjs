Contributing to numjs
-------------------------

numjs is at a very early stage and there is a lot of work to be done. We'd love for you to contribute to the source code, to the wiki or to documentation and help making it better.


 - [Code of Conduct](#coc)
 - [Coding Rules](#rules)
 - [Commit Message Guidelines](#commit)

## <a name="coc"></a> Code of Conduct

Please keep discussions in the issue tracker as well as pull requests strictly professional. Abuse will not be tolerated. If you feel like you have been wronged please contact us immediately.

## <a name="rules"></a> Coding Rules

To ensure a consistent code base - please keep these in mind when working. They are a requirement for submitted PRs.

* All features or bug fixes must be tested through unit tests. We use Mocha for testing - follow the format of the current tests when writing yours. Please do your very best to write comprehensive unit tests that run quickly.
* All new outwards facing API methods _must_ be documented, preferably with a self contained use case example.
* All new code _must be fast_ due to the nature of the library, code that does not meet reasonable performance criteria will not be merged.
* Follow these coding gudelines:
  * Indentation is 4 spaces, lines should be shorter than 115 characters.
  * When applicable, prefer promises to callbacks to convey asynchronous actions.
  * Do not place mutable properties on any objects' prototype.
  * Do not allocate closures when they are avoidable. 
  * Prefer simple objects and using `this` rather than complex closures. Private variables should be prefixed with `_` rather than kept in closure scope. This is again - mainly for performance and consistency reasons.
  * Avoid long inheritance chains.
  * Do not namespace your code.
  * Whenever you can pass a function rather than an object - do that.
  * Always name your callbacks and function expressions.

## <a name="commit"></a> Git Commit Guidelines

 - Always include a commit message explaining the changes.
 - Pull requests should always reference the issue they address if they fix a bug.
 - Test your code before committing it.
