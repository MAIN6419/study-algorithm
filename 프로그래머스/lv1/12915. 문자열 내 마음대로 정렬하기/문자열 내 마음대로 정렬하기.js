function solution(strings, n) {
    return strings.sort((a, b) => {
        const chr1 = a.charAt(n);
        const chr2 = b.charAt(n);

        if (chr1 == chr2) {
            return a > b ? 1 : -1
        } else {
            return chr1 > chr2 ? 1 : -1
        }
    })
}