function solution(S) {
    const regex = new RegExp('^([a-z])*(?=.*[0-9])(?!.*[!@#$%^&*])');
  
    const split = S.split(' ');
  
    const isValid = string => {
      return regex.test(string);
    };
  
    const validArray = [];
  
    for (let i = 0; i < split.length; i += 1) {
      if (isValid(split[i]) && split[i].length % 2 !== 0) {
        validArray.push(split[i].length);
      }
    }
  
    if (validArray.length === 0) return -1;
  
    validArray.sort((a, b) => b - a);
    return validArray[0];
  }
  