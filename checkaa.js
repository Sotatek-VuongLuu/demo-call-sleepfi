
const a = async() => {
    let takeFee = true;
    let isTransferBuy = false
    let isTransferSell = false;
    if (!isTransferBuy && !isTransferSell) takeFee = false;
    console.log("takeFee: ", takeFee);
}
a()