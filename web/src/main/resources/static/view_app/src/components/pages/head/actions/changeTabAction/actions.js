/**
 * Created by Mina on 16.01.2019.
 */

import {TAB_IS_CHANGED} from './action-types'

export const changeTabAction = (index) => ({
    type: TAB_IS_CHANGED,
    index: index
});