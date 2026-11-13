/**
 * Schedule Creator - Standalone Web Application
 * Connected with TIP Grade Calculator and JeyCub Terms Reviewer
 */

// ==========================================================================
// COURSE CATALOG & SCHEDULE SECTIONS
// ==========================================================================
const SCHEDULE_COURSES = [
  {
    code: 'ME 411',
    title: 'Methods of Research for ME',
    units: 1,
    color: '#8b5cf6',
    border: '#a78bfa',
    sections: [
      { id: 'ME32S1', desc: 'Wed 9:30–10:30 AM', room: 'Q-5508', slots: [{ day: 2, start: 570, end: 630, room: 'Q-5508' }] },
      { id: 'ME32S2', desc: 'Thu 9:30–10:30 AM', room: 'Q-5507', slots: [{ day: 3, start: 570, end: 630, room: 'Q-5507' }] },
      { id: 'ME32S3', desc: 'Fri 3:30–4:30 PM', room: 'Q-5508', slots: [{ day: 4, start: 930, end: 990, room: 'Q-5508' }] }
    ]
  },
  {
    code: 'ME 404',
    title: 'Machine Design 1',
    units: 3,
    color: '#0284c7',
    border: '#38bdf8',
    sections: [
      { id: 'ME32S1', desc: 'Tu/Th 7:30–9:00 AM', room: 'Q-5504', slots: [{ day: 1, start: 450, end: 540, room: 'Q-5504' }, { day: 3, start: 450, end: 540, room: 'Q-5504' }] },
      { id: 'ME32S2', desc: 'We/Fr 1:30–3:00 PM', room: 'Q-5508', slots: [{ day: 2, start: 810, end: 900, room: 'Q-5508' }, { day: 4, start: 810, end: 900, room: 'Q-5508' }] },
      { id: 'ME32S3', desc: 'Tu/Th 7:30–9:00 PM', room: 'Q-5504', slots: [{ day: 1, start: 1170, end: 1260, room: 'Q-5504' }, { day: 3, start: 1170, end: 1260, room: 'Q-5504' }] }
    ]
  },
  {
    code: 'ME 407',
    title: 'Refrigeration Systems',
    units: 3,
    color: '#06b6d4',
    border: '#22d3ee',
    sections: [
      { id: 'ME32S1', desc: 'Tu/Th 9:00–10:30 AM', room: 'Q-5504', slots: [{ day: 1, start: 540, end: 630, room: 'Q-5504' }, { day: 3, start: 540, end: 630, room: 'Q-5504' }] },
      { id: 'ME32S2', desc: 'Tu/Th 1:30–3:00 PM', room: 'Q-5504', slots: [{ day: 1, start: 810, end: 900, room: 'Q-5504' }, { day: 3, start: 810, end: 900, room: 'Q-5504' }] },
      { id: 'ME32S3', desc: 'Tu/Th 12:00–1:30 PM', room: 'Q-5507', slots: [{ day: 1, start: 720, end: 810, room: 'Q-5507' }, { day: 3, start: 720, end: 810, room: 'Q-5507' }] }
    ]
  },
  {
    code: 'ME 409',
    title: 'Combustion Engineering',
    units: 2,
    color: '#d97706',
    border: '#fbbf24',
    sections: [
      { id: 'ME32S1', desc: 'We/Fr 1:30–2:30 PM', room: 'Q-5507', slots: [{ day: 2, start: 810, end: 870, room: 'Q-5507' }, { day: 4, start: 810, end: 870, room: 'Q-5507' }] },
      { id: 'ME32S2', desc: 'We/Fr 11:30 AM–12:30 PM', room: 'Q-5508', slots: [{ day: 2, start: 690, end: 750, room: 'Q-5508' }, { day: 4, start: 690, end: 750, room: 'Q-5508' }] },
      { id: 'ME32S3', desc: 'We/Fr 12:30–1:30 PM', room: 'Q-5507', slots: [{ day: 2, start: 750, end: 810, room: 'Q-5507' }, { day: 4, start: 750, end: 810, room: 'Q-5507' }] }
    ]
  },
  {
    code: 'ME 406',
    title: 'Fluid Machineries',
    units: 3,
    color: '#4f46e5',
    border: '#818cf8',
    sections: [
      { id: 'ME32S1', desc: 'We/Fr 2:30–4:00 PM', room: 'Q-5507', slots: [{ day: 2, start: 870, end: 960, room: 'Q-5507' }, { day: 4, start: 870, end: 960, room: 'Q-5507' }] },
      { id: 'ME32S2', desc: 'We/Fr 3:00–4:30 PM', room: 'Q-5504', slots: [{ day: 2, start: 900, end: 990, room: 'Q-5504' }, { day: 4, start: 900, end: 990, room: 'Q-5504' }] },
      { id: 'ME32S3', desc: 'Tu/Th 10:30 AM–12:00 PM', room: 'Q-5507', slots: [{ day: 1, start: 630, end: 720, room: 'Q-5507' }, { day: 3, start: 630, end: 720, room: 'Q-5507' }] }
    ]
  },
  {
    code: 'EMAN 001',
    title: 'Engineering Management',
    units: 2,
    color: '#ea580c',
    border: '#fb923c',
    sections: [
      { id: 'ME32S1', desc: 'Tue 10:30 AM–12:30 PM', room: 'Q-5504', slots: [{ day: 1, start: 630, end: 750, room: 'Q-5504' }] },
      { id: 'ME32S2', desc: 'Thu 10:30 AM–12:30 PM', room: 'Q-5504', slots: [{ day: 3, start: 630, end: 750, room: 'Q-5504' }] },
      { id: 'ME32S3', desc: 'Wed 7:30–9:30 PM', room: 'Q-5504', slots: [{ day: 2, start: 1170, end: 1290, room: 'Q-5504' }] },
      { id: 'ECE22S1', desc: 'Mo 5:30–6:30 & We 7:30–8:30', room: 'Q-5320', slots: [{ day: 0, start: 1050, end: 1110, room: 'Q-5320' }, { day: 2, start: 1170, end: 1230, room: 'Q-5320' }] },
      { id: 'ECE32S1', desc: 'Tu/Th 12:00–1:00 PM', room: 'Q-9405', slots: [{ day: 1, start: 720, end: 780, room: 'Q-9405' }, { day: 3, start: 720, end: 780, room: 'Q-9405' }] }
    ]
  },
  {
    code: 'ME 401',
    title: 'Mechanical Engineering Lab 1',
    units: 1,
    color: '#0d9488',
    border: '#2dd4bf',
    sections: [
      { id: 'ME32S1', desc: 'Thu 10:30 AM–1:30 PM', room: 'Q-2105', slots: [{ day: 3, start: 630, end: 810, room: 'Q-2105' }] },
      { id: 'ME32S2', desc: 'Tue 10:30 AM–1:30 PM', room: 'Q-2105', slots: [{ day: 1, start: 630, end: 810, room: 'Q-2105' }] },
      { id: 'ME32S3', desc: 'Wed 1:30–4:30 PM', room: 'Q-2105', slots: [{ day: 2, start: 810, end: 990, room: 'Q-2105' }] }
    ]
  },
  {
    code: 'ME 007',
    title: 'Materials Science and Engineering for ME',
    units: 3,
    color: '#16a34a',
    border: '#4ade80',
    sections: [
      { id: 'ME32S1', desc: 'We 10:30-12:30 (L) & Fr 10:30-1:30 (Lab)', room: 'Q-2106', slots: [{ day: 2, start: 630, end: 750, room: 'Q-2106', tag: 'LEC' }, { day: 4, start: 630, end: 810, room: 'Q-2106', tag: 'LAB' }] },
      { id: 'ME32S2', desc: 'Tu 3-5 PM (L) & Th 3-6 PM (Lab)', room: 'Q-2106', slots: [{ day: 1, start: 900, end: 1020, room: 'Q-2106', tag: 'LEC' }, { day: 3, start: 900, end: 1080, room: 'Q-2106', tag: 'LAB' }] },
      { id: 'ME32S3', desc: 'We 5:30-7:30 (L) & Fr 4:30-7:30 (Lab)', room: 'Q-2106', slots: [{ day: 2, start: 1050, end: 1170, room: 'Q-2106', tag: 'LEC' }, { day: 4, start: 990, end: 1170, room: 'Q-2106', tag: 'LAB' }] }
    ]
  },
  {
    code: 'ECE 006',
    title: 'Control Engineering',
    units: 3,
    color: '#db2777',
    border: '#f472b6',
    sections: [
      { id: 'ME32S1', desc: 'Tu 1:30-4:30 (Lab) & Th 2:30-4:30 (Lec)', room: 'Q-5322/5507', slots: [{ day: 1, start: 810, end: 990, room: 'Q-5322', tag: 'LAB' }, { day: 3, start: 870, end: 990, room: 'Q-5507', tag: 'LEC' }] },
      { id: 'ME32S2', desc: 'Tu 7:30-10:30 (Lab) & Th 7:30-9:30 (Lec)', room: 'Q-5322/5507', slots: [{ day: 1, start: 450, end: 630, room: 'Q-5322', tag: 'LAB' }, { day: 3, start: 450, end: 570, room: 'Q-5507', tag: 'LEC' }] },
      { id: 'ME32S3', desc: 'Tu 4:30-6:30 (Lec) & Th 4:30-7:30 (Lab)', room: 'Q-5507/5322', slots: [{ day: 1, start: 990, end: 1110, room: 'Q-5507', tag: 'LEC' }, { day: 3, start: 990, end: 1170, room: 'Q-5322', tag: 'LAB' }] },
      { id: 'ME31S1', desc: 'We 2:30-4:30 (Lec) & Fr 1:30-4:30 (Lab)', room: 'Q-5414/5322', slots: [{ day: 2, start: 870, end: 990, room: 'Q-5414', tag: 'LEC' }, { day: 4, start: 810, end: 990, room: 'Q-5322', tag: 'LAB' }] }
    ]
  },
  {
    code: 'GEE 002',
    title: 'General Education Elective 2',
    units: 3,
    color: '#64748b',
    border: '#94a3b8',
    sections: [
      { id: 'ME32S1', desc: 'M/W/F 8:30–9:30 AM', room: 'Q-5507', slots: [{ day: 0, start: 510, end: 570, room: 'Q-5507' }, { day: 2, start: 510, end: 570, room: 'Q-5507' }, { day: 4, start: 510, end: 570, room: 'Q-5507' }] },
      { id: 'ME32S2', desc: 'M/W/F 10:30–11:30 AM', room: 'Q-5508', slots: [{ day: 0, start: 630, end: 690, room: 'Q-5508' }, { day: 2, start: 630, end: 690, room: 'Q-5508' }, { day: 4, start: 630, end: 690, room: 'Q-5508' }] },
      { id: 'ME32S3', desc: 'M/W/F 11:30 AM–12:30 PM', room: 'Q-5503', slots: [{ day: 0, start: 690, end: 750, room: 'Q-5503' }, { day: 2, start: 690, end: 750, room: 'Q-5503' }, { day: 4, start: 690, end: 750, room: 'Q-5503' }] },
      { id: 'ME22S2', desc: 'M/W/F 2:30–3:30 PM', room: 'Q-9506', slots: [{ day: 0, start: 870, end: 930, room: 'Q-9506' }, { day: 2, start: 870, end: 930, room: 'Q-9506' }, { day: 4, start: 870, end: 930, room: 'Q-9506' }] },
      { id: 'ME22S3', desc: 'M/W/F 9:30–10:30 AM', room: 'Q-5507', slots: [{ day: 0, start: 570, end: 630, room: 'Q-5507' }, { day: 2, start: 570, end: 630, room: 'Q-5507' }, { day: 4, start: 570, end: 630, room: 'Q-5507' }] },
      { id: 'BAFM22S1', desc: 'Tu/Th 10:30 AM–12:00 PM', room: 'Q-9301', slots: [{ day: 1, start: 630, end: 720, room: 'Q-9301' }, { day: 3, start: 630, end: 720, room: 'Q-9301' }] }
    ]
  },
  {
    code: 'GEE 003',
    title: 'General Education Elective 3',
    units: 3,
    color: '#475569',
    border: '#64748b',
    sections: [
      { id: 'ME32S1', desc: 'M/W/F 7:30–8:30 AM', room: 'Q-5504', slots: [{ day: 0, start: 450, end: 510, room: 'Q-5504' }, { day: 2, start: 450, end: 510, room: 'Q-5504' }, { day: 4, start: 450, end: 510, room: 'Q-5504' }] },
      { id: 'ME32S2', desc: 'M/W/F 9:30–10:30 AM', room: 'Q-5414', slots: [{ day: 0, start: 570, end: 630, room: 'Q-5414' }, { day: 2, start: 570, end: 630, room: 'Q-5414' }, { day: 4, start: 570, end: 630, room: 'Q-5414' }] },
      { id: 'ME32S3', desc: 'Tu/Th 1:30–3:00 PM', room: 'Q-5508', slots: [{ day: 1, start: 810, end: 900, room: 'Q-5508' }, { day: 3, start: 810, end: 900, room: 'Q-5508' }] },
      { id: 'ARCH22S4', desc: 'Tu/Th 7:30–9:00 AM', room: 'Q-9503', slots: [{ day: 1, start: 450, end: 540, room: 'Q-9503' }, { day: 3, start: 450, end: 540, room: 'Q-9503' }] },
      { id: 'ARCH22S5', desc: 'Tu/Th 9:00–10:30 AM', room: 'Q-9503', slots: [{ day: 1, start: 540, end: 630, room: 'Q-9503' }, { day: 3, start: 540, end: 630, room: 'Q-9503' }] },
      { id: 'ARCH22S3', desc: 'Tu/Th 12:00–1:30 PM', room: 'Q-9503', slots: [{ day: 1, start: 720, end: 810, room: 'Q-9503' }, { day: 3, start: 720, end: 810, room: 'Q-9503' }] }
    ]
  }
];

// ==========================================================================
// STATE MANAGEMENT & PERSISTENCE
// ==========================================================================
let userScheduleSelection = {};

function initScheduleCreatorState() {
  const saved = localStorage.getItem('tip_sched_selection_v1');
  if (saved) {
    try {
      userScheduleSelection = JSON.parse(saved);
    } catch (e) {
      applySchedulePreset('A');
    }
  } else {
    applySchedulePreset('A');
  }
}

function saveScheduleCreatorState() {
  localStorage.setItem('tip_sched_selection_v1', JSON.stringify(userScheduleSelection));
}

function applySchedulePreset(preset) {
  userScheduleSelection = {};
  if (preset === 'A') {
    SCHEDULE_COURSES.forEach(c => {
      userScheduleSelection[c.code] = 'ME32S1';
    });
  } else if (preset === 'B') {
    SCHEDULE_COURSES.forEach(c => {
      if (c.code === 'ME 406') userScheduleSelection[c.code] = 'ME32S2';
      else userScheduleSelection[c.code] = 'ME32S1';
    });
  }
  saveScheduleCreatorState();
  renderScheduleView();
}

function toggleScheduleSection(courseCode, sectionId) {
  if (userScheduleSelection[courseCode] === sectionId) {
    delete userScheduleSelection[courseCode];
  } else {
    userScheduleSelection[courseCode] = sectionId;
  }
  saveScheduleCreatorState();
  renderScheduleView();
}

function removeCourseFromSchedule(courseCode) {
  if (userScheduleSelection[courseCode]) {
    delete userScheduleSelection[courseCode];
    saveScheduleCreatorState();
    renderScheduleView();
  }
}

// ==========================================================================
// REMOVE SUBJECT PROMPT MODAL
// ==========================================================================
let pendingRemoveCourseCode = null;
let isModalOpen = false;

function promptRemoveSubject(courseCode) {
  const course = SCHEDULE_COURSES.find(c => c.code === courseCode);
  if (!course) return;

  const sectionId = userScheduleSelection[courseCode];
  if (!sectionId) return; // Not currently enrolled in scheduler

  const section = course.sections.find(s => s.id === sectionId);
  pendingRemoveCourseCode = courseCode;

  const modalEl = document.getElementById('sched-remove-modal');
  const previewEl = document.getElementById('sched-modal-subject-preview');
  if (!modalEl || !previewEl) {
    if (window.confirm(`Are you sure you want to remove ${course.title} (${course.code}) from your schedule?`)) {
      removeCourseFromSchedule(courseCode);
    }
    return;
  }

  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  const colorDisplay = isLight ? course.color : (course.border || course.color);
  previewEl.style.borderLeftColor = course.border || course.color;

  const secDesc = section ? section.desc : '';
  const secRoom = (section && section.room) ? ` &bull; Room ${section.room}` : '';

  previewEl.innerHTML = `
    <div class="sched-modal-course-row">
      <div class="sched-modal-course-dot" style="background: ${course.color}; box-shadow: 0 0 6px ${course.color};"></div>
      <div class="sched-modal-course-names">
        <div class="sched-modal-course-title" style="color: ${colorDisplay};">${course.title}</div>
        <div class="sched-modal-course-meta">
          <span class="sched-modal-course-code">${course.code}</span>
          <span class="sched-modal-course-units">&bull; ${course.units} ${course.units === 1 ? 'Unit' : 'Units'}</span>
          <span class="sched-modal-course-sec">Section ${sectionId}</span>
        </div>
      </div>
    </div>
    ${secDesc ? `
      <div class="sched-modal-schedule-info">
        <span class="sched-modal-info-icon">🕒</span>
        <span>${secDesc}${secRoom}</span>
      </div>
    ` : ''}
  `;

  exitFocusMode();
  isModalOpen = true;
  modalEl.classList.add('is-open');
  modalEl.setAttribute('aria-hidden', 'false');

  const cancelBtn = document.getElementById('sched-modal-btn-cancel');
  if (cancelBtn) {
    setTimeout(() => cancelBtn.focus(), 60);
  }
}

function closeRemoveModal() {
  const modalEl = document.getElementById('sched-remove-modal');
  if (modalEl) {
    modalEl.classList.remove('is-open');
    modalEl.setAttribute('aria-hidden', 'true');
  }
  pendingRemoveCourseCode = null;
  isModalOpen = false;
  resetIdleTimer();
}

function confirmRemoveSubject() {
  if (pendingRemoveCourseCode) {
    const codeToRemove = pendingRemoveCourseCode;
    closeRemoveModal();
    removeCourseFromSchedule(codeToRemove);
  } else {
    closeRemoveModal();
  }
}

// Global hooks for testing or external access
window.promptRemoveSubject = promptRemoveSubject;
window.removeCourseFromSchedule = removeCourseFromSchedule;
window.closeRemoveModal = closeRemoveModal;

function renderScheduleView() {
  renderScheduleSidebar();
  renderScheduleGrid();
  updateScheduleStats();
}

// ==========================================================================
// CONFLICT CALCULATION LOGIC
// ==========================================================================
function getScheduleConflicts() {
  const activeEvents = [];
  SCHEDULE_COURSES.forEach(course => {
    const secId = userScheduleSelection[course.code];
    if (!secId) return;
    const sec = course.sections.find(s => s.id === secId);
    if (!sec) return;

    sec.slots.forEach(slot => {
      activeEvents.push({
        code: course.code,
        title: course.title,
        units: course.units,
        color: course.color,
        border: course.border,
        sectionId: sec.id,
        day: slot.day,
        start: slot.start,
        end: slot.end,
        room: slot.room || sec.room || '',
        tag: slot.tag || ''
      });
    });
  });

  const conflictingIndices = new Set();
  const conflictingCourseCodes = new Set();
  const conflictingSections = new Set(); // Key: `${code}__${secId}`
  const courseConflictsMap = {};  // courseCode -> Array of partner conflict objects
  const sectionConflictsMap = {}; // `${code}__${secId}` -> Array of partner conflict objects
  const eventConflictsMap = {};   // eventIndex -> Array of partner conflict objects

  const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  for (let i = 0; i < activeEvents.length; i++) {
    for (let j = i + 1; j < activeEvents.length; j++) {
      const a = activeEvents[i];
      const b = activeEvents[j];
      if (a.day === b.day && Math.max(a.start, b.start) < Math.min(a.end, b.end)) {
        conflictingIndices.add(i);
        conflictingIndices.add(j);
        conflictingCourseCodes.add(a.code);
        conflictingCourseCodes.add(b.code);
        const aSecKey = `${a.code}__${a.sectionId}`;
        const bSecKey = `${b.code}__${b.sectionId}`;
        conflictingSections.add(aSecKey);
        conflictingSections.add(bSecKey);

        const overlapStart = Math.max(a.start, b.start);
        const overlapEnd = Math.min(a.end, b.end);
        const dayName = dayNames[a.day] || '';
        const overlapTimeStr = `${dayName} ${formatTimeMinutes(overlapStart)}–${formatTimeMinutes(overlapEnd)}`;

        const conflictForA = {
          withCode: b.code,
          withTitle: b.title,
          withSection: b.sectionId,
          withRoom: b.room,
          dayName,
          overlapStart,
          overlapEnd,
          overlapTimeStr,
          partnerIndex: j
        };
        const conflictForB = {
          withCode: a.code,
          withTitle: a.title,
          withSection: a.sectionId,
          withRoom: a.room,
          dayName,
          overlapStart,
          overlapEnd,
          overlapTimeStr,
          partnerIndex: i
        };

        if (!courseConflictsMap[a.code]) courseConflictsMap[a.code] = [];
        courseConflictsMap[a.code].push(conflictForA);
        if (!courseConflictsMap[b.code]) courseConflictsMap[b.code] = [];
        courseConflictsMap[b.code].push(conflictForB);

        if (!sectionConflictsMap[aSecKey]) sectionConflictsMap[aSecKey] = [];
        sectionConflictsMap[aSecKey].push(conflictForA);
        if (!sectionConflictsMap[bSecKey]) sectionConflictsMap[bSecKey] = [];
        sectionConflictsMap[bSecKey].push(conflictForB);

        if (!eventConflictsMap[i]) eventConflictsMap[i] = [];
        eventConflictsMap[i].push(conflictForA);
        if (!eventConflictsMap[j]) eventConflictsMap[j] = [];
        eventConflictsMap[j].push(conflictForB);
      }
    }
  }

  // Potential conflicts for unselected sections against currently selected other courses
  const potentialConflictSections = new Set();
  const potentialConflictsMap = {};
  SCHEDULE_COURSES.forEach(course => {
    course.sections.forEach(sec => {
      if (userScheduleSelection[course.code] === sec.id) return;
      const secKey = `${course.code}__${sec.id}`;
      sec.slots.forEach(slot => {
        activeEvents.forEach(act => {
          if (act.code !== course.code && act.day === slot.day && Math.max(act.start, slot.start) < Math.min(act.end, slot.end)) {
            potentialConflictSections.add(secKey);
            if (!potentialConflictsMap[secKey]) potentialConflictsMap[secKey] = [];
            const dayName = dayNames[slot.day] || '';
            const overlapTimeStr = `${dayName} ${formatTimeMinutes(Math.max(act.start, slot.start))}–${formatTimeMinutes(Math.min(act.end, slot.end))}`;
            potentialConflictsMap[secKey].push({
              withCode: act.code,
              withTitle: act.title,
              withSection: act.sectionId,
              overlapTimeStr
            });
          }
        });
      });
    });
  });

  return {
    activeEvents,
    conflictingIndices,
    courseCodes: conflictingCourseCodes,
    sections: conflictingSections,
    potentialSections: potentialConflictSections,
    courseConflictsMap,
    sectionConflictsMap,
    potentialConflictsMap,
    eventConflictsMap
  };
}

function highlightConflictPartners(partnerCodes) {
  if (!partnerCodes || !partnerCodes.length) return;
  document.querySelectorAll('.sched-course-row').forEach(row => {
    if (partnerCodes.includes(row.dataset.courseCode)) {
      row.classList.add('sched-partner-focused');
    }
  });
  document.querySelectorAll('.sched-event-block').forEach(card => {
    if (partnerCodes.includes(card.dataset.courseCode)) {
      card.classList.add('sched-partner-focused');
    }
  });
}

function clearConflictPartners() {
  document.querySelectorAll('.sched-partner-focused').forEach(el => {
    el.classList.remove('sched-partner-focused');
  });
}

function highlightInterferingOnGrid(courseCode, sectionId) {
  clearInterferingHighlights();
  const course = SCHEDULE_COURSES.find(c => c.code === courseCode);
  if (!course) return;
  const sec = course.sections.find(s => s.id === sectionId);
  if (!sec) return;

  const cards = document.querySelectorAll('.sched-event-block');
  cards.forEach(card => {
    if (card.dataset.courseCode === courseCode) return;

    const cDay = Number(card.dataset.day);
    const cStart = Number(card.dataset.start);
    const cEnd = Number(card.dataset.end);

    const interferes = sec.slots.some(slot => {
      return slot.day === cDay && Math.max(slot.start, cStart) < Math.min(slot.end, cEnd);
    });

    if (interferes) {
      card.classList.add('sched-event-interfered-hover');
    }
  });
}

function clearInterferingHighlights() {
  document.querySelectorAll('.sched-event-block.sched-event-interfered-hover').forEach(card => {
    card.classList.remove('sched-event-interfered-hover');
  });
}

function formatPillDesc(desc) {
  if (!desc) return '';
  if (desc.includes(' & ')) {
    const parts = desc.split(' & ');
    return `<span class="pill-day">${parts[0].trim()}</span><span class="pill-time">&amp; ${parts[1].trim()}</span>`;
  }
  const match = desc.match(/^([A-Za-z/]+)\s+(.+)$/);
  if (match) {
    return `<span class="pill-day">${match[1]}</span><span class="pill-time">${match[2]}</span>`;
  }
  return `<span class="pill-time">${desc}</span>`;
}

// ==========================================================================
// RENDER SIDEBAR LIST
// ==========================================================================
function renderScheduleSidebar() {
  const listEl = document.getElementById('sched-subject-list');
  if (!listEl) return;

  const conflicts = getScheduleConflicts();
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  listEl.innerHTML = '';

  SCHEDULE_COURSES.forEach(course => {
    const selectedSec = userScheduleSelection[course.code];
    const hasConflict = conflicts.courseCodes.has(course.code);
    const row = document.createElement('div');
    row.className = 'sched-course-row' + (selectedSec ? ' active' : '') + (hasConflict ? ' has-conflict' : '');
    row.dataset.courseCode = course.code;

    let pillsHtml = '';
    course.sections.forEach(sec => {
      const isAct = selectedSec === sec.id;
      const secKey = `${course.code}__${sec.id}`;
      const isConflict = isAct && conflicts.sections.has(secKey);
      const isPotential = !isAct && conflicts.potentialSections.has(secKey);

      let pillClass = 'sched-pill';
      if (isAct) pillClass += ' active';
      if (isConflict) pillClass += ' sched-pill-conflict';
      if (isPotential) pillClass += ' sched-pill-potential-conflict';

      let pillConflictTitle = '';
      let pillPartnerCodes = [];
      if (isConflict) {
        const secConflicts = conflicts.sectionConflictsMap[secKey] || [];
        pillPartnerCodes = [...new Set(secConflicts.map(p => p.withCode))];
        const secSummaries = [...new Set(secConflicts.map(p => `• ${p.withTitle} (${p.withSection}) [${p.overlapTimeStr}]`))];
        if (secSummaries.length > 0) {
          pillConflictTitle = `\n\n⚠️ CONFLICTS WITH:\n${secSummaries.join('\n')}`;
        } else {
          pillConflictTitle = '\n⚠️ CONFLICT: Time slot overlaps with another selected subject!';
        }
      } else if (isPotential) {
        const potConflicts = conflicts.potentialConflictsMap[secKey] || [];
        pillPartnerCodes = [...new Set(potConflicts.map(p => p.withCode))];
        const potSummaries = [...new Set(potConflicts.map(p => `• ${p.withTitle} (${p.withSection}) [${p.overlapTimeStr}]`))];
        if (potSummaries.length > 0) {
          pillConflictTitle = `\n\n⚠️ Notice: Conflicts with:\n${potSummaries.join('\n')}`;
        } else {
          pillConflictTitle = '\n⚠️ Notice: This section conflicts with another selected subject';
        }
      }

      const activeStyle = (isAct && !isConflict)
        ? (isLight
            ? `background: ${course.color}15; border-color: ${course.color}; color: #1c1510; box-shadow: 0 1px 4px ${course.color}35;`
            : `background: ${course.color}28; border-color: ${course.border}; color: #fff; box-shadow: 0 0 8px ${course.color}40;`)
        : '';

      const secStyle = (isAct && !isConflict)
        ? (isLight
            ? `color: ${course.color}; font-weight: 800;`
            : `color: ${course.border}; font-weight: 800;`)
        : '';

      pillsHtml += `
        <button class="${pillClass}" 
                onclick="toggleScheduleSection('${course.code}', '${sec.id}')"
                onmouseenter="highlightConflictPartners(${JSON.stringify(pillPartnerCodes)}); highlightInterferingOnGrid('${course.code}', '${sec.id}')"
                onmouseleave="clearConflictPartners(); clearInterferingHighlights()"
                title="${course.title} (${course.code})
Section: ${sec.id} (${sec.desc})
Room: ${sec.room}${pillConflictTitle}"
                style="${activeStyle}">
          <span class="pill-sec" style="${secStyle}">
            ${sec.id}${isConflict ? ' ⚠️' : ''}
          </span>
          <span class="pill-desc">${formatPillDesc(sec.desc)}</span>
        </button>
      `;
    });

    const dotStyle = isLight
      ? `background: ${course.color}; box-shadow: 0 0 4px ${course.color}60;`
      : `background: ${course.color}; box-shadow: 0 0 6px ${course.color};`;
    const titleStyle = isLight
      ? `color: ${course.color}; font-weight: 800;`
      : `color: ${course.border};`;

    row.innerHTML = `
      <div class="sched-course-header-new">
        <div class="sched-course-title-group">
          <span class="sched-course-dot" style="${dotStyle}"></span>
          <span class="sched-course-title-main" style="${titleStyle}">${course.title}</span>
        </div>
        <div class="sched-course-subgroup">
          <span class="sched-course-code-grey">${course.code}</span>
          <span class="sched-course-units-grey">&bull; ${course.units} Units</span>
        </div>
      </div>
      <div class="sched-pills-row">${pillsHtml}</div>
    `;

    if (selectedSec) {
      const headerEl = row.querySelector('.sched-course-header-new');
      if (headerEl) {
        headerEl.style.cursor = 'pointer';
        headerEl.title = `${course.title} (${course.code}) is enrolled in section ${selectedSec}.\nDouble-click to remove from schedule.`;
        headerEl.addEventListener('dblclick', (e) => {
          e.preventDefault();
          e.stopPropagation();
          promptRemoveSubject(course.code);
        });
      }
    }

    listEl.appendChild(row);
  });
}

// ==========================================================================
// RENDER CALENDAR GRID
// ==========================================================================
function formatEventTitleHtml(title, tag) {
  if (tag) {
    return `${title} (${tag})`;
  }
  return title;
}

function renderScheduleGrid() {
  const gridEl = document.getElementById('sched-calendar-grid');
  if (!gridEl) return;

  const { activeEvents, conflictingIndices: conflicts, eventConflictsMap } = getScheduleConflicts();

  let earliestSlotStart = 450; // 7:30 AM default
  let latestSlotEnd = 990;     // 4:30 PM default

  if (activeEvents.length > 0) {
    earliestSlotStart = Math.min(...activeEvents.map(e => e.start));
    latestSlotEnd = Math.max(...activeEvents.map(e => e.end));
  }

  const startMin = Math.floor(earliestSlotStart / 30) * 30;
  const endMin = Math.ceil(latestSlotEnd / 30) * 30;
  const totalSteps = Math.ceil((endMin - startMin) / 30);

  gridEl.innerHTML = '';
  const isMob = isMobileLayout();
  if (isMob) {
    const requiredH = totalSteps * 20 + Math.max(0, totalSteps - 1) * 1.5;
    gridEl.style.gridTemplateRows = `repeat(${totalSteps}, 20px)`;
    gridEl.style.height = `${requiredH}px`;
    gridEl.style.minHeight = `${requiredH}px`;
  } else {
    gridEl.style.gridTemplateRows = `repeat(${totalSteps}, minmax(0, 1fr))`;
    gridEl.style.height = '100%';
    gridEl.style.minHeight = '';
  }

  // Time labels and slot lines
  for (let step = 0; step < totalSteps; step++) {
    const currMin = startMin + step * 30;
    const h = Math.floor(currMin / 60);
    const m = currMin % 60;
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h > 12 ? h - 12 : (h === 0 ? 12 : h);

    const timeEl = document.createElement('div');
    timeEl.className = 'sched-time-label';
    timeEl.style.gridColumn = '1';
    timeEl.style.gridRow = `${step + 1}`;
    timeEl.innerHTML = `<span class="time-hm">${displayH}:${m === 0 ? '00' : m}</span><span class="time-ampm"> ${ampm}</span>`;
    gridEl.appendChild(timeEl);

    for (let d = 0; d < 5; d++) {
      const slotEl = document.createElement('div');
      slotEl.className = 'sched-grid-slot';
      slotEl.style.gridColumn = `${d + 2}`;
      slotEl.style.gridRow = `${step + 1}`;
      gridEl.appendChild(slotEl);
    }
  }

  // Active Events
  activeEvents.forEach((ev, idx) => {
    const startStep = Math.floor((ev.start - startMin) / 30) + 1;
    const spanSteps = Math.ceil((ev.end - ev.start) / 30);
    const col = ev.day + 2;
    const isConflict = conflicts.has(idx);

    const is1Hr = spanSteps <= 2;
    const card = document.createElement('div');
    card.className = 'sched-event-block'
      + (isConflict ? ' sched-event-conflict' : '')
      + (is1Hr ? ' sched-event-span-1hr' : '');
    card.style.gridColumn = `${col}`;
    card.style.gridRow = `${startStep} / span ${spanSteps}`;
    card.dataset.courseCode = ev.code;
    card.dataset.sectionId = ev.sectionId;
    card.dataset.day = ev.day;
    card.dataset.start = ev.start;
    card.dataset.end = ev.end;
    card.dataset.spanSteps = spanSteps;
    card.dataset.duration = ev.end - ev.start;

    card.style.background = ev.color;
    card.style.borderLeftColor = isConflict ? '#f43f5e' : ev.border;

    if (isConflict) {
      card.style.opacity = '0.65';
      const partners = (eventConflictsMap && eventConflictsMap[idx]) || [];
      const partnerCodes = [...new Set(partners.map(p => p.withCode))];

      card.addEventListener('mouseenter', () => {
        if (partnerCodes.length > 0) highlightConflictPartners(partnerCodes);
      });
      card.addEventListener('mouseleave', () => {
        clearConflictPartners();
      });
    }

    card.innerHTML = `
      <div class="sched-event-title-main">${formatEventTitleHtml(ev.title, ev.tag)}</div>
      <div class="sched-event-meta">
        <span class="sched-event-sec-badge">${ev.sectionId}</span>
        ${ev.room ? `<span class="sched-event-room">${ev.room}</span>` : ''}
      </div>
    `;

    let partnerSummaries = [];
    if (isConflict && eventConflictsMap && eventConflictsMap[idx]) {
      const partners = eventConflictsMap[idx];
      partnerSummaries = [...new Set(partners.map(p => `• ${p.withTitle} (${p.withSection}) [${p.overlapTimeStr}]`))];
    }

    const conflictText = partnerSummaries.length > 0
      ? `\n\n⚠️ CONFLICTS WITH:\n${partnerSummaries.join('\n')}`
      : (isConflict ? '\n\n⚠️ WARNING: Active time conflict with another enrolled subject!' : '');

    card.title = `${ev.title}\nSection: ${ev.sectionId}\nRoom: ${ev.room}\nTime: ${formatTimeMinutes(ev.start)} - ${formatTimeMinutes(ev.end)}${conflictText}\n\n(Double-click to remove from schedule)`;

    // Double-click to prompt subject removal from timetable
    card.addEventListener('dblclick', (e) => {
      e.preventDefault();
      e.stopPropagation();
      promptRemoveSubject(ev.code);
    });

    // Touchscreen double-tap support
    let lastTapTime = 0;
    card.addEventListener('touchend', (e) => {
      const now = Date.now();
      if (now - lastTapTime < 320) {
        e.preventDefault();
        e.stopPropagation();
        promptRemoveSubject(ev.code);
        lastTapTime = 0;
      } else {
        lastTapTime = now;
      }
    }, { passive: false });

    gridEl.appendChild(card);
  });

  requestAnimationFrame(() => {
    fitScheduleEventTitles();
    setTimeout(fitScheduleEventTitles, 50);
  });
}

const titleMeasureCanvas = document.createElement('canvas');
const titleMeasureCtx = titleMeasureCanvas.getContext('2d');

function isMobileLayout() {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(max-width: 768px), (max-width: 850px) and (orientation: portrait)').matches;
  }
  const isPortrait = window.innerHeight > window.innerWidth;
  return window.innerWidth <= 768 || (window.innerWidth <= 850 && isPortrait);
}

function fitScheduleEventTitles() {
  const isMobile = isMobileLayout();
  const isZenDesktop = !isMobile && document.body.classList.contains('sched-focus-autohide');
  const cards = document.querySelectorAll('.sched-event-block');

  cards.forEach(card => {
    const titleEl = card.querySelector('.sched-event-title-main');
    const metaEl = card.querySelector('.sched-event-meta');
    const maxH = card.clientHeight;
    const maxW = card.clientWidth;
    if (maxH <= 0 || maxW <= 0) return;

    const spanSteps = parseInt(card.dataset.spanSteps, 10) || (card.classList.contains('sched-event-span-1hr') ? 2 : 4);

    // 1. Proportional sizing for section badge and room number (metaEl)
    if (metaEl) {
      metaEl.style.removeProperty('font-size');
      const badgeEl = metaEl.querySelector('.sched-event-sec-badge');
      const roomEl = metaEl.querySelector('.sched-event-room');
      if (badgeEl) badgeEl.style.removeProperty('font-size');
      if (roomEl) roomEl.style.removeProperty('font-size');

      let maxMeta;
      let minMeta;
      if (isMobile) {
        maxMeta = spanSteps <= 2 ? 7.5 : 8.0;
        minMeta = 4.5;
      } else if (isZenDesktop) {
        if (spanSteps <= 2) maxMeta = 14.5;
        else if (spanSteps <= 3) maxMeta = 17.0;
        else maxMeta = 19.0;
        minMeta = 10.0;
      } else {
        // Regular Desktop & iPad
        const isTablet = window.innerWidth <= 1199;
        if (spanSteps <= 2) maxMeta = isTablet ? 10.5 : 11.5;
        else if (spanSteps <= 3) maxMeta = isTablet ? 12.0 : 13.0;
        else if (spanSteps <= 4) maxMeta = isTablet ? 13.5 : 14.5;
        else maxMeta = isTablet ? 14.5 : 15.5;
        minMeta = isTablet ? 6.5 : 8.5;
      }

      let metaSize = maxMeta;
      const setMetaSize = (sz) => {
        metaEl.style.setProperty('font-size', sz + 'px', 'important');
        if (badgeEl) badgeEl.style.setProperty('font-size', sz + 'px', 'important');
        if (roomEl) roomEl.style.setProperty('font-size', sz + 'px', 'important');
      };
      setMetaSize(metaSize);

      const computedCard = window.getComputedStyle(card);
      const padLeft = parseFloat(computedCard.paddingLeft) || 0;
      const padRight = parseFloat(computedCard.paddingRight) || 0;
      const innerCardW = Math.max(0, card.clientWidth - padLeft - padRight);

      const checkMetaOverflow = () => {
        if (metaEl.scrollWidth > innerCardW + 0.5) return true;
        if (roomEl && roomEl.scrollWidth > roomEl.clientWidth + 0.5) return true;
        return false;
      };

      while (checkMetaOverflow() && metaSize > minMeta) {
        metaSize = Math.max(minMeta, Math.round((metaSize - 0.25) * 100) / 100);
        setMetaSize(metaSize);
      }
    }

    // Shrink-to-fit title so each word fits horizontally without clipping or breaking mid-word,
    // and all wrapped lines fit cleanly within the card height.
    if (titleEl) {
      titleEl.style.removeProperty('font-size');
      const computedCard = window.getComputedStyle(card);
      const padLeft = parseFloat(computedCard.paddingLeft) || 0;
      const padRight = parseFloat(computedCard.paddingRight) || 0;
      const padTop = parseFloat(computedCard.paddingTop) || 0;
      const padBottom = parseFloat(computedCard.paddingBottom) || 0;
      const innerCardW = Math.max(0, card.clientWidth - padLeft - padRight);
      const innerCardH = Math.max(0, card.clientHeight - padTop - padBottom);
      const metaH = metaEl ? metaEl.offsetHeight : 0;
      const maxTitleH = Math.max(10, innerCardH - metaH - 2);

      let currentSize = parseFloat(window.getComputedStyle(titleEl).fontSize) || 14;
      const minSize = isMobile ? 5.5 : 8.0;

      const words = (titleEl.innerText || titleEl.textContent).trim().split(/\s+/).filter(Boolean);

      const checkWordOverflow = () => {
        if (words.length > 0 && titleMeasureCtx) {
          titleMeasureCtx.font = `800 ${currentSize}px sans-serif`;
          for (let i = 0; i < words.length; i++) {
            if (titleMeasureCtx.measureText(words[i]).width > innerCardW) return true;
          }
        }
        if (titleEl.scrollHeight > maxTitleH + 0.5) return true;
        if (card.scrollHeight > card.clientHeight + 1) return true;
        return false;
      };

      while (checkWordOverflow() && currentSize > minSize) {
        currentSize = Math.max(minSize, Math.round((currentSize - 0.25) * 100) / 100);
        titleEl.style.setProperty('font-size', currentSize + 'px', 'important');
      }
    }
  });
}

function formatTimeMinutes(min) {
  const h = Math.floor(min / 60);
  const m = min % 60;
  const ampm = h >= 12 ? 'PM' : 'AM';
  const dh = h > 12 ? h - 12 : (h === 0 ? 12 : h);
  return `${dh}:${m === 0 ? '00' : m} ${ampm}`;
}

function updateScheduleStats() {
  let totalUnits = 0;
  let count = 0;
  SCHEDULE_COURSES.forEach(c => {
    if (userScheduleSelection[c.code]) {
      totalUnits += c.units;
      count++;
    }
  });

  const statCourses = document.getElementById('sched-stat-courses');
  const statUnits = document.getElementById('sched-stat-units');
  if (statCourses) statCourses.textContent = `${count} / ${SCHEDULE_COURSES.length}`;
  if (statUnits) statUnits.textContent = `${totalUnits} / 27`;
}

// ==========================================================================
// THEME SWITCHING & PERSISTENCE (AUTO-DETECT SYSTEM LIGHT / DARK MODE)
// ==========================================================================
function getSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

function initTheme() {
  const isExplicit = localStorage.getItem('tip_sched_theme_explicit') === 'true';
  const savedTheme = localStorage.getItem('tip_sched_theme');
  const initialTheme = (isExplicit && savedTheme) ? savedTheme : getSystemTheme();
  updateThemeUI(initialTheme, false);

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || getSystemTheme();
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      updateThemeUI(nextTheme, true);
      renderScheduleView();
    });
  }

  // Real-time listener: automatically adjust if system dark/light mode toggles (unless user explicitly locked it)
  if (window.matchMedia) {
    const colorSchemeMedia = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e) => {
      const userLocked = localStorage.getItem('tip_sched_theme_explicit') === 'true';
      if (!userLocked) {
        const detected = e.matches ? 'dark' : 'light';
        updateThemeUI(detected, false);
        renderScheduleView();
      }
    };
    if (colorSchemeMedia.addEventListener) {
      colorSchemeMedia.addEventListener('change', handleSystemThemeChange);
    } else if (colorSchemeMedia.addListener) {
      colorSchemeMedia.addListener(handleSystemThemeChange);
    }
  }
}

function updateThemeUI(theme, isUserManual = false) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    if (isUserManual) {
      localStorage.setItem('tip_sched_theme', theme);
      localStorage.setItem('tip_sched_theme_explicit', 'true');
    }
  } catch (e) {}

  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    themeToggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    themeToggleBtn.innerHTML = theme === 'dark'
      ? `<svg id="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
        </svg>`
      : `<svg id="theme-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>`;
  }
}

// ==========================================================================
// EVENT LISTENERS & INITIALIZATION
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScheduleCreatorState();

  const btnA = document.getElementById('btn-preset-choice-a');
  const btnB = document.getElementById('btn-preset-choice-b');
  const btnClr = document.getElementById('btn-sched-clear-all');

  if (btnA) btnA.addEventListener('click', () => applySchedulePreset('A'));
  if (btnB) btnB.addEventListener('click', () => applySchedulePreset('B'));
  if (btnClr) btnClr.addEventListener('click', () => {
    userScheduleSelection = {};
    saveScheduleCreatorState();
    renderScheduleView();
  });

  // Aggressive Subject Scroll Snap
  const subjectListEl = document.getElementById('sched-subject-list');
  let isSubjectSnapping = false;

  function onSubjectWheel(e) {
    if (Math.abs(e.deltaY) < 14) return;
    if (!subjectListEl) return;

    const cards = Array.from(subjectListEl.querySelectorAll('.sched-course-row'));
    if (!cards.length) return;

    e.preventDefault();
    e.stopPropagation();

    if (isSubjectSnapping) return;
    isSubjectSnapping = true;

    const containerTop = subjectListEl.getBoundingClientRect().top;
    const currentScrollTop = subjectListEl.scrollTop;

    let closestIdx = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const cardDiff = Math.abs(card.getBoundingClientRect().top - containerTop);
      if (cardDiff < minDiff) {
        minDiff = cardDiff;
        closestIdx = idx;
      }
    });

    let targetIdx = closestIdx;
    if (e.deltaY > 0) {
      targetIdx = Math.min(cards.length - 1, closestIdx + 1);
    } else {
      targetIdx = Math.max(0, closestIdx - 1);
    }

    const targetCard = cards[targetIdx];
    if (targetCard) {
      const targetScroll = currentScrollTop + (targetCard.getBoundingClientRect().top - containerTop);
      subjectListEl.scrollTo({
        top: Math.max(0, targetScroll),
        behavior: 'smooth'
      });
    }

    setTimeout(() => {
      isSubjectSnapping = false;
    }, 180);
  }

  if (subjectListEl) {
    subjectListEl.addEventListener('wheel', onSubjectWheel, { passive: false, capture: true });
  }

  // Remove Subject Confirmation Modal Handlers
  const modalEl = document.getElementById('sched-remove-modal');
  const cancelBtn = document.getElementById('sched-modal-btn-cancel');
  const closeBtn = document.getElementById('sched-modal-close-btn');
  const removeBtn = document.getElementById('sched-modal-btn-remove');

  if (cancelBtn) cancelBtn.addEventListener('click', closeRemoveModal);
  if (closeBtn) closeBtn.addEventListener('click', closeRemoveModal);
  if (removeBtn) removeBtn.addEventListener('click', confirmRemoveSubject);
  if (modalEl) {
    modalEl.addEventListener('click', (e) => {
      if (e.target === modalEl) {
        closeRemoveModal();
      }
    });
  }

  renderScheduleView();
});

window.addEventListener('resize', () => {
  renderScheduleGrid();
  fitScheduleEventTitles();
});

window.addEventListener('orientationchange', () => {
  setTimeout(() => { renderScheduleGrid(); fitScheduleEventTitles(); }, 100);
  setTimeout(() => { renderScheduleGrid(); fitScheduleEventTitles(); }, 350);
  setTimeout(() => { renderScheduleGrid(); fitScheduleEventTitles(); }, 600);
});

// ==========================================================================
// DISABLE ALL ZOOMING & GESTURE ZOOM (WITHOUT BREAKING TAPS OR SCROLLING)
// ==========================================================================
// 1. Prevent multi-finger pinch zooming on touchscreens
document.addEventListener('touchstart', (e) => {
  if (e.touches && e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

document.addEventListener('touchmove', (e) => {
  if (e.touches && e.touches.length > 1) {
    e.preventDefault();
  }
}, { passive: false });

// 2. Prevent iOS Safari gesture zooming
document.addEventListener('gesturestart', (e) => e.preventDefault());
document.addEventListener('gesturechange', (e) => e.preventDefault());
document.addEventListener('gestureend', (e) => e.preventDefault());

// 3. Prevent Ctrl + Wheel (mouse & trackpad pinch-to-zoom)
window.addEventListener('wheel', (e) => {
  if (e.ctrlKey) {
    e.preventDefault();
  }
}, { passive: false });

// 4. Prevent keyboard zoom shortcuts (Ctrl/Cmd + Plus, Minus, Zero) & Modal shortcuts
window.addEventListener('keydown', (e) => {
  if (isModalOpen) {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      closeRemoveModal();
      return;
    }
    if (e.key === 'Enter') {
      const activeEl = document.activeElement;
      if (activeEl && (activeEl.id === 'sched-modal-btn-cancel' || activeEl.id === 'sched-modal-close-btn')) {
        return; // Allow native cancel button trigger
      }
      e.preventDefault();
      e.stopPropagation();
      confirmRemoveSubject();
      return;
    }
  }

  if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '-' || e.key === '=' || e.key === '0')) {
    e.preventDefault();
  }
});

// 5. Prevent double-click zoom
window.addEventListener('dblclick', (e) => {
  e.preventDefault();
}, { passive: false });

// ==========================================================================
// AUTO-HIDE RIBBON & SUBJECT SELECTOR AFTER 10 SECONDS (CENTER SCHEDULE)
// ==========================================================================
let idleTimeout = null;
const IDLE_DELAY_MS = 10000; // 10 seconds
let lastClientX = null;
let lastClientY = null;

function enterFocusMode() {
  if (isModalOpen) return; // Never hide UI while confirmation prompt is open
  if (!document.body.classList.contains('sched-focus-autohide')) {
    document.body.classList.add('sched-focus-autohide');
    // Settle fit after the transition completes smoothly (no mid-animation layout thrashing)
    setTimeout(() => {
      renderScheduleGrid();
      fitScheduleEventTitles();
    }, 420);
  }
}

function exitFocusMode() {
  if (document.body.classList.contains('sched-focus-autohide')) {
    document.body.classList.remove('sched-focus-autohide');
    // Settle fit after the transition completes smoothly
    setTimeout(() => {
      renderScheduleGrid();
      fitScheduleEventTitles();
    }, 420);
  }
}

function resetIdleTimer() {
  exitFocusMode();
  clearTimeout(idleTimeout);
  if (!isModalOpen) {
    idleTimeout = setTimeout(enterFocusMode, IDLE_DELAY_MS);
  }
}

// Activity event listeners to reset the 10-second timer
window.addEventListener('mousemove', (e) => {
  if (lastClientX !== null && lastClientY !== null) {
    const dx = Math.abs(e.clientX - lastClientX);
    const dy = Math.abs(e.clientY - lastClientY);
    if (dx < 3 && dy < 3) return; // Ignore micro-jitter
  }
  lastClientX = e.clientX;
  lastClientY = e.clientY;
  resetIdleTimer();
}, { passive: true });

['mousedown', 'touchstart', 'touchmove', 'wheel', 'scroll'].forEach(evt => {
  window.addEventListener(evt, resetIdleTimer, { passive: true });
});

window.addEventListener('keydown', (e) => {
  const ignoredKeys = [
    'Alt',
    'Meta',
    'OS',
    'Shift',
    'Control',
    'Tab',
    'PrintScreen',
    'Snapshot',
    'F11'
  ];
  if (ignoredKeys.includes(e.key) || e.key.toLowerCase() === 's' || e.altKey || e.metaKey) {
    return;
  }
  resetIdleTimer();
}, { passive: true });

// Start initial idle countdown
resetIdleTimer();
