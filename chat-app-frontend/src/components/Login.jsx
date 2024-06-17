function digitalRoot(n) {
    if (n <=10) {
        return n;
    }
    return digitalRoot();
}