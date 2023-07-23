export const createVariableApi = (data) => {
    let variable = '';
    data = Object.entries(data);
    let filters = data.filter((item) => Number(item[1]) != 0);
    filters.map((item, idx) => {
        variable += `${idx == 0 ? '?' : '&'}${item[0]}=${item[1]}`
    });
    return variable;
}