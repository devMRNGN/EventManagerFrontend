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

export const formatToDateTimeLocal = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
  
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}