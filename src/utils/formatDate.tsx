export const formatDate = (date: string) => {
    const formatedDate = new Date(date).toLocaleString("ru-RU", { hour12: false });
    return formatedDate
}