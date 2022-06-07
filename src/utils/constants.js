export const dbConstants = {
  dbApiUri: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL_DATABASE : 'http://localhost:4000',
  dbEndPointUser: process.env.REACT_APP_END_POINT_USER,
  dbEndPointChannel: process.env.REACT_APP_END_POINT_CHANNEL,
  dbEndPointServer: process.env.REACT_APP_END_POINT_SERVER
}