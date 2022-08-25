const receivesAFunction = (cb) => cb();


const returnsANamedFunction = () => {
    return function exponentiate(x) {
        return x**x;
    }
}


const returnsAnAnonymousFunction = () => {
    return (x) => x**x;
}