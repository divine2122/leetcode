/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    

let finalMaxProfit=0
//Input: prices = [7,2,9,1,5,3,6,4]
// for (i=0;i<prices.length;i++){
//     let maxprofit=0
//     for (j=i+1;j<prices.length;j++){
//         if( prices[j]-prices[i]>maxprofit){
//             maxprofit=prices[j]-prices[i]
//         }
//         if (maxprofit>finalMaxProfit){
//             finalMaxProfit=maxprofit
//         }
//     }
// }
// return finalMaxProfit

//-------
//     let min=Infinity

// for (i=0;i<prices.length;i++){
//     let maxprofit=0
//     console.log(prices[i], min)
//     if(prices[i]<min){
//         min=prices[i]

//     } else if (prices[i]>min){
//     console.log("skipped", min, prices[i])
//     continue}
//     console.log("next")
//     for (j=i+1;j<prices.length;j++){
//         if( prices[j]-prices[i]>maxprofit){
//             maxprofit=prices[j]-prices[i]
//         }
//         console.log(maxprofit)
//         if (maxprofit>finalMaxProfit){
//             finalMaxProfit=maxprofit
//         }
//     }
// }
// return finalMaxProfit

//----------


    let lowest=Infinity;
    let result=0

    for (const price of prices){
        if (price < lowest) {lowest = price}
        if (price-lowest>result) {result = price-lowest}
    }


    return result

};