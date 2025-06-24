import React from "react";
import { BMICalculator } from "./BMICalculator";
import "./index.css";

// PUBLIC_INTERFACE
/**
 * Main App entrypoint (web mode): Renders the BMI Calculator centered on the page.
 */
export const App: React.FC = () => <BMICalculator />;
