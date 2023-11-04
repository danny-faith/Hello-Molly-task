function findBestMatch(
  subArray: IHierarchyData,
  lowercaseTrimmedTarget: string
) {
  const res = subArray
    .filter(({ name }) => {
      const lowercaseName = name.toLowerCase();
      const isMatch = lowercaseName.includes(lowercaseTrimmedTarget);
      if (isMatch) return true;
    })
    .map((x) => x.id);
  return res;
}

export function searchEmployees(src: IHierarchyData, target: string) {
  const found = [];
  const lowercaseTrimmedTarget = target.toLowerCase().trim();

  if (Array.isArray(src) && src.length === 0) return;
  if (Array.isArray(src)) {
    const searchRes = findBestMatch(src, lowercaseTrimmedTarget);
    found.push(...searchRes);
  }

  if (typeof src === "object") {
    Object.values(src).map((value) => {
      Object.values(value).map((y) => {
        if (Array.isArray(y)) {
          const res = searchEmployees(y, lowercaseTrimmedTarget);
          if (res) {
            found.push(...res);
          }
        }
      });
    });
  }
  return found;
}
