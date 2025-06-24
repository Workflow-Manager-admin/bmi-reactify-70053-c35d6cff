import React, { useState } from "react";

// PUBLIC_INTERFACE
/**
 * BMI Calculator component: Allows user to input weight and height, computes BMI and displays category.
 */
const bmiCategories = [
  { label: "Underweight", color: "bmiBlue", min: 0, max: 18.4 },
  { label: "Normal weight", color: "bmiGreen", min: 18.5, max: 24.9 },
  { label: "Overweight", color: "bmiYellow", min: 25, max: 29.9 },
  { label: "Obesity", color: "bmiRed", min: 30, max: Infinity },
];

function getBMICategory(bmi: number) {
  return bmiCategories.find((cat) => bmi >= cat.min && bmi <= cat.max);
}

export const BMICalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<{ label: string; color: string } | null>(null);

  const calculateBMI = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!weight || !height) {
      setBmi(null);
      setCategory(null);
      return;
    }
    const w = parseFloat(weight);
    const hCm = parseFloat(height);
    if (isNaN(w) || isNaN(hCm) || w <= 0 || hCm <= 0) {
      setBmi(null);
      setCategory(null);
      return;
    }
    const hM = hCm / 100;
    const bmiValue = w / (hM * hM);
    setBmi(bmiValue);
    const cat = getBMICategory(bmiValue);
    setCategory(cat ? { label: cat.label, color: cat.color } : null);
  };

  const handleInput =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<any>) => {
      setter(e.target.value);
    };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md mx-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-8 text-primary font-sans">BMI Calculator</h1>
        <form onSubmit={calculateBMI} className="flex flex-col w-full gap-4">
          <div>
            <label htmlFor="weight" className="block mb-1 font-medium text-gray-700">
              Weight (kg)
            </label>
            <input
              type="number"
              id="weight"
              min="1"
              inputMode="decimal"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary font-sans text-lg transition"
              placeholder="e.g. 70"
              value={weight}
              onChange={handleInput(setWeight)}
              autoComplete="off"
              required
              onBlur={calculateBMI}
            />
          </div>
          <div>
            <label htmlFor="height" className="block mb-1 font-medium text-gray-700">
              Height (cm)
            </label>
            <input
              type="number"
              id="height"
              min="1"
              inputMode="decimal"
              className="w-full border border-gray-200 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary font-sans text-lg transition"
              placeholder="e.g. 170"
              value={height}
              onChange={handleInput(setHeight)}
              autoComplete="off"
              required
              onBlur={calculateBMI}
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-3 rounded bg-primary text-white font-semibold text-lg hover:bg-blue-700 transition"
          >
            Calculate
          </button>
        </form>
        <div className="w-full pt-8 flex flex-col items-center min-h-[85px]">
          {bmi !== null && category ? (
            <div
              className={`w-full rounded-xl flex flex-col items-center justify-center bg-gray-50 px-4 py-6`}
            >
              <div className="text-2xl font-semibold text-gray-700 mb-1 font-sans">
                Your BMI:{" "}
                <span className={`font-bold text-${category.color}`}>
                  {bmi.toFixed(1)}
                </span>
              </div>
              <div
                className={`text-lg font-bold capitalize mt-2 px-4 py-2 rounded text-white bg-${category.color}`}
                style={{ minWidth: 150, textAlign: "center" }}
              >
                {category.label}
              </div>
            </div>
          ) : (
            <div className="text-gray-400 text-base italic font-sans">
              Enter your weight and height above
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
