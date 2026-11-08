const getMinutes = function (time) {
  const parts = time.split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);

  return hours * 60 + minutes;
};

window.isMeetingWithinWorkingHours = function (startWorkingDay, endWorkingDay, startMeeting, meetingDuration) {
  const startWorkingDayMinutes = getMinutes(startWorkingDay);
  const endWorkingDayMinutes = getMinutes(endWorkingDay);
  const startMeetingMinutes = getMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  return startMeetingMinutes >= startWorkingDayMinutes &&
    endMeetingMinutes <= endWorkingDayMinutes;
};

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
