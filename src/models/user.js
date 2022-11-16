import { queryUser } from "../services/example";

export default {
  namespace: "user",
  state: {
    name: {
      first: "匿名",
    },
  },
  effects: {
    *fetchUser({ payload }, { call, put }) {
      const res = yield call(queryUser);
      const user = res.data.results[0];
      console.log("res", user); //sy-log
      yield put({ type: "save", payload: user });
    },
  },
  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },
};
