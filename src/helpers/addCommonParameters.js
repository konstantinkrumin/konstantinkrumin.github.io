/* This functions adds common content to the text objects with info
on both English and Russian */
const addCommonParameters = (commonObj, textObj) => {
  textObj.portfolio.map((item, index) => {
    return Object.assign(
      textObj.portfolio[index],
      commonObj.portfolio[item.key]
    );
  });
  return textObj;
};

export default addCommonParameters;
