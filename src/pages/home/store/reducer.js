import { fromJS } from "immutable";
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: "社会热点",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/11246717-d7bdf6d0cba4dd0a?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 2,
      title: "手绘",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/16340277-6ba56322bc9f7f02.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    },
    {
      id: 3,
      title: "动漫",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/9321562-bc8413defcc4aaab?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
