// Check if a favicon already exists
let existingFavicon = document.querySelector("link[rel='icon']");
if (existingFavicon) {
    existingFavicon.href = "images/favicon.ico"; // Update to your path
} else {
    // Create new favicon element
    let link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/ico";
    link.href = "images/favicon.ico"; // Path to your favicon
    document.head.appendChild(link);
}
