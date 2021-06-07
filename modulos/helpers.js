export default function idGenerator(max, min) {
    return Math.floor((Math.random() * (max - min + min)) + min);
}