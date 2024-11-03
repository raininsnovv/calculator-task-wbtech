// Определение типа для системы счисления
type NumberSystem = "decimal" | "binary" | "hex";

/**
 * Функция parseNumber
 * Принимает строку числа и систему счисления,
 * преобразует строку в число в соответствии с системой счисления.
 */
function parseNumber(value: string, system: NumberSystem): number {
  switch (system) {
    case "binary":
      return parseInt(value, 2);
    case "hex":
      return parseInt(value, 16);
    default:
      return parseInt(value, 10);
  }
}

/**
 * Функция formatNumber
 * Принимает число и систему счисления, конвертирует число
 * в строку, соответствующую указанной системе счисления.
 */
function formatNumber(value: number, system: NumberSystem): string {
  switch (system) {
    case "binary":
      return value.toString(2);
    case "hex":
      return value.toString(16).toUpperCase();
    default:
      return value.toString(10);
  }
}

// Функция add (сложение)
function add(a: string, b: string, system: NumberSystem = "decimal"): string {
  const numA = parseNumber(a, system);
  const numB = parseNumber(b, system);
  const result = numA + numB;
  console.log(`${a} + ${b} равно ${formatNumber(result, system)}`);
  return formatNumber(result, system);
}

// Функция subtract (вычитание)

function subtract(
  a: string,
  b: string,
  system: NumberSystem = "decimal"
): string {
  const numA = parseNumber(a, system);
  const numB = parseNumber(b, system);
  const result = numA - numB;
  console.log(`${a} - ${b} равно ${formatNumber(result, system)}`);
  return formatNumber(result, system);
}

// Функция multiply (умнжение)

function multiply(
  a: string,
  b: string,
  system: NumberSystem = "decimal"
): string {
  const numA = parseNumber(a, system);
  const numB = parseNumber(b, system);
  const result = numA * numB;
  console.log(`${a} * ${b} равно ${formatNumber(result, system)}`);
  return formatNumber(result, system);
}

// Функция divide (деление)

function divide(
  a: string,
  b: string,
  system: NumberSystem = "decimal"
): string {
  const numA = parseNumber(a, system);
  const numB = parseNumber(b, system);
  if (numB === 0) {
    console.log("нельзя делить на 0");
    return "NaN";
  }
  const result = numA / numB;
  const formattedResult =
    result % 1 === 0 ? result : parseFloat(result.toFixed(2));
  console.log(`${a} / ${b} равно ${formatNumber(formattedResult, system)}`);
  return formatNumber(formattedResult, system);
}

// Двоичные числа
console.log("\nДвоичные числа:");
add("1010", "0101", "binary");
subtract("1010", "0101", "binary");
multiply("1010", "0101", "binary");
divide("1010", "0101", "binary");

// Десятичные числа
console.log("\nДесятичные числа:");
add("10", "5", "decimal");
subtract("10", "5", "decimal");
multiply("10", "5", "decimal");
divide("10", "5", "decimal");

// Шестнадцатеричные числа
console.log("\nШестнадцатеричные числа:");
add("A", "5", "hex");
subtract("A", "5", "hex");
multiply("A", "5", "hex");
divide("A", "5", "hex");
