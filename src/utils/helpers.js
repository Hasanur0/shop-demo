import { formatDistance, parseISO } from 'date-fns'
import { differenceInDays } from 'date-fns'

// We want to make this function work for both Date objects and strings (which come from Supabase)
export const subtractDates = (dateStr1, dateStr2) =>
  differenceInDays(parseISO(String(dateStr1)), parseISO(String(dateStr2)))

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In')

// Supabase needs an ISO date string. However, that string will be different on every render because the MS or SEC have changed, which isn't good. So we use this trick to remove any time
export const getToday = function (options = {}) {
  const today = new Date()

  // This is necessary to compare with created_at from Supabase, because it it not at 0.0.0.0, so we need to set the date to be END of the day when we compare it with earlier dates
  if (options?.end)
    // Set to the last second of the day
    today.setUTCHours(23, 59, 59, 999)
  else today.setUTCHours(0, 0, 0, 0)
  return today.toISOString()
}

export const formatCurrency = (value) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
    value
  )

// Format number in Indian numbering system (lakhs/crores)
// Example: 130000 -> "1,30,000"
export const formatIndianNumber = (value) => {
  const numStr = String(value)
  const parts = numStr.split('.')
  let integerPart = parts[0]
  const decimalPart = parts[1] ? '.' + parts[1] : ''
  
  // Format integer part: last 3 digits, then groups of 2 from right to left
  if (integerPart.length <= 3) {
    return integerPart + decimalPart
  }
  
  // Take last 3 digits
  const lastThree = integerPart.slice(-3)
  let remaining = integerPart.slice(0, -3)
  
  // Process remaining digits from right to left in groups of 2
  const formattedParts = []
  // Process from right to left
  while (remaining.length > 0) {
    if (remaining.length >= 2) {
      // Take 2 digits from the right
      formattedParts.unshift(remaining.slice(-2))
      remaining = remaining.slice(0, -2)
    } else {
      // Take remaining single digit
      formattedParts.unshift(remaining)
      remaining = ''
    }
  }
  
  const formattedRemaining = formattedParts.join(',')
  return formattedRemaining + ',' + lastThree + decimalPart
}

// Format booking rate: format the number before "/"
// Example: "130000/10gm" -> "1,30,000/10gm"
export const formatBookingRate = (bookingRate) => {
  if (!bookingRate) return bookingRate
  const parts = bookingRate.split('/')
  if (parts.length === 2) {
    const numberPart = parts[0].trim()
    const unitPart = parts[1].trim()
    const number = parseFloat(numberPart.replace(/,/g, ''))
    if (!isNaN(number)) {
      return formatIndianNumber(number) + '/' + unitPart
    }
  }
  return bookingRate
}
