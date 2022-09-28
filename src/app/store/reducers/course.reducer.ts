

// // import the interface
// import { CourseItem } from '../models/courseItem.model';
// import { CourseAction, CourseActionType } from '../actions/course.action';
// //create a dummy initial state
// const initialState: Array<CourseItem> = [
//   {
//     orderId: "123456",
//     custonerPO: "customer",
//     account: "account",
//     orderDate: "01-28-2022",
//     orderedBy: "Rushi",
//     orderTotal: "$ 567.98"
//   },
//   {
//     orderId: "123456",
//     custonerPO: "acustomer",
//     account: "account",
//     orderDate: "01-28-2022",
//     orderedBy: "Rushi",
//     orderTotal: "$ 567.98"
//   },
//   {
//     orderId: "123456",
//     custonerPO: "customer",
//     account: "account",
//     orderDate: "01-28-2022",
//     orderedBy: "Rushi",
//     orderTotal: "$ 567.98"
//   },
//   {
//     orderId: "123456",
//     custonerPO: "customer",
//     account: "account",
//     orderDate: "01-28-2022",
//     orderedBy: "Rushi",
//     orderTotal: "$ 567.98"
//   },
//   {
//     orderId: "123456",
//     custonerPO: "customer",
//     account: "account",
//     orderDate: "01-28-2022",
//     orderedBy: "Rushi",
//     orderTotal: "$ 567.98"
//   },
// ];
// export function courseReducer(
//   state: Array<CourseItem> = initialState,
//   action: CourseAction
// ) {
//   switch (action.type) {
//     case CourseActionType.ADD_ITEM:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// }