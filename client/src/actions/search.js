export function filter(value) {
    return { type: "FILTER", value: value.toLowerCase()};
}