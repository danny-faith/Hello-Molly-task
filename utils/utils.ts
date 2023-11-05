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
  if (target.length < 1) return;

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

export class Cursor {
  private path: Array<any>;
  private current: Employee;

  constructor(data: IHierarchyData) {
    this.path = [{ children: data }];
    this.current = data[0];
    console.log("this.path", this.path);
  }
  get() {
    return this.current;
  }
  down() {
    if (this.current?.children?.length) {
      this.path.push(this.current);
      this.current = this.current.children[0];
    }
  }
  up() {
    if (this.path.length > 1) {
      this.current = this.path.pop();
    }
  }
  right() {
    this.current =
      this.path.at(-1)?.children?.[this.getChildIndex() + 1] ?? this.current;
  }
  left() {
    this.current =
      this.path.at(-1)?.children?.[this.getChildIndex() - 1] ?? this.current;
  }
  getChildIndex() {
    if (!this.path.length) return 0;
    let i = this.path.at(-1).children.indexOf(this.current);
    if (i < 0) throw "Inconsistency";
    return i;
  }
}
