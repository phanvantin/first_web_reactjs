
const defaultAvatars = [
  '/img/avatar1.jpg',
  '/img/avatar2.jpg',
  '/img/avatar3.jpg',
  '/img/avatar4.jpg'
]

export function getAvatar(authorAvatar, userId) {
  const idxDefaultAvatar = userId % defaultAvatars.length;
  const avatar = authorAvatar || defaultAvatars[idxDefaultAvatar];

  return avatar
}