Companies = new Mongo.Collection('companies');

Companies.allow({
  insert: function(userId, company) {
    company.createdAt = new Date();
    return true;
  },
  update: function(userId, company, fields, modifier) {
    company.updateAt = new Date();
    return true;
  },
  remove: function(userId, company) {
    return true;
  }
});

Departments = new Mongo.Collection('departments');

Departments.allow({
  insert: function(userId, department) {
    company.createAt = new Date();
    return true;
  },
  update: function(userId, department) {
    company.updateAt = new Date();
    return true;
  },
  remove: function(userId, department) {
    return true;
  }
});
