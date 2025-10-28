class ObjectView {
  constructor(doc, obj) {
    this.doc = doc;
    this.obj = obj;
    this.mainObj = doc.createElement("div");
    this.selfObj = doc.createElement("div");
    this.mainObj.appendChild(this.selfObj);
    this.selfObj.textContent = obj.constructor.name;
    this.selfObj.onclick = this.onClick.bind(this);
    this.childrenObj = null;
  }
  getDOMObject() {
    return this.mainObj;
  }
  onClick() {
    if (this.childrenObj === null) {
      this.childrenObj = this.doc.createElement("div");
      this.childrenObj.style.display = "none";
      this.childrenObj.style.paddingLeft = "2em";
      this.mainObj.appendChild(this.childrenObj);
      for (let name of dir(this.obj)) {
        let nameObj = this.doc.createElement("div");
        nameObj.textContent = name;
        this.childrenObj.appendChild(nameObj);
      }
    }
    if (this.childrenObj.style.display == "block") {
      this.childrenObj.style.display = "none";
    } else {
      this.childrenObj.style.display = "block";
    }
  }
}
