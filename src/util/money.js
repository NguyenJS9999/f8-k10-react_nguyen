export function renderMoney(number) {
    if (number && typeof parseInt(number) === 'number') {
        return Number(number).toLocaleString('vi', {
            style: 'currency',
            currency: 'VND'
        });
    } else {
        return number;
    }
}