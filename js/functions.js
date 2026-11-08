const getMinutes = function (time) {
  const parts = time.split(':');
  const hours = Number(parts[0]);
  const minutes = Number(parts[1]);

  return hours * 60 + minutes;
};

const isMeetingWithinWorkingHours = function (startWorkingDay, endWorkingDay, startMeeting, meetingDuration) {
  const startWorkingDayMinutes = getMinutes(startWorkingDay);
  const endWorkingDayMinutes = getMinutes(endWorkingDay);
  const startMeetingMinutes = getMinutes(startMeeting);
  const endMeetingMinutes = startMeetingMinutes + meetingDuration;

  return startMeetingMinutes >= startWorkingDayMinutes &&
    endMeetingMinutes <= endWorkingDayMinutes;
};

