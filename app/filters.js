const govukPrototypeKit = require('govuk-prototype-kit')
const addFilter = govukPrototypeKit.views.addFilter

addFilter('insertMonth', (input, numberOfMonthsAhead = 0) => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const nextMonthName = monthNames[(new Date().getMonth() + numberOfMonthsAhead) % 12]
  return input.replace('__month_name__', nextMonthName)
})
