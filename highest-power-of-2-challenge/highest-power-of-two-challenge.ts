function solution(N: number) {
    let array: number[] = [];

    for (let i: number = 0; i <= N; i += 1) {
        if (N % 2 ** i === 0) array.push(i)
    }

    return array.sort((a, b) => b - a)[0];
}
