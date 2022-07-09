function solution(A) {
    const uniqueValues = [...new Set(A)];
    const getRepeatedValues = A.filter((v, i) => A.indexOf(v) !== i);
  
    const removeRepeatedValues = uniqueValues.filter(
      item => !getRepeatedValues.includes(item)
    );
  
    return removeRepeatedValues.length > 0 ? removeRepeatedValues[0] : -1;
}
