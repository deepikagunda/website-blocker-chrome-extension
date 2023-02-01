const blacklist_urls = [
  "youtube",
  "facebook",
  "gmail",
  "google",
  "whatsapp*",
  "redfin",
  "zillow",
];
for (let i = 0; i < blacklist_urls.length; i++) {
  if (window.location.href.includes(blacklist_urls[i])) {
    const body = document.querySelector("body");
    if (body) {
      let timer = setInterval(() => {
        document.querySelector("body").style.display = "none";
        document.querySelector("video")?.pause();
      }, 10);
      let code = prompt("Please enter code", "1111");

      if (code === "1111") {
        body.style.display = "block";
        clearInterval(timer);
      }
    }
  }
}
