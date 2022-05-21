export const formatCurrency = (
    amount,
    currency = 'NGN',
    lng = 'en-NG',
  ) => {
    amount = +amount;
    return new Intl.NumberFormat(lng, {
      style: 'currency',
      currency: currency,
    }).format(+amount);
  };

export const checkInterest = (interest) => {
  let interestRateToNumber = Number(interest);
  let newInterest 


    if (interestRateToNumber === 10000){
        newInterest = interestRateToNumber* 0.05.toFixed(2);
    }else  if (interestRateToNumber === 20000){
        newInterest = interestRateToNumber* 0.10.toFixed(2);
    }else  if (interestRateToNumber === 30000){
        newInterest = interestRateToNumber * 0.20.toFixed(2);
    }else newInterest = 0

    return formatCurrency(newInterest);
  }


  export const amountToWithdrawWeekly = (interest) => {
    let interestRateToNumber = Number(interest);
    let newInterest 
  
  
      if (interestRateToNumber === 10000){
          newInterest = interestRateToNumber* 0.05.toFixed(2);
      }else  if (interestRateToNumber === 20000){
          newInterest = interestRateToNumber* 0.10.toFixed(2);
      }else  if (interestRateToNumber === 30000){
          newInterest = interestRateToNumber * 0.20.toFixed(2);
      }else newInterest = 0
  
      return formatCurrency(newInterest);
    }
