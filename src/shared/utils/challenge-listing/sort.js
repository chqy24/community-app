/**
 * Collection of compare function to sort challenges in different ways.
 */

import moment from 'moment';

export const SORTS = {
  CURRENT_PHASE: 'current-phase',
  MOST_RECENT: 'most-recent',
  NUM_REGISTRANTS: 'num-registrants',
  NUM_SUBMISSIONS: 'num-submissions',
  PHASE_END_TIME: 'phase-end-time',
  PRIZE_HIGH_TO_LOW: 'prize-high-to-low',
  TIME_TO_REGISTER: 'time-to-register',
  TIME_TO_SUBMIT: 'time-to-submit',
  TITLE_A_TO_Z: 'title-a-to-z',
};

export default {
  [SORTS.CURRENT_PHASE]: {
    func: (a, b) => a.status.localeCompare(b.status),
    name: 'Current phase',
  },
  [SORTS.MOST_RECENT]: {
    func: (a, b) => moment(b.registrationStartDate).diff(a.registrationStartDate),
    name: 'Most recent',
  },
  [SORTS.NUM_REGISTRANTS]: {
    func: (a, b) => b.numRegistrants - a.numRegistrants,
    name: '# of registrants',
  },
  [SORTS.NUM_SUBMISSIONS]: {
    func: (a, b) => b.numSubmissions - a.numSubmissions,
    name: '# of submissions',
  },
  [SORTS.PHASE_END_TIME]: {
    func: (a, b) => a.currentPhaseRemainingTime - b.currentPhaseRemainingTime,
    name: 'Time to submit',
  },
  [SORTS.PRIZE_HIGH_TO_LOW]: {
    func: (a, b) => b.totalPrize - a.totalPrize,
    name: 'Prize high to low',
  },
  [SORTS.TIME_TO_REGISTER]: {
    func: (a, b) => moment(a.registrationEndDate || a.submissionEndDate)
      .diff(b.registrationEndDate || b.submissionEndDate),
    name: 'Time to register',
  },
  [SORTS.TIME_TO_SUBMIT]: {
    func: (a, b) => a.submissionEndTimestamp - b.submissionEndTimestamp,
    name: 'Time to submit',
  },
  [SORTS.TITLE_A_TO_Z]: {
    func: (a, b) => a.name.localeCompare(b.name),
    name: 'Title A-Z',
  },
};
