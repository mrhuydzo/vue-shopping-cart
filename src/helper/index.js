const  toCurrency = function (value,unit ='USD',dir = 'right') {
    if(dir === 'right') {
        return value + ' ' + unit
    }else {
        return unit + ' ' + value
    }
}

//Kiểm tra xem string ép về number có hợp lệ hay ko - check quantity > 1 hay ko?
const validateQuantity = function (quantity) {
    let num = parseInt(quantity);
    if (num == quantity && !isNaN(num)){
        return num >= 1;
    }
    return false
}

export {
    toCurrency,
    validateQuantity
}