const images = import.meta.glob('@images/partyImages/*.jpg');

export const getPartyImages = async () => {
  const imagePromises = Object.keys(images).map((key) => images[key]().then((module) => module.default));
  const partyImages = await Promise.all(imagePromises);
  return partyImages;
}

export const getPartySizeImages = async () => {
  const sizeImagePromises = Object.keys(images)
    .filter((key) => key.toLowerCase().includes('size'))
    .map((key) =>
      images[key]().then((module) => module.default)
    );

  const partySizeImages = await Promise.all(sizeImagePromises);
  return partySizeImages;
};