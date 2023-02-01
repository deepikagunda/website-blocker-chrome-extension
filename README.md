# website-blocker-chrome-extension

Blocks websites with the following words in the URL.
"youtube",
"facebook",
"gmail",
"google",
"whatsapp",
"redfin",
"zillow",
More can be added in the content.js file .

# Password/Code

Passcode is 1111 , it can be set to any other value as well. Replace the code in the line 21 of content.js to one of your liking.

# How to install/ use this extension:

1. To load this chrome extension - copy this repository to a folder on the local computer.
2. Enable developer mode in chrome to load extensions.
3. Click on load unpacked and choose the folder from step 1.
   More details here - https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked

# How does it work

Once the extension is enabled, when youtube is loaded in a new tab on the browser.
User will be prompted to enter a code. If the code is entered correctly , the prompt closes and shows youtube.
If not, the page is set to blank.
The interruption to enter code, will work as a remainder to not visit the website if not needed.
