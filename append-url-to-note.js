javascript: (() => {
	
	// recommend using https://caiorss.github.io/bookmarklet-maker/
	// to generate bookmarklet code
	
	// vault name, vault must already exist
	const vaultName = "archive";
	
	// file to append links into, note must already exist
	const fileName = "Web/Links";

	// insert links under year ## headers
	// e.g. ## 2024
	// these headers must already exist within the note
	// if false, links are appended to end of note
	const appendUnderYearHeader = false;

	// if true, links are appended with a leading dash character (-)
	const appendLinksAsListItems = false;
	
	// gather information from the current location
	const locationUrl = window.location.href;
	const locationTitle = document.title;
	const currentDate = new Date();
	
	// build markdown link with location title and date
	const linkMarkdown = `[${locationTitle}](${locationUrl})`;
	const linkDate = currentDate.toISOString().slice(0, 10);

	let linkToAppend = `${linkDate} - ${linkMarkdown}`;

	if (appendLinksAsListItems) {
		linkToAppend = `- ${linkToAppend}`;
	}
	
	// build the obsidian actions-uri
	let obsidianActionsUri = "obsidian://actions-uri/note/append?"
	+ "vault=" + encodeURIComponent(vaultName)
	+ "&file=" + encodeURIComponent(fileName)
	+ "&content=" + encodeURIComponent(linkToAppend)
	+ "&ensure-newline=0"
	+ "&create-if-not-found=1"
	+ "&silent=1";
	
	// add header option
	if (appendUnderYearHeader) {
		// each link will be inserted below the markdown ## header year
		// e.g. ## 2024
		const headline = "## " + currentDate.getFullYear();
		obsidianActionsUri += "&below-headline=" + encodeURIComponent(headline);
	}
	
	document.location.href = obsidianActionsUri;
	
})();