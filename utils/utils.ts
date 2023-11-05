function findBestMatch(
  childrenArray: IHierarchyData,
  lowercaseTrimmedName: string
) {
  const lookForEmployee = ({ name }: { name: string }) => {
    const lowercaseName = name.toLowerCase();
    const isMatch = lowercaseName.includes(lowercaseTrimmedName);

    if (isMatch) return true;
  };
  const onlyEmployeeId = (x: Employee) => x.id;

  const res = childrenArray.filter(lookForEmployee).map(onlyEmployeeId);

  return res;
}

const ifArrayLookForEmployee = (
  value: string | Employee[],
  lowercaseTrimmedName: string,
  found: string[]
) => {
  if (Array.isArray(value)) {
    const res = searchEmployees(value, lowercaseTrimmedName);

    if (res) {
      found.push(...res);
    }
  }
};

export function searchEmployees(src: IHierarchyData, employeeName: string) {
  const noSearchTerm = employeeName.length < 1;
  const nothingToSearchThrough = Array.isArray(src) && src.length === 0;

  if (noSearchTerm) return;
  if (nothingToSearchThrough) return;

  const found: string[] = [];
  const lowercaseTrimmedName = employeeName.toLowerCase().trim();

  if (Array.isArray(src)) {
    const searchRes = findBestMatch(src, lowercaseTrimmedName);
    if (searchRes.length > 0) {
      found.push(...searchRes);
    }
  }

  if (typeof src === "object") {
    Object.values(src).map((value) => {
      Object.values(value).map((value) =>
        ifArrayLookForEmployee(value, lowercaseTrimmedName, found)
      );
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

export const navigationDirectionReducer = (keyCode: string, cursor: Cursor) => {
  switch (keyCode) {
    case "up":
    case "ArrowUp":
      cursor.up();
      break;
    case "left":
    case "ArrowLeft":
      cursor.left();
      break;
    case "right":
    case "ArrowRight":
      cursor.right();
      break;
    default:
      cursor.down();
      break;
  }

  return cursor.get().id;
};
