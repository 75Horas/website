import { postUpdates } from "./firebase";
import socialData from "../jsons/socialMedia.json"

export function handleScrollPage(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
}

export function handleOpenWebsite(id) {
    const foundEntry = socialData.find(entry => entry.id === id);

    if (!foundEntry) {
        console.error(`URL not found for ID: ${id}`);
        return;
    }
    const url = foundEntry.url;
    window.open(url, "_blank");
}