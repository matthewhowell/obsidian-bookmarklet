# obsidian-bookmarklet

A bookmarklet to append a URL to an Obsidian note.

## Requirements

As far as I know, the [Obsidian URI scheme](https://help.obsidian.md/Extending+Obsidian/Obsidian+URI) does not support appending content to an existing note. So, in order to achieve this, this bookmarklet uses a community plugin (`actions-uri`) that includes this functionality.

- Set the `vault` and `fileName` variables within the bookmarklet code (recompiling the bookmarklet if necessary)
- Obsidian Community plugins are enabled
- The `actions-uri` plugin is installed and enabled
	- [Obsidian plugin link](https://obsidian.md/plugins?id=actions-uri)
	- [acitions-uri docs](https://zottmann.dev/obsidian-actions-uri/)

## Installation

1. Ensure that (for the vault you intend to use) community plugins are enabled.
2. Install and enable the `actions-uri` community plugin
3. Drag the bookmarklet link below into your bookmarks bar or save it as a bookmark

<a href="javascript:(function()%7Bjavascript%3A%20(()%20%3D%3E%20%7B%0A%0A%09const%20vaultName%20%3D%20%22archive%22%3B%0A%0A%09const%20fileName%20%3D%20%22Web%2FLinks%22%3B%0A%0A%09const%20appendUnderYearHeader%20%3D%20false%3B%0A%0A%09const%20appendLinksAsListItems%20%3D%20false%3B%0A%0A%09const%20locationUrl%20%3D%20window.location.href%3B%0A%09const%20locationTitle%20%3D%20document.title%3B%0A%09const%20currentDate%20%3D%20new%20Date()%3B%0A%0A%09const%20linkMarkdown%20%3D%20%60%5B%24%7BlocationTitle%7D%5D(%24%7BlocationUrl%7D)%60%3B%0A%09const%20linkDate%20%3D%20currentDate.toISOString().slice(0%2C%2010)%3B%0A%0A%09let%20linkToAppend%20%3D%20%60%24%7BlinkDate%7D%20-%20%24%7BlinkMarkdown%7D%60%3B%0A%0A%09if%20(appendLinksAsListItems)%20%7B%0A%09%09linkToAppend%20%3D%20%60-%20%24%7BlinkToAppend%7D%60%3B%0A%09%7D%0A%0A%09let%20obsidianActionsUri%20%3D%20%22obsidian%3A%2F%2Factions-uri%2Fnote%2Fappend%3F%22%0A%09%2B%20%22vault%3D%22%20%2B%20encodeURIComponent(vaultName)%0A%09%2B%20%22%26file%3D%22%20%2B%20encodeURIComponent(fileName)%0A%09%2B%20%22%26content%3D%22%20%2B%20encodeURIComponent(linkToAppend)%0A%09%2B%20%22%26ensure-newline%3D0%22%0A%09%2B%20%22%26create-if-not-found%3D1%22%0A%09%2B%20%22%26silent%3D1%22%3B%0A%0A%09if%20(appendUnderYearHeader)%20%7B%0A%0A%09%09const%20headline%20%3D%20%22%23%23%20%22%20%2B%20currentDate.getFullYear()%3B%0A%09%09obsidianActionsUri%20%2B%3D%20%22%26below-headline%3D%22%20%2B%20encodeURIComponent(headline)%3B%0A%09%7D%0A%0A%09document.location.href%20%3D%20obsidianActionsUri%3B%0A%0A%7D)()%3B%7D)()%3B">↓ Save Link in Obsidian</a>

<pre>
<code>javascript:(function()%7Bjavascript%3A%20(()%20%3D%3E%20%7B%0A%0A%09const%20vaultName%20%3D%20%22archive%22%3B%0A%0A%09const%20fileName%20%3D%20%22Web%2FLinks%22%3B%0A%0A%09const%20appendUnderYearHeader%20%3D%20false%3B%0A%0A%09const%20appendLinksAsListItems%20%3D%20false%3B%0A%0A%09const%20locationUrl%20%3D%20window.location.href%3B%0A%09const%20locationTitle%20%3D%20document.title%3B%0A%09const%20currentDate%20%3D%20new%20Date()%3B%0A%0A%09const%20linkMarkdown%20%3D%20%60%5B%24%7BlocationTitle%7D%5D(%24%7BlocationUrl%7D)%60%3B%0A%09const%20linkDate%20%3D%20currentDate.toISOString().slice(0%2C%2010)%3B%0A%0A%09let%20linkToAppend%20%3D%20%60%24%7BlinkDate%7D%20-%20%24%7BlinkMarkdown%7D%60%3B%0A%0A%09if%20(appendLinksAsListItems)%20%7B%0A%09%09linkToAppend%20%3D%20%60-%20%24%7BlinkToAppend%7D%60%3B%0A%09%7D%0A%0A%09let%20obsidianActionsUri%20%3D%20%22obsidian%3A%2F%2Factions-uri%2Fnote%2Fappend%3F%22%0A%09%2B%20%22vault%3D%22%20%2B%20encodeURIComponent(vaultName)%0A%09%2B%20%22%26file%3D%22%20%2B%20encodeURIComponent(fileName)%0A%09%2B%20%22%26content%3D%22%20%2B%20encodeURIComponent(linkToAppend)%0A%09%2B%20%22%26ensure-newline%3D0%22%0A%09%2B%20%22%26create-if-not-found%3D1%22%0A%09%2B%20%22%26silent%3D1%22%3B%0A%0A%09if%20(appendUnderYearHeader)%20%7B%0A%0A%09%09const%20headline%20%3D%20%22%23%23%20%22%20%2B%20currentDate.getFullYear()%3B%0A%09%09obsidianActionsUri%20%2B%3D%20%22%26below-headline%3D%22%20%2B%20encodeURIComponent(headline)%3B%0A%09%7D%0A%0A%09document.location.href%20%3D%20obsidianActionsUri%3B%0A%0A%7D)()%3B%7D)()%3B
</code>
</pre>

4. On any website, click the bookmarklet to add the link (and title) to your Obsidian note located at `Web/Links`

## Notes
- The default vault is `archive`, this can be changed by altering the `vault` variable
- The default location for saving is `Web/Links`, this can be changed by altering the `fileName` variable
- Optionally, links be added below a particular header within the note, see the code for details
- Optionally, links can be added as list items (with a leading `-`), see the code for details
- Any code changes will require the bookmarklet to be recompiled (recommend using [bookmarklet maker](https://caiorss.github.io/bookmarklet-maker/))

## Acknowledgments
- [The team](https://obsidian.md/about) for making [Obsidian](https://obsidian.md)
- [Carlo Zottmann](https://norden.social/@czottmann) for making the excellent [actions-uri](https://zottmann.dev/obsidian-actions-uri/) plugin
- [Caio Rordrigues](https://github.com/caiorss) for making [bookmarklet maker](/Volumes/Macintosh HD/Users/matthewhowell/Dev/obsidian-bookmarklet/append-url-to-note.js)