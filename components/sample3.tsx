"use client";
import { useAtom } from "jotai";
import { celsiusAtom, fahrenheitAtom } from "@/atom";

const Sample3 = () => {
  const [celsius, setCelsius] = useAtom(celsiusAtom);
  const [fahrenheit, setFahrenheit] = useAtom(fahrenheitAtom);
  return (
    <div>
      <h1 className="underline font-semibold text-lg">ReadWrite Sample</h1>
      <div>
        <label>Celsius:</label>
        <input
          type="number"
          value={celsius}
          onChange={(e) => setCelsius(parseInt(e.target.value))}
          className="border outline-none text-white p-2 rounded-md mr-2"
        />
      </div>
      <div>
        <label>Fahrenheit: </label>
        <input
          type="number"
          value={fahrenheit}
          onChange={(e) => setFahrenheit(Number(e.target.value))}
          className="border outline-none text-white p-2 rounded-md mr-2"
        />
      </div>
      <p>
        {celsius}°C = {fahrenheit.toFixed(2)}°F
      </p>
    </div>
  );
};

export default Sample3;
