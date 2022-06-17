export const dbConstants = {
  dbApiUri: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_DATABASE : 'http://localhost:4000',
  dbEndPointUser: process.env.REACT_APP_END_POINT_USER,
  dbEndPointChannel: process.env.REACT_APP_END_POINT_CHANNEL,
  dbEndPointServer: process.env.REACT_APP_END_POINT_SERVER,
  // Firebase
  dbAuthApiKey: process.env.REACT_APP_API_KEY,
  dbAuthAuthDomain: process.env.REACT_APP_AUTH_DOMAIN,
  dbAuthProjectId: process.env.REACT_APP_PROJECT_ID,
  dbAuthStorageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  dbAuthMessagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  dbAuthAppId: process.env.REACT_APP_APP_ID,
}

export const DATE_UNITS = [
  ['month', 2592000],
  ['week', 604800],
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
]

export const months = [
  'Ene',
  'Feb',
  'Mar',
  'Abr',
  'May',
  'Jun',
  'Jul',
  'Ag',
  'Sep',
  'Oct',
  'Nov',
  'Dic',
]