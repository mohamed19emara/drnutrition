import React, { useState } from 'react';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBMI] = useState(null);
  const [category, setCategory] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightInMeters = height / 100;
    const calculatedBMI = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    setBMI(calculatedBMI);
    setCategory(getBMICategory(calculatedBMI));
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return 'Underweight';
    if (bmi < 24.9) return 'Normal weight';
    if (bmi < 29.9) return 'Overweight';
    return 'Obesity';
  };

  return (
    <div className="bmi-calculator m-5">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <label>
          Height (cm):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
          />
        </label>
        <label>
          Weight (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
          />
        </label>
        <button type="submit">Calculate BMI</button>
      </form>
      
      {bmi && (
        <div className="bmi-result">
          <p>Your BMI: <strong>{bmi}</strong></p>
          <p>Category: <strong>{category}</strong></p>
          <p>{getRecommendation(category)}</p>
        </div>
      )}
    </div>
  );
};

const getRecommendation = (category) => {
  switch (category) {
    case 'Underweight':
      return 'Consider a balanced diet to reach a healthier weight.';
    case 'Normal weight':
      return 'Keep up the good work with a balanced diet and regular exercise!';
    case 'Overweight':
      return 'A balanced diet and regular exercise may help you reach a healthier weight.';
    case 'Obesity':
      return 'Consult with a healthcare provider for guidance on weight management.';
    default:
      return '';
  }
};

export default BMICalculator;
