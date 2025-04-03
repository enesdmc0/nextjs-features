import { atom } from "jotai";

// Sample - 1 
export const priceAtom = atom<number>(150);
export const quantityAtom = atom<number>(2);
export const taxRateAtom = atom<number>(0.18);

export const totalPriceAtom = atom((get) => {
    const price = get(priceAtom);
    const quantity = get(quantityAtom);
    const taxRate = get(taxRateAtom);

    const subtotal = price * quantity;
    const tax = subtotal * taxRate;
    return subtotal + tax;
})

// Sample - 2
export const firstNameAtom = atom("");
export const lastNameAtom = atom("");
export const ageAtom = atom("");

interface User {
    firstName: string;
    lastName: string;
    age: string;
}
export const updateUserAtom = atom(
    null,
    (get, set, userData: User) => {
        set(firstNameAtom, userData.firstName);
        set(lastNameAtom, userData.lastName);
        set(ageAtom, userData.age);

        return { success: true, message: "User updated successfully" };
    }
)

export const clearUserAtom = atom(null, (_, set) => {
    set(firstNameAtom, "");
    set(lastNameAtom, "");
    set(ageAtom, "");
    return { success: true, message: "User cleared successfully" };
})

// Sample - 3
export const celsiusAtom = atom(25);

export const fahrenheitAtom = atom(
    (get) => {
        const celsius = get(celsiusAtom);
        return (celsius * 9 / 5) + 32;
    },
    (get, set, newFahrenheit: number) => {
        const newCelsius = (newFahrenheit - 32) * 5 / 9;
        set(celsiusAtom, newCelsius);
    })


// Fetch Data
export const postIdAtom = atom(9001);
export const postDataAtom = atom(async (get) => {
    const id = get(postIdAtom);
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const data: PostData = await response.json();
    return data;
});

type PostData = {
    by: string;
    descendants?: number;
    id: number;
    kids?: number[];
    parent: number;
    score?: number;
    text?: string;
    time: number;
    title?: string;
    type: "comment" | "story";
    url?: string;
};