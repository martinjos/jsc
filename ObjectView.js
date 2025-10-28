class ObjectView {
  constructor(doc, obj) {
    this.domObj = doc.createElement("div");
    this.domObj.textContent = JSON.stringify(obj);
  }
  getDOMObject() {
    return this.domObj;
  }
}
