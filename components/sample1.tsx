"use client";

import { priceAtom, quantityAtom, totalPriceAtom } from "@/atom";
import { useAtomValue } from "jotai";

const Sample1 = () => {
  const price = useAtomValue(priceAtom);
  const quantity = useAtomValue(quantityAtom);
  const totalPrice = useAtomValue(totalPriceAtom);
  return (
    <div>
      <h1 className="underline font-semibold text-lg">ReadOnly Sample</h1>
      <p>Birim Fiyat: {price} TL</p>
      <p>Adet: {quantity}</p>
      <p>Toplam (Vergiler Dahil): {totalPrice.toFixed(2)} TL</p>
    </div>
  );
};

export default Sample1;
