import { pipe } from "fp-ts/lib/function";
import * as O from 'fp-ts/Option';
import * as A from 'fp-ts/Array';
import parseUrl from "parse-url";

// IMPERATIVE WAY
const isDotCom = ( url: string ): boolean => {
    try {
        const parsed = parseUrl(url);
        const resource = parsed.resource;
        const parts = resource.split('.')
        const n = parts.length;

        if(n <= 1) return false;
        
        const tld = parts[n - 1];
        return tld === 'com';
    } 
    catch (err) {
        return false;
    }
}
isDotCom('9');
isDotCom('g1.globo.com.br');
isDotCom('https://aaaaa.gov.uk?utm_medium=potato&page=12#how-to');
isDotCom('https://www.devexperts.com?utm_medium=potato&page=12#how-to');

// FP-TS WAY
type ParseUrlReturn = O.Option<ReturnType<typeof parseUrl>>;

// IT WORKS, BUT THERE´S A BETTER WAY TO USE OPTIONS
/* const tryParsingUrl = (url: string): ParseUrlReturn => {
    try {
        const parsed = parseUrl(url);
        return O.some(parsed);
    } catch {
        return O.none;
    }
}; */

const tryParsingUrl = (url: string): ParseUrlReturn => O.tryCatch(() => parseUrl(url));

const getTopLevelDomain = (resource: string): O.Option<string> => {
    return pipe(resource, (r) => r.split('.'), A.last);
};

const FP_isDotCom = ( url: string ): boolean => {
    return pipe(url,
        tryParsingUrl,
        O.map(p => p.resource),
        O.chain(getTopLevelDomain), // chain === flatMap
        O.exists((tld: string) => tld === 'com')
    )
};
FP_isDotCom('9');
FP_isDotCom('g1.globo.com.br');
FP_isDotCom('https://aaaaa.gov.uk?utm_medium=potato&page=12#how-to');
FP_isDotCom('https://www.devexperts.com?utm_medium=potato&page=12#how-to');
FP_isDotCom('https://www.devexperts.com?utm_medium=potato&page=12#how-to')