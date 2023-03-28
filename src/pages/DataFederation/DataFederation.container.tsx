// import { connect } from 'react-redux';
// import { compose, Dispatch } from 'redux';

// import {
//   getDataFederationStart,
//   getDataFederationReset,
// } from '@app/redux/unifiedRegistry/unifiedRegistry.actions';
// import { selectDataFederation } from '@app/redux/unifiedRegistry/unifiedRegistry.selector';
// import { selectUser } from '@app/redux/user/user.selectors';
// import DataFederation from './DataFederation.component';
// import { IState } from '@app/redux/root-reducer';
// import { RootAction } from '@app/redux/root.types';
// import { TGetDataFederationStart } from '@APIs/unifiedRegistry/unifiedRegistry.types';

// const mapStateToProps = (state: IState) => {
//   return {
//     getDataFederationError: selectDataFederation(state)
//       .getDataFederationError,
//     getDataFederationState: selectDataFederation(state)
//       .getDataFederationState,
//     getDataFederationData: selectDataFederation(state).getDataFederationData,
//     userData: selectUser(state).userData,
//   };
// };

// //trying to remove func from dispatch functions

// const mapDispatchToProps = (dispatch: Dispatch<RootAction>) => ({
//   getDataFederationStart: (data: TGetDataFederationStart) =>
//     dispatch(getDataFederationStart(data)),
//   getDataFederationReset: () => dispatch(getDataFederationReset()),
// });

// export default compose(connect(mapStateToProps, mapDispatchToProps))(
//   //@ts-ignore
//   DataFederation
// );

export {}