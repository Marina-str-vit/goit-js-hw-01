class User {
  email;
  constructor(email) {
    this.email = email;
  }
  get email() {
    return this.email;
  }
  set email(newEmail) {
    this.email = newEmail;
  }
}

class Admin extends User {
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
    };

    blacklistedEmails;
    access;
    email;
  constructor(params) {
    super(params.email);
    this.email = params.email;

    this.access = params.access;
    this.blacklistedEmails = params.blacklistedEmails;
  }

   blacklist(post) {
    this.blacklistedEmails.push(post);
   }
 
  isBlacklisted(post) {
   if (this.blacklistedEmails.includes(post)) { 
      return true;
    } else { 
      return false;
    }
  }
}

const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
  blacklistedEmails: [],
});

console.log(mango.email); // "mango@mail.com"
console.log(mango.access); // "superuser"

mango.blacklist("poly@mail.com");
console.log(mango.blacklistedEmails); // ["poly@mail.com"]
console.log(mango.isBlacklisted("mango@mail.com")); // false
console.log(mango.isBlacklisted("poly@mail.com")); // true