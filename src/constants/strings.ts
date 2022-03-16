export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!

export const WIN_MESSAGES = ['כל הכבוד!', 'מדהים', 'עבודה מצויינת']
export const GAME_COPIED_MESSAGE = 'משחק הועתק'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'אין מספיק אותיות'
export const WORD_NOT_FOUND_MESSAGE = 'מילה לא נמצאה'
export const HARD_MODE_ALERT_MESSAGE =
  'אפשר להפעיל מצב קשה רק בתחילת המשחק'
export const HARD_MODE_DESCRIPTION =
  'כל ניחוש מחוייב להיות נוכח במילה הבאה'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'למצב ניגודיות צבעים'
export const CORRECT_WORD_MESSAGE = (solution: string[]) =>
  `המילה הנכונה הייתה ${solution[0]} ${solution[1]}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `חייב להשתמש בניחוש ${guess} במיקום ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `ניחוש חייב לכלול ${letter}`
export const ENTER_TEXT = 'אנטר'
export const DELETE_TEXT = 'מחק'
export const STATISTICS_TITLE = 'סטטיסטיקה'
export const GUESS_DISTRIBUTION_TEXT = 'כמות ניחושים'
export const NEW_WORD_TEXT = 'מילה חדשה תוך'
export const SHARE_TEXT = 'שתף'
export const TOTAL_TRIES_TEXT = 'כמות נסיונות'
export const SUCCESS_RATE_TEXT = 'אחוז הצלחה'
export const CURRENT_STREAK_TEXT = 'רצף נוכחי'
export const BEST_STREAK_TEXT = 'רצף הכי ארוך'
