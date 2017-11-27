$(function() {
    const arr = []
    for(let i = 0; i <= 9; i++) {
        const obj = {};
        obj.phone = '1234567890' + i;
        obj.password = '123456';
        arr.push(obj);
    }
    JSON.stringify(arr);
    localStorage.setItem('users',JSON.stringify(arr));
})