import * as INT from '../../helpers/interfaces'

export const setData = (payload: INT.IData) => ({
  type: 'SET_DATA',
  payload
});
