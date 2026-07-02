export default function multiReplace(str, obj) {
  let result = str;

  for (const key in obj) {
    result = result.replaceAll(key, obj[key]);
  }

  return result;
}