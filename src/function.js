export function toggleClassById(elementId, className) {
    const element = document.getElementById(elementId);
    if (!element) {
        console.error(`Element with ID "${elementId}" not found.`);
        return;
    }
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    } else {
        element.classList.add(className);
    }
}

export function scroll(id){
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}