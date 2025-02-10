

export const cleanData = (data: Array<any>) => {
  // Clean Data from a list of data

  const cleanedData = data.map((item) => {

    const { first_name, last_name, email, role } = item;

    if (email.includes('@school.edu')) {
      // if role is null or empty
      if (role === null || role === '') {
        return {
          first_name,
          last_name,
          email,
          role: 'teacher'
        }
      } else {
        return {
          first_name,
          last_name,
          email,
          role
        }
      }
    } else if (email.includes('@student.school.edu')) {
      // if role is null or empty
      if (role === null || role === '') {
        return {
          first_name,
          last_name,
          email,
          role: 'student'
        }
      } else {
        return {
          first_name,
          last_name,
          email,
          role
        }
      }
    }

  })

  return cleanData;

  // parameter will be a list of objects
  // objects will have first_name, last_name
  // maybe email, role

  // if @mail (gmail, yahoo, hotmail) is in the email, remove it
  // if @mail is (1)@school.edu or (2)@student.school.edu, keep it
  // if email is valid and has role, keep it
  // else if no role then if email is (1) role = teacher, if (2) role = student
  // remove other properties

  // return cleaned data
  /*
  [
    {
      first_name: string,
      last_name: string,
      email: string,
      role: string
    },
  ]
  */
}
