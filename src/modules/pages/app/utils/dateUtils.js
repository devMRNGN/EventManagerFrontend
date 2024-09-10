export const daysOfWeekFull = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
export const daysOfWeekShort = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

export const getNumberOfDaysByMonth = (month) => {
    return new Date(new Date().getFullYear(), month + 1, 0).getDate();
}

export const getMonthName = (month) => {
    const date = new Date(new Date().getFullYear(), month);
    const monthName = date.toLocaleString('pt-BR', { month: 'long' });
    return capitalizeFirstLetter(monthName);
}

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}