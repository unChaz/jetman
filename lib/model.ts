var mongoose = require("mongoose");
var Schema   = mongoose.Schema;

class Model {
    constructor(public className: string, public definition: object) {
      this.schema = new Schema(definition);
      super(classname, this.schema);
      this.model = mongoose.model(className, this);
    }
}

export = Model;
