let backPack = {
    color: 'black',
    straps: 4,
    isHeavy: true,
    wallet: {
      cash: '$10,000',
      creditCards: 6
    }

}

let {wallet:{cash:x}}=backPack
console.log(x);