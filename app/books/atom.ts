import { atom } from "jotai";
import { Book } from "../api/books/route";


export const tableDataAtom = atom<Book[]>([])
export const loadingAtom = atom(false)
export const errorAtom = atom<string | null>(null)
export const setLoadingAtom = atom(
    (get) => get(loadingAtom),
    (get, set, loading: boolean) => {
        set(loadingAtom, loading);
        if (loading) {
            set(errorAtom, null);
        }
    }
)

export const fetchBooksAtom = atom(
    (get) => get(tableDataAtom),
    async (get, set) => {
        set(loadingAtom, true);
        try {
            const response = await fetch('/api/books');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            set(tableDataAtom, data);
            set(errorAtom, null);
        } catch (error) {
            console.error('Failed to fetch payments:', error);
            set(tableDataAtom, []);
        } finally {
            set(loadingAtom, false);
        }
    }
)