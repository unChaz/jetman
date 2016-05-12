class User extends Model {
  constructor() {
    let definition = {
      email: string,
      hashpass: string
    }
    super("User", definition);
    
    this.schema.getEmail = function() {
      return this.email;
    }
  }
}

export User;
