function digitalRoot(n) {
    if (n <10) {
        return n;
    }
    return digitalRoot(
        n.toString().split('').reduce((acc, val) => acc + parseInt(val), 0)
    )
}