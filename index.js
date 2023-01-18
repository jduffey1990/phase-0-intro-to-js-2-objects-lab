// Write your solution in this file!
const employee = {
    name: "Sam",
    address: "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
  };
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employees, key) {
    const { [key]: deleted, ...otherProperties } = employee;
    return otherProperties;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
