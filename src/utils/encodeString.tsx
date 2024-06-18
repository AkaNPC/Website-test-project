export const encodeString = (token: string) => {
    const encodedString = btoa(token);
    return encodedString
}