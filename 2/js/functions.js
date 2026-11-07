const checkStringLength = (string, maxLength) => string.length <= maxLength;

const checkPalindrome = (string) => {
  const normalizedString = string.replaceAll(' ', '').toLowerCase();
  const reversedString = normalizedString.split('').reverse().join('');

  return normalizedString === reversedString;
};

if (!checkStringLength('проверяемая строка', 20)) {
  throw new Error('Ошибка проверки длины строки');
}

if (!checkPalindrome('топот')) {
  throw new Error('Ошибка проверки палиндрома');
}
