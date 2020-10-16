// No warning when not returning value for function
// This means TS lint is not running on JSX files
function renderEventContent(eventInfo) {
  return eventInfo;
}

renderEventContent();

console.log('test');

// Warning for unused variable
const test = 'test';
