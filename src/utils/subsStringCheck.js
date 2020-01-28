export default function searchString(originalString, value) {
    return originalString.toLowerCase().includes(value.toLowerCase().trim())
}