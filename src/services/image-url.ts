const getCroppedImageUrl = (url: string) => {
  //Example to crop an image 600 by 400
  //https://media.rawg.io/media/crop/600/400/games/20a/20aa03a10cda45239fe22d035c0ebe64.jpg
  //This API supports cropping Images on the fly like above, give attn for /crop/600/400/, which is
  // I added to crop the Image 600 by 400
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
