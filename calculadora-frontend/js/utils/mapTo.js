import {bindActionCreators} from 'redux';

import {Map} from 'immutable';

export function mapStateToProps(state) {
  return {
      ...state
  };
}

export function mapDispatchToProps(actions){
  return function(dispatch) {
    const creators = Map()
            .merge(...actions)
            .filter(value => typeof value === 'function')
            .toObject();

    return {
      actions: bindActionCreators(creators, dispatch),
      dispatch
    };
  };
}
