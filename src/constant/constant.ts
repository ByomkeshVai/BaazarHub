export const genders = ["Male", "Female", "Other"];


export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
