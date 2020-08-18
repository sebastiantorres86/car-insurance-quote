// Get the difference of years
export function getYearDifference(year) {
  return new Date().getFullYear() - year;
}

// Calculate the total to pay according to the brand
export function calculateBrand(brand) {
  let increment;

  switch (brand) {
    case "european":
      increment = 1.3;
      break;
    case "american":
      increment = 1.15;
      break;
    case "asian":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
}

// Calculate the type of insurance
export function getPlan(plan) {
  return plan === "basic" ? 1.2 : 1.5;
}

// Show first letter as uppercase
export function firstUppercase(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
