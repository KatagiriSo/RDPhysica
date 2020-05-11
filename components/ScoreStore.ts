import { provide, inject, ref } from '@vue/composition-api';

export const ScoreStoreSymnbol = Symbol()

export class ScoreStore {
    score:number = 0;
    maxScore:number = 0;
}

export function provideScoreStore(store:ScoreStore) {
    provide(ScoreStoreSymnbol, store);
}

export function useScoreStore():ScoreStore {
    const store = inject<ScoreStore>(ScoreStoreSymnbol);
    if (!store) {
        throw new Error("no ScoreStore provided");
    }
    return store;
}




