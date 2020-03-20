export const API_URL = 'https://covid.mathdro.id/api';

export const formatDate = (data) => {
  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const date = new Date(data);
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();
  const datNameStr = days[day];
  const monthStr = months[month]
  const dayN = date.getDate();
  return `${datNameStr} ${dayN} ${monthStr} ${year}`;
};
