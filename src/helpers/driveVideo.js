export const driveVideo = (state, id) => {
    const video = document.querySelector(`${id} video`);
    state ? video.pause() : video.play();
};
