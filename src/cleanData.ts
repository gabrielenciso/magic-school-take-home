  /*
  This function reduces a list of data and returns a new list of data
  where the return has an email that ends with @school.edu or @student.school.edu.
  It sets the role to 'teacher' if the email ends with @school.edu if the role is empty or null,
  and sets the role to 'student' if the email ends with @student.school.edu
  if the role is empty or null. If the role is not empty or null, it keeps the existing role.


  The function signature is:
  [
    {
      first_name: string,
      last_name: string,
      email: string,
      role: string
    },
  ]
  */

interface CleanedData {
  first_name: string;
  last_name: string;
  email: string;
  role: string;
}

export const cleanData = (data: Array<any>): Array<CleanedData> => {

  const processData = data.reduce((acc, item) => {
  // Check if email exists and if @school or @student.school
  if (item.email && (item.email.endsWith('@school.edu') || item.email.endsWith('@student.school.edu'))) {

    const { first_name, last_name, email, role } = item;

    let newRole = role;

    // figure out role based on email domain
    if (email.endsWith('@school.edu')) {
      newRole = (!role || role.trim() === '') ? 'teacher' : role;
    } else if (email.endsWith('@student.school.edu')) {
      newRole = (!role || role.trim() === '') ? 'student' : role;
    }

    acc.push({
      first_name,
      last_name,
      email,
      role: newRole
    });
  }
  return acc;
}, []);

  return processData;
}
