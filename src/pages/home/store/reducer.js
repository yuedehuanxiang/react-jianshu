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
  ],
  articleList: [
    {
      id: 1,
      title: "徐峥《囧妈》税前酬劳8700万，看到主创阵容后，网友：票已预订！",
      desc:
        "《囧妈》是徐峥《人在囧途》的系列电影，这个名字让人一看就感觉很逗，《囧妈》主要讲述了小老板和妈妈一起去俄罗斯，然后在火车上发生的故事，《人在囧途...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/14831190-b3d5fb7d3a37f46a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    },
    {
      id: 2,
      title: "徐峥《囧妈》税前酬劳8700万，看到主创阵容后，网友：票已预订！",
      desc:
        "《囧妈》是徐峥《人在囧途》的系列电影，这个名字让人一看就感觉很逗，《囧妈》主要讲述了小老板和妈妈一起去俄罗斯，然后在火车上发生的故事，《人在囧途...",
      imgUrl:
        "//upload-images.jianshu.io/upload_images/14831190-b3d5fb7d3a37f46a.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240"
    }
  ]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
