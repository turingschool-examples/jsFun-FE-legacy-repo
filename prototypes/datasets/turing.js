const instructors = [
  { name: 'Pam', module: 2, teaches: ['scope', 'recursion', 'node'] },
  { name: 'Brittany', module: 2, teaches: ['oop', 'pwas'] },
  { name: 'Nathaniel', module: 2, teaches: ['oop', 'scope', 'mobile'] },
  { name: 'Robbie', module: 4, teaches: ['node', 'pwas'] },
  { name: 'Leta', module: 4, teaches: ['pwas', 'node', 'recursion'] },
  { name: 'Travis', module: 1, teaches: ['javascript', 'html', 'css'] },
  { name: 'Louisa', module: 1, teaches: ['javascript', 'html', 'css', 'node', 'pwas'] },
  { name: 'Christie', module: 3, teaches: ['javascript', 'react', 'node'] },
  { name: 'Will', module: 3, teaches: ['javascript', 'redux', 'react', 'oop', 'scope'] }
];

const cohorts = [
  { cohort: 1806, module: 1, studentCount: 30, curriculum: ['html', 'css', 'javascript'] },
  { cohort: 1804, module: 2, studentCount: 21, curriculum: ['javascript', 'css', 'recursion', 'scope', 'oop'] },
  { cohort: 1803, module: 3, studentCount: 20, curriculum: ['react', 'redux', 'html', 'javascript'] },
  { cohort: 1801, module: 4, studentCount: 18, curriculum: ['pwas', 'mobile', 'node', 'javascript', 'css'] }
];

module.exports = {
  instructors,
  cohorts
};