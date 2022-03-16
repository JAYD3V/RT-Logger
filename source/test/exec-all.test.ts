type fn = <T>() => T;


type FnNoArg = <T> () => T;
type FnSingle = <T, A> (alpha: A) => T;
type FnDouble = <T, A, B> (alpha: A, beta: B) => T;
type FnTriple = <T, A, B, G> (alpha: A, beta: B, gamma: G) => T;
type Fn_x4 = <T, A, B, G, D> (alpha: A, beta: B, gamma: G, delta: D) => T;
type Fn_x5 = <T, A, B, G, D, Z> (
    alpha: A, beta: B, gamma: G, delta: D, zeta: Z) => T;
type Fn_x6 = <T, A, B, G, D, Z, E> (
    alpha: A, beta: B, gamma: G, delta: D, zeta: Z, eta: E) => T;
type Fn_x7 = <T, A, B, G, D, Z, E, K> (
    alpha: A, beta: B, gamma: G, delta: D, zeta: Z, eta: E, kappa: K) => T;

type TestFn = FnNoArg | FnSingle | FnDouble | FnTriple |
    Fn_x4 |
    Fn_x5 |
    Fn_x6 | Fn_x7;
